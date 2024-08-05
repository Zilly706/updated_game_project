import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";



const apiClient = new APIClient<Genre>('/genres');


export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQueries({
  queries: [
    {
      queryKey: ['genres'],
      queryFn:   apiClient.getAll,
        
         staleTime: 24 * 60 * 6 * 1000,
       
    }
  ]
});

export default useGenres;








//  const useGenres = () => useData<Genre>('/genres');
  // {
 
  // }