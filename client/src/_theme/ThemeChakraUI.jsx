import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/roboto";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#E5E5E5", "gray.800")(props),
      color: mode("gray.700", "white")(props),
    },
    fonts: {
      body: `'Roboto', sans-serif`,
      heading: `'Roboto', sans-serif`,
    },
    h1: {
      color: mode("gray.700", "#1a202c")(props),
    },
    h2: {
      color: mode("gray.700", "#1a202c")(props),
    },
    h3: {
      color: mode("gray.700", "#1a202c")(props),
    },
    h4: {
      color: mode("gray.700", "#1a202c")(props),
    },
    h5: {
      color: mode("gray.700", "#1a202c")(props),
    },
    h6: {
      color: mode("gray.700", "#1a202c")(props),
    },
  }),
};

const theme = extendTheme({ styles });

export default theme;
