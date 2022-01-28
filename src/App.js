import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Title from "./components/Title";
import { Flex } from "@chakra-ui/react";
import "@fontsource/overpass-mono";
import "@fontsource/overpass-mono";
import "@fontsource/space-mono";
import "./App.css";

function App() {
  useEffect(() => {});

  return (
    <Flex
      flexDir="column"
      w="100%"
      minH="100vh"
      maxH={"100%"}
      bgColor={"black"}
    >
      <Title />
      <Navigation />
      <Content />
    </Flex>
  );
}

export default App;
