import { api } from "@/lib/api";

export const getBlobContent = async (owner:string,repo:string,path:string) => {
    const {data} = await api.get(`/repo/${owner}/${repo}/file?path=${encodeURIComponent(path)}`)

    return data;
}