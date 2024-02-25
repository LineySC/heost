import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003554",
    },
    secondary: {
      main: "#19857b",
    },
    blue: {
      1: "#051923",
      2: "#003554",
      3: "#006494",
      4: "#0582CA",
      5: "#00A6FB",
    },
    error: {
      main: red.A400,
    },
    icon: {
      main: "#003554",
    },
  },
});

export default theme;
