import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../services/api";
import { queryKeys } from "./queryKeys";

export function useCompanies() {
  return useQuery({
    queryKey: queryKeys.companies,
    queryFn: getCompanies,
  });
}
