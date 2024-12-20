import { useMutation } from "@tanstack/react-query";
import { api } from "../api";
import { USER_QUERY_KEYS } from "@/queries/user.queries";
import { Tlogin } from "@/schema/auth.schema";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: [USER_QUERY_KEYS.CREATE_USERS],
    mutationFn: async (data: Tlogin) => {
      const response = await api.post("/user", data);
      console.log(response.data);
      return response.data;
    },
  });
};
