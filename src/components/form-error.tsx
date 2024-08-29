import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  message?: string;
}

export const FormError = ({ message }: Props) => {
  if (!message) {
    return null;
  }
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center justify-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <p className="text-[.8rem]">{message}</p>
    </div>
  );
};
