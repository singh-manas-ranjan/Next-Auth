import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const page = async () => {
  const session = await auth();
  return (
    <div className="w-full h-fit flex flex-wrap gap-x-4 items-center  justify-center mt-[200px]">
      <h1 className={cn("text-sm font-semibold", font.className)}>
        {JSON.stringify(session)}
      </h1>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default page;
