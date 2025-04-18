import BusinessTable from "@/components/admin/business/BusinessList";
import TableComponent from "@/components/admin/business/Table";
import Axios from "@/utils/Axios";
import { Box, Spinner, VStack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

const Business = () => {
  const [allBusiness, setAllBusiness] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("/business/get")
      .then((response) => {
        setAllBusiness(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      {loading ? (
        <VStack>
          <Spinner size="xl" />
          <Text>Chargement...</Text>
        </VStack>
      ) : (
        <TableComponent data={allBusiness} />
      )}
    </Box>
  );
};

export default Business;
