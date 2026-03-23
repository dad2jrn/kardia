import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/crucifixion-date.html', label: 'Year of the Cross' },
  { href: '/holy-week.html', label: 'The Week' },
]

interface Props {
  activePath?: string
}

export default function SiteNav({ activePath = '/' }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`site-nav${open ? ' nav-open' : ''}`}>
      <a href="/" className="nav-brand">Kardia</a>
      <button
        className="nav-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={activePath === link.href ? 'active' : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
