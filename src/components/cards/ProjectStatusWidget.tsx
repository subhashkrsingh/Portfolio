import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ProjectLiveStatus } from '@/types/content';

type LiveConnectionState = 'idle' | 'online' | 'cached';

type ProjectStatusWidgetProps = {
  status: ProjectLiveStatus;
  className?: string;
  compact?: boolean;
};

type LiveProbeState = {
  connectionState: LiveConnectionState;
  responseTime: string;
  lastCheckedLabel: string;
};

const DEFAULT_PROBE: LiveProbeState = {
  connectionState: 'idle',
  responseTime: '',
  lastCheckedLabel: '',
};

function statusVariant(connectionState: LiveConnectionState) {
  switch (connectionState) {
    case 'online':
      return 'success' as const;
    case 'cached':
      return 'secondary' as const;
    default:
      return 'outline' as const;
  }
}

function formatCheckedAt(date: Date) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function ProjectStatusWidget({ status, className, compact = false }: ProjectStatusWidgetProps) {
  const prefersReducedMotion = useReducedMotion();
  const [probe, setProbe] = useState<LiveProbeState>(DEFAULT_PROBE);
  const activeController = useRef<AbortController | null>(null);

  useEffect(() => {
    let active = true;
    let intervalId = 0;
    let timeoutId = 0;

    const ping = async () => {
      const controller = new AbortController();
      activeController.current = controller;
      timeoutId = window.setTimeout(() => controller.abort(), 4500);
      const startedAt = window.performance?.now?.() ?? Date.now();

      try {
        const response = await fetch(status.sourceUrl, {
          method: 'GET',
          cache: 'no-store',
          mode: 'cors',
          signal: controller.signal,
        });

        const elapsed = Math.max(1, Math.round((window.performance?.now?.() ?? Date.now()) - startedAt));

        if (!active) {
          return;
        }

        setProbe({
          connectionState: response.ok ? 'online' : 'cached',
          responseTime: `${elapsed}ms`,
          lastCheckedLabel: `Checked ${formatCheckedAt(new Date())}`,
        });
      } catch {
        if (!active) {
          return;
        }

        setProbe({
          connectionState: 'cached',
          responseTime: status.responseTime,
          lastCheckedLabel: 'Using cached fallback',
        });
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    void ping();
    intervalId = window.setInterval(() => {
      void ping();
    }, 60000);

    return () => {
      active = false;
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
      activeController.current?.abort();
    };
  }, [status.responseTime, status.sourceUrl]);

  const connectionState = probe.connectionState === 'idle' ? 'cached' : probe.connectionState;
  const responseTime = probe.responseTime || status.responseTime;
  const apiLabel = probe.connectionState === 'online' ? 'API Online' : status.apiStatus;
  const lastCheckedLabel = probe.lastCheckedLabel || `Last updated ${status.lastUpdated}`;
  const freshness = useMemo(
    () => (probe.connectionState === 'online' ? 'Live ping' : 'Cached snapshot'),
    [probe.connectionState],
  );

  const metrics = [
    { label: 'Last updated', value: status.lastUpdated },
    { label: 'Market refresh', value: status.latestMarketRefresh },
    { label: 'Response time', value: responseTime },
    { label: 'Symbols', value: status.symbolCount },
  ];

  return (
    <motion.div
      className={cn(
        'glass-card relative overflow-hidden border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]',
        compact ? 'p-3' : 'p-4',
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-70" />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-text-secondary">
              Live status
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant={statusVariant(connectionState)} className="px-2.5 py-1 text-[10px]">
                {apiLabel}
              </Badge>
              <span className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">{freshness}</span>
            </div>
          </div>

          <Button
            href={status.sourceUrl}
            variant="outline"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 text-[11px]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open demo
          </Button>
        </div>

        <div className={cn('mt-4 grid gap-2', compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-4')}>
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.24em] text-text-secondary">{metric.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-text-secondary">
          <span>{lastCheckedLabel}</span>
          <span className="inline-flex items-center gap-2 uppercase tracking-[0.2em]">
            <RefreshCw className="h-3.5 w-3.5" />
            {probe.connectionState === 'online' ? 'Live source' : status.cached}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
