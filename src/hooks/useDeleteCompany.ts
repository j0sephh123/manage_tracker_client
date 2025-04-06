import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany } from "../services/api";
import { queryKeys } from "./queryKeys";

export function useDeleteCompany() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.companies });
    },
  });
}
