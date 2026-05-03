'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/seo'
import { cn } from '@/lib/utils'

type Message = {
  id: string
  role: 'assistant' | 'user'
  content: React.ReactNode
}

type Suggestion = {
  label: string
  query: string
}

const SUGGESTIONS: Suggestion[] = [
  { label: 'Demander un devis', query: 'devis' },
  { label: 'Délais & process', query: 'délais' },
  { label: 'Restauration de vitrail', query: 'restauration' },
  { label: 'Visiter l’atelier', query: 'visite' },
]

const greeting = (
  <>
    Bonjour, je suis l’assistant de l’atelier{' '}
    <span className="font-semibold text-foreground">Énergie des Couleurs</span>.
    Je peux vous renseigner sur les <em>prestations</em>, les <em>délais</em>,
    la <em>restauration</em> ou organiser un <em>échange</em> avec l’artisan.
    Comment puis-je vous aider&nbsp;?
  </>
)

function makeId() {
  return Math.random().toString(36).slice(2, 9)
}

function findReply(input: string): React.ReactNode {
  const q = input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

  const has = (...words: string[]) => words.some((w) => q.includes(w))

  if (has('bonjour', 'salut', 'hello', 'coucou', 'bonsoir')) {
    return (
      <>
        Bonjour&nbsp;! Ravie de vous accueillir. Souhaitez-vous parler d’un
        projet précis, demander un devis, ou découvrir l’atelier&nbsp;?
      </>
    )
  }

  if (has('devis', 'prix', 'tarif', 'cout', 'budget', 'estimation')) {
    return (
      <>
        Chaque pièce étant unique, le tarif dépend des dimensions, de la
        technique (verre soufflé, plomb, Tiffany) et du niveau de
        personnalisation. Le mieux est de partager quelques mesures et photos
        via la{' '}
        <Link
          href="/contact"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          page contact
        </Link>{' '}
        — un retour vous est envoyé sous 48&nbsp;h.
      </>
    )
  }

  if (has('delai', 'duree', 'combien de temps', 'quand', 'rapidite')) {
    return (
      <>
        Pour une création sur-mesure, comptez en moyenne{' '}
        <strong>4 à 8 semaines</strong> selon la complexité. Une restauration
        légère peut être traitée en 2 à 3 semaines. Les délais sont confirmés
        après le devis.
      </>
    )
  }

  if (has('restauration', 'restaurer', 'patrimoine', 'eglise', 'ancien')) {
    return (
      <>
        L’atelier intervient sur les vitraux anciens (résidentiels et
        patrimoniaux)&nbsp;: dépose, nettoyage, remise en plomb, remplacement
        de pièces cassées en respectant la facture d’origine. Détails sur la
        page{' '}
        <Link
          href="/services"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Prestations
        </Link>
        .
      </>
    )
  }

  if (has('technique', 'plomb', 'tiffany', 'fusing', 'soufflé', 'souffle')) {
    return (
      <>
        Sandre travaille principalement le <strong>vitrail au plomb</strong>{' '}
        traditionnel et la <strong>technique Tiffany</strong> au cuivre, avec
        des verres soufflés européens sélectionnés à la main. Vous pouvez voir
        des exemples dans les{' '}
        <Link
          href="/gallery"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Réalisations
        </Link>
        .
      </>
    )
  }

  if (has('lieu', 'ou ', 'atelier', 'adresse', 'paris', 'deplace', 'region')) {
    return (
      <>
        L’atelier est basé à Paris et intervient principalement en
        Île-de-France. Pour les chantiers patrimoniaux, des déplacements en
        province sont possibles sur étude.
      </>
    )
  }

  if (has('visite', 'rdv', 'rendez-vous', 'rencontrer', 'voir')) {
    return (
      <>
        Avec plaisir&nbsp;! Les visites se font sur rendez-vous afin de
        préserver le travail en cours. Indiquez vos disponibilités via le{' '}
        <Link
          href="/contact"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          formulaire de contact
        </Link>{' '}
        et un créneau vous est proposé.
      </>
    )
  }

  if (has('contact', 'joindre', 'parler', 'appeler', 'telephone', 'email', 'mail')) {
    return (
      <>
        Vous pouvez joindre l’atelier au{' '}
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {siteConfig.phone}
        </a>{' '}
        ou par e-mail à{' '}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {siteConfig.email}
        </a>
        . Réponse sous 48&nbsp;h ouvrées.
      </>
    )
  }

  if (has('merci', 'super', 'parfait', 'genial', 'top')) {
    return (
      <>
        Avec plaisir&nbsp;! N’hésitez pas si une autre question vous vient —
        l’atelier reste à votre écoute.
      </>
    )
  }

  return (
    <>
      Je note votre demande. Pour une réponse précise et personnalisée, le
      plus simple est d’écrire à l’atelier via la{' '}
      <Link
        href="/contact"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        page contact
      </Link>{' '}
      — l’artisan vous répond sous 48&nbsp;h.
    </>
  )
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: greeting },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [hasNewBadge, setHasNewBadge] = useState(true)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, typing])

  useEffect(() => {
    if (open) {
      setHasNewBadge(false)
      const t = setTimeout(() => inputRef.current?.focus(), 250)
      return () => clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const sendMessage = (raw: string) => {
    const text = raw.trim()
    if (!text) return
    const userMsg: Message = { id: makeId(), role: 'user', content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)
    const delay = 600 + Math.min(1200, text.length * 18)
    setTimeout(() => {
      const reply: Message = {
        id: makeId(),
        role: 'assistant',
        content: findReply(text),
      }
      setMessages((prev) => [...prev, reply])
      setTyping(false)
    }, delay)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const showSuggestions = messages.length === 1 && !typing

  return (
    <>
      {/* Bouton flottant */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="chat-fab"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir l’assistant Énergie des Couleurs"
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_32px_-8px_oklch(0.42_0.09_155/0.55)] ring-1 ring-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary/95 active:scale-95 sm:bottom-6 sm:right-6 sm:size-[52px] md:size-14"
          >
            <MessageCircle className="size-5 transition-transform duration-300 group-hover:rotate-[-6deg] sm:size-[22px] md:size-6" />
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full bg-gold/25"
              style={{ animationDuration: '3s' }}
            />
            {hasNewBadge && (
              <span
                aria-hidden
                className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-black shadow-md sm:size-5 sm:text-[10px]"
              >
                1
              </span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panneau chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            role="dialog"
            aria-modal="false"
            aria-label="Assistant Énergie des Couleurs"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 flex h-[min(560px,calc(100dvh-1.5rem))] w-[calc(100vw-1.5rem)] max-w-[360px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/97 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:right-6 sm:h-[min(620px,calc(100dvh-3rem))] sm:max-w-[380px] sm:rounded-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-background px-3 py-3 sm:px-4 sm:py-3.5">
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <span className="relative flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm sm:size-10">
                  <Sparkles className="size-4 sm:size-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                </span>
                <div className="min-w-0 leading-tight">
                  <p className="truncate font-display text-[14px] font-semibold text-foreground sm:text-[15px]">
                    Assistant Énergie des Couleurs
                  </p>
                  <p className="text-[10.5px] text-muted-foreground sm:text-[11px]">
                    En ligne · réponse immédiate
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-2.5 overflow-y-auto overscroll-contain px-3 py-3 sm:space-y-3 sm:px-4 sm:py-4"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    'flex',
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-3 py-2 text-[13.5px] leading-relaxed sm:px-3.5 sm:py-2.5 sm:text-[14px]',
                      m.role === 'user'
                        ? 'rounded-br-md bg-primary text-primary-foreground'
                        : 'rounded-bl-md bg-muted text-foreground'
                    )}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-muted px-3.5 py-2.5 sm:px-4 sm:py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="size-1.5 rounded-full bg-muted-foreground/70"
                        animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {showSuggestions && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.query}
                      type="button"
                      onClick={() => sendMessage(s.label)}
                      className="rounded-full border border-border/70 bg-card px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted hover:text-foreground sm:px-3 sm:text-[12.5px]"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 border-t border-border/60 bg-background/80 px-2.5 py-2 sm:px-3 sm:py-2.5"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre message…"
                aria-label="Votre message"
                className="flex-1 rounded-full border border-border/70 bg-card px-3.5 py-2 text-[16px] text-foreground placeholder:text-muted-foreground/70 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/40 sm:px-4 sm:text-[14px]"
              />
              <Button
                type="submit"
                size="icon-sm"
                disabled={!input.trim() || typing}
                aria-label="Envoyer"
                className="size-9 shrink-0 rounded-full sm:size-10"
              >
                <Send className="size-4" />
              </Button>
            </form>
            <p className="border-t border-border/40 bg-background/60 px-4 py-1 text-center text-[10px] text-muted-foreground/80 sm:py-1.5 sm:text-[10.5px]">
              Démo · les réponses sont indicatives
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
