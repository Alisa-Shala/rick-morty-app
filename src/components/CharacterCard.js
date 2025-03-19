import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const translations = {
  en: { status: "Status", species: "Species", gender: "Gender", origin: "Origin" },
  de: { status: "Status", species: "Spezies", gender: "Geschlecht", origin: "Herkunft" },
};

const CharacterCard = ({ character, lang }) => {
  const t = translations[lang];

  return (
    <Card
      sx={{
        background: "linear-gradient(to bottom, #fff, #f7f7f7)",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardMedia component="img" height="200" image={character.image} />
      <CardContent>
        <Typography variant="h6">{character.name}</Typography>
        <Typography>{t.status}: {character.status}</Typography>
        <Typography>{t.species}: {character.species}</Typography>
        <Typography>{t.gender}: {character.gender}</Typography>
        <Typography>{t.origin}: {character.origin.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
