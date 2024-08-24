import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="border borde-b p-5">
      <div className="flex items-center justify-between lg:container">
        {/* //The logo and app name */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-bold ">Echo</h1>
        </div>
        <div className="flex items-start gap-2">
          <Button className="bg-blue-600 text-white">Get Started</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
