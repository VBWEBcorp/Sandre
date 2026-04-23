'use client'

import { BookOpenText, Hammer, ShieldCheck } from 'lucide-react'

const creds = [
  {
    icon: BookOpenText,
    title: 'INMA',
    subtitle: "Annuaire officiel des Métiers d'Art",
  },
  {
    icon: Hammer,
    title: "Artisan d'Art",
    subtitle: 'Chambre de Métiers',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie décennale',
    subtitle: 'Pose assurée · soudures 10 ans',
  },
]

export function CredentialsSection() {
  return (
    <section className="border-b border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <p className="font-display text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
            <span className="inline-block mr-2 h-px w-6 align-middle bg-gold/70" />
            Reconnaissances
          </p>
          {creds.map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-3"
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-border/70 bg-card/70 text-primary">
                <c.icon className="size-4" strokeWidth={1.5} aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="font-display text-[14px] font-medium tracking-tight text-foreground">
                  {c.title}
                </p>
                <p className="font-display text-[11.5px] italic text-muted-foreground">
                  {c.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
