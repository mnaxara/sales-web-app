import { useQuery } from "@tanstack/react-query";

export default function useProducts({ condition }) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3100";

  let params = new URLSearchParams();

  !!condition && params.append("condition", condition);

  return useQuery(["products", { condition }], () =>
    fetch(`${baseUrl}/products?${params}`).then((response) => response.json()),
  );
}
