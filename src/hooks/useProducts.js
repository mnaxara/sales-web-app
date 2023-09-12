import { useQuery } from "@tanstack/react-query";

export default function useProducts({ condition, search }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3100";

  let params = new URLSearchParams();

  !!condition && params.append("condition", condition);
  !!search && params.append("q", search);

  return useQuery(["products", { condition, search }], () =>
    fetch(`${baseUrl}/products?${params}`).then((response) => response.json()),
  );
}
