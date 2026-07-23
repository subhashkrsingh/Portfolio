import type { NavItem } from '@/types/content';

export function getNavHref(item: NavItem, pathname: string): string {
  if (item.kind === 'external' || item.kind === 'route') {
    return item.href;
  }

  if (pathname === '/') {
    return item.href;
  }

  return item.href === '#home' ? '/' : `/${item.href}`;
}

export function isNavItemActive(
  item: NavItem,
  pathname: string,
  activeSection: string | null,
): boolean {
  if (item.kind === 'route') {
    return pathname.startsWith(item.href);
  }

  if (item.kind === 'external') {
    return false;
  }

  if (pathname.startsWith('/projects') && item.href === '#projects') {
    return true;
  }

  return activeSection === item.href.replace('#', '');
}
