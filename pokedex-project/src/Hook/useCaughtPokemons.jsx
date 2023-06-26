import { useEffect, useState } from "react";

export default function useCaughtPokemons() {
  const [caughtList, setCaughtList] = useState([]);
  const updateList = (pokemon) => {
    setCaughtList([...caughtList, pokemon]);
  };
  console.log(caughtList);
  return [caughtList, updateList];
}
