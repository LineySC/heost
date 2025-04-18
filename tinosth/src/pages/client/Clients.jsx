import Axios from "@/utils/Axios";
import { Flex, Table, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomDate } from "@/utils/Date";
const Client = () => {
  const [client, setClient] = useState([]);

  useEffect(() => {
    Axios.get("/client/get_all")
      .then((response) => {
        setClient(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(client);

  return (
    <Flex justify={"center"}>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Entreprise</Table.ColumnHeader>
            <Table.ColumnHeader>Nom du contact</Table.ColumnHeader>
            <Table.ColumnHeader>E-mail</Table.ColumnHeader>
            <Table.ColumnHeader>Numéro</Table.ColumnHeader>
            <Table.ColumnHeader>Total d'affaire</Table.ColumnHeader>
            <Table.ColumnHeader>Dernière affaire : </Table.ColumnHeader>
            <Table.ColumnHeader>Client depuis :</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {client.map((client, index) => (
            <Table.Row key={index}>
              <Table.Cell>{client.client_name}</Table.Cell>
              <Table.Cell>{client.client_contact_name}</Table.Cell>
              <Table.Cell>{client.client_contact_mail}</Table.Cell>
              <Table.Cell>{client.client_contact_number}</Table.Cell>
              <Table.Cell>{client.client_total_business}</Table.Cell>
              <Table.Cell>
                <CustomDate params={client.client_last_business} />
              </Table.Cell>
              <Table.Cell>
                <CustomDate params={client.createdAt} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};

export default Client;
