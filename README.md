# RepoMind — Frontend

The frontend for RepoMind, a developer tool that helps you explore and understand GitHub repositories through an interactive codebase interface.

RepoMind allows users to connect a GitHub repository, browse its files, inspect source code, and understand the structure of the codebase from a single interface.

## Features

- 🔐 GitHub authentication
- 📦 GitHub repository integration
- 📁 Repository file and folder explorer
- 📄 Source-code file viewer
- 🔍 Navigate through repository structure
- ⚡ Fast client-side navigation
- 🖥️ Dashboard-based interface

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub OAuth
- REST API

## References
[chunking data strategy](https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089)

## Project Structure

```
app/
├── (dashboard)/
│   ├── layout.tsx
│   └── ...
│
├── login/
│   └── ...
│
├── repo/
│   └── [owner]/
│       └── [repo]/
│           └── ...
│
└── ...

components/
├── ...
└── ...

features/
├── ...
└── ...

lib/
├── ...
└── ...
```

## Getting Started

1. Clone the repository
git clone <repository-url>
cd repo-mind

2. Install dependencies
npm install

3. Configure environment variables

Create a .env.local file:

NEXT_PUBLIC_API_URL=http://localhost:3000

Add any other environment variables required by the authentication flow.

4. Start the development server
npm run dev

The frontend will be available at:

http://localhost:3001
Backend

The frontend communicates with the RepoMind backend for authentication, GitHub repository data, and file contents.

Backend repository:

<backend-repository-url>

Make sure the backend is running before using repository-related functionality.

The backend is responsible for interacting with GitHub and processing repository data.

## Roadmap
- [x] Get repo files content
- [ ] Repository tree visualization
- [ ] Code search
- [ ] Repository-wide code analysis
- [ ] File dependency visualization
- [ ] Codebase impact analysis
- [ ] AI-powered repository questions
- [ ] SOLID/code-quality analysis
- [ ] Repository architecture visualization

## License

This project is currently under development.
