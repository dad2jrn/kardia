import SiteNav from '../components/SiteNav'
import Hero from '../components/Hero'
import ArticleCard from '../components/ArticleCard'
import articles from '../data/articles'

export default function Home() {
  return (
    <div className="page-bg">
      <SiteNav activePath="/" />
      <Hero />
      <div className="articles">
        {articles.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}
