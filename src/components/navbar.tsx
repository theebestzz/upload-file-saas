import React from "react";
import WidthWrapper from "@/components/width-wrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-primary bg-white/75 backdrop-blur-lg transition-all">
      <WidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-primary">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Relax Ai</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                  })}
                >
                  Login
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                  })}
                >
                  Register
                </RegisterLink>
              </>
            ) : (
              <Link
                href="/dashboard"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
