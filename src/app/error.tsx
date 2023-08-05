"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div
      className="py-36 w-full h-full flex-col text-clrFont text-center items-center justify-center  absolute z-50 top-0 bg-header px-2 md:ps-4 font-boldFnt text-bigFnt md:text-largeFnt 
    flex  
    -8 gap-8 "
    >
      <h2>Hmmm something unexpected just happened...</h2>
      <p className="text-mediumFnt md:text-mediumF">
        An error occured please try to login again or refresh the page.
      </p>
      <Link className="underline text-mediumFnt md:text-mediumF" href="/">
        Return Home
      </Link>
    </div>
  );
}
