import SiteNav from '../components/SiteNav'
import Hero from '../components/Hero'
import ArticleCard from '../components/ArticleCard'
import articles from '../data/articles'

const [first, ...rest] = articles

export default function Home() {
  return (
    <div className="page-bg">
      <SiteNav />
      <Hero />
      <div className="articles">
        <div className="article-first-wrap">
          <div className="start-here-annotation">
            <img src="/public/start-here.png" alt="Start here!" className="start-here-img" />
          </div>
          <ArticleCard key={first.id} {...first} />
        </div>
        {rest.map(article => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}
