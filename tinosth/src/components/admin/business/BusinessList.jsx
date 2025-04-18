import React, { useState } from "react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { CustomDate } from "@/utils/Date";
import { Table } from "@chakra-ui/react";

// DébouncedInput simple pour les filtres
function DebouncedInput({ value: initialValue, onChange, ...props }) {
  const [value, setValue] = useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 500);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// Composant de filtre en JSX
function Filter({ column }) {
  const columnFilterValue = column.getFilterValue();
  const filterVariant = column.columnDef.meta?.filterVariant;

  if (filterVariant === "range") {
    return (
      <div className="flex space-x-2 mt-1">
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[0] ?? ""}
          onChange={(val) => column.setFilterValue((old) => [val, old?.[1]])}
          placeholder="Min"
          className="w-24 border shadow rounded"
        />
        <DebouncedInput
          type="number"
          value={columnFilterValue?.[1] ?? ""}
          onChange={(val) => column.setFilterValue((old) => [old?.[0], val])}
          placeholder="Max"
          className="w-24 border shadow rounded"
        />
      </div>
    );
  }

  if (filterVariant === "number") {
    return (
      <DebouncedInput
        type="number"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder="Filtrer nombre"
        className="w-24 border shadow rounded"
      />
    );
  }

  if (filterVariant === "select") {
    return (
      <select
        onChange={(e) => column.setFilterValue(e.target.value)}
        value={columnFilterValue ?? ""}
        className="mt-1 border rounded p-1"
      >
        <option value="">Tous</option>
        <option value="complicated">Complicated</option>
        <option value="relationship">Relationship</option>
        <option value="single">Single</option>
      </select>
    );
  }

  return (
    <DebouncedInput
      className="w-36 border shadow rounded mt-1"
      onChange={(val) => column.setFilterValue(val)}
      placeholder="Recherche..."
      type="text"
      value={columnFilterValue ?? ""}
    />
  );
}

// Configuration des colonnes
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "N° Affaire",
    meta: { filterVariant: "number" },
    filterFn: (row, columnId, filterValue) => {
      if (filterValue === "") return true;
      const rowValue = row.getValue(columnId);
      return Number(rowValue) === Number(filterValue);
    },
  }),
  columnHelper.accessor("applicant", {
    header: "Demandeur",
  }),
  columnHelper.accessor("date_of_demand", {
    header: "Date de demande",
    cell: (info) => <CustomDate value={info.getValue()} />,
  }),
  columnHelper.accessor("client_name", {
    header: "Client",
    filterFn: "includesString",
    meta: {
      filterVariant: "text",
    },
  }),
  columnHelper.accessor("designation", {
    header: "Désignation",
  }),
  columnHelper.accessor("nbHours", {
    header: "Nb d'heures",
    meta: {
      filterVariant: "range",
    },
  }),
  columnHelper.accessor("prix", {
    header: "Prix",
    meta: {
      filterVariant: "range",
    },
  }),
  columnHelper.accessor("delay", {
    header: "Délai",
    cell: (info) => <CustomDate value={info.getValue()} />,
  }),
  columnHelper.accessor("comment", {
    header: "Commentaire",
  }),
  columnHelper.accessor("advancement", {
    header: "Avancement",
  }),
  columnHelper.accessor("in_progress", {
    header: "En cours",
  }),
  columnHelper.accessor("finish_date", {
    header: "Date de fin",
    cell: (info) => <CustomDate value={info.getValue()} />,
  }),
  columnHelper.accessor("deliver_date", {
    header: "Date de livraison",
    cell: (info) => <CustomDate value={info.getValue()} />,
  }),
  columnHelper.accessor("invoice_number", {
    header: "Numéro de facture",
  }),
  columnHelper.accessor("due_date", {
    header: "Date limite",
    cell: (info) => <CustomDate value={info.getValue()} />,
  }),
];

export default function BusinessTable({ data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: (row, columnId, filterValue) => {
      if (filterValue === "") return true;
      const rowValue = row.getValue(columnId);
      return Number(rowValue) >= Number(filterValue);
    },
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    debugTable: false,
  });

  /*
  return (
    <Table.Root>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.ColumnHeader
                key={header.id}
                onClick={() => {
                  const isDesc = sorting?.[0]?.desc;
                  setSorting([{ id: header.id, desc: !isDesc }]);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                {header.column.getCanFilter() && (
                  <Filter column={header.column} />
                )}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Table.Cell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );*/
}
