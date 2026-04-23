'use client'

// Démo front-only : on ne tape plus l'API, on garde simplement les defaults
// fournis par chaque section. Signature conservée pour compatibilité.
export function useContent<T extends Record<string, any>>(
  _pageId: string,
  defaults: T
): { data: T; loading: boolean } {
  return { data: defaults, loading: false }
}
