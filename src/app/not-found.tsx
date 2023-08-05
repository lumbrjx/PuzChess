import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="py-36 w-full h-full flex-col text-clrFont text-center items-center justify-center  absolute z-50 top-0 bg-header px-2 md:ps-4 font-boldFnt text-bigFnt md:text-largeFnt 
    flex  
    -8 gap-8 "
    >
      <h2>
        <span>404 |</span> this page could not be found :/
      </h2>
      <p className="text-mediumFnt md:text-mediumF">
        This page might be deleted by the site owner or does not exist...
      </p>
      <Link className="underline text-mediumFnt md:text-mediumF" href="/">
        Return Home
      </Link>
    </div>
  );
}
