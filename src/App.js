import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";
import { Paper } from "@mui/material";
import Hero from "./components/Hero";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import OmMig from "./components/OmMig";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: ["monospace", "sans-serif"].join(","),
      h1: {
        fontSize: 12,
      },
      subtitle1: {
        fontSize: 30,
      },
      p: {
        fontSize: 15,
      },
    },
    palette: {
      mode: mode ? "light" : "dark",
      primary: {
        main: red[500],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        {/* sx={{ height: "100vh" }}> */}
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setMode(!mode)}
          color='inherit'
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon style={{ position: "fixed" }} />
          ) : (
            <Brightness4Icon style={{ position: "fixed" }} />
          )}
        </IconButton>
        <ScrollToTopButton />

        <CssBaseline />

        <Hero />

        <OmMig />
        <Projects />
        <Contact />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
