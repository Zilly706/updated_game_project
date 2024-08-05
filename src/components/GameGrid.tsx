import { SimpleGrid, Box } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkelton } from "./GameCardSkelton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <Box padding="10px">
      {error && <div style={{ color: 'red' }}>{error.message}</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding="10px">
        {isLoading
          ? skeleton.map((_, index) => (
              <GameCardContainer key={index}>
                <GameCardSkelton />
              </GameCardContainer>
            ))
          : data?.results.map((game: Game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </Box>
  );
}

export default GameGrid;
