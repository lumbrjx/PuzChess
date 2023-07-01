interface Btn {
  label: string;
  readonly style: "Green" | "Grey" | "Transparent";
  onClick?: () => void;
}

const Button = ({ label, style, onClick }: Btn) => {
  return (
    <>
      <button
        className={`
    ${
      style === "Green"
        ? "bg-clrLayoutGreen shadow-btnDrop"
        : style === "Grey"
        ? "bg-clrPrimaryBlack border-2 border-clrSecondaryGrey text-clrFont"
        : "border-clrSecondaryGrey border-2"
    }
    text-mediumFnt font-midFnt  py-3 px-10 rounded-regBtn `}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
