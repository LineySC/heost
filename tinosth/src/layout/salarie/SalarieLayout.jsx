import { Outlet } from "react-router-dom";
import Nav from "@/components/salarie/Nav";
import { Flex, Box } from "@chakra-ui/react";

const SalarieLayout = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      <Nav />
      <Box>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default SalarieLayout;
