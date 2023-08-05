import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="py-96 w-full h-full flex-col text-clrFont text-center items-center justify-center   z-50 top-0 bg-header px-2 md:ps-4 font-boldFnt text-bigFnt md:text-largeFnt 
    flex  
    -8 gap-8 "
    >
      <Image alt="logo" src={"/Logo.svg"} width={60} height={60} priority />
    </div>
  );
}
