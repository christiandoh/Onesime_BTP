const base = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''

export function asset(path: string): string {
  if (path.startsWith('http')) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}

export function waUrl(phone: string): string {
  const msg = encodeURIComponent(
    'Bonjour Onesime BTP 👋\n\n' +
    'Je suis int\u00e9ress\u00e9(e) par vos services de fourniture de mat\u00e9riaux BTP (sable, gravier, lat\u00e9rite) ainsi que vos prestations de construction et de location de camions benne.\n\n' +
    'Je souhaite obtenir un devis personnalis\u00e9 pour mon projet.\n\n' +
    'Merci de me recontacter d\u00e8s que possible.\n\n' +
    'Cordialement.'
  )
  return `https://wa.me/${phone}?text=${msg}`
}
