import { useState } from "react";
import { useDispatch } from "react-redux";
import { createStock } from "../../redux/actions/stockAction";

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NewStock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [name, setName] = useState("");

  const addRows = () => {
    setRows([...rows, { type: "", text: textInput }]);
    setTextInput(""); // Réinitialisez le champ de texte après avoir ajouté la ligne
  };

  const deleteRows = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleTexteInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const stockForm = { stockContent: rows, stockName: name };
    dispatch(createStock(stockForm));
    navigate("/stock/all");
  };

  return (
    <Box>
      <Heading as={"h1"} size={"md"}>
        Créer une nouvelle catégorie
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de catégorie"
        />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nom de la colonne</Th>
              <Th>Type de la colonne</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    type="text"
                    value={row.text}
                    onChange={(e) =>
                      handleChange(index, "text", e.target.value)
                    }
                    placeholder="Entrée texte"
                  />
                </Td>
                <Td>
                  <Select
                    value={row.select}
                    onChange={(e) =>
                      handleChange(index, "type", e.target.value)
                    }
                  >
                    <option value=""></option>
                    <option value="string">Texte</option>
                    <option value="int">Nombre</option>
                    <option value="date">Date</option>
                  </Select>
                </Td>
                <Td>
                  <Button type="button" onClick={() => deleteRows(index)}>
                    Supprimer
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Button type="button" onClick={addRows} mt={4}>
          Ajouter une ligne
        </Button>
        <Button type="submit" mt={4} colorScheme="blue">
          Envoyer
        </Button>
      </form>
    </Box>
  );
}
