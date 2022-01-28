import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [url, setURL] = useState();
  const [type, setType] = useState("welcome");
  const [data, setData] = useState();

  const URL_LIST = {
    people: "https://swapi.dev/api/people",
    starships: "https://swapi.dev/api/starships",
    vehicles: "https://swapi.dev/api/vehicles",
    planets: "https://swapi.dev/api/planets",
    species: "https://swapi.dev/api/species",
    films: "https://swapi.dev/api/films",
  };

  const value = {
    url,
    type,
    setURL,
    setType,
    URL_LIST,
    data,
    setData,
  };

  useEffect(() => {
    return () => {};
  }, [url]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
