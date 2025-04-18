import { Button } from "@chakra-ui/react";
import { Checkbox } from "@mantine/core";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const TableOrder = ({ orders, onValidateLine, onValidateAll }) => {
  const columns = [
    { accesorKey: "désignation", header: "Désignation" },
    { accesorKey: "quantite", header: "Quantité" },
    { accesorKey: "prix_unitaire", header: "Prix unitaire" },
    { accesorKey: "recu", header: "Reçu" },
    {
      id: "validate",
      header: "Validé",
      Cell: ({ row }) => (
        <Checkbox
          checked={row.original.valide}
          onChange={() => onValidateLine(row.original.id)}
          disabled={row.original.valide}
        />
      ),
    },
  ];

  const table = useMantineReactTable({
    columns,
    data: orders,
    enablePagination: false,
  });

  return (
    <>
      <Button
        onClick={onValidateAll}
        disabled={achats.every((a) => a.validate)}
      >
        Valider tout
      </Button>
      <MantineReactTable table={table} />
    </>
  );
};

export default TableOrder;
