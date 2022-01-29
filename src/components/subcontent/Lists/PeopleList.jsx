import React, { useEffect, useState } from "react";
import ListWrapper from "../../../UI/ListWrapper";
import ListItem from "../../../UI/ListItem";
import NavBtn from "../../../UI/NavBtn";
import TitleText from "../../../UI/TitleText";
import DescText from "../../../UI/DescText";
import FetchData from "../../../FetchData";
const PeopleList = () => {
  const [url, setURL] = useState("https://swapi.dev/api/people");

  const { data } = FetchData(url);

  return (
    <>
      <ListWrapper>
        {data &&
          data.results.map((d, i) => (
            <ListItem key={i}>
              <TitleText>{d.name}</TitleText>
              <DescText>Born: {d.birth_year}</DescText>
              <DescText>Eye Color: {d.eye_color}</DescText>
              <DescText>Gender: {d.gender}</DescText>
              <DescText>Height: {d.height}</DescText>
              <DescText>Mass: {d.mass}</DescText>
              <DescText>Hair Color: {d.hair_color}</DescText>
              <DescText>Skin Color: {d.skin_color}</DescText>
            </ListItem>
          ))}
      </ListWrapper>
      <NavBtn setUrl={setURL} data={data} />
    </>
  );
};
export default PeopleList;
