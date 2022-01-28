import React from "react";
import Welcome from "./subcontent/Welcome";
import { useData } from "./Context/DataContext";
import ShowContent from "./subcontent/ShowContent";

const Content = () => {
  const { type } = useData();

  if (type === "welcome") {
    return <Welcome />;
  }

  return <ShowContent />;
};
export default Content;
