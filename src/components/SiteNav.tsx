import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import articles from '../data/articles'

const navLinks = [
  { to: '/', label: 'Home', external: false },
  ...articles.map(a => ({ to: a.href, label: a.navLabel, external: !a.isRoute })),
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className={`site-nav${open ? ' nav-open' : ''}`}>
      <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>Kardia</Link>
      <button
        className="nav-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        &#9776;
      </button>
      <ul className="nav-links">
        {navLinks.map(link => (
          <li key={link.to}>
            {link.external ? (
              <a href={link.to}>{link.label}</a>
            ) : (
              <Link
                to={link.to}
                className={pathname === link.to ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
