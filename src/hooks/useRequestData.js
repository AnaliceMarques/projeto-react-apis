import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../constants/baseURL";

export const useRequestData = (initialState, path) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getListPokemons();
  }, []);

  const getListPokemons = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${baseURL}${path}`);
      setData(res.data);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (err) {
      console.log(err.response);
      setError(true);
    }
  };

  return [data, isLoading, isLoaded, error];
};
