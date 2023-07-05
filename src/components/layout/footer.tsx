import PageLogo from "../ui/pageLogo";

const Footer = () => {
  return (
    <footer className="w-full  text-clrFont px-4 lg:px-16 pb-16 flex flex-col ">
      <div className="w-full border-t-2 border-t-clrSecondaryGrey"></div>
      <div className="flex flex-col gap-14">
        <div className=" pt-24 w-full flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between ">
          <div className="w-full ">
            <PageLogo />
          </div>
          <div className=" flex flex-col gap-20  text-smallFnt font-midFnt w-full  ">
            <div className="md:flex-row flex flex-col md:justify-between pe-36 ">
              <div className="flex flex-col gap-2 ">
                <p>Creator</p>
                <p>Facebook</p>
                <p>Instagram</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>About us</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="font-midFnt text-smallFnt ">
              <p>Copyright, All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
