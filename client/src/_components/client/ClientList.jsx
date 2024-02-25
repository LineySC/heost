import { isEmpty } from "../../_utils/isEmpty";
import { Date } from "./../../_config/Moment";
import { Link } from "react-router-dom";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TableBody,
  Box,
} from "@mui/material";
export default function ClientList({ allClients }) {
  return (
    <>
      <TableContainer components={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Entreprise</TableCell>
              <TableCell align="left">Nom du contact</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Numéro</TableCell>
              <TableCell align="left">Total affaire</TableCell>
              <TableCell align="left">Dernière affaire le</TableCell>
              <TableCell align="left">Crée le</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(allClients) &&
              allClients.map((client, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{client.client_name}</TableCell>
                  <TableCell align="left">
                    {client.client_contact_name}
                  </TableCell>
                  <TableCell align="left">
                    {client.client_contact_mail}
                  </TableCell>
                  <TableCell align="left">
                    {client.client_contact_number}
                  </TableCell>
                  <TableCell align="left">
                    {client.client_total_business}
                  </TableCell>
                  <TableCell align="left">
                    {<Date value={client.last_business} />}
                  </TableCell>
                  <TableCell align="left">
                    {<Date value={client.createdAt} />}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
