import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// fetching data using axios if no user is entered return null
export const useFetchPuzzle = () => {
  //   async function queryPuzzle() {
  //     const { data } = await axios.get(`https://chess-puzzles.p.rapidapi.com/`, {
  //       headers: {
  //         "X-RapidAPI-Key": process.env.XRapidAPIKey as string,
  //         "X-RapidAPI-Host": "chess-puzzles.p.rapidapi.com",
  //       },
  //     });
  //     return data;
  //   }
  async function queryPuzzle() {
    const options = {
      method: "GET",
      url: "https://chess-puzzles.p.rapidapi.com/",

      headers: {
        "X-RapidAPI-Key": "f2087b850fmshc9987f581634ee7p1f756cjsn94a7f1bec94c",
        "X-RapidAPI-Host": "chess-puzzles.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const { data } = useQuery(["puzzle"], queryPuzzle);
  try {
    // console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};
