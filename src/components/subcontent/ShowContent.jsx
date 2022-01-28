import React, { useEffect } from "react";
import axios from "axios";
import ContentWrapper from "../../UI/ContentWrapper";
import { useData } from "../Context/DataContext";
import ListContent from "./ListContent";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

const ShowContent = () => {
  const { url, setData, data } = useData();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(url, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("successfully aborted");
        }
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return (
    <>
      <SearchBar />
      <ContentWrapper>
        {data === null ? <Loading /> : <ListContent />}
      </ContentWrapper>
    </>
  );
};

export default ShowContent;
