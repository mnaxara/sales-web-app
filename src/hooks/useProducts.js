import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3100";

  return useQuery(["products"], () =>
    fetch(`${baseUrl}/products`).then((response) => response.json()),
  );
}
