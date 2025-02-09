"use client";
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="font-bold text-light-100">
        <Image
          src="/icons/pokeball.svg"
          alt="pokeball"
          width={30}
          height={30}
        />
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/cards"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/cards" ? "text-light-200" : "text-light-100"
            )}
          >
            Cards
          </Link>
        </li>
        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
              <AvatarFallback className="text-white bg-amber-100">
                {getInitials(session?.user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
