"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" mb-8 md:mb-14 flex items-center gap-3">

      {/* Set height only — width becomes auto */}
      <Image
        src="/logo.png"
        alt="SmallTech Logo"
        width={0}
        height={0}
        className="h-[4em] w-auto object-contain"
      />

      <div className="flex flex-col leading-none">
        <h1 className="text-[32px] leading-none">smallTech</h1>
        <h3 className="text-liver-brown font-[200] text-[16px] leading-none">
          replicable success
        </h3>
      </div>

    </header>
  );
}
