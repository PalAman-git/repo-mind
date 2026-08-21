"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import {
    File,
    Folder,
    FolderOpen,
    Search,
} from "lucide-react";
import { useParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useRepoIndexMutation } from "@/features/landing/hooks/useRepoIndexMutation";
import { useBlobContent } from "@/features/dashboard/hooks/useBlobContent";

type GithubTree = {
    path: string;
    type: "blob" | "tree";
    sha: string;
    size?: number;
};

type FileNode = {
    id: string;
    name: string;
    type: "file" | "folder";
    children?: FileNode[];
    path?: string;
};

const buildFileTree = (files: GithubTree[]): FileNode[] => {
    const root: FileNode[] = [];

    for (const file of files) {
        const parts = file.path.split("/");
        let current = root;
        let currentPath = "";

        parts.forEach((part, index) => {
            currentPath = currentPath
                ? `${currentPath}/${part}`
                : part;

            const isFile = index === parts.length - 1;

            let existing = current.find(
                (node) => node.name === part
            );

            if (!existing) {
                existing = {
                    id: currentPath,
                    name: part,
                    type: isFile ? "file" : "folder",
                    path: currentPath,
                    children: isFile ? undefined : [],
                };

                current.push(existing);
            }

            if (!isFile) {
                current = existing.children!;
            }
        });
    }

    return root;
};

const sortTree = (nodes: FileNode[]): FileNode[] => {
    return nodes
        .sort((a, b) => {
            if (a.type !== b.type) {
                return a.type === "folder" ? -1 : 1;
            }

            return a.name.localeCompare(b.name);
        })
        .map((node) => ({
            ...node,
            children: node.children
                ? sortTree(node.children)
                : undefined,
        }));
};

function FileNode({
    node,
    style,
}: NodeRendererProps<FileNode>) {
    const isFolder = node.data.type === "folder";
    const isOpen = node.isOpen;

    const handleClick = () => {
        if (isFolder) {
            node.toggle();
        } else {
            node.select();
        }
    };

    return (
        <div
            style={style}
            onClick={handleClick}
            className={`
        group flex h-9 cursor-pointer items-center
        gap-2 rounded-lg px-2.5
        text-sm transition-all duration-150
        ${node.isSelected
                    ? `
              bg-[oklch(0.62_0.14_55)/0.12]
              text-white
            `
                    : `
              text-white/55
              hover:bg-white/[0.045]
              hover:text-white/90
            `
                }
      `}
        >
            {/* Active indicator */}
            <div
                className={`
          h-4 w-[2px] rounded-full transition-all duration-200
          ${node.isSelected
                        ? "bg-[oklch(0.62_0.14_55)]"
                        : "bg-transparent"
                    }
        `}
            />

            {/* Icon */}
            {isFolder ? (
                isOpen ? (
                    <FolderOpen
                        size={16}
                        strokeWidth={1.7}
                        className="shrink-0 text-[oklch(0.62_0.14_55)]"
                    />
                ) : (
                    <Folder
                        size={16}
                        strokeWidth={1.7}
                        className="
              shrink-0
              text-[oklch(0.62_0.14_55)/0.75]
              transition-colors
              group-hover:text-[oklch(0.64_0.16_45)]
            "
                    />
                )
            ) : (
                <File
                    size={15}
                    strokeWidth={1.7}
                    className={`
            shrink-0
            ${node.isSelected
                            ? "text-[oklch(0.64_0.16_45)]"
                            : "text-white/30"
                        }
          `}
                />
            )}

            {/* Name */}
            <span className="truncate">
                {node.data.name}
            </span>
        </div>
    );
}

export default function FilesPage() {
    const params = useParams();

    const owner = params.owner as string;
    const repo = params.repo as string;

    const [blobs, setBlobs] = useState<GithubTree[]>([]);
    const [search, setSearch] = useState("");
    const [selectedBlob, setSelectedBlob] =
        useState<GithubTree | null>(null);
    const {
        data: fileContent,
        isLoading: isFileLoading,
        isError: isFileError,
    } = useBlobContent(
        owner,
        repo,
        selectedBlob?.path
    );

    const treeContainerRef = useRef<HTMLDivElement>(null);

    const { mutateAsync } = useRepoIndexMutation();

    useEffect(() => {
        const indexRepository = async () => {
            try {
                const repoUrl =
                    `https://github.com/${owner}/${repo}`;

                const { tree } = await mutateAsync(repoUrl);

                const filteredBlobs = tree.filter(
                    (item: GithubTree) =>
                        item.type === "blob"
                );

                setBlobs(filteredBlobs);
            } catch (error) {
                console.error(
                    "Failed to index repository:",
                    error
                );
            }
        };

        if (owner && repo) {
            indexRepository();
        }
    }, [owner, repo, mutateAsync]);

    const fileTree = useMemo(() => {
        const filtered = search
            ? blobs.filter((file) =>
                file.path
                    .toLowerCase()
                    .includes(search.toLowerCase())
            )
            : blobs;

        return sortTree(
            buildFileTree(filtered)
        );
    }, [blobs, search]);

    const handleSelect = (nodes: any[]) => {
        const selected = nodes[0];

        if (selected?.data.type !== "file") {
            return;
        }

        const blob = blobs.find(
            (file) => file.path === selected.data.path
        );

        if (blob) {
            setSelectedBlob(blob);
        }
    };
    return (
        <main
            className="
        flex h-[calc(100vh-76px)]
        flex-col overflow-hidden
        bg-[#09090b]
      "
        >
            {/* Header */}
            <header
                className="
          flex shrink-0 items-center
          justify-between
          border-b border-white/[0.07]
          px-7 py-5
        "
            >
                <div>
                    <div className="flex items-center gap-2.5">
                        <h1
                            className="
                text-xl font-semibold
                tracking-tight text-white
              "
                        >
                            Files
                        </h1>

                        <span
                            className="
                rounded-md
                border border-white/[0.08]
                bg-white/[0.03]
                px-2 py-0.5
                text-xs text-white/35
              "
                        >
                            {blobs.length}
                        </span>
                    </div>

                    <p className="mt-1 text-sm text-white/35">
                        Explore the source files in{" "}
                        <span className="text-white/60">
                            {owner}/{repo}
                        </span>
                    </p>
                </div>

               {selectedBlob && (
                    <div className="max-w-[400px] truncate text-xs text-white/30">
                        {selectedBlob.path}
                    </div>
                )}
            </header>

            {/* Content */}
            <div className="flex min-h-0 flex-1">
                {/* Explorer */}
                <aside
                    className="
            flex w-[320px] shrink-0
            flex-col
            border-r border-white/[0.07]
            bg-[#0b0b0e]
          "
                >
                    {/* Search */}
                    <div
                        className="
              border-b border-white/[0.06]
              p-4
            "
                    >
                        <div className="relative">
                            <Search
                                size={15}
                                className="
                  absolute left-3 top-1/2
                  -translate-y-1/2
                  text-white/25
                "
                            />

                            <Input
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                placeholder="Search files..."
                                className="
                  h-9 rounded-lg
                  border-white/[0.08]
                  bg-white/[0.025]
                  pl-9
                  text-sm text-white
                  placeholder:text-white/25

                  focus-visible:border-[oklch(0.62_0.14_55)/0.4]
                  focus-visible:ring-1
                  focus-visible:ring-[oklch(0.62_0.14_55)/0.25]
                "
                            />
                        </div>
                    </div>

                    {/* Tree */}
                    <div
                        ref={treeContainerRef}
                        className="
              min-h-0 flex-1
              overflow-hidden
              p-3
            "
                    >
                        {fileTree.length > 0 ? (
                            <Tree
                                data={fileTree}
                                width="100%"
                                height={600}
                                indent={18}
                                rowHeight={36}
                                openByDefault={false}
                                onSelect={handleSelect}
                            >
                                {FileNode}
                            </Tree>
                        ) : (
                            <div
                                className="
                  flex h-full
                  items-center justify-center
                "
                            >
                                <div className="text-center">
                                    <File
                                        size={28}
                                        strokeWidth={1.5}
                                        className="
                      mx-auto mb-3
                      text-white/10
                    "
                                    />

                                    <p
                                        className="
                      text-sm text-white/30
                    "
                                    >
                                        No files found
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Preview */}
                <section
                    className="
            flex min-w-0 flex-1
            flex-col bg-[#09090b]
          "
                >
                    {selectedBlob ? (
                        <>
                            {/* File header */}
                            <div className="flex h-12 shrink-0 items-center border-b border-white/[0.07] px-5">
                                <File
                                    size={15}
                                    strokeWidth={1.7}
                                    className="mr-2 text-accent"
                                />

                                <span className="truncate text-sm text-white/60">
                                    {selectedBlob.path}
                                </span>
                            </div>

                            {/* File content */}
                            <div className="min-h-0 flex-1 overflow-auto">
                                {isFileLoading ? (
                                    <div className="flex h-full items-center justify-center">
                                        <p className="text-sm text-white/30">
                                            Loading file...
                                        </p>
                                    </div>
                                ) : isFileError ? (
                                    <div className="flex h-full items-center justify-center">
                                        <p className="text-sm text-red-400/70">
                                            Failed to load file.
                                        </p>
                                    </div>
                                ) : (
                                    <pre className="p-6 text-sm leading-6 text-white/70">
                                        <code>{fileContent}</code>
                                    </pre>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center">
                            <div className="text-center">
                                <div
                                    className="
          mx-auto mb-5 flex h-14 w-14
          items-center justify-center
          rounded-2xl
          border border-accent/20
          bg-accent/[0.06]
        "
                                >
                                    <Folder
                                        size={25}
                                        strokeWidth={1.5}
                                        className="text-accent"
                                    />
                                </div>

                                <h2 className="text-sm font-medium text-white/65">
                                    Explore your repository
                                </h2>

                                <p className="mt-1 text-xs text-white/25">
                                    Select a file from the explorer
                                </p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}