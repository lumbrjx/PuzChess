import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// fetching data using axios if no user is entered return null
export const useFetchUser = (email: string | null | undefined) => {
  async function queryUser() {
    const { data } = await axios.get(
      `https://puzchess.vercel.app/api/user?email=${email}`
    );
    return data;
  }
  const { data } = useQuery(["user", email], queryUser);
  try {
    return data[0];
  } catch (error) {
    return null;
  }
};
