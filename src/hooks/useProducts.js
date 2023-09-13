import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProducts({ condition, search }) {
  let params = new URLSearchParams();

  !!condition && params.append("condition", condition);
  !!search && params.append("q", search);

  return useQuery(["products", { condition, search }], async () => {
    const response = await salesHttpClient.get(`products?${params}`);

    return response.data;
  });
}
