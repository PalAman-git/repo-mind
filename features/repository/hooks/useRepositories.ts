import { useQuery } from "@tanstack/react-query";
import { getRepositories } from "../api/repository.api";

export function useRepositories(){
    return useQuery({
        queryKey:["repos"],
        queryFn:getRepositories
    })
}