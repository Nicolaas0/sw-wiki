import { Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

const Links = ({ children, p }) => {
  const style = {
    fontFamily: "overpass",
    my: 3,
    p: "5px",
    border: "2px",
    borderRadius: "full",
    borderColor: "yellow",
    color: "yellow",
  };
  return (
    <Link {...style}>
      <RouteLink to={`/${p}`}>{children}</RouteLink>
    </Link>
  );
};
export default Links;
