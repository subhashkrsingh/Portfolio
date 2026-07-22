import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from '@/App';
import { AppShell } from '@/components/layout/AppShell';
import '@/styles/index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppShell>
          <App />
        </AppShell>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
