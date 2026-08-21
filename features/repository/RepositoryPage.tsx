'use client'
import { useRepositories } from "../repository/hooks/useRepositories";
import RepositoryCard from "./components/RepositoryCard";

const RepositoryPage = () => {
    const { data: repos, isLoading } = useRepositories();
    if (isLoading) return <div>Repos Loading...</div>;
  
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    repos.map((repo: any) => (
                        <RepositoryCard key={repo.id} repoName={repo.name}/>
                    ))
                }
            </div>
        </>
    );
}

export default RepositoryPage


