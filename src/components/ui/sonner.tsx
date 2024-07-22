"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-bg group-[.toaster]:text-foreground group-[.toaster]:border-text group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-p group-[.toast]:text-text",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-text/60",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
