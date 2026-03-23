export interface Article {
  id: string
  href: string
  label: string
  title: string
  description: string
}

const articles: Article[] = [
  {
    id: 'crucifixion-date',
    href: '/crucifixion-date.html',
    label: 'Chronological Inquiry',
    title: 'The Year of the Cross: 30 CE vs 33 CE',
    description:
      'A careful examination of the astronomical, calendrical, and historical evidence for the date of the crucifixion.',
  },
  {
    id: 'holy-week',
    href: '/holy-week.html',
    label: 'Biblical & Historical Study',
    title: 'The Week God Has Been Writing All Along',
    description:
      'Why 2,000 years after the cross may point to the return of Christ — a typological study of Holy Week and prophetic time.',
  },
]

export default articles
