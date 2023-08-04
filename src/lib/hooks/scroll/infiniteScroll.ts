import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

const useInfiniteScroll = (cursor: string | undefined) => {
  async function fetchBlogs() {
    console.log("im cursor ", cursor);
    const { data } = await axios.get(
      `http://localhost:3000/api/blog?cursor=${cursor}`
    );
    return data;
  }

  const { data, refetch } = useQuery(["blog"], fetchBlogs, {
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });

  try {
    return { data, refetch } as any;
  } catch (error) {
    return null;
  }
  // Replace the key with a unique key for this specific infinite scroll
};

export default useInfiniteScroll;
