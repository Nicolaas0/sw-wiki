import React from "react";
import Vehicles from "./subcontent/vehicles/Vehicles";
import Species from "./subcontent/species/Species";
import Planets from "./subcontent/planets/Planets";
import Films from "./subcontent/films/Films";
import People from "./subcontent/people/People";
import Starships from "./subcontent/starships/Starships";
import Welcome from "./subcontent/Welcome";

const Content = ({ type, URL, setType }) => {
  switch (type) {
    case "welcome":
      return <Welcome setType={setType} />;
    case "people":
      return <People url={URL} type={type} />;
    case "planets":
      return <Planets url={URL} type={type} />;
    case "starships":
      return <Starships url={URL} type={type} />;
    case "species":
      return <Species url={URL} type={type} />;
    case "vehicles":
      return <Vehicles url={URL} type={type} />;
    case "films":
      return <Films url={URL} type={type} />;
    default:
      return <Welcome setType={setType} />;
  }
};
export default Content;
