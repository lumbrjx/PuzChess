import Image from "next/image";
import Link from "next/link";

const PageLogo = () => {
  return (
    <div className="flex flex-row items-center gap-3  ">
      <Link href={"/"} className="text-bigFnt font-midFnt">
        PuzChess
      </Link>
      <Image alt="logo" src="/Logo.svg" width={35} height={35} priority />
    </div>
  );
};

export default PageLogo;
