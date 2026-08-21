'use client';
import { useEffect, useState } from "react";
import { useRepoIndexMutation } from "../landing/hooks/useRepoIndexMutation";
import { githubTree } from "./types/githubTree";
import { useBlobContent } from "./hooks/useBlobContent";
import {
  FileCode2,
  GitBranch,
  GitCommit,
  Layers3,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Clock3,
  Database,
  Server,
  Globe,
  FolderTree
} from "lucide-react";


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
      {isPending && <p>Analyzing repository...</p>}

      <div>
        <OverviewPage />
      </div>
    </>
  );
}

function OverviewPage() {
  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Repository Header */}
        <section className="mb-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                <span>Repository</span>
                <span>/</span>
                <span className="text-foreground">repo-mind</span>
              </div>

              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                  repo-mind
                </h1>

                <span className="rounded-md border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                  main
                </span>
              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                Repository intelligence and codebase analysis for understanding
                architecture, dependencies, and code relationships.
              </p>

              <div className="mt-4 flex items-center gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="size-3.5" />
                  main
                </span>

                <span className="flex items-center gap-1.5">
                  <FileCode2 className="size-3.5" />
                  TypeScript
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 className="size-3.5" />
                  Analyzed 4 min ago
                </span>
              </div>
            </div>

            <button
              className="
                flex shrink-0 items-center gap-2
                rounded-lg
                bg-accent
                px-4 py-2
                text-sm font-medium
                text-accent-foreground
                transition-colors
                hover:bg-[oklch(0.64_0.16_45)]
              "
            >
              Analyze Repository
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <MetricCard
            icon={FileCode2}
            label="Files"
            value="142"
            description="across repository"
          />

          <MetricCard
            icon={Layers3}
            label="Modules"
            value="18"
            description="detected modules"
          />

          <MetricCard
            icon={GitCommit}
            label="Commits"
            value="386"
            description="repository history"
          />

          <MetricCard
            icon={AlertTriangle}
            label="Findings"
            value="7"
            description="3 require attention"
            accent
          />
        </section>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Architecture */}
          <section className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold">
                    Architecture
                  </h2>

                  <p className="mt-1 text-xs text-muted-foreground">
                    High-level structure detected in the repository
                  </p>
                </div>

                <Layers3 className="size-4 text-muted-foreground" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col items-center gap-3">
                <ArchitectureNode
                  icon={Globe}
                  title="Frontend"
                  subtitle="Next.js"
                />

                <Connector />

                <ArchitectureNode
                  icon={Server}
                  title="API"
                  subtitle="NestJS"
                  highlighted
                />

                <Connector />

                <div className="grid w-full max-w-md grid-cols-2 gap-3">
                  <ArchitectureNode
                    icon={Database}
                    title="PostgreSQL"
                    subtitle="Database"
                  />

                  <ArchitectureNode
                    icon={GitBranch}
                    title="GitHub"
                    subtitle="Repository"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Repository Structure */}
          <section className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">
                Repository Structure
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Main directories and their purpose
              </p>
            </div>

            <div className="divide-y divide-border">
              <StructureRow
                name="src"
                description="Application source"
                files="94 files"
              />

              <StructureRow
                name="components"
                description="Reusable UI components"
                files="18 files"
              />

              <StructureRow
                name="services"
                description="Application services"
                files="12 files"
              />

              <StructureRow
                name="lib"
                description="Shared utilities"
                files="8 files"
              />

              <StructureRow
                name="tests"
                description="Test suites"
                files="10 files"
              />
            </div>
          </section>
        </div>

        {/* Findings */}
        <section className="mt-6 rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">
                  Important Findings
                </h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Things RepoMind thinks you should look at
                </p>
              </div>

              <button className="text-xs font-medium text-accent hover:underline">
                View all
              </button>
            </div>
          </div>

          <div className="divide-y divide-border">
            <Finding
              type="warning"
              title="AuthService has high coupling"
              description="The service depends on 7 other modules and is used by 12 files."
              location="src/modules/auth/auth.service.ts"
            />

            <Finding
              type="warning"
              title="Circular dependency detected"
              description="Two modules appear to depend on each other."
              location="src/modules/users"
            />

            <Finding
              type="success"
              title="No critical architecture violations"
              description="The repository structure follows a generally consistent module boundary."
              location="Architecture"
            />
          </div>
        </section>

        {/* Bottom */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Tech Stack */}
          <section className="rounded-xl border border-border bg-card p-5">
            <h2 className="text-sm font-semibold">
              Technology
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Next.js",
                "NestJS",
                "PostgreSQL",
                "Supabase",
                "Tailwind",
              ].map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-md
                    border border-border
                    bg-background
                    px-2.5 py-1.5
                    text-xs
                    text-muted-foreground
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Last Analysis */}
          <section className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="size-4 text-accent" />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Repository analyzed
                </h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Last analysis completed 4 minutes ago
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Components                                                                  */
/* -------------------------------------------------------------------------- */

function MetricCard({
  icon: Icon,
  label,
  value,
  description,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {label}
        </span>

        <Icon
          className={`size-4 ${
            accent ? "text-accent" : "text-muted-foreground"
          }`}
        />
      </div>

      <div className="mt-3">
        <div className="text-2xl font-semibold tracking-tight">
          {value}
        </div>

        <p className="mt-1 text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function ArchitectureNode({
  icon: Icon,
  title,
  subtitle,
  highlighted = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`
        flex w-full max-w-md items-center gap-3
        rounded-lg border
        px-4 py-3
        ${
          highlighted
            ? "border-accent/40 bg-accent/5"
            : "border-border bg-background"
        }
      `}
    >
      <div
        className={`
          flex size-8 shrink-0 items-center justify-center rounded-md
          ${
            highlighted
              ? "bg-accent/10 text-accent"
              : "bg-muted text-muted-foreground"
          }
        `}
      >
        <Icon className="size-4" />
      </div>

      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="h-5 w-px bg-border" />
  );
}

function StructureRow({
  name,
  description,
  files,
}: {
  name: string;
  description: string;
  files: string;
}) {
  return (
    <div className="flex items-center justify-between px-5 py-3.5 transition-colors hover:bg-sidebar-accent/40">
      <div className="flex items-center gap-3">
        <FolderTree className="size-4 text-muted-foreground" />

        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <span className="text-xs text-muted-foreground">
        {files}
      </span>
    </div>
  );
}

function Finding({
  type,
  title,
  description,
  location,
}: {
  type: "warning" | "success";
  title: string;
  description: string;
  location: string;
}) {
  const warning = type === "warning";

  return (
    <div className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-sidebar-accent/30">
      <div
        className={`
          mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg
          ${
            warning
              ? "bg-accent/10 text-accent"
              : "bg-emerald-400/10 text-emerald-400"
          }
        `}
      >
        {warning ? (
          <AlertTriangle className="size-4" />
        ) : (
          <CheckCircle2 className="size-4" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-medium">
            {title}
          </h3>

          <span className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {location}
          </span>
        </div>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          {description}
        </p>
      </div>

      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground" />
    </div>
  );
}