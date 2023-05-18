import { createTheme, experimental_sx as sx } from "@mui/material";
import { DARK1, LIGHT1 } from "./colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: DARK1,
    },
    secondary: {
      main: LIGHT1,
    },
  },
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 36,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h4: { fontSize: 24 },
    h5: { fontSize: 20 },
    body1: { fontSize: 16 },
    // bodyBold: {
    //   fontSize: 16,
    //   fontWeight: 'bold',
    // },
    // small: { fontSize: 12 },
    // smallBold: {
    //   fontSize: 12,
    //   fontWeight: 'bold',
    // },
  },
  //   overrides: {
  //     MuiCard: {
  //       root: {
  //         borderRadius: 8,
  //       },
  //     },
  //   },
  components: {
    MuiTypography: {
      //   styleOverrides: {
      //     // Name of the slot
      //     root: {
      //       // Some CSS
      //       fontSize: '2rem',
      //     },
      //   },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            //   color: grey[200],
            fontSize: 70,
            // fontWeight: 800,
            // textShadow: '2px 2px black',
          },
        },
        {
          props: { variant: "h2" },
          style: {
            // display: 'none',
            fontSize: "10px!important",
          },
          //   style: {
          //     //   color: grey[200],
          //     fontSize: 70,
          //     // fontWeight: 800,
          //     // textShadow: '2px 2px black',
          //   },
        },
      ],
      //   defaultProps: {
      //     style: {
      //       textAlign: 'right',
      //     },
      //   },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed black`,
            color: "red",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `4px dashed red`,
            color: "red",
          },
        },
      ],
    },
  },
});
