interface Props {
  ornament: string
  title: string
  subtitle: string
}

export default function PageHeader({ ornament, title, subtitle }: Props) {
  return (
    <header className="page-header">
      <div className="header-ornament">{ornament}</div>
      <h1>{title}</h1>
      <div className="subtitle">{subtitle}</div>
      <div className="divider-gold" />
      <div className="divider-thin" />
    </header>
  )
}
