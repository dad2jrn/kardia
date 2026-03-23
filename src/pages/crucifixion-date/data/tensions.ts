export interface TensionPosition {
  year: '30' | '33'
  text: string
}

export interface Tension {
  title: string
  body: string
  positions: [TensionPosition, TensionPosition]
}

export const tensions: Tension[] = [
  {
    title: '1. The Tiberius Reckoning Problem',
    body: 'Luke 3:1 is the chronological keystone. Everything downstream — the baptism, ministry length, and death year — depends on when "the fifteenth year of Tiberius" begins. This is not a minor textual dispute; it is a systemic variable that shifts the entire chronology by 2–3 years.',
    positions: [
      { year: '30', text: 'Count from co-regency c. 11/12 CE. Used in some Syrian provinces. Yields a 27–28 CE ministry start.' },
      { year: '33', text: 'Count from sole reign (Aug 14 CE), the standard Roman method. Yields a 28–29 CE ministry start.' },
    ],
  },
  {
    title: '2. The Passover Chronology Conflict Between the Synoptics and John',
    body: 'The Synoptics describe Jesus eating the Passover meal before his arrest (the Last Supper = Passover Seder), suggesting he died on Nisan 15. John describes Jesus being crucified before the Passover meal is eaten, with his death on Nisan 14. This contradiction affects which astronomical date to apply. Both 30 CE and 33 CE have proposed solutions — but neither resolves this cleanly.',
    positions: [
      { year: '30', text: 'Accepts the Synoptic reckoning or proposes that two different calendar systems (Galilean vs Judean) were in use simultaneously.' },
      { year: '33', text: 'Tends to favor Johannine reckoning (Nisan 14), where Jesus dies as the Passover lambs are slaughtered — the theologically preferred reading for 33 CE defenders.' },
    ],
  },
  {
    title: '3. The Number of Passovers in John',
    body: "John is the only Gospel that allows us to count the years of Jesus's ministry. Three Passovers are explicitly named (John 2:13, 6:4, 11:55). A fourth at John 5:1 is widely assumed but critically, the text does not identify the feast — it says only \"a feast of the Jews,\" a phrase John uses for multiple different festivals across his Gospel. The four-Passover argument for 33 CE rests on an identification the text itself declines to make. Three confirmed Passovers require a minimum two-year ministry — compatible with both dates. A fourth would require three-plus years, pointing more strongly to 33 CE.",
    positions: [
      { year: '30', text: 'Three confirmed Passovers (John 2, 6, 12) fit a ministry beginning 27–28 CE ending at Passover 30 CE. John 5:1 need not be Passover — the text does not say it is.' },
      { year: '33', text: 'Three Passovers still accommodate 33 CE with a ministry beginning 29–30 CE. If John 5:1 is a fourth Passover, 33 CE is strongly preferred — but the identification is probable, not certain.' },
    ],
  },
  {
    title: '4. The Daniel 9 "Seventy Weeks" Calculation',
    body: "The 69-weeks prophecy is the most powerful single argument for 33 CE. Its weakness is that it depends on (a) which decree of Artaxerxes is used, (b) whether prophetic years are 360 days, and (c) exact calendar start dates — all of which are assumed, not proven. Critics note that the calculation can be \"tuned\" to hit almost any target year in a 5-year window.",
    positions: [
      { year: '30', text: 'The 360-day prophetic year is a post-biblical construct. The decree may be Ezra 7 (457 BCE), which lands differently. 30 CE defenders largely reject this argument.' },
      { year: '33', text: "Using Neh 2:1 (445/444 BCE) and 360-day years, the math terminates on or near Palm Sunday 33 CE — a remarkable convergence defended by Hoehner's careful scholarship." },
    ],
  },
  {
    title: '5. The Talmudic "Forty Years" Tradition',
    body: 'Several Talmudic passages mention phenomena that ceased "forty years before the Temple\'s destruction" — the scarlet thread, the western lamp, the lot of Yom Kippur. If taken literally, 40 years before 70 CE = 30 CE, which supports a 30 CE crucifixion. The 33 CE position must either treat "forty years" as approximate, or argue that the Talmudic reckoning uses inclusive counting or a different calendar epoch.',
    positions: [
      { year: '30', text: 'The 40-year figure is literal and precise. The cessation of the atonement signs marks the year Christ\'s atoning death made the Temple ritual obsolete.' },
      { year: '33', text: '"Forty years" is a conventional round number in Jewish literature. The Talmud was compiled centuries later and cannot be used as precise chronological data for first-century events.' },
    ],
  },
]
