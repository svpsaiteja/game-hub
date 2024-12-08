import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";
import APIClient from "../services/api-client";
import ms from "ms";

export interface GameDetail extends Game {
  description_raw: string;
}

const apiClient = new APIClient<GameDetail>("/games");

const useGameDetail = (id: string) =>
  useQuery<GameDetail, Error>({
    queryKey: ["games", id],
    queryFn: () => apiClient.get(id),
    // staleTime: ms("24h"),
  });

export default useGameDetail;
