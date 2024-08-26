import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface Props {
  label: string;
}

export const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn("text-3xl font-semibold drop-shadow-md", font.className)}
      >
        🔐
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
