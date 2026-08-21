import { Folder } from "lucide-react";

interface RepositoryCardProps {
  repoName: string;
}

const RepositoryCard = ({ repoName }: RepositoryCardProps) => {
  return (
    <div className="flex gap-2 border border-border p-2">
      <Folder />
      <h2>{repoName}</h2>
    </div>
  );
};

export default RepositoryCard;