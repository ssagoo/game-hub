import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  rating: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <List spacing={3}>
        {games.map((game) => (
          <ListItem key={game.id}>{game.name}</ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGrid;
