import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, Typography, CircularProgress } from "@mui/material";
import { GET_CHARACTERS } from "../graphql/queries";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ filters, lang, sortBy }) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { loading, error, fetchMore, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, ...filters },
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setCharacters(data.characters.results);
      setHasMore(!!data.characters.info.next);
      setPage(2);
    },
  });

  useEffect(() => {
    setPage(1);
    setCharacters([]);
    setHasMore(true);
    refetch({ page: 1, ...filters });
  }, [filters, refetch]);

  const loadMore = () => {
    fetchMore({
      variables: { page, ...filters },
    }).then(({ data }) => {
      setCharacters((prev) => [
        ...prev,
        ...data.characters.results.filter((char) => !prev.some((existing) => existing.id === char.id)),
      ]);
      setHasMore(data.characters.info.next !== null);
      setPage((prev) => prev + 1);
    });
  };

  const sortedCharacters = useMemo(() => {
    return [...characters].sort((a, b) =>
      sortBy === "origin"
        ? a.origin.name.localeCompare(b.origin.name)
        : a.name.localeCompare(b.name)
    );
  }, [characters, sortBy]);

  if (loading && page === 1) return <Typography align="center">Loading Characters...</Typography>;
  if (error) return <Typography align="center" color="error">Failed to fetch data. Please try again later.</Typography>;

  return (
    <InfiniteScroll
      dataLength={sortedCharacters.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<Typography align="center">Loading more characters...</Typography>}
      endMessage={<Typography align="center">No more characters found!</Typography>}
    >
      <Grid
        container
        spacing={2}
        sx={{
          animation: "fadeIn 0.5s ease-in-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {sortedCharacters.map((char) => (
          <Grid item xs={12} sm={6} md={4} key={char.id}>
            <CharacterCard character={char} lang={lang} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default CharacterList;
