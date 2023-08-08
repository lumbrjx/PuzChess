import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// sending score with game state to update it
export const useAddFriend = (email: string | null | undefined) => {
  async function mutateFriend(info: object) {
    const mutate = await axios.patch(
      `http://localhost:3000/api/friend?email=${email}`,
      //the score and state object
      info
    );

    return mutate;
  }
  const { mutate, isSuccess } = useMutation(mutateFriend);

  try {
    return { mutate, isSuccess } as any;
  } catch (error) {
    return null;
  }
};
