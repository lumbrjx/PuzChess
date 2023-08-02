import Image from "next/image";
import React, { FC } from "react";
type srcType = {
  src: string | null | undefined;
};
const UserImg: FC<srcType> = ({ src }) => {
  return (
    <div className="h-[35px] w-[35px]">
      {/* <img src={src} alt="" srcset="" /> */}
      <Image
        alt={"user-profile"}
        src={`${src}`}
        width={35}
        height={35}
        quality={100}
        priority
        style={{
          objectFit: "cover",
          height: "35px",
          width: "35px",
          // backgroundSize: "cover",
          borderRadius: "80px",
        }}
      />
    </div>
  );
};

export default UserImg;
