import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// fetching data using axios if no user is entered return null
export const useUpdateScore = (email: string | null | undefined) => {
  async function mutateScore(info: object) {
    const mutate = await axios.patch(
      `http://localhost:3000/api/user/game?email=${email}`,
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
