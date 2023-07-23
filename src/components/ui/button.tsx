import Image from "next/image";

interface Btn {
  label: string;
  readonly style: "Green" | "Grey" | "Transparent";
  additional?: string;
  onClick?: () => any;
  asset?: boolean;
  asset_type?: "Google";
  disable?: true;
}

const Button = ({
  disable,
  label,
  style,
  onClick,
  additional,
  asset,
  asset_type,
}: Btn) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disable ? true : false}
        className={`
    ${
      style === "Green"
        ? "bg-clrLayoutGreen shadow-btnDrop"
        : style === "Grey"
        ? "bg-clrPrimaryBlack border-2 border-clrSecondaryGrey   "
        : style === "Transparent"
        ? "border-clrSecondaryGrey border-2"
        : ""
    }
    text-mediumFnt font-midFnt  py-1.5 px-5 ${
      asset && "flex items-center gap-2 justify-center flex-wrap"
    } ${additional}`}
      >
        {asset && (
          <Image
            alt={`${asset_type}`}
            src={`/${asset_type}.svg`}
            width={20}
            height={20}
            quality={100}
            priority
          />
        )}
        {label}
      </button>
    </>
  );
};

export default Button;
