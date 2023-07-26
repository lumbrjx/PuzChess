import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// fetching data using axios if no user is entered return null
export const useUpdateScore = (email: string | null | undefined) => {
  async function mutateScore(info: object) {
    console.log(info);
    const mutate = await axios.patch(
      `http://localhost:3000/api/user/game?email=${email}`,
      info
    );
    console.log(mutate.config.data);
    return mutate;
  }
  const { mutate, isLoading, isSuccess } = useMutation(mutateScore);

  try {
    return { mutate, isLoading, isSuccess } as any;
  } catch (error) {
    return null;
  }
};
