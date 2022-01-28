import React from "react";
import DescText from "../../../UI/DescText";
import ListItem from "../../../UI/ListItem";
import ListWrapper from "../../../UI/ListWrapper";
import NavBtn from "../../../UI/NavBtn";
import TitleText from "../../../UI/TitleText";
import { useData } from "../../Context/DataContext";

const FilmList = () => {
  const { data, setURL } = useData();
  return (
    <>
      <ListWrapper>
        {data &&
          data.results.map((d, i) => (
            <ListItem key={i}>
              <TitleText>{d.title}</TitleText>
              <DescText>{d.producer}</DescText>
              <DescText>{d.release_date}</DescText>
              <DescText> “{d.opening_crawl}”</DescText>
            </ListItem>
          ))}
      </ListWrapper>
      <NavBtn setUrl={setURL} data={data} />
    </>
  );
};
export const MemoizedFilm = React.memo(FilmList);
