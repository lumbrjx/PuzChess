import Link from "next/link";

const DashboardLink = ({ setToggle }: any) => {
  return (
    <Link
      href="/dashboard"
      className="    "
      onClick={() => {
        setToggle(false);
      }}
    >
      Dashboard
    </Link>
  );
};

export default DashboardLink;
