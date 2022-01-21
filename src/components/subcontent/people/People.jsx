import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../SearchBar";
import PeopleList from "./PeopleList";
import ContentWrapper from "../../../UI/ContentWrapper";
const People = ({ type, url }) => {
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
      <PeopleList data={data} setUrl={setUrl} />
    </ContentWrapper>
  );
};

export default People;
