import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { id } = useParams();

  const { isLoading, data: game, error } = useGameDetail(id!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name} </Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
