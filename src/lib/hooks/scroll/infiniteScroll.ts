import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import axios from "axios";

const useInfiniteScroll = (cursor: string | undefined) => {
  async function fetchBlogs() {
    const { data } = await axios.get(
      `http://localhost:3000/api/blog?cursor=${cursor}`
    );
    return data;
  }

  const { data, refetch, isFetching } = useQuery(["blog"], fetchBlogs, {
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });

  try {
    return { data, refetch, isFetching } as any;
  } catch (error) {
    return null;
  }
};

export default useInfiniteScroll;
