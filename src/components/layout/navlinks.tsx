"use client";

import { HiMenu } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
// interface states {
//   setToggleLogin: Dispatch<SetStateAction<boolean>>;
// }
const Navlinks = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <nav
        className={` md:items-center gap-6 absolute flex-wrap
         z-20 w-full bg-navbg py-20 md:py-0  md:w-auto 
          flex flex-col items-center md:justify-center 
          md:gap-10 top-0 right-0 md:flex-row md:static
           md:bg-transparent ${toggle === false ? "hidden md:flex" : ""}`}
      >
        <Link
          href="/dashboard"
          className="    "
          onClick={() => {
            setToggle(false);
          }}
        >
          Dashboard
        </Link>
        {session?.user && (
          <Link
            href="/play"
            className="    "
            onClick={() => {
              setToggle(false);
            }}
          >
            Play
          </Link>
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
        {!session?.user ? (
          <Link
            href="/auth/signin"
            prefetch={true}
            onClick={() => {
              setToggle(false);
              // setToggleLogin(true);
            }}
            className="py-1.5  px-7 border-2 border-clrLayoutGreen rounded-regBtn "
          >
            Sign in
          </Link>
        ) : (
          <>
            <Link
              href="/leaderboard"
              className="    "
              onClick={() => {
                setToggle(false);
              }}
            >
              Leaderboard
            </Link>
            <Link href="/profile">profile</Link>
            <Link href="/api/auth/signout">Sign Out</Link>
          </>
        )}
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
