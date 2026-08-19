import { useQuery } from "@tanstack/react-query";
import { getBlobContent } from "../api/dashboard.api";

export function useBlobContent(
  owner: string,
  repo: string,
  path: string | undefined
) {
  return useQuery({
    queryKey: ["blobContent", owner, repo, path],

    queryFn: () => getBlobContent(owner, repo, path!),

    enabled: !!path,
  });
}