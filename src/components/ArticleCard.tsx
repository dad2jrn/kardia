interface Props {
  href: string
  label: string
  title: string
  description: string
  cta?: string
}

export default function ArticleCard({ href, label, title, description, cta = 'Read the study →' }: Props) {
  return (
    <a href={href} className="article-card">
      <div className="card-label">{label}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      <div className="card-cta">{cta}</div>
    </a>
  )
}
