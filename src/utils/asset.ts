const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''

export function asset(path: string): string {
  if (path.startsWith('http')) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}
