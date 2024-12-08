import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDetail = (id: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", id],
    queryFn: () => apiClient.get(id),
    // staleTime: ms("24h"),
  });

export default useGameDetail;
