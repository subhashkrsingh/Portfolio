import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { site } from '@/data/content';
import {
  fetchGitHubEvents,
  fetchGitHubProfile,
  fetchGitHubRepos,
  summarizeActivity,
  summarizeLanguages,
  type GitHubProfile,
  type GitHubRepo,
} from '@/utils/github';
import { formatDate, toReadableNumber } from '@/utils/format';
import { Badge } from '@/components/ui/Badge';
import { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowRight, GitFork, Github, Star, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type GitHubState = {
  profile: GitHubProfile | null;
  repos: GitHubRepo[];
  activity: Array<{ label: string; intensity: number }>;
  languages: Array<{ language: string; value: number }>;
  loading: boolean;
  error: string | null;
};

const activityClasses = [
  'bg-white/5',
  'bg-primary/20',
  'bg-primary/35',
  'bg-secondary/45',
  'bg-accent/60',
];

export function GitHubSection() {
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<GitHubState>({
    profile: null,
    repos: [],
    activity: [],
    languages: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let alive = true;

    async function load() {
      try {
        const [profile, repos, events] = await Promise.all([
          fetchGitHubProfile(site.githubUsername),
          fetchGitHubRepos(site.githubUsername),
          fetchGitHubEvents(site.githubUsername),
        ]);

        if (!alive) {
          return;
        }

        const sortedRepos = [...repos].sort((left, right) => right.stargazers_count - left.stargazers_count);
        setState({
          profile,
          repos: sortedRepos.slice(0, 6),
          activity: summarizeActivity(events),
          languages: summarizeLanguages(sortedRepos),
          loading: false,
          error: null,
        });
      } catch (error) {
        if (!alive) {
          return;
        }

        setState((current) => ({
          ...current,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to load GitHub data.',
        }));
      }
    }

    void load();

    return () => {
      alive = false;
    };
  }, []);

  const repoCount = useMemo(() => state.profile?.public_repos ?? state.repos.length, [state.profile, state.repos.length]);

  return (
    <section id="github" className="section-shell section-padding scroll-mt-32">
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Live public activity"
            description="This panel fetches public GitHub data and presents it like a lightweight engineering dashboard."
            action={
              <Button href={`https://github.com/${site.githubUsername}`} variant="outline" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                Open profile
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <motion.article
              className="glass-card h-full p-6"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/15 text-2xl font-bold text-white">
                  SK
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                    GitHub profile
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                    {state.profile?.name ?? site.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">{state.profile?.bio ?? site.summary}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Repositories</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{toReadableNumber(repoCount)}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Followers</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {toReadableNumber(state.profile?.followers ?? 0)}
                  </p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Following</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {toReadableNumber(state.profile?.following ?? 0)}
                  </p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-text-secondary">Location</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{state.profile?.location ?? 'Remote'}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {state.languages.map((item) => (
                  <Badge key={item.language} variant="outline">
                    {item.language}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-text-secondary">
                Last refreshed {state.loading ? 'just now' : formatDate(new Date().toISOString())}
              </p>
            </motion.article>
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <motion.article className="glass-card p-6" whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                      Public activity
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      Contribution-style heatmap
                    </h3>
                  </div>
                  <Activity className="h-5 w-5 text-text-secondary" />
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2">
                  {state.activity.length > 0
                    ? state.activity.map((cell) => (
                        <div
                          key={cell.label}
                          title={cell.label}
                          className={`aspect-square rounded-[8px] border border-white/5 ${
                            activityClasses[cell.intensity] ?? activityClasses[0]
                          }`}
                        />
                      ))
                    : Array.from({ length: 28 }).map((_, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-[8px] border border-white/5 bg-white/5"
                        />
                      ))}
                </div>
              </motion.article>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              <Reveal>
                <div className="glass-card p-5">
                  <Users className="h-5 w-5 text-accent" />
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-text-secondary">Followers</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {toReadableNumber(state.profile?.followers ?? 0)}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.03}>
                <div className="glass-card p-5">
                  <Star className="h-5 w-5 text-warning" />
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-text-secondary">Top repos</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{state.repos.length}</p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="glass-card p-5">
                  <GitFork className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.28em] text-text-secondary">Languages</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{state.languages.length}</p>
                </div>
              </Reveal>
            </div>

            <Reveal>
              <motion.article className="glass-card p-6" whileHover={prefersReducedMotion ? undefined : { y: -4 }}>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                  Highlighted repositories
                </p>
                <div className="mt-5 grid gap-4">
                  {state.loading ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-text-secondary">
                      Loading GitHub data...
                    </div>
                  ) : state.error ? (
                    <div className="rounded-2xl border border-error/30 bg-error/10 p-5 text-sm text-red-100">
                      {state.error}
                    </div>
                  ) : (
                    state.repos.slice(0, 4).map((repo) => (
                      <a
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h4 className="font-display text-xl font-semibold text-white">{repo.name}</h4>
                            <p className="mt-2 text-sm leading-7 text-text-secondary">
                              {repo.description ?? 'Repository description available on GitHub.'}
                            </p>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 text-text-secondary transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs">
                          <Badge variant="outline">{repo.language ?? 'Code'}</Badge>
                          <Badge variant="outline">Stars {repo.stargazers_count}</Badge>
                          <Badge variant="outline">Forks {repo.forks_count}</Badge>
                        </div>
                      </a>
                    ))
                  )}
                </div>
              </motion.article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
