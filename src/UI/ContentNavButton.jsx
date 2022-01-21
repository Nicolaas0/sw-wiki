import { Button } from "@chakra-ui/react";
const ContentNavBtn = ({ children, setURL, nav }) => {
  return (
    <>
      <Button
        _hover={{ bgColor: "black", borderColor: "yellow" }}
        bgColor={"black"}
        color={"yellow"}
        onClick={() => {
          setURL(nav);
        }}
      >
        {children}
      </Button>
    </>
  );
};
export default ContentNavBtn;
