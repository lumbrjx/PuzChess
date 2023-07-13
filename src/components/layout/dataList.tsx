import { FC } from "react";
type dataListType = {
  dataType: "adminBlog" | "user" | "blog";
  dataArr: string[];
};
const DataList: FC<dataListType> = ({ dataType, dataArr }) => {
  return <div></div>;
};

export default DataList;
