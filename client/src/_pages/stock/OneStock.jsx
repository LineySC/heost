import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  HStack,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStock, updateStock } from "../../redux/actions/stockAction";
import { useParams } from "react-router-dom";
import { isEmpty } from "../../_utils/isEmpty";
import InputStock from "../../_components/_input/InputStock";

export default function OneStock() {
  const params = useParams();
  const stockPageName =
    params.stockType.slice(6).charAt().toUpperCase() +
    params.stockType.slice(7);
  const stock = useSelector((state) => state.stock.data);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  const [itemStocked, addItemStocked] = useState({});

  useEffect(() => {
    dispatch(getStock(params.stockType, params.stockId));
  }, [dispatch, params.stockId, params.stockType]);

  useEffect(() => {
    if (stock) {
      const flatColumnsContent = stock.columnsContent?.flat();
      console.log(flatColumnsContent);
      if (flatColumnsContent) {
        const filteredDataSet = new Set();

        flatColumnsContent.forEach((object) => {
          const matchFound = stock.columnsName.every((mot) =>
            object.hasOwnProperty(mot.Field)
          );
          if (matchFound) {
            filteredDataSet.add(object);
          }
        });
        const filteredDataArray = Array.from(filteredDataSet);
        setFilteredData(filteredDataArray);
      }
    }
  }, [stock]);

  const handleChange = (fieldName, value) => {
    addItemStocked({ ...itemStocked, [fieldName]: value });
  };

  const sendLineStock = (e) => {
    dispatch(updateStock(itemStocked, params.stockId));
  };

  return (
    <Box>
      <HStack justifyContent={"space-between"}>
        <Heading>Stock de {stockPageName} </Heading>
        <Button onClick={onOpen}>Ajouter un élément</Button>
      </HStack>

      {stock.columnsName &&
        stock.columnsName.length > 0 &&
        !isEmpty(stock.columnsName) && (
          <Drawer
            isOpen={isOpen}
            placement="right"
            initialFocusRef={firstField}
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                Ajouter un element
              </DrawerHeader>
              <DrawerBody>
                <form onSubmit={sendLineStock}>
                  {stock.columnsName.map((name, index) =>
                    !name.Field.toLowerCase().startsWith("id") ? (
                      <Stack key={index}>
                        <FormLabel htmlFor={name}>
                          {name.Field === name.Field.id ? null : name.Field}
                        </FormLabel>
                        <InputStock
                          type={name.Type}
                          field={name.Field}
                          onChange={handleChange}
                          value={itemStocked[name.Field] || ""}
                        />
                      </Stack>
                    ) : null
                  )}
                  <Button type="submit">Ajouter</Button>
                </form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              {!isEmpty(filteredData) &&
                stock.columnsName.map((columnName, index) => (
                  <Th key={index}>
                    {columnName.Field === columnName.Field.id
                      ? null
                      : columnName.Field}
                  </Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {!isEmpty(filteredData) &&
              filteredData.map((object, index) => (
                <Tr key={index}>
                  {stock.columnsName.map((columnName, columnIndex) => (
                    <Td key={columnIndex}>{object[columnName.Field]} </Td>
                  ))}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
