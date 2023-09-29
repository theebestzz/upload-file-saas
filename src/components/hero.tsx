"use client";

import Atropos from "atropos/react";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import WidthWrapper from "@/components/width-wrapper";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <WidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all">
          <p className="text-sm font-semibold flowing-text">
            Relax is now public beta!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your{" "}
          <span className="font-black flowing-text">documents</span> in seconds.
        </h1>
        <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
          Relax allows you to have conversations with any PDF document.Mastering
          PDFs with Artificial Intelligence: Upload, Transform, Inquire!
        </p>
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
              className: "mt-5",
            })
          )}
        >
          Get started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </WidthWrapper>
      <div>
        <div className="relative isolate">
          <div className="dark:hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e362c4] to-[#BA7FFF] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e362c4] to-[#BA7FFF] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <Atropos>
                <div className="-m-2 rounded-xl bg-secondary/5 p-2 ring-1 ring-inset ring-secondary/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="Product Preview"
                    title="Product Preview"
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl shadow-primary/25 dark:shadow-none ring-1 ring-secondary/10 blur-sm hover:blur-none duration-500"
                    width={1350}
                    height={850}
                    quality={100}
                  />
                </div>
              </Atropos>
            </div>
          </div>
          <div className="dark:hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e362c4] to-[#BA7FFF] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e362c4] to-[#BA7FFF] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
