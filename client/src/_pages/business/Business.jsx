import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBusiness } from "../../redux/actions/project/projectAction";
import { Box, Typography } from "@mui/material";

import BusinessList from "../../_components/business/businessList";

export default function Business() {
  const dispatch = useDispatch();

  const allBusiness = useSelector((state) => state.business);

  useEffect(() => {
    dispatch(getAllBusiness());
  }, [dispatch]);

  return (
    <Box>
      {allBusiness.isLoading ? (
        <h1>Loading </h1>
      ) : (
        <>
          <Typography variant="h5" paddingBottom={5}>
            Liste des affaire en cours
          </Typography>
          <BusinessList allBusiness={allBusiness.data} />
        </>
      )}
    </Box>
  );
}
