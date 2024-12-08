import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { id } = useParams();

  const { isLoading, data: game, error } = useGameDetail(id!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name} </Heading>
      <Text>{game.description_raw} </Text>
    </>
  );
};

export default GameDetailPage;
