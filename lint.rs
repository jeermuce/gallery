use std::env;
use std::process::{Command, Child};
use std::fs;
use std::time::{Duration, SystemTime};
use std::thread::sleep;

fn main() {
    // Initialize default values
    let mut is_unsafe = false;
    let mut path = ".".to_string();

    // Collect command-line arguments
    let args: Vec<String> = env::args().collect();

    // Parse arguments
    let mut i = 1; // Skip the first argument (program name)
    while i < args.len() {
        match args[i].as_str() {
            "-u" | "--unsafe" => is_unsafe = true,
            "-p" | "--path" => {
                if i + 1 < args.len() {
                    path = args[i + 1].clone();
                    i += 1; // Skip the next argument (the path)
                } else {
                    eprintln!("Error: --path option requires an argument");
                    return;
                }
            }
            _ => {
                eprintln!("Error: Unrecognized option {}", args[i]);
                return;
            }
        }
        i += 1;
    }

    // Initial execution
    let mut child = execute_command_in_background(is_unsafe, &path);
    let mut prev_modified_time = get_latest_modified_time(&path);

    // Watch for changes in the path and re-run the command
    loop {
        if let Some(modified_time) = get_latest_modified_time(&path) {
            if let Some(prev_time) = prev_modified_time {
                if modified_time > prev_time {
                    // If there's a new change, clear the screen, kill the previous process and run the command again
                    clear_screen();

                    if let Some(mut child_process) = child {
                        let _ = child_process.kill();
                        child_process.wait().expect("failed to wait on child");
                    }
                    child = execute_command_in_background(is_unsafe, &path);
                }
            }
            prev_modified_time = Some(modified_time);
        }
        sleep(Duration::from_secs(1));
    }
}

// Function to get the latest modified time of files in a directory
fn get_latest_modified_time(path: &str) -> Option<SystemTime> {
    let mut latest_time: Option<SystemTime> = None;

    if let Ok(entries) = fs::read_dir(path) {
        for entry in entries.flatten() {
            if let Ok(metadata) = entry.metadata() {
                if let Ok(modified) = metadata.modified() {
                    if latest_time.is_none() || modified > latest_time.unwrap() {
                        latest_time = Some(modified);
                    }
                }
            }
        }
    }

    latest_time
}

// Function to execute the command in the background
fn execute_command_in_background(is_unsafe: bool, path: &str) -> Option<Child> {
    let command = if is_unsafe {
        format!("bunx @biomejs/biome check --fix --unsafe {} && rustywind --write {}", path, path)
    } else {
        format!("bunx @biomejs/biome check --write {} && rustywind --write {}", path, path)
    };

    Command::new("sh")
        .arg("-c")
        .arg(command)
        .spawn()
        .ok()
}

// Function to clear the screen
fn clear_screen() {
    if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(&["/C", "cls"])
            .status()
            .expect("failed to clear screen");
    } else {
        Command::new("sh")
            .arg("-c")
            .arg("clear")
            .status()
            .expect("failed to clear screen");
    }
}
