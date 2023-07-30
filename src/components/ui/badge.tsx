import { GiShardSword } from "react-icons/gi";
type badgeType = {
  badge: "ROCKIE" | "SILVER" | "GOLDEN" | "DIAMOND" | "PLATINIUM";
};
const Badge = ({ badge }: badgeType) => {
  return (
    <div>
      <GiShardSword
        className={`w-full h-full ${
          badge === "ROCKIE"
            ? "text-[#CD7F32] "
            : badge === "SILVER"
            ? "text-[#C0C0C0] "
            : badge === "GOLDEN"
            ? "text-[#FFD700]"
            : badge === "DIAMOND"
            ? "text-[#800080]"
            : badge === "PLATINIUM"
            ? "text-blue-600"
            : ""
        }`}
      />
    </div>
  );
};

export default Badge;
