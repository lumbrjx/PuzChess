"use client";
import { usePathname } from "next/navigation";
import Navlinks from "./navlinks";
import PageLogo from "../ui/pageLogo";
const Navbar = () => {
  // const pathname = usePathname();
  // const jj = pathname.includes("sign in");
  // console.log(pathname + jj);
  return (
    // pathname.includes("sign in") === false ? (
    <header className=" bg-header z-50  text-clrFont py-4 text-smallFnt font-lightFnt px-4 lg:px-16 w-full flex flex-row items-center gap-24 justify-between fixed">
      <PageLogo />

      <Navlinks />
    </header>
    // ) : (
    //   ""
    // );
  );
};

export default Navbar;
