import React, { useContext } from "react";
import { ButtonGroup, Button, Typography } from "@mui/material";
import { LanguageContext } from "../App";

const LanguageSwitcher = () => {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <>
      <Typography align="center" sx={{ color: "white" }}>
        {lang === "en" ? "Current Language: English" : "Aktuelle Sprache: Deutsch"}
      </Typography>
      <ButtonGroup
        variant="contained"
        sx={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <Button
          onClick={() => setLang("en")}
          variant={lang === "en" ? "contained" : "outlined"}
          sx={{ backgroundColor: lang === "en" ? "white" : "transparent", color: lang === "en" ? "black" : "white" }}
        >
          English
        </Button>
        <Button
          onClick={() => setLang("de")}
          variant={lang === "de" ? "contained" : "outlined"}
          sx={{ backgroundColor: lang === "de" ? "white" : "transparent", color: lang === "de" ? "black" : "white" }}
        >
          German
        </Button>
      </ButtonGroup>
    </>
  );
};

export default LanguageSwitcher;
