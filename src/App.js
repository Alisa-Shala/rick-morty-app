import React, { useState, createContext } from "react";
import { Container, Box } from "@mui/material";
import Home from "./pages/Home";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const LanguageContext = createContext();

function App() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Box
        sx={{
          background: "linear-gradient(to right, #6a0dad, #8e44ad)",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        Rick & Morty Characters 
      </Box>

      <Container maxWidth="lg" sx={{ paddingBottom: "70px", marginTop: "20px" }}>
        <Home />
      </Container>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(to right, #6a0dad, #8e44ad)",
          padding: "15px",
          textAlign: "center",
          color: "white",
        }}
      >
        <LanguageSwitcher />
      </Box>
    </LanguageContext.Provider>
  );
}

export default App;
