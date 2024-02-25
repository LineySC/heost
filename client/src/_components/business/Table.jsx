import React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";

export default function Table({ columns, data }) {
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #006494;
        font-size: 12px;
      color: white;
      font-weight: 800;
          
      `,
      Row: `
      font-size: 12px;
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
    },
  ]);

  const sort = useSort(
    data,
    { onChange: onSortChange },
    {
      sortFns: {
        ID: (array) => array.sort((a, b) => a.id - b.id),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }
  const [search, setSearch] = React.useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  /**
   * Filtre d'affaire off pour edition de tableau
   */
  data = {
    nodes: data.nodes.filter(
      (item) => item.id && item.id.toString().includes(search)
    ),
  };

  return (
    <>
      <CompactTable columns={columns} data={data} theme={theme} sort={sort} />
    </>
  );

  /*
  return (
    <>
      <TextField
        sx={{ marginBottom: 2 }}
        label="Chercher une affaire"
        value={search}
        onChange={handleSearch}
      />
      <CompactTable columns={columns} data={data} theme={theme} sort={sort} />
      <Drawer>
        <Stack>
          <TextField label="test" />
        </Stack>
      </Drawer>
    </>
  );*/
}
