import React from "react";
import { Flex } from "@chakra-ui/react";
import Links from "../UI/NavLink";
import { useData } from "./Context/DataContext";

const Navigation = () => {
  return (
    <Flex flexDir="row" justifyContent="space-around" h={"10%"}>
      <Links p="people">People</Links>
      <Links p="starships">Starships</Links>
      <Links p="planets">Planets</Links>
      <Links p="vehicles">Vehicles</Links>
      <Links p="species">Species</Links>
      <Links p="films">Films</Links>
    </Flex>
  );
};

export default Navigation;
