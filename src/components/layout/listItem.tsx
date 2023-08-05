import { FC } from "react";

interface listItemType {
  type: "blog" | "user";
  data: string[];
}
const ListItem: FC<listItemType> = ({ type }) => {
  return (
    <>
      {type === "user" ? (
        <div className="flex justify-between w-full mb-10">
          <div className="flex gap-4">
            img
            <h2>name</h2>
          </div>
          <div>badge</div>
        </div>
      ) : type === "blog" ? (
        <div className=" w-full">
          <p className="mb-4">title</p>
          <p>body</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListItem;
