import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/layout/logo'
import { siteConfig } from '@/lib/seo'

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: "L'Artisan", to: '/a-propos' },
  { label: 'Les Prestations', to: '/services' },
  { label: 'Les Réalisations', to: '/gallery' },
  { label: 'Témoignages', to: '/temoignages' },
  { label: 'RSE & Partenaires', to: '/rse' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', to: '/mentions-legales' },
  { label: 'Confidentialité', to: '/politique-de-confidentialite' },
  { label: 'CGU', to: '/conditions-generales' },
  { label: 'Cookies', to: '/politique-cookies' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[oklch(0.15_0.02_150)] text-white">
      {/* Filigrane très subtil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-10 sm:px-6 lg:px-10">
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-7">
            <Logo variant="light" />
            <p className="max-w-sm text-[14px] leading-relaxed text-white/55">
              {siteConfig.description}
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gold/90 transition-colors group-hover:border-gold/40">
                  <Phone className="size-3.5" />
                </span>
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gold/90 transition-colors group-hover:border-gold/40">
                  <Mail className="size-3.5" />
                </span>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gold/90">
                  <MapPin className="size-3.5" />
                </span>
                <span>
                  {siteConfig.address.street}, {siteConfig.address.postalCode}{' '}
                  {siteConfig.address.city}
                </span>
              </div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gold/90 transition-colors group-hover:border-gold/40">
                  <Instagram className="size-3.5" />
                </span>
                @energiedescouleurs
              </a>
            </div>
          </div>

          <nav aria-label="Navigation">
            <h3 className="font-display text-[11px] tracking-[0.28em] text-gold/80 uppercase">
              Le site
            </h3>
            <ul className="mt-6 space-y-3.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="font-display text-[15px] text-white/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Légal">
            <h3 className="font-display text-[11px] tracking-[0.28em] text-gold/80 uppercase">
              Mentions
            </h3>
            <ul className="mt-6 space-y-3.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.to}
                    className="font-display text-[15px] text-white/65 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Badges métiers d'art */}
            <div className="mt-10 space-y-3 border-t border-white/10 pt-6">
              <p className="font-display text-[11px] tracking-[0.28em] text-gold/80 uppercase">
                Inscrite à
              </p>
              <p className="font-display text-[13px] italic leading-relaxed text-white/55">
                INMA, Annuaire officiel des Métiers d&apos;Art de France · Maître
                verrier (Vitrailliste), Domaine de l&apos;Architecture
              </p>
            </div>
          </nav>
        </div>

        <div className="mt-16 border-t border-white/10" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} {siteConfig.name}, Atelier
            d&apos;artisanat d&apos;art · Tous droits réservés
          </p>
          <p className="font-display text-[11px] italic tracking-wider text-white/30">
            Maquette conçue par VBWEB · démonstration sur-mesure
          </p>
        </div>
      </div>
    </footer>
  )
}
