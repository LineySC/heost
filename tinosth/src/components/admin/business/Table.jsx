import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { MRT_Localization_FR } from "mantine-react-table/locales/fr";
import { useMemo, useRef } from "react";
import { Button } from "@chakra-ui/react";
import usePersistedState from "@/hooks/usePersistedState";
import { CustomDate, DeliverDate } from "@/utils/Date";

const STORAGE_KEYS = {
  columnFilters: "mrt_columnFilters_table_1",
  columnVisibility: "mrt_columnVisibility_table_1",
  density: "mrt_density_table_1",
  globalFilter: "mrt_globalFilter_table_1",
  showGlobalFilter: "mrt_showGlobalFilter_table_1",
  showColumnFilters: "mrt_showColumnFilters_table_1",
  sorting: "mrt_sorting_table_1",
};

const TableComponent = ({ data }) => {
  const isFirstRender = useRef(true);

  const [columnFilters, setColumnFilters] = usePersistedState(
    "mrt_columnFilters_table_1",
    []
  );
  const [columnVisibility, setColumnVisibility] = usePersistedState(
    "mrt_columnVisibility_table_1",
    {}
  );
  const [density, setDensity] = usePersistedState("mrt_density_table_1", "md");
  const [globalFilter, setGlobalFilter] = usePersistedState(
    "mrt_globalFilter_table_1",
    undefined
  );
  const [showGlobalFilter, setShowGlobalFilter] = usePersistedState(
    "mrt_showGlobalFilter_table_1",
    false
  );
  const [showColumnFilters, setShowColumnFilters] = usePersistedState(
    "mrt_showColumnFilters_table_1",
    false
  );
  const [sorting, setSorting] = usePersistedState("mrt_sorting_table_1", []);

  const resetState = () => {
    setColumnFilters([]);
    setColumnVisibility({});
    setDensity("md");
    setGlobalFilter(undefined);
    setShowGlobalFilter(false);
    setShowColumnFilters(false);
    setSorting([]);
  };

  const columns = useMemo(
    () => [
      { id: "id", accessorKey: "id", header: "Affaire" },
      { accessorKey: "applicant", header: "Demandeur" },
      { accessorKey: "date_of_demand", header: "Date de demande" },
      { accessorKey: "client_name", header: "Client" },
      { accessorKey: "designation", header: "Désignation" },
      { accessorKey: "nbHours", header: "Nb d'heures" },
      { accessorKey: "prix", header: "Prix" },
      {
        accessorKey: "delay",
        header: "Délai",
        Cell: ({ cell }) => <DeliverDate value={cell.getValue()} />,
      },
      { accessorKey: "comment", header: "Commentaire" },
      { accessorKey: "advancement", header: "Avancement" },
      { accessorKey: "in_progress", header: "Encours" },
      { accessorKey: "finish_date", header: "Date de fin" },
      { accessorKey: "deliver_dat", header: "Date de livraison" },
      { accessorKey: "invoice_number", header: "N° Facture" },
      { accessorKey: "due_date", header: "Échéance" },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    enablePagination: false,
    enableRowVirtualization: true,
    enableStickyHeader: true,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onDensityChange: setDensity,
    onGlobalFilterChange: setGlobalFilter,
    onShowColumnFiltersChange: setShowColumnFilters,
    onShowGlobalFilterChange: setShowGlobalFilter,
    onSortingChange: setSorting,
    localization: MRT_Localization_FR,
    state: {
      columnFilters,
      columnVisibility,
      density,
      globalFilter,
      showColumnFilters,
      showGlobalFilter,
      sorting,
    },
    renderTopToolbarCustomActions: () => (
      <Button onClick={resetState}>Réinitialiser les filtres</Button>
    ),
  });

  return <MantineReactTable table={table} />;
};

export default TableComponent;
