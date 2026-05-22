import React, { useEffect, useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        // Fetch user's own repos
        const userReposResponse = await fetch('https://api.github.com/users/sagarparker/repos?per_page=100');
        if (!userReposResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const userRepos = await userReposResponse.json();
        
        // Use GitHub Search API to find repos sagarparker has contributed to at marlinprotocol
        const searchResponse = await fetch('https://api.github.com/search/issues?q=author:sagarparker+org:marlinprotocol+type:pr+is:merged&per_page=100');
        let marlinRepos: GitHubRepo[] = [];
        
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          // Extract unique repo names from PRs
          const repoNamesSet = new Set<string>();
          (searchData.items || []).forEach((item: any) => {
            const urlParts = item.repository_url.split('/');
            repoNamesSet.add(urlParts[urlParts.length - 1]);
          });
          const contributedRepoNames = Array.from(repoNamesSet);
          
          // Fetch repo details for each contributed repo
          const repoDetails = await Promise.all(
            contributedRepoNames.map(async (repoName: string) => {
              try {
                const repoResponse = await fetch(`https://api.github.com/repos/marlinprotocol/${repoName}`);
                if (repoResponse.ok) {
                  return await repoResponse.json();
                }
              } catch (err) {
                return null;
              }
              return null;
            })
          );
          
          marlinRepos = repoDetails.filter((repo): repo is GitHubRepo => repo !== null);
        }
        
        // Combine all repos and sort by stars in descending order
        const allRepos = [...userRepos, ...marlinRepos];
        const topRepos = allRepos
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        
        setRepos(topRepos);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  if (loading) {
    return (
      <section id="github-repos" className="github-repos">
        <h2 className="section-title">GitHub Repositories</h2>
        <div className="loading">Loading repositories...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-repos" className="github-repos">
        <h2 className="section-title">GitHub Repositories</h2>
        <div className="error">Error loading repositories: {error}</div>
      </section>
    );
  }

  return (
    <section id="github-repos" className="github-repos">
      <h2 className="section-title">GitHub Repositories</h2>
      <div className="repos-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <div className="repo-header">
              <svg className="repo-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
              </svg>
              <h3 className="repo-name">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h3>
            </div>
            
            {repo.description && (
              <p className="repo-description">{repo.description}</p>
            )}
            
            <div className="repo-footer">
              <div className="repo-stats">
                {repo.language && (
                  <span className="repo-language">
                    <span className="language-dot" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                    {repo.language}
                  </span>
                )}
                <span className="repo-stars">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                  </svg>
                  {repo.stargazers_count}
                </span>
                <span className="repo-forks">
                  <svg viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
                  </svg>
                  {repo.forks_count}
                </span>
              </div>
              
              {repo.topics && repo.topics.length > 0 && (
                <div className="repo-topics">
                  {repo.topics.slice(0, 3).map((topic, index) => (
                    <span key={index} className="topic-tag">{topic}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper function to get language colors
const getLanguageColor = (language: string): string => {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    Dart: '#00B4AB',
    Solidity: '#AA6746',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Go: '#00ADD8',
    Rust: '#dea584',
    'C++': '#f34b7d',
    C: '#555555',
  };
  return colors[language] || '#8257e5';
};

export default GitHubRepos;
