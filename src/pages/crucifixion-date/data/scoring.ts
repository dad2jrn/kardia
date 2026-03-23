export interface ScoreRow {
  criterion: string
  weight: string
  score30: number
  score33: number
}

export interface ScoringMatrix {
  id: 'academic' | 'forensic'
  title: string
  description: string
  rows: ScoreRow[]
  total30: string
  total33: string
  totalOutOf: string
  verdictLabel: string
  verdictWinner: string
  verdictText: string
}

export interface RationaleCard {
  title: string
  body: string
  wide?: boolean
}

export const academicMatrix: ScoringMatrix = {
  id: 'academic',
  title: '✦ \u00a0 Academic Framework \u00a0 ✦',
  description: 'Criteria weighted by verifiability, methodological independence, and scholarly consensus',
  rows: [
    { criterion: 'Astronomical Fit (Friday Passover)',          weight: '×2',   score30: 8,   score33: 9   },
    { criterion: 'Lukan Tiberius Reckoning',                    weight: '×2',   score30: 7,   score33: 8   },
    { criterion: 'Johannine Passovers (Ministry Length)',       weight: '×2',   score30: 7,   score33: 6.5 },
    { criterion: 'Daniel 9 Seventy Weeks',                      weight: '×1.5', score30: 3,   score33: 8   },
    { criterion: 'Talmudic Forty-Year Tradition (Yoma 39b)',    weight: '×1',   score30: 8.5, score33: 5   },
    { criterion: 'Acts 2 Blood Moon / Lunar Eclipse',           weight: '×1',   score30: 8,   score33: 7.5 },
    { criterion: 'Political Context (Pilate / Sejanus)',        weight: '×1',   score30: 5.5, score33: 8.5 },
    { criterion: 'Temple Construction Chronology (John 2:20)', weight: '×1',   score30: 7.5, score33: 6.5 },
    { criterion: 'Internal Gospel Harmony',                     weight: '×1',   score30: 6.5, score33: 7   },
  ],
  total30: '84.5',
  total33: '93.5',
  totalOutOf: '135',
  verdictLabel: '✦ \u00a0 Academic Verdict \u00a0 ✦',
  verdictWinner: '33 CE — Stronger Under Academic Weighting',
  verdictText: `When historians and Bible scholars weigh this question, they tend to favor evidence they can independently check and verify. The stars and moon don't lie — astronomy confirms April 3, 33 CE is the stronger Friday Passover match. Luke's mention of Tiberius Caesar gives us a fixed point in Roman history to count from, and the standard Roman counting method points to 33 CE. The political context has also been corrected here: Pilate after Sejanus's fall in 31 CE was a man without his patron and under pressure — a much better fit for the "washing his hands" capitulation in Matthew 27 than the pre-31 CE Pilate who still had political cover.<br><br>
The four-Passover argument for 33 CE is honest but conditional — John 5:1 is not identified as Passover in the text itself, so the case rests on three confirmed Passovers, which both dates can accommodate. The gap between the two dates has narrowed from the earlier version of this matrix. 33 CE still wins under academic weighting — but less decisively than before.`,
}

export const forensicMatrix: ScoringMatrix = {
  id: 'forensic',
  title: '✦ \u00a0 Forensic Framework \u00a0 ✦',
  description: 'Criteria weighted by fabrication resistance — the harder the evidence is to invent, the more it counts',
  rows: [
    { criterion: 'Talmudic Hostile Witness — Yoma 39b (Baraita-certified, four signs)', weight: '×3',   score30: 9.5, score33: 4   },
    { criterion: 'Astronomical Fit (Friday Passover)',                                   weight: '×2',   score30: 8,   score33: 9   },
    { criterion: 'Acts 2 Apostolic Witness (Blood Moon)',                                weight: '×2',   score30: 8,   score33: 7.5 },
    { criterion: 'Johannine Passovers (Ministry Length)',                                weight: '×2',   score30: 7,   score33: 6.5 },
    { criterion: 'Political Context (Pilate / Sejanus)',                                 weight: '×1.5', score30: 5.5, score33: 8.5 },
    { criterion: 'Temple Construction Chronology (John 2:20)',                           weight: '×1.5', score30: 7.5, score33: 6.5 },
    { criterion: 'Lukan Tiberius Reckoning',                                             weight: '×1.5', score30: 7,   score33: 8   },
    { criterion: 'Internal Gospel Harmony',                                              weight: '×1',   score30: 6.5, score33: 7   },
    { criterion: 'Daniel 9 Seventy Weeks',                                               weight: '×1',   score30: 3,   score33: 8   },
  ],
  total30: '114',
  total33: '107.5',
  totalOutOf: '155',
  verdictLabel: '✦ \u00a0 Forensic Verdict \u00a0 ✦',
  verdictWinner: '30 CE — Narrowly Stronger Under Forensic Weighting',
  verdictText: `Think about it this way: if someone tells a story that hurts their own side, you tend to believe them. They have no reason to make it up. That is exactly what the Jewish rabbis did in Yoma 39b. And here is what makes it even stronger — the tradition carries a specific marker called a <em>Baraita</em>, which means it was already old and established before the year 200 CE. That is two centuries before Christianity became the official religion of the Roman Empire. The rabbis couldn't have been caving to Christian pressure, because Christians had no power yet. The tradition was already locked in.<br><br>
What it records is this: beginning forty years before the Temple was destroyed in 70 CE — putting us at 30 CE — four things went wrong in the Temple that had never gone wrong before. The scarlet thread on Yom Kippur stopped turning white. The western lamp of the Menorah kept going out. The Yom Kippur lottery kept falling the wrong way. And the Temple's massive doors began swinging open by themselves at night. All four of these were signs of God's presence and atonement. They all stopped at the same time, and they never came back.<br><br>
The rabbis' own explanation was that the priests had become corrupt. But God had worked through corrupt priests for centuries — including through some of the most wicked kings in Israel's history — without the signs ever failing before. There is no record of these signs failing in the forty years before the first Temple was destroyed in 586 BCE, even though the apostasy back then was far worse. Something different happened in this specific forty-year window, and the corruption explanation cannot account for why it started here and not earlier.<br><br>
One argument that had been used for 30 CE — that Pilate was more willing to hand Jesus over before his political patron Sejanus fell in 31 CE — turns out to run the other direction when examined carefully. A Pilate still protected by Sejanus had no reason to fear Jewish complaints. It is the post-31 CE Pilate, exposed and anxious, who most fits the portrait of a man who folds under pressure and washes his hands to avoid trouble. That argument now belongs in the 33 CE column — and this matrix reflects that correction. Even with that adjustment, 30 CE leads under forensic weighting, and the margin is wider than before.`,
}

export const synthesisText = `The two approaches still give different verdicts — but the gap has narrowed in both directions. Scholars weighing evidence by how well it can be verified favor <strong style="color:#7ec8e3;">33 CE</strong>, though less decisively than before once the Sejanus argument is correctly assigned and the four-Passover claim is qualified. Those weighing evidence by how hard it would be to fabricate favor <strong style="color:#e88">30 CE</strong> — by a clearer margin than the earlier version of this analysis showed.<br><br>
After a full challenge of both positions — testing every argument against its strongest counter — <strong style="color:var(--gold-bright);">30 CE emerges as the more probable date overall.</strong> The Yoma 39b cluster is the most durable single piece of evidence in the entire debate: externally sourced, hostile in custody, pre-Christian in origin, procedurally embedded, and without a competing explanation that survives scrutiny. No argument on the 33 CE side carries the same combination of independence and resistance to challenge.<br><br>
The margin is not wide. Both dates remain historically defensible. And 2,000 years from either landing point produces a window of <strong style="color:var(--gold-bright);">2030 to 2033</strong> — which may itself be the more important number.`

export const rationaleCards: RationaleCard[] = [
  {
    title: 'How the Scores Work',
    body: 'Each piece of evidence gets a score from 0 to 10 for each date — based purely on how well it supports that date, not on personal preference. A 10 means the evidence practically proves the case. A 0 means it actively argues against it. Most scores land in the 6–8 range, which means "real, solid support, but not airtight." Where the evidence could honestly go either way, the scores are close but never identical — because even a slight lean in one direction is worth capturing.',
  },
  {
    title: 'Why Two Frameworks?',
    body: "Not all evidence deserves the same weight — but people disagree about which kind matters most. A historian at a university and a detective working a cold case look at the same facts and rank them differently. The historian asks: how reliable is this source? The detective asks: could someone have made this up? Both are fair questions. Showing both frameworks side by side makes it clear that the answer you get depends partly on which question you decide to ask first.",
  },
  {
    title: 'When Your Enemy Tells the Truth',
    body: "In a courtroom, when a witness says something that hurts their own side, lawyers pay close attention — because there is no good reason to lie when the lie works against you. The Jewish rabbis who compiled the Talmud were not friends of Christianity. They considered Jesus a false teacher and the church a dangerous movement. Yet they preserved a passage — marked as ancient tradition already established before 200 CE, long before Christians had any power — recording that the Temple's atonement rituals stopped working for forty years straight, right up until the Temple was destroyed in 70 CE. Forty years back from 70 CE is 30 CE. What makes this even harder to dismiss is what the rabbis did not record: there is no similar tradition about the forty years before the first Temple was destroyed in 586 BCE — even though the religious corruption back then was arguably far worse. Something unique happened around 30 CE. The rabbis preserved the record of it. And they had every reason, across five centuries of transmission under a hostile empire, to quietly drop it. They never did.",
  },
  {
    title: 'Why Daniel 9 Is Weighted Differently',
    body: "Daniel's prophecy of 69 weeks is a powerful argument for 33 CE, and scholars like Harold Hoehner have done serious, careful work on it. But to make the math work, you have to make four separate choices along the way — which king's decree to start from, which calendar system to use, what the starting date is, and whether a prophetic \"year\" means 360 days. Each choice on its own is reasonable. But when you need to make four of them in a row, it becomes possible — even without meaning to — to nudge the calculation toward the date you were already expecting. That doesn't mean Hoehner is wrong. It just means this particular argument carries a bit less independent force than evidence that doesn't require any assumed starting points.",
  },
  {
    title: 'What a Matrix Can and Cannot Do',
    body: "A scoring matrix is not a machine that spits out the right answer. It is a way of forcing yourself to be honest about what you actually believe and why. When you assign a weight, you have to be able to explain it. When the scores are close — and in both frameworks here, they are — the matrix is telling you something important: reasonable people who have studied this carefully still disagree, and that disagreement is legitimate. The most useful thing this matrix does is not produce a winner. It shows you where the real argument lives. On this question, it comes down to two things: the Jewish Talmud's forty-year signs and how many Passover seasons John's Gospel describes. Settle those two questions and the date question largely settles with them.",
    wide: true,
  },
]
