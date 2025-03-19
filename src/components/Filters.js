import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const Filters = ({ filters, setFilters }) => (
  <Box sx={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "10px" }}>
    <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={filters.status || ""}
        onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
        label="Status"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Species</InputLabel>
      <Select
        value={filters.species || ""}
        onChange={(e) => setFilters((prev) => ({ ...prev, species: e.target.value }))}
        label="Species"
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Human">Human</MenuItem>
        <MenuItem value="Alien">Alien</MenuItem>
      </Select>
    </FormControl>
  </Box>
);

export default Filters;
