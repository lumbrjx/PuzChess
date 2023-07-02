"use client";

import { HiMenu } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Navlinks = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <nav
        className={` md:items-center gap-14 absolute z-20 bg-navbg py-20 md:py-0 w-full md:w-auto  flex flex-col items-center  top-0 right-0 md:flex-row md:static md:bg-transparent ${
          toggle === false ? "hidden md:flex" : ""
        }`}
      >
        <div className="py-1.5 flex gap-6 ">
          {session && (
            <div>
              <Link
                href="/play"
                className="    "
                onClick={() => {
                  setToggle(false);
                }}
              >
                Play
              </Link>
              <Link href="/api/auth/signout">Sign Out</Link>
              <Link
                href="/leaderboard"
                className="    "
                onClick={() => {
                  setToggle(false);
                }}
              >
                Leaderboard
              </Link>
            </div>
          )}

          <Link
            href="/Blog"
            className="  "
            onClick={() => {
              setToggle(false);
            }}
          >
            Blog
          </Link>
          <Link
            href="/dashboard"
            className="    "
            onClick={() => {
              setToggle(false);
            }}
          >
            Dashboard
          </Link>
        </div>
        <Link
          href="/auth/signin"
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
