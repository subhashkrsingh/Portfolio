import { Backdrop } from '@/components/animations/Backdrop';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTopButton } from '@/components/ui/BackToTopButton';
import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-text-primary">
      <Backdrop />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
