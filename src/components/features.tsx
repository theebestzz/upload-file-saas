"use client";

import Atropos from "atropos/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <section className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 max-md:p-5">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mt-2 font-bold text-4xl sm:text-5xl">
            Start chatting for free.
          </h1>
          <p className="mt-4 text-lg text-secondary-foreground">
            Chatting with your PDF files has never been easier with never
            happened.
          </p>
        </div>
      </div>
      <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-primary">Step 1</span>
            <span className="text-xl font-semibold">
              Sign up for an account
            </span>
            <span className="mt-2 text-secondary-foreground">
              Either starting out with a free plan or choose our{" "}
              <Link
                href="/pricing"
                className="text-primary underline underline-offset-2"
              >
                pro plan
              </Link>
              .
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-primary">Step 2</span>
            <span className="text-xl font-semibold">Upload your PDF file</span>
            <span className="mt-2 text-secondary-foreground">
              We&apos;ll process your file and make it ready for you to chat
              with.
            </span>
          </div>
        </li>
        <li className="md:flex-1">
          <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
            <span className="text-sm font-medium text-primary">Step 3</span>
            <span className="text-xl font-semibold">
              Start asking questions
            </span>
            <span className="mt-2 text-secondary-foreground">
              It&apos;s that simple. Try out Relax today - it really takes less
              than a minute.
            </span>
          </div>
        </li>
      </ol>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-16 flow-root sm:mt-24">
          <Atropos>
            <div className="-m-2 rounded-xl bg-secondary/5 p-2 ring-1 ring-inset ring-secondary/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
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
    </section>
  );
};

export default Features;
