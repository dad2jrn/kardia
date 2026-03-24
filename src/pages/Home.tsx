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
            <svg width="182" height="84" viewBox="0 0 182 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="start-arrow-head" markerWidth="9" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 9 3.5, 0 7" fill="#d4a017" fillOpacity="0.85" />
                </marker>
              </defs>
              <path
                d="M 140,26 C 125,8 98,52 104,78"
                stroke="#d4a017"
                strokeWidth="1.5"
                strokeOpacity="0.85"
                fill="none"
                markerEnd="url(#start-arrow-head)"
              />
              <text
                x="176"
                y="20"
                textAnchor="end"
                fill="#d4a017"
                fillOpacity="0.85"
                fontFamily="Georgia, serif"
                fontSize="14"
                fontStyle="italic"
              >
                Start here!
              </text>
            </svg>
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
