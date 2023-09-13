import { useQuery } from "@tanstack/react-query";
import { salesHttpClient } from "../salesHttpClient";

export default function useProductsById({ ids }) {
  let params = new URLSearchParams();
  ids.forEach((id) => {
    params.append("id", id);
  });

  console.log("mn", params);
  return useQuery(["product", { ids }], async () => {
    const response = await salesHttpClient.get(`products`, { params });
    console.log("mn", response);
    return response.data;
  });
}
