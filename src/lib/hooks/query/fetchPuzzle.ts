import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// fetching data using axios from the external api
export const useFetchPuzzle = () => {
  async function queryPuzzle() {
    const options = {
      method: "GET",
      url: "https://chess-puzzles.p.rapidapi.com/",
      params: {
        playerMoves: "4",
      },
      headers: {
        "X-RapidAPI-Key":'3b38294e82msh042338a6ea5f1a8p1a8714jsnec1c2a1dac8f',
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

  try {
    return { data, error, refetch, isLoading } as any;
  } catch (error) {
    return null;
  }
};
