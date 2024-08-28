import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-300">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          🔐
        </h1>
        <h1
          className={cn(
            "text-6xl font-semibold drop-shadow-md",
            font.className
          )}
        >
          Next-Auth
        </h1>
        {/* <p className={cn("text-xl font-medium drop-shadow-md", font.className)}>
          A simple and secure authentication solution for Next applications.
        </p> */}
        <div className="w-full flex justify-center gap-x-4">
          <LoginButton>
            <Button size={"lg"}>Sign in</Button>
          </LoginButton>
          <RegisterButton>
            <Button size={"lg"}>Sign up</Button>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
