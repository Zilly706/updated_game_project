import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatform";

// import { FetchResponse }  from "../services/api-client";


const apiClient = new APIClient<Game>('games');



export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export interface Game {
  metacritic: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {
    platform: Platform;
  }[];
}

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient
       .getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
       })
    },
  );
};

export default useGames;
