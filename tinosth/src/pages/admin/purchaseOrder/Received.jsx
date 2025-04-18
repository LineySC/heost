import TableOrder from "@/components/admin/PurchaseOrder/Table";
import Axios from "@/utils/Axios";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const Received = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get("/api/purchase_order/all").then((res) => setOrders(res.data));
  }, []);

  const validateLine = async (id) => {
    await Axios.put(`/purchase_order/line/${id}/validate`);
    setOrders((prev) =>
      prev.map((a) => (a.id === id ? { ...a, valide: true } : a))
    );
  };

  const validateAll = async () => {
    const isNanValidate = orders.filter((a) => !a.valide).map((a) => a.id);
    await Axios.put(`/purchase_order/validate`, { ids: isNanValidate });
    setOrders((prev) =>
      prev.map((a) => (a.valide ? a : { ...a, valide: true }))
    );
  };

  return (
    <Box>
      <Text>Saisie des réception</Text>
      <TableOrder
        orders={orders}
        onValidateLine={validateLine}
        onValidateAll={validateAll}
      />
    </Box>
  );
};

export default Received;
