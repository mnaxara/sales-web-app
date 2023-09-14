import { useSet } from "react-use";

const initialFavorites = [
  "8f9529db-6d6c-4ddd-a4f5-32a9a99b4552",
  "47e97e65-4626-4c19-95c3-599271bcbbe6",
];

export default function useFavorites() {
  const [set, { toggle }] = useSet(new Set(initialFavorites));

  return { favorites: set, toggleFavorite: toggle };
}
