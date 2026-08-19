'use client';
import { useEffect, useState } from "react";
import { useRepoIndexMutation } from "../landing/hooks/useRepoIndexMutation";
import { githubTree } from "./types/githubTree";
import { useBlobContent } from "./hooks/useBlobContent";


interface DashboardPageProps {
  owner: string;
  repo: string;
}

export function DashboardPage({ owner, repo }: DashboardPageProps) {
  const { mutateAsync, isPending } = useRepoIndexMutation();
  const [blobs, setBlobs] = useState([]);
  const [selectedBlob, setSelectedBlob] = useState<githubTree | null>(null);

  const { data: blobContent, isPending: isBlobPending } = useBlobContent(owner, repo, selectedBlob?.path);



  useEffect(() => {
    const indexRepository = async () => {
      try {
        const repoUrl = `https://github.com/${owner}/${repo}`;

        const { tree } = await mutateAsync(repoUrl);

        const filteredBlobs = tree.filter((item: githubTree) => item.type === "blob")
        setBlobs(filteredBlobs);

      } catch (error) {
        console.error('Failed to index repository:', error);
      }
    };

    indexRepository();
  }, [owner, repo, mutateAsync]);


  return (
    <>
      <h1>Welcome to the Dashboard</h1>

      <p>Owner: {owner}</p>
      <p>Repository: {repo}</p>

      {isPending && <p>Analyzing repository...</p>}

      <div className="grid grid-cols-3 gap-4 p-5">
        {
          blobs.map((blob: githubTree) => (
            <div key={blob.sha} className="bg-gray-900" onClick={() => setSelectedBlob(blob)}>
              <p>path : {blob.path}</p>
              <p>type : {blob.type}</p>
              <p>size : {blob.size}</p>
              <p>url : {blob.url}</p>
              <p>mode : {blob.mode}</p>
              <p>sha : {blob.sha}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}