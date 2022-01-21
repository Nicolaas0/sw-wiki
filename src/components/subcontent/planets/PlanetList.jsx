import React from "react";
import ListWrapper from "../../../UI/ListWrapper";
import ListItem from "../../../UI/ListItem";
import NavBtn from "../../../UI/NavBtn";
import DescText from "../../../UI/DescText";
import TitleText from "../../../UI/TitleText";
const PlanetList = ({ data,setUrl }) => {
  return (
    <>
    <ListWrapper>
      {data &&
        data.results.map((d,i) => (
          <ListItem key={i}>
            <TitleText>{d.name}</TitleText>
            <DescText>Climate: {d.climate}</DescText>
            <DescText>Diameter: {d.diameter}</DescText>
            <DescText>Gravity: {d.gravity}</DescText>
            <DescText>Orbital Period: {d.orbital_period}</DescText>
            <DescText>Surface Water: {d.surface_water}</DescText>
            <DescText>Terrain: {d.terrain}</DescText>
          </ListItem>
        ))}
        </ListWrapper>
        <NavBtn setUrl={setUrl} data={data}/>
    </>
  );
};
export default PlanetList;
