'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const themeOptions = [
  { value: 'system', label: 'Sistema', icon: Laptop },
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Escuro', icon: Moon },
];

const emptySubscribe = () => () => undefined;

export default function ThemeSwitcher() {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (!mounted) return;
    const themeColor = resolvedTheme === 'dark' ? '#050816' : '#f8fafc';
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }

    meta.content = themeColor;
  }, [mounted, resolvedTheme]);

  const ActiveIcon = mounted && resolvedTheme === 'light' ? Sun : Moon;
  const activeTheme = mounted ? theme ?? 'system' : 'system';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="mts-theme-switcher"
          type="button"
          aria-label="Escolher tema do site"
          title="Escolher tema"
        >
          <ActiveIcon aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[150] w-44">
        <DropdownMenuLabel>Aparência</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={activeTheme} onValueChange={setTheme}>
          {themeOptions.map(({ value, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
