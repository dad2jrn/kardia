import { Link } from 'react-router-dom'

interface Props {
  href: string
  isRoute: boolean
  label: string
  title: string
  description: string
  cta?: string
}

export default function ArticleCard({ href, isRoute, label, title, description, cta = 'Read the study →' }: Props) {
  const content = (
    <>
      <div className="card-label">{label}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      <div className="card-cta">{cta}</div>
    </>
  )

  return isRoute
    ? <Link to={href} className="article-card">{content}</Link>
    : <a href={href} className="article-card">{content}</a>
}
