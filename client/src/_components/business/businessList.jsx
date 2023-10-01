import { isEmpty } from "../../_utils/isEmpty";

export default function BusinessList({ allBusiness }) {
  console.log(allBusiness);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>N° Affaire</th>
            <th>Demandeur</th>
            <th>Date de la demande</th>
            <th>Client</th>
            <th>Désignation</th>
            <th>Nb heures</th>
            <th>Prix</th>
            <th>Delai</th>
            <th>Comment</th>
            <th>Avancement</th>
            <th>Encours</th>
            <th>Terminé le:</th>
            <th>Livré</th>
            <th>Facture</th>
            <th>Date de la Facture</th>
            <th>Echéance</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(allBusiness) &&
            allBusiness.map((business, index) => {
              return (
                <tr index={index}>
                  <td>{business.id}</td>
                  <td>{business.applicant}</td>
                  <td>{business.date_of_demand}</td>
                  <td>{business.client_name}</td>
                  <td>{business.designation}</td>
                  <td>{business.nbHours}</td>
                  <td>{business.prix}</td>
                  <td>{business.delay}</td>
                  <td>{business.comment}</td>
                  <td>{business.advencement}</td>
                  <td>{business.in_progress}</td>
                  <td>{business.finish_date}</td>
                  <td>{business.deliver_date}</td>
                  <td>{business.invoice_number}</td>
                  <td>{business.invoice_date}</td>
                  <td>{business.due_date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
