import Image from "next/image";
import Link from "next/link";
import Navlinks from "./navlinks";
const Navbar = () => {
  return (
    <header className="text-clrFont pt-4 text-smallFnt font-lightFnt px-4 md:px-16 w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3 ">
        <p className="text-bigFnt font-midFnt">PuzChess</p>
        <Image alt="logo" src="/Logo.png" width={35} height={35} priority />
      </div>

      <Navlinks />
    </header>
  );
};

export default Navbar;
