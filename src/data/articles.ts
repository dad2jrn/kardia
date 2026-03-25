export interface Article {
  id: string
  order: number
  href: string
  isRoute: boolean
  navLabel: string
  label: string
  title: string
  description: string
}

const articles: Article[] = [
  {
    id: 'holy-week',
    order: 1,
    href: '/holy-week',
    isRoute: true,
    navLabel: 'The Week',
    label: 'Biblical & Historical Study',
    title: 'The Week God Has Been Writing All Along',
    description:
      'Why 2,000 years after the cross may point to the return of Christ — a typological study of Holy Week and prophetic time.',
  },
  {
    id: 'crucifixion-date',
    order: 2,
    href: '/crucifixion-date',
    isRoute: true,
    navLabel: 'Year of the Cross',
    label: 'Chronological Inquiry',
    title: 'The Year of the Cross: 30 CE vs 33 CE',
    description:
      'A careful examination of the astronomical, calendrical, and historical evidence for the date of the crucifixion.',
  },
  {
    id: 'impossible-adversary',
    order: 3,
    href: '/impossible-adversary',
    isRoute: true,
    navLabel: 'The Impossible Adversary',
    label: 'Theological Thesis',
    title: 'The Impossible Adversary',
    description:
      'A four-pillar argument from Scripture showing why the Nature and Character of God make a literal Satan and a fallen angelic order theologically impossible.',
  },
  // {
  //   id: 'test',
  //   order: 3,
  //   href: '/#',
  //   isRoute: true,
  //   navLabel: 'Some cool article title',
  //   label: 'Nifty Label',
  //   title: 'I pitty the fool who does not click this link',
  //   description:
  //     'some description that is really long and really good and really interesting and really makes you want to click the link and read the article because it is so good and so interesting and so long that you just have to read it',
  // },
]

export default [...articles].sort((a, b) => a.order - b.order)
