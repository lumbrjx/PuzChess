"use client";

import Navlinks from "./navlinks";
import PageLogo from "../ui/pageLogo";
const Navbar = () => {
  return (
    <header className=" bg-header z-40  text-clrFont py-4 text-smallFnt font-lightFnt px-4 lg:px-16 w-full flex flex-row items-center gap-24 justify-between fixed">
      <PageLogo />

      <Navlinks />
    </header>
  );
};

export default Navbar;
