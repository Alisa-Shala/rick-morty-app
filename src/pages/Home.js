import React, { useState, useContext } from "react";
import CharacterList from "../components/CharacterList";
import Filters from "../components/Filters";
import { LanguageContext } from "../App";
import { Button, ButtonGroup, Box } from "@mui/material";

const Home = () => {
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("name");
  const { lang } = useContext(LanguageContext);

  return (
    <Box sx={{ my: 4 }}>
      {}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Sort majtas, Filters djathtas
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <strong>Sort by:</strong>
          <ButtonGroup variant="contained">
            <Button
              variant={sortBy === "name" ? "contained" : "outlined"}
              onClick={() => setSortBy("name")}
            >
              Name
            </Button>
            <Button
              variant={sortBy === "origin" ? "contained" : "outlined"}
              onClick={() => setSortBy("origin")}
            >
              Origin
            </Button>
          </ButtonGroup>
        </Box>

        {}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Filters filters={filters} setFilters={setFilters} />
        </Box>
      </Box>

      {}
      <Box mt={2}>
        <CharacterList filters={filters} lang={lang} sortBy={sortBy} />
      </Box>
    </Box>
  );
};

export default Home;
