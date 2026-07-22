export type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
};

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

export type GitHubEvent = {
  type: string;
  created_at: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
    }>;
  };
};

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error(`GitHub profile request failed with ${response.status}`);
  }

  return (await response.json()) as GitHubProfile;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error(`GitHub repositories request failed with ${response.status}`);
  }

  return (await response.json()) as GitHubRepo[];
}

export async function fetchGitHubEvents(username: string): Promise<GitHubEvent[]> {
  const response = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`);
  if (!response.ok) {
    throw new Error(`GitHub events request failed with ${response.status}`);
  }

  return (await response.json()) as GitHubEvent[];
}

export type LanguageSummary = Array<{ language: string; value: number }>;

export function summarizeLanguages(repos: GitHubRepo[]): LanguageSummary {
  const summary = new Map<string, number>();

  for (const repo of repos) {
    if (!repo.language) {
      continue;
    }

    summary.set(repo.language, (summary.get(repo.language) ?? 0) + 1);
  }

  return Array.from(summary.entries())
    .map(([language, value]) => ({ language, value }))
    .sort((left, right) => right.value - left.value)
    .slice(0, 6);
}

export function summarizeActivity(events: GitHubEvent[]): Array<{ label: string; intensity: number }> {
  const counts = new Map<string, number>();
  const now = Date.now();

  for (let dayOffset = 27; dayOffset >= 0; dayOffset -= 1) {
    const day = new Date(now - dayOffset * 24 * 60 * 60 * 1000);
    counts.set(day.toDateString(), 0);
  }

  for (const event of events) {
    const date = new Date(event.created_at).toDateString();
    if (!counts.has(date)) {
      continue;
    }

    const nextValue = (counts.get(date) ?? 0) + (event.type === 'PushEvent' ? 2 : 1);
    counts.set(date, nextValue);
  }

  return Array.from(counts.entries()).map(([label, count]) => ({
    label,
    intensity: Math.min(4, count),
  }));
}
