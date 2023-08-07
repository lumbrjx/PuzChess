import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// sending score with game state to update it
export const useRemUser = () => {
  async function mutateUser(info: object) {
    const mutate = await axios.patch(
      `https://puzchess.vercel.app/api/user/del`,
      //the score and state object
      info
    );

    return mutate;
  }
  const { mutate, isSuccess } = useMutation(mutateUser);

  try {
    return { mutate, isSuccess } as any;
  } catch (error) {
    return null;
  }
};
