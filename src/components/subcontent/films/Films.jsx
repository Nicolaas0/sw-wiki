import React, { useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../../SearchBar";
import FilmList from "../films/FilmList";
import ContentWrapper from "../../../UI/ContentWrapper";

const Films = ({ url, type }) => {
  const [data, setData] = useState();
  const [useUrl, setUrl] = useState(url);

  useEffect(() => {
    axios.get(useUrl).then((res) => {
      setData(res.data);
    });
  }, [useUrl]);
  
  return (
    <ContentWrapper>
      <SearchBar type={type} setUrl={setUrl} />
      <FilmList data={data} />
    </ContentWrapper>
  );
};

export default Films;
