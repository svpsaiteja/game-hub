import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
