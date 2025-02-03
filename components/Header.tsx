import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="font-bold text-light-100">
        Home
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Button>Logout</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
