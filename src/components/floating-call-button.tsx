import { Phone } from 'lucide-react'

import { siteConfig } from '@/lib/seo'

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
      aria-label="Appeler l'atelier"
      className="group fixed bottom-6 right-6 z-50 flex size-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_32px_-8px_oklch(0.42_0.09_155/0.55)] ring-1 ring-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/95 active:scale-95 sm:size-14"
    >
      <Phone className="size-5 transition-transform duration-300 group-hover:rotate-12" />
      <span
        className="absolute inset-0 animate-ping rounded-full bg-gold/25"
        style={{ animationDuration: '3s' }}
      />
    </a>
  )
}
