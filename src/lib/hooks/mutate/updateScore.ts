import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// sending score with game state to update it
export const useUpdateScore = (email: string | null | undefined) => {
  async function mutateScore(info: object) {
    const mutate = await axios.patch(
      `http://localhost:3000/api/user/game?email=${email}`,
      //the score and state object
      info
    );

    return mutate;
  }
  const { mutate, isLoading, isSuccess, data } = useMutation(mutateScore);

  try {
    return { mutate, isLoading, isSuccess, data } as any;
  } catch (error) {
    return null;
  }
};
