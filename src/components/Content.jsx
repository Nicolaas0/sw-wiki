import React, { useEffect } from "react";
import Welcome from "./subcontent/Welcome";
import { Route, Routes } from "react-router-dom";
import PeopleList from "./subcontent/Lists/PeopleList";
import { MemoizedFilm } from "./subcontent/Lists/FilmList";
import SpeciesList from "./subcontent/Lists/SpeciesList";
import PlanetList from "./subcontent/Lists/PlanetList";
import StarshipList from "./subcontent/Lists/StarshipList";
import VehicleList from "./subcontent/Lists/VehicleList";

const Content = () => {
  return (
    <>
      <Routes>
        <Route index exact path="/" element={<Welcome />} />;
        <Route exact path="/people" element={<PeopleList />} />
        <Route exact path="/films" element={<MemoizedFilm />} />
        <Route exact path="/species" element={<SpeciesList />} />
        <Route exact path="/planets" element={<PlanetList />} />
        <Route exact path="/starships" element={<StarshipList />} />
        <Route exact path="/vehicles" element={<VehicleList />} />
      </Routes>
      ;
    </>
  );
};
export default Content;
