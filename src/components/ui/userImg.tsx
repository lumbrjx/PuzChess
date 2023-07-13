import Image from "next/image";
import React, { FC } from "react";
type srcType = {
  src: string | null | undefined;
};
const UserImg: FC<srcType> = ({ src }) => {
  return (
    <Image
      alt={"user-profile"}
      src={`${src}`}
      width={35}
      height={35}
      quality={100}
      priority
      style={{
        backgroundSize: "contain",
        borderRadius: "80px",
      }}
    />
  );
};

export default UserImg;
