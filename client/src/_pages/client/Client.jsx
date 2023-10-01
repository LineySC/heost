import { Link } from "react-router-dom";
import { getClients } from "../../redux/actions/clientAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClientList from "../../_components/client/ClientList";

export default function Client() {
  const allClients = useSelector((state) => state.client.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = () => {
      dispatch(getClients());
    };
    fetch();
  }, []);

  return (
    <>
      <h1>Relation Clients</h1>

      <div className="client">
        <h2>
          <Link to="/create_client">Ajouter un nouveau client</Link>
        </h2>
        <p>Listing des clients</p>
        <ClientList allClients={allClients} />
      </div>
    </>
  );
}
