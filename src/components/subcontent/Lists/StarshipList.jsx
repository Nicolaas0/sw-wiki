import React from "react";
import ListWrapper from "../../../UI/ListWrapper";
import ListItem from "../../../UI/ListItem";
import NavBtn from "../../../UI/NavBtn";
import DescText from "../../../UI/DescText";
import TitleText from "../../../UI/TitleText";
import { useData } from "../../Context/DataContext";
const StarshipList = () => {
  const { data, setURL } = useData();
  return (
    <>
      <ListWrapper>
        {data &&
          data.results.map((d, i) => (
            <ListItem key={i}>
              <TitleText>{d.name}</TitleText>
              <DescText>Model: {d.model}</DescText>
              <DescText>Manufact: {d.manufacturer}</DescText>
              <DescText>Cargo Cap: {d.cargo_capacity}</DescText>
              <DescText>Passengers: {d.passengers}</DescText>
              <DescText>Crew: {d.crew}</DescText>
              <DescText>Length: {d.length}</DescText>
              <DescText>Class: {d.starship_class}</DescText>
              <DescText>Hyperdrive Rate: {d.hyperdrive_rating}</DescText>
              <DescText>
                Max Atmosphering Speed: {d.max_atmosphering_speed}
              </DescText>
            </ListItem>
          ))}
      </ListWrapper>
      <NavBtn setUrl={setURL} data={data} />
    </>
  );
};
export default StarshipList;
