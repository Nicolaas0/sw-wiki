import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import Title from "./components/Title";
import { Flex } from "@chakra-ui/react";
import "@fontsource/overpass-mono";
import "@fontsource/overpass-mono";
import "@fontsource/space-mono";
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [url, setURL] = useState();
  const [type, setType] = useState("welcome");

  return (
    <Flex flexDir="column" w="100%" minH="100vh" maxH={'100%'} bgColor={'black'}>
      <Title />
      <Navigation setURL={setURL} setType={setType} type={type} />
      <Content URL={url} setType={setType} type={type} />
      {/* <Footer /> */}
    </Flex>
  );
}

export default App;
