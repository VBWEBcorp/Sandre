'use client'

import { motion } from 'framer-motion'
import { Clock, Instagram, Mail, MapPin, Phone } from 'lucide-react'

import { PageHero } from '@/components/sections/page-hero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/seo'

const ease = [0.22, 1, 0.36, 1] as const

const hero = {
  eyebrow: 'Contact',
  title: 'Racontez-moi votre projet.',
  description:
    'Un simple formulaire, un appel, ou une visite à l\'atelier. Je réponds personnellement à chaque message, sous 48 heures.',
  image:
    'https://i.ibb.co/jZD5w6g7/Iris-bleu-de-mediterranee-scaled-1200x1600.jpg',
}

const hours = [
  { day: 'Lundi – Vendredi', value: '9 h 30, 18 h' },
  { day: 'Samedi', value: 'Sur rendez-vous' },
  { day: 'Dimanche', value: 'Fermé' },
]

export function ContactContent() {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Contact"
      />

      <section className="border-b border-border/60 bg-gradient-to-b from-background to-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <Card className="rounded-3xl border-border/70 bg-card/80 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
                <CardHeader>
                  <CardTitle className="font-display text-2xl font-light tracking-tight">
                    Écrire un message
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Formulaire de démonstration, non connecté à ce stade.
                  </p>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstname">Prénom</Label>
                        <Input
                          id="firstname"
                          name="firstname"
                          placeholder="Camille"
                          autoComplete="given-name"
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastname">Nom</Label>
                        <Input
                          id="lastname"
                          name="lastname"
                          placeholder="Rousseau"
                          autoComplete="family-name"
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="camille@exemple.fr"
                        autoComplete="email"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone (optionnel)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="06 12 34 56 78"
                        autoComplete="tel"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Nature du projet</Label>
                      <select
                        id="subject"
                        name="subject"
                        defaultValue=""
                        className="h-11 w-full rounded-xl border border-input bg-transparent px-3 text-sm text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      >
                        <option value="" disabled>
                          Choisissez…
                        </option>
                        <option>Création contemporaine</option>
                        <option>Restauration de vitrail ancien</option>
                        <option>Verrière d&apos;intérieur</option>
                        <option>Vitrail liturgique</option>
                        <option>Petite pièce / cadeau sur-mesure</option>
                        <option>Demande de visite d&apos;atelier</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Votre message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Décrivez le lieu, les dimensions approximatives, l'ambiance recherchée…"
                        className="w-full rounded-xl border border-input bg-transparent px-3 py-2.5 text-sm leading-relaxed text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Envoyer mon message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.08 }}
              className="space-y-5"
            >
              <Card className="rounded-3xl border-border/70 bg-card/80 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-gold/10 to-transparent text-primary ring-1 ring-primary/15">
                      <Phone className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[15px] text-foreground">
                        Téléphone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-gold/10 to-transparent text-primary ring-1 ring-primary/15">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[15px] text-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-gold/10 to-transparent text-primary ring-1 ring-primary/15">
                      <MapPin className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[15px] text-foreground">
                        Atelier
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postalCode}{' '}
                        {siteConfig.address.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 via-gold/10 to-transparent text-primary ring-1 ring-primary/15">
                      <Instagram className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[15px] text-foreground">
                        Instagram
                      </p>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        @energiedescouleurs
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-border/70 bg-card/80 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center gap-3">
                    <Clock className="size-4 text-gold" aria-hidden />
                    <p className="font-display text-[15px] text-foreground">
                      Horaires de l&apos;atelier
                    </p>
                  </div>
                  <dl className="divide-y divide-border/60 text-sm">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between py-2.5"
                      >
                        <dt className="text-muted-foreground">{h.day}</dt>
                        <dd className="font-medium text-foreground">
                          {h.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>

              <div className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-primary/10 via-muted/20 to-gold/10 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5">
                <div className="flex h-56 flex-col items-center justify-center gap-2 px-6 text-center">
                  <MapPin className="size-6 text-primary/80" aria-hidden />
                  <p className="font-display text-[15px] text-foreground">
                    Atelier au cœur de Rennes
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Intégrez ici votre carte Google Maps
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
