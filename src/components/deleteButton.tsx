import { deleteImage } from "~/server/db/queries";
import { Button } from "./ui/button";
interface DeleteButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional custom properties you need here
  id: string;
}
function DeleteButton(props: DeleteButtonProps) {
  return (
    <form
      action={async () => {
        "use server";
        await deleteImage(Number(props.id));
      }}
      className="flex justify-center w-full"
    >
      <Button
        variant="destructive"
        type="submit"
        className={`${props.className} `}
      >
        <svg
          id="close-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Menu"
        >
          <title>Delete</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </Button>
    </form>
  );
}

export default DeleteButton;
