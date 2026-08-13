import { api } from "@/lib/api";

export const indexRepository = async (repoUrl: string) => {
  const { data } = await api.post("/repo/index", {
    repoUrl,
  });

  return data;
};