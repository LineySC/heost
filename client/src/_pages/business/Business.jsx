import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBusiness } from "../../redux/actions/project/projectAction";

import BusinessList from "../../_components/business/businessList";

export default function Business() {
  const dispatch = useDispatch();

  const allBusiness = useSelector((state) => state.business.data);

  useEffect(() => {
    const fetch = () => {
      dispatch(getAllBusiness());
    };
    fetch();
  }, []);

  return (
    <>
      <h1>Liste des affaire en cours</h1>
      <BusinessList allBusiness={allBusiness} />
    </>
  );
}
