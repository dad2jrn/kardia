const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/crucifixion-date.html', label: 'Year of the Cross' },
  { href: '/holy-week.html', label: 'The Week' },
]

interface Props {
  activePath?: string
}

export default function SiteNav({ activePath = '/' }: Props) {
  return (
    <nav className="site-nav">
      <a href="/" className="nav-brand">Kardia</a>
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
