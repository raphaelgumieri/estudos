import { createTheme } from "@mui/material";
import { orange, yellow } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: orange[500],
    alive: yellow[500],
    swapFont: '5rem',
  },
});

export default theme