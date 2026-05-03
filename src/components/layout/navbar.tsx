'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavLink {
  to: string
  label: string
}

const primaryLinks: NavLink[] = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: "L'Artisan" },
  { to: '/services', label: 'Prestations' },
  { to: '/gallery', label: 'Réalisations' },
]

const discoverLinks: NavLink[] = [
  { to: '/temoignages', label: 'Témoignages' },
  { to: '/rse', label: 'RSE & Partenaires' },
  { to: '/blog', label: 'Blog' },
]

// Liste complète pour le menu mobile
const allLinks: NavLink[] = [
  ...primaryLinks,
  ...discoverLinks,
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const discoverRef = useRef<HTMLDivElement | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDiscoverOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!discoverOpen) return
    const onClick = (e: MouseEvent) => {
      if (
        discoverRef.current &&
        !discoverRef.current.contains(e.target as Node)
      ) {
        setDiscoverOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDiscoverOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [discoverOpen])

  const isLinkActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname?.startsWith(to)

  const isDiscoverActive = discoverLinks.some((l) => isLinkActive(l.to))

  const openDiscover = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setDiscoverOpen(true)
  }
  const scheduleCloseDiscover = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    closeTimeout.current = setTimeout(() => setDiscoverOpen(false), 120)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70'
          : 'border-b border-transparent bg-background/0'
      )}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navigation principale"
        >
          {primaryLinks.map((l) => {
            const isActive = isLinkActive(l.to)
            return (
              <Link
                key={l.to}
                href={l.to}
                className={cn(
                  'relative rounded-full px-4 py-2 font-display text-[14px] tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {l.label}
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : null}
              </Link>
            )
          })}

          <div
            ref={discoverRef}
            className="relative"
            onMouseEnter={openDiscover}
            onMouseLeave={scheduleCloseDiscover}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={discoverOpen}
              onClick={() => setDiscoverOpen((v) => !v)}
              className={cn(
                'relative inline-flex items-center gap-1 rounded-full px-4 py-2 font-display text-[14px] tracking-[0.01em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
                isDiscoverActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Découvrir
              <ChevronDown
                className={cn(
                  'size-3.5 transition-transform duration-200',
                  discoverOpen && 'rotate-180'
                )}
              />
              {isDiscoverActive ? (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              ) : null}
            </button>

            <AnimatePresence>
              {discoverOpen ? (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-full mt-2 w-60 -translate-x-1/2 overflow-hidden rounded-2xl border border-border/60 bg-background/97 p-1.5 shadow-lg backdrop-blur-xl"
                >
                  {discoverLinks.map((l) => {
                    const isActive = isLinkActive(l.to)
                    return (
                      <Link
                        key={l.to}
                        href={l.to}
                        role="menuitem"
                        onClick={() => setDiscoverOpen(false)}
                        className={cn(
                          'block rounded-xl px-3.5 py-2.5 font-display text-[14px] transition-colors',
                          isActive
                            ? 'bg-muted text-primary'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        )}
                      >
                        {l.label}
                      </Link>
                    )
                  })}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button size="sm" asChild className="group">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border/60 bg-background/97 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {allLinks.map((l) => {
                const isActive = isLinkActive(l.to)
                return (
                  <Link
                    key={l.to}
                    href={l.to}
                    className={cn(
                      'rounded-xl px-3 py-3 font-display text-[16px] transition-colors hover:bg-muted',
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )
              })}
              <div className="mt-2 border-t border-border/60 pt-4">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Demander un devis
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
