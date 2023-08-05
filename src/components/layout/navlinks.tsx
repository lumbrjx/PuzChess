"use client";

import { HiMenu } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFetchUser } from "@/lib/hooks/query/fetchUser";
import UserImg from "../ui/userImg";
import "../../app/globals.css";

const Navlinks = () => {
  const { data: session } = useSession();
  const user = useFetchUser(session?.user?.email);

  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  return (
    <>
      <nav
        className={` md:items-center gap-6 absolute flex-wrap 
         z-20 w-full bg-base-100 py-20 pb-24 rounded-b-2xl h-screen md:h-auto  md:py-0  md:w-auto 
          flex flex-col items-center md:justify-center 
          md:gap-10 top-0 right-0 md:flex-row md:static
           md:bg-transparent ${toggle === false ? "hidden md:flex" : ""}`}
      >
        {user?.role === "ADMIN" && (
          <Link
            href="/dashboard"
            className=" hover:text-clrSecondaryGrey"
            onClick={() => {
              setToggle(false);
            }}
          >
            Dashboard
          </Link>
        )}
        {session?.user && (
          <Link
            href="/play"
            className=" hover:text-clrSecondaryGrey   "
            onClick={() => {
              setToggle(false);
            }}
          >
            Play
          </Link>
        )}
        <Link
          href="/Blog"
          className=" hover:text-clrSecondaryGrey "
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
            }}
            className="py-1.5 hover:text-clrSecondaryGrey px-7 border-2 border-clrLayoutGreen rounded-regBtn "
          >
            Sign in
          </Link>
        ) : (
          <>
            <Link
              href="/leaderboard"
              className="  hover:text-clrSecondaryGrey  "
              onClick={() => {
                setToggle(false);
              }}
            >
              Leaderboard
            </Link>
            <div className={` dropdown  dropdown-end  `}>
              <label
                tabIndex={0}
                className="btn  p-0 -py-2 min-h-min rounded-regBtn h-auto border-2  border-white"
              >
                {user?.image && <UserImg src={user?.image} />}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 md:shadow bg-base-100  rounded-box "
              >
                <li className="">
                  <Link
                    onClick={() => {
                      setToggle(false);
                    }}
                    href="/profile"
                  >
                    My profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setToggle(false);

                      signOut({ callbackUrl: "/" });
                    }}
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
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
