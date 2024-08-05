import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";



export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatform = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 6 * 1000,
  });

export default usePlatform;