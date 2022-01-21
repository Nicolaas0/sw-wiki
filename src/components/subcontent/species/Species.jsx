import React, { useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../../SearchBar";
import SpeciesList from "./SpeciesList";
import ContentWrapper from "../../../UI/ContentWrapper";

const Species = ({ url, type }) => {
  const [data, setData] = useState();
  const [useUrl, setUrl] = useState(url);
  useEffect(() => {
    axios.get(useUrl).then((res) => {
      setData(res.data);
      console.log(res.data.results);
      console.log("fetching data");
    });
  }, [useUrl]);
  return (
    <ContentWrapper>
      <SearchBar setUrl={setUrl} type={type} />
      <SpeciesList data={data} setUrl={setUrl} />
    </ContentWrapper>
  );
};

export default Species;
