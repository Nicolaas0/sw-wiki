import React, { useState } from "react";
import FetchData from "../../../FetchData";
import DescText from "../../../UI/DescText";
import ListItem from "../../../UI/ListItem";
import ListWrapper from "../../../UI/ListWrapper";
import NavBtn from "../../../UI/NavBtn";
import TitleText from "../../../UI/TitleText";
const SpeciesList = () => {
  const [url, setURL] = useState("https://swapi.dev/api/species");

  const { data } = FetchData(url);
  return (
    <>
      <ListWrapper>
        {data &&
          data.results.map((d, i) => (
            <ListItem key={i}>
              <TitleText>Name: {d.name}</TitleText>
              <DescText>Class: {d.classification}</DescText>
              <DescText>Designation: {d.designation}</DescText>
              <DescText>Language: {d.language}</DescText>
              <DescText>Eye Colors: {d.eye_colors}</DescText>
              <DescText>Hair Color: {d.hair_colors}</DescText>
              <DescText>Avg Height: {d.average_height}</DescText>
              <DescText>Avg Lifespan: {d.average_lifespan}</DescText>
            </ListItem>
          ))}
      </ListWrapper>
      <NavBtn setUrl={setURL} data={data} />
    </>
  );
};
export default SpeciesList;
