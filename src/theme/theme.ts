import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#ff4d8d" },
    secondary: { main: "#ff8fb1" },
    background: {
      default: "#07060a",
      paper: "rgba(255,255,255,0.06)",
    },
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: ["Poppins", "system-ui", "Segoe UI", "Roboto", "Arial"].join(","),
  },
});