import { Center, Box, Heading, Flex } from "@chakra-ui/react";
import Login from "./auth/Login";
import RequestAccessForm from "@/components/auth/RequestAccessForm";

const Homepage = () => {
  return (
    <Center height={"100vh"} flexDirection={"column"}>
      <Heading size={"4xl"}>TinostH</Heading>
      <Flex gap={4}>
        <Box>
          <Login />
        </Box>
        <Box>
          <RequestAccessForm />
        </Box>
      </Flex>
    </Center>
  );
};

export default Homepage;
