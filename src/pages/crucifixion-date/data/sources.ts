export interface Source {
  type: string
  name: string
  description: string
}

export const sources: Source[] = [
  {
    type: 'Scriptural',
    name: 'The Four Gospels',
    description: 'Matthew, Mark, Luke, and John collectively provide the primary narrative. Luke anchors to Tiberius; John provides the Passover count and temple chronology; the Synoptics supply the day-of-week framework.',
  },
  {
    type: 'Prophetic',
    name: 'Daniel 9:24–27',
    description: 'The Seventy Weeks oracle. The 69-week terminus is the linchpin of the 33 CE argument. Interpreted by Hoehner (1977) as ending on Palm Sunday, April 6, 32 CE or Nisan 10, 33 CE.',
  },
  {
    type: 'Jewish — Talmudic',
    name: 'b. Yoma 39b — The Four Temple Signs',
    description: 'Records four Temple signs that ceased forty years before the destruction in 70 CE — pointing to 30 CE. The tradition is introduced by the Baraita marker <em>tanu rabbanan</em> ("our rabbis taught"), establishing it as pre-Mishnaic oral tradition already fixed before 200 CE — well before Christianity held any political power. The four signs: (1) the Yom Kippur scarlet strap stopped turning white; (2) the western Menorah lamp could not stay lit; (3) the Yom Kippur lot persistently fell on the left rather than the right hand; (4) the Temple doors began opening by themselves. All four are divine-presence and atonement indicators. The rabbinic explanation of priestly corruption is contradicted by the historical record — God sustained Temple participation through centuries of documented corruption without sign-failure, including through Manasseh and the crises of Malachi and Jeremiah. Critically, there is no parallel tradition of sign-failure in the forty years before the First Temple\'s destruction in 586 BCE, despite far worse apostasy. The cessation is anomalous, specific, and unexplained within the rabbinic framework. The strongest single piece of Talmudic evidence in the entire crucifixion-date debate, and its hostile-witness credentials extend across five centuries of transmission under institutions with every reason to suppress it.',
  },
  {
    type: 'Jewish — Chronological',
    name: 'Seder Olam Rabbah (c. 160 CE)',
    description: "The foundational rabbinic chronological text by Rabbi Yose ben Halafta. Its internal year-counts for the Second Temple period, when traced forward into the Roman era, are consistent with a mid-30s CE crucifixion. Also relevant via b. Sanhedrin 43a's judicial preamble, which implies a trial process beginning weeks before Passover — fitting the 33 CE Johannine narrative of escalating post-Lazarus tensions.",
  },
  {
    type: 'Jewish — Talmudic',
    name: 'b. Sanhedrin 43a',
    description: 'Records that "Yeshu ha-Notzri was hanged on Passover Eve." Confirms a Passover execution but does not specify a year. The account is contested but widely cited in chronological discussions.',
  },
  {
    type: 'Jewish — Talmudic',
    name: 'b. Shabbat 15a / b. Abodah Zarah 8b',
    description: "Discusses the Sanhedrin's loss of capital jurisdiction approximately 40 years before the Temple's fall — linked by some scholars to the shift from Nisan 14 trial authority.",
  },
  {
    type: 'Greco-Roman',
    name: 'Josephus, Antiquities 15–18',
    description: "Provides the dates for Herod's Temple reconstruction, Pilate's tenure, Caiaphas's appointment, and the Tiberius succession. Essential for calibrating all first-century Jewish chronology.",
  },
  {
    type: 'Greco-Roman',
    name: 'Tacitus, Annals 15.44',
    description: 'Confirms that Christus "suffered the extreme penalty during the reign of Tiberius at the hands of Pontius Pilate." Does not specify a year, but confirms the historical anchor.',
  },
  {
    type: 'Astronomical',
    name: 'Humphreys & Waddington (1983)',
    description: 'Landmark study in Nature and QJRAS back-calculating all first-century Friday Passovers under both calculated and observed-crescent Jewish calendar models. Identifies April 7, 30 CE and April 3, 33 CE as the two viable candidates.',
  },
  {
    type: 'Modern Scholarship',
    name: 'Harold Hoehner — Chronological Aspects of the Life of Christ (1977)',
    description: 'The most rigorous modern defense of the 33 CE date. Works through the Daniel 9 calculation, Lukan chronology, and Johannine Passover count systematically. The standard reference for the 33 CE position.',
  },
  {
    type: 'Modern Scholarship',
    name: 'Jack Finegan — Handbook of Biblical Chronology (1998)',
    description: 'Comprehensive survey of all chronological data from the New Testament era. Discusses both 30 CE and 33 CE with even-handed rigor. An indispensable reference work.',
  },
  {
    type: 'Archaeological',
    name: 'The Caiaphas Ossuary (1990)',
    description: "Discovered in Jerusalem's Peace Forest. Confirms Caiaphas as a historical figure, with his tenure as High Priest extending to c. 36 CE — consistent with both candidate dates.",
  },
  {
    type: 'Patristic',
    name: 'Tertullian, Adversus Judaeos 8',
    description: "One of the earliest patristic attempts to calculate the date of the crucifixion using the consular year. Places the passion under Tiberius's 15th year, which complicates rather than resolves the chronology.",
  },
]
