import PeopleList from "./Lists/PeopleList";
import StarshipList from "./Lists/StarshipList";
import { MemoizedFilm } from "./Lists/FilmList";
import SpeciesList from "./Lists/SpeciesList";
import VehicleList from "./Lists/VehicleList";
import PlanetList from "./Lists/PlanetList";
import { useData } from "../Context/DataContext";

const ListContent = () => {
  const { type, data } = useData();
  if (data) {
    switch (type) {
      case "people":
        return <PeopleList />;
      case "films":
        return <MemoizedFilm />;
      case "species":
        return <SpeciesList />;
      case "vehicles":
        return <VehicleList />;
      case "starships":
        return <StarshipList />;
      case "planets":
        return <PlanetList />;
      default:
        break;
    }
  }
};
export default ListContent;
