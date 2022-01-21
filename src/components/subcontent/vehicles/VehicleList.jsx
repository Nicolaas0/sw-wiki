import React from "react";
import DescText from "../../../UI/DescText";
import ListItem from "../../../UI/ListItem";
import ListWrapper from "../../../UI/ListWrapper";
import NavBtn from "../../../UI/NavBtn";
import TitleText from "../../../UI/TitleText";
const VehicleList = ({ data, setUrl }) => {
  return (
    <>
      <ListWrapper>
      {data &&
        data.results.map((d,i) => (
          <ListItem key={i}>
            <TitleText>Name: {d.name}</TitleText>
            <DescText>Model: {d.model}</DescText>
            <DescText>Passengers: {d.passengers}</DescText>
            <DescText>Manufact: {d.manufacturer}</DescText>
            <DescText>Cargo Cap: {d.cargo_capacity}</DescText>
            <DescText>Cost: {d.cost_in_credits}</DescText>
            <DescText>Crew: {d.crew}</DescText>
            <DescText>Length: {d.length}</DescText>
            <DescText>Consumables: {d.consumables}</DescText>
            <DescText>Class: {d.vehicles_class}</DescText>
            <DescText>Max Atmoshphering Speed: {d.max_atmosphering_speed}</DescText>
          </ListItem>
        ))}
        </ListWrapper>
        <NavBtn setUrl={setUrl} data={data}/>
    </>
  );
};
export default VehicleList;
