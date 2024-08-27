import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { auth } from "@/auth";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const page = async () => {
  const session = await auth();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className={cn("text-4xl font-semibold", font.className)}>
        {JSON.stringify(session)}
      </h1>
    </div>
  );
};

export default page;
