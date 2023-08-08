import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// sending score with game state to update it
export const useDelBlog = () => {
  async function mutateBlog(info: object) {
    const mutate = await axios.patch(
      `https://puzchess.vercel.app/api/dashboard/blog`,
      //the score and state object
      info
    );

    return mutate;
  }
  const { mutate, isSuccess } = useMutation(mutateBlog);

  try {
    return { mutate, isSuccess } as any;
  } catch (error) {
    return null;
  }
};
