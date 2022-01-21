import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../SearchBar";
import PlanetList from "./PlanetList";
import ContentWrapper from "../../../UI/ContentWrapper";

const Planets = ({ url, type }) => {
  const [data, setData] = useState();
  const [useUrl, setUrl] = useState(url);
  
  useEffect(() => {
    axios.get(useUrl).then((res) => {
      setData(res.data);
    });
  }, [useUrl]);

  return (
    <ContentWrapper>
      <SearchBar setUrl={setUrl} type={type} />
      <PlanetList data={data} setUrl={setUrl} />
    </ContentWrapper>
  );
};

export default Planets;
