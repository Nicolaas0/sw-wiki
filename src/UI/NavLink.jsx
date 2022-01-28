import { Link } from "@chakra-ui/react";

const Links = ({ children, url, setType, setURL, setData}) => {
  const onClickHandler = (URL) => {
    setData(null);
    setType(URL.slice(22));
    setURL(URL);
  };

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
    <Link {...style} onClick={() => {onClickHandler(url);}}>
      {children}
    </Link>
  );
};
export default Links;
