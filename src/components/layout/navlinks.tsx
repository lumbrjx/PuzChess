"use client";

import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Navlinks = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle);
  return (
    <>
      <nav
        className={` md:items-center gap-10 absolute z-20 bg-navbg py-20 md:py-0 w-full md:w-auto  flex flex-col items-center  top-0 right-0 md:flex-row md:static md:bg-transparent ${
          toggle === false ? "hidden md:flex" : ""
        }`}
      >
        <Link
          href="/Blog"
          className="py-1.5 px-7   "
          onClick={() => {
            setToggle(false);
          }}
        >
          Blog
        </Link>
        <Link
          href="/signIn"
          prefetch={true}
          onClick={() => {
            setToggle(false);
          }}
          className="py-1.5  px-7 border-2 border-clrLayoutGreen rounded-regBtn "
        >
          Sign in
        </Link>
      </nav>
      <button
        className="h-10 w-10 md:hidden absolute z-30 right-0 me-2  "
        onClick={() => {
          setToggle((prev: boolean) => !prev);
        }}
      >
        {toggle === false ? (
          <HiMenu className="w-full h-full" />
        ) : (
          <MdClose className="w-full h-full" />
        )}
      </button>
    </>
  );
};

export default Navlinks;
