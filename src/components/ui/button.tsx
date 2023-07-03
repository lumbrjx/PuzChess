interface Btn {
  label: string;
  readonly style: "Green" | "Grey" | "Transparent";
  additional?: string;
  onClick?: () => any;
}

const Button = ({ label, style, onClick, additional }: Btn) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`
    ${
      style === "Green"
        ? "bg-clrLayoutGreen shadow-btnDrop"
        : style === "Grey"
        ? "bg-clrPrimaryBlack border-2 border-clrSecondaryGrey text-clrFont "
        : style === "Transparent"
        ? "border-clrSecondaryGrey border-2"
        : ""
    }
    text-mediumFnt font-midFnt  py-3 px-10 rounded-regBtn ${additional}`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
