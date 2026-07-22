import { Suspense, lazy, useEffect, type ReactNode } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { motion, useReducedMotion } from 'framer-motion';

const BlogIndexPage = lazy(() => import('@/pages/BlogIndexPage').then((module) => ({ default: module.BlogIndexPage })));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })));

function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="section-shell section-padding">
            <div className="section-content">
              <div className="glass-card p-8 text-text-secondary">Loading content...</div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/blog"
            element={
              <PageTransition>
                <BlogIndexPage />
              </PageTransition>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PageTransition>
                <BlogPostPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
