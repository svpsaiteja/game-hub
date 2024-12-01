import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.pages.map((gamePage) => gamePage.results.map(game => 
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>)
          )}
      </SimpleGrid>
      {hasNextPage && <Button margin={'10px'} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>{isFetchingNextPage? 'Loading more...': 'Load more'}</Button>}
    </>

  );
};

export default GameGrid;
