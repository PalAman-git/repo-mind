import { api } from "@/lib/api";

export const getRepositories = async () => {
    const {data} = await api.get("/github/repos");
    return data;
}