import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ error: "", data: genres, isLoading: false });

export default useGenres;
