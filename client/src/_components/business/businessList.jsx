import { isEmpty } from "../../_utils/isEmpty";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import updateBusiness from "../../redux/actions/project/projectAction";
import { Date, DeliverDate } from "../../_config/Moment";

import { Box, CircularProgress } from "@mui/material";

import Table from "./Table";

export default function BusinessList({ allBusiness }) {
  const dispatch = useDispatch();
  const [dataTable, setDataTable] = useState({ nodes: allBusiness });
  const [updateValue, setUpdateValue] = useState({});

  useEffect(() => {
    if (allBusiness && Array.isArray(allBusiness)) {
      setDataTable({ nodes: allBusiness });
    }
  }, [allBusiness]);

  if (!Array.isArray(dataTable.nodes)) {
    console.log(!Array.isArray(dataTable.nodes));
    return dataTable;
  }
  const handleUpdate = (value, id, property, prix) => {
    setUpdateValue({
      ...updateValue,
      id: id,
      nameValueUpdate: property,
      valueUpdate: value,
      price: prix,
    });
  };
  const COLUMNS = [
    {
      label: "N° Affaire",
      renderCell: (item) => item.id,
      sort: { sortKey: "ID" },
    },

    { label: "Demandeur", renderCell: (item) => item.applicant },
    {
      label: "Date de la demande",
      renderCell: (item) => <Date value={item.date_of_demand} />,
    },
    { label: "Client", renderCell: (item) => item.client_name },
    { label: "Designation", renderCell: (item) => item.designation },
    { label: "NB Heures", renderCell: (item) => item.nbHours },
    { label: "Prix", renderCell: (item) => item.prix },
    {
      label: "Delai",
      renderCell: (item) => <DeliverDate deliverDate={item.delay} />,
    },
    { label: "Commentaire", renderCell: (item) => item.comment },
    {
      label: "Avancement",
      renderCell: (item) => (
        <input
          min={0}
          max={100}
          key={item.advancement}
          type="number"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          defaultValue={item.advancement === null ? 0 : item.advancement}
          onChange={(event) => {
            handleUpdate(
              parseInt(event.target.value, 10),
              item.id,
              "advancement",
              item.prix
            );
          }}
          onBlur={() => {
            dispatch(updateBusiness(updateValue));
          }}
        />
      ),
    },
    { label: "Encours", renderCell: (item) => item.in_progress },
    {
      label: "Terminé le",
      renderCell: (item) =>
        item.finish_date === null ? (
          <input
            key={item.finish_date}
            type="date"
            style={{
              width: "100%",
              border: "none",
              fontSize: "1rem",
              padding: 0,
              margin: 0,
            }}
            defaultValue={item.finish_date}
            onChange={(event) => {
              handleUpdate(
                event.target.value,
                item.id,
                "finish_date",
                item.prix
              );
            }}
            onBlur={() => {
              dispatch(updateBusiness(updateValue));
            }}
          />
        ) : (
          <Date value={item.finish_date} />
        ),
    },
    {
      label: "Livré",
      renderCell: (item) =>
        item.deliver_date === null ? (
          <input
            key={item.deliver_date}
            type="date"
            style={{
              width: "100%",
              border: "none",
              fontSize: "1rem",
              padding: 0,
              margin: 0,
            }}
            defaultValue={item.deliver_date}
            onChange={(event) => {
              handleUpdate(
                event.target.value,
                item.id,
                "deliver_date",
                item.prix
              );
            }}
            onBlur={() => {
              dispatch(updateBusiness(updateValue));
            }}
          />
        ) : (
          <Date value={item.deliver_date} />
        ),
    },
    { label: "N° Facture", renderCell: (item) => item.invoice_number },
    { label: "Echéance", renderCell: (item) => item.due_date },
  ];

  //const data = { nodes: allBusiness };

  return (
    <>
      {isEmpty(allBusiness) ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Table columns={COLUMNS} data={dataTable} />
        </>
      )}
    </>
  );
}
