import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import bg1 from "../../assets/1457718455276 1.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStock } from "../../redux/actions/stockAction";
import { isEmpty } from "../../_utils/isEmpty";

import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function StockPage() {
  const allStock = useSelector((state) => state.stock.allStock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStock());
  }, [dispatch]);

  console.log(allStock);

  return (
    <Box>
      <Heading as={"h1"} size={"md"}>
        Toutes les catégories
      </Heading>
      <Wrap>
        {!isEmpty(allStock) &&
          allStock.map((stock, index) => {
            return (
              <WrapItem key={index}>
                <ChakraLink
                  as={ReactRouterLink}
                  to={`/stock/${stock.name}/${stock.id}`}
                >
                  <Center
                    w="300px"
                    h="191px"
                    bgGradient="linear(to-r, #313860, #151928)"
                    color="#FFF"
                    borderRadius="12px"
                  >
                    <Image
                      src={bg1}
                      w="100%"
                      h="100%"
                      position="relative"
                      top={0}
                      left={0}
                    />
                    <Text as="b" position="absolute" fontSize={"20px"}>
                      {stock.name.slice(6).charAt().toUpperCase() +
                        stock.name.slice(7)}
                    </Text>
                  </Center>
                </ChakraLink>
              </WrapItem>
            );
          })}
      </Wrap>
    </Box>
  );
}
