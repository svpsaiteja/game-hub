import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3d84fb20e34a4440be83fbec41c1a188",
  },
});
