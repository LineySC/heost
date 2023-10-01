import { isEmpty } from "../../_utils/isEmpty";

export default function ClientList({ allClients }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Entreprise :</th>
            <th>Contact :</th>
            <th>Email :</th>
            <th>Numéro :</th>
            <th>Dernière affaire :</th>
            <th>Total affaire :</th>
            <th>Créer le :</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(allClients) &&
            allClients.map((client, index) => {
              return (
                <tr index={index}>
                  <td>{client.client_name}</td>
                  <td>{client.client_contact_name}</td>
                  <td>{client.client_contact_mail}</td>
                  <td>{client.client_contact_number}</td>
                  <td>{client.last_business}</td>
                  <td>{client.client_total_business}</td>
                  <td>{client.createdAt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
