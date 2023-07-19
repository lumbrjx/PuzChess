import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
        "X-RapidAPI-Key": "a3f98d2b7cmsh9b3803a98f6e57bp189218jsn9feb7a8e4a94",
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

  const { data, error, refetch, isLoading } = useQuery(
    ["puzzle"],
    queryPuzzle,
    {
      refetchOnWindowFocus: false,
      staleTime: 0,
      cacheTime: 0,
      refetchInterval: 0,
    }
  );

  // Execute the query function when 'fetch' state changes

  try {
    console.log(data);
    // console.log(data);
    return { data, error, refetch } as any;
  } catch (error) {
    return null;
  }
};
