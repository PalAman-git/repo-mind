import { useMutation } from "@tanstack/react-query";
import { indexRepository } from "../api/landing.api";

export function useRepoIndexMutation (){
    return useMutation({
        mutationFn: indexRepository,
        onSuccess:(data) => {
            console.log(data);
        },
        onError:(error) => {
            console.log(error);
        }
    })
}