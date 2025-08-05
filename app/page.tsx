import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-semibold">Hello to the RTK App</h1>
      <Link href={"/dashboard"}>
        <Button variant={"destructive"}>Go To Dasahboard</Button>
      </Link>
    </div>
  );
}
