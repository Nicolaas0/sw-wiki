import React from "react";
import ListWrapper from "../../../UI/ListWrapper";
import ListItem from "../../../UI/ListItem";
import NavBtn from "../../../UI/NavBtn";
import TitleText from "../../../UI/TitleText";
import DescText from "../../../UI/DescText";
const PeopleList = ({ data, setUrl }) => {
  return (
    <>
    <ListWrapper>
      {data &&
        data.results.map((d,i) => (
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
        <NavBtn setUrl={setUrl} data={data}/>
    </>
  );
};
export default PeopleList;
