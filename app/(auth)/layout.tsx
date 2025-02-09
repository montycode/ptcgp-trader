import React, { ReactNode } from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3 justify-center items-center">
            <Image
              src="/icons/pokeball.svg"
              alt="pokeball"
              width={30}
              height={30}
            />
            <h1 className="text-2xl font-semibold text-white">
              PTCGP - Trader
            </h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration bg-black">
        <Image
          src="/images/charizard_bg.webp"
          alt="artwork"
          width={1000}
          height={1000}
          className="size-full object-cover opacity-50"
        />
      </section>
    </main>
  );
};

export default Layout;
