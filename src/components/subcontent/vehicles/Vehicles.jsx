import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../SearchBar";
import VehicleList from "./VehicleList";
import ContentWrapper from "../../../UI/ContentWrapper";

const Vehicles = ({ url, type }) => {
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
      <VehicleList data={data} setUrl={setUrl} />
    </ContentWrapper>
  );
};

export default Vehicles;
