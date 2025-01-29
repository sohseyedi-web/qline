import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "@/service/http";
import { GET_USER_DETAIL, LOG_OUT } from "@/service/urls";

export const useDetailUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get(GET_USER_DETAIL),
    retry: false,
  });

  const user = data?.data?.data?.user || {};

  return { user, isLoading };
};

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: logOut, isPending } = useMutation({
    mutationFn: () => api.post(LOG_OUT),
    onSuccess: () => {
      queryClient.removeQueries();
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logOut, isPending };
};
