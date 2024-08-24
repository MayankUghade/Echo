import Dashboard from "@/components/Dashboard/Dashboard";
import HomePage from "@/components/Homepage";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  const status = "authentiated";
  return (
    <div>
      {status === "authentiated" ? (
        <>
          <Dashboard />
        </>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}
