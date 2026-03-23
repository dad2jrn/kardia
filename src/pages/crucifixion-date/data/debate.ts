export interface Argument {
  category: string
  title: string
  body: string
  cite: string
}

export interface Position {
  year: string
  label: string
  posClass: 'pos-30' | 'pos-33'
  arguments: Argument[]
}

export const pos30: Position = {
  year: '30 CE',
  label: 'The Early Passion Hypothesis',
  posClass: 'pos-30',
  arguments: [
    {
      category: 'Astronomical',
      title: 'Passover on a Friday — April 7, 30 CE',
      body: 'Astronomical back-calculation confirms that Nisan 14 fell on a Friday in 30 CE (April 7). This is one of only two viable Friday Passover windows in the plausible crucifixion range. The Synoptics describe Jesus dying on the day of Preparation (παρασκευή), which in their reckoning is Nisan 14, Passover eve — a Friday.',
      cite: 'Matt 27:62; Mark 15:42; Luke 23:54 · Humphreys & Waddington, QJRAS (1983)',
    },
    {
      category: 'Johannine Chronology',
      title: '46 Years of Temple Construction',
      body: "John 2:20 records the Jews telling Jesus: \"This temple has been under construction for 46 years.\" Herod began reconstruction c. 20/19 BCE. Counting 46 years from that start date reaches approximately 27–28 CE, placing the first Passover of Jesus's ministry in 27 or 28 CE. With a 2–3 year ministry, 30 CE becomes the natural terminus.",
      cite: 'John 2:20 · Josephus, Ant. 15.11.1',
    },
    {
      category: 'Lukan Chronology',
      title: 'The Fifteenth Year of Tiberius',
      body: 'Luke 3:1 anchors John the Baptist\'s ministry to "the fifteenth year of Tiberius Caesar." Tiberius became co-regent with Augustus in 11–12 CE and sole emperor in 14 CE. If the 15-year count begins from co-regency (11/12 CE), John\'s ministry begins c. 26–27 CE. Jesus\'s baptism follows shortly after, yielding a 30 CE crucifixion under a 3-year ministry model.',
      cite: 'Luke 3:1–2 · Suetonius, Life of Tiberius 21',
    },
    {
      category: 'Apostolic Witness',
      title: "Peter's Pentecost Address & Joel's Prophecy",
      body: 'Acts 2:16–21 applies Joel 2:28–32 to Pentecost, with the "blood moon" and solar darkening pointing backward to the crucifixion. Lunar eclipse modeling for 30 CE produces a partially blood-red moon rising over Jerusalem on Passover evening. April 3, 33 CE misses this alignment more cleanly. The 30 CE eclipse is directly visible from Jerusalem at moonrise — a detail consistent with Peter\'s "this is that."',
      cite: 'Acts 2:20 · Humphreys & Waddington (1983), Nature 306',
    },
    {
      category: 'Talmudic Evidence',
      title: 'Yoma 39b — Four Signs, Five Centuries, and a Hostile Record',
      body: 'The Babylonian Talmud (b. Yoma 39b) preserves a tradition introduced by the formula <em>tanu rabbanan</em> — "our rabbis taught" — the marker of a Baraita, meaning it was already established oral tradition before the Mishnah\'s compilation around 200 CE. This predates Christianity\'s rise to political power by well over a century, ruling out any motive to fabricate it under Roman Christian pressure. The tradition records four Temple signs that ceased forty years before the destruction in 70 CE — placing the cutoff at 30 CE: (1) the scarlet strap tied to the scapegoat on Yom Kippur stopped turning white, the annual sign of atonement accepted; (2) the westernmost lamp of the Menorah — the Ner Ma\'aravi — repeatedly went out and could not be kept lit; (3) the Yom Kippur lot for the Lord\'s goat, which should fall on the right hand, persistently fell on the left; and (4) the massive Temple doors began opening by themselves each night, which Rabbi Yohanan ben Zakkai interpreted as a sign of impending destruction. All four are atonement and divine presence signs — not administrative anomalies. The rabbis attributed the failures to priestly corruption, but this explanation cannot bear the weight placed on it: God maintained His participation in the Temple system through Manasseh — Israel\'s most wicked king — and through the corruption documented by Malachi, Jeremiah, and the Maccabean crisis without the signs failing. There is no parallel tradition of sign-failure preceding the First Temple\'s destruction in 586 BCE, despite apostasy far exceeding anything in the Second Temple period. The cessation is uniquely anomalous, localized to this precise forty-year window, and the rabbinic explanation produces more problems than it solves. Separately, b. Sanhedrin 43a records that "Yeshu ha-Notzri was hanged on Passover Eve," and b. Shabbat 15a and b. Abodah Zarah 8b preserve the tradition that the Sanhedrin lost its capital jurisdiction forty years before the Temple fell — corroborating John 18:31 and pointing again to 30 CE.',
      cite: 'b. Yoma 39b; b. Sanhedrin 43a; b. Shabbat 15a; b. Abodah Zarah 8b · John 18:31 · Mal. 1:6–2:9; Jer. 7; 2 Kgs 21',
    },
    {
      category: 'Biographical Chronology',
      title: 'Jesus "About Thirty Years Old" — Luke 3:23',
      body: 'Luke records that Jesus was "about thirty years of age" when he began his ministry (Luke 3:23). If Jesus was born in late 5 or early 4 BCE — consistent with Herod the Great\'s death in 4 BCE and the Matthean infancy narrative — then a ministry beginning at age 30 places the baptism at approximately 26–27 CE. A ministry of 2.5 to 3 years from that point terminates naturally at Passover 30 CE. The 33 CE date requires either a later birth year (pushing Jesus\'s birth past the Herodian window) or a ministry beginning closer to age 33–34, which strains Luke\'s "about thirty" designation beyond its natural reading.',
      cite: "Luke 3:23; Matt 2:1–19 · Josephus, Ant. 17.6.4 (Herod's death)",
    },
  ],
}

export const pos33: Position = {
  year: '33 CE',
  label: 'The Later Passion Hypothesis',
  posClass: 'pos-33',
  arguments: [
    {
      category: 'Astronomical',
      title: 'Passover on a Friday — April 3, 33 CE',
      body: 'April 3, 33 CE is the most astronomically precise Friday Passover in the entire first-century range. The Jewish calendar in the first century was not yet fully calculated by fixed rules but relied on visual crescent-sighting. Under crescent observation, Nisan 14 on April 3, 33 CE is the strongest Johannine Friday Passover candidate, with broad astronomical consensus behind it.',
      cite: 'Humphreys & Waddington (1983) · Schiaparelli (1874) · Fotheringham (1910)',
    },
    {
      category: 'Danielic Prophecy',
      title: 'The 69 Weeks of Daniel 9',
      body: "Daniel 9:25 speaks of \"seven weeks and sixty-two weeks\" from \"the decree to restore and rebuild Jerusalem\" until the Anointed One. Using Artaxerxes' decree to Nehemiah (Neh 2:1) in Nisan 445/444 BCE, and applying 69 prophetic weeks of 360 days each, the terminus lands precisely on April 6, 32 CE — or, depending on starting-point precision, Nisan 10, 33 CE (Palm Sunday). This calculation, defended by Sir Robert Anderson and refined by Harold Hoehner, makes 33 CE the only date satisfying Daniel's chronology.",
      cite: 'Daniel 9:24–27; Neh 2:1–8 · Hoehner, Chronological Aspects of the Life of Christ (1977)',
    },
    {
      category: 'Lukan Chronology',
      title: 'Tiberius Reckoned from Sole Reign (14 CE)',
      body: "If Luke counts from Tiberius's sole reign beginning August 14 CE (the standard Roman method), the 15th year begins in late 28 CE — placing John's ministry at 28–29 CE and Jesus's baptism at 29 CE. A 3.5-year ministry then terminates precisely in spring 33 CE, aligning with Daniel's \"half-week\" (Dan 9:27) in which sacrifice is cut off mid-week.",
      cite: 'Luke 3:1 · Daniel 9:27 · Hoehner (1977)',
    },
    {
      category: 'Ministry Length',
      title: "Passovers in John's Gospel — Three Confirmed, One Contested",
      body: "John's Gospel records three explicit Passovers (2:13, 6:4, 11:55/12:1) — a minimum of two full years between the first and last, comfortably accommodating a terminus at Passover 33 CE with a ministry beginning in 29–30 CE. John 5:1 mentions \"a feast of the Jews\" that many scholars identify as a fourth Passover, which would require a ministry of at least three full years and make 33 CE the stronger fit. It must be acknowledged that John 5:1 does not name the feast — the same phrase refers to different festivals elsewhere in John — so the four-Passover reading is probable but not certain. Even on three confirmed Passovers, 33 CE accommodates the timeline. The 30 CE date requires beginning the ministry no later than 28 CE and keeping all three Passovers within approximately 24 months, which is tight but not impossible.",
      cite: 'John 2:13; 5:1; 6:4; 11:55; 12:1',
    },
    {
      category: 'Jewish Chronological Writing',
      title: 'The Seder Olam Rabbah & Regnal Year Reckoning',
      body: "The Seder Olam Rabbah — the foundational rabbinic chronological text compiled by Rabbi Yose ben Halafta (c. 160 CE) — uses a regnal-year system for Persian kings that, when its internal chronology is traced forward through the Second Temple period, produces a framework consistent with a 33 CE crucifixion. Critically, the Seder Olam compresses the Persian period, but scholars working with its internal year-counts for the post-exilic era find that its Second Temple destruction date (3828 AM) aligns with Roman reckoning only if the Passover execution occurred in the mid-30s CE. Additionally, b. Sanhedrin 43a's legal preamble — stating that Yeshu's case was held open forty days for witnesses before Passover — implies a judicial process beginning in late winter, which is chronologically more consistent with the political pressures of 33 CE than 30 CE, given the escalating tensions John 11–12 records following the Lazarus event.",
      cite: 'Seder Olam Rabbah ch. 28–30 · b. Sanhedrin 43a · John 11:45–57',
    },
    {
      category: 'Roman Political Context',
      title: 'Sejanus Falls — Pilate Becomes Compliant',
      body: "Pilate's patron in Rome, the powerful prefect Sejanus, fell from power in October 31 CE. Before that, Pilate operated aggressively — introducing Roman standards into Jerusalem, raiding Temple funds, provoking repeated Jewish complaints. He had political cover and used it. After Sejanus's fall, everything changed. Pilate's protector was gone, he was politically exposed, and he had strong motive to avoid any further Jewish complaints reaching Tiberius. Philo and Josephus both record this recalibration. A Pilate in 33 CE — two years without his patron, watching his back — is far more plausible as a man who folds under Sanhedrin pressure than a Pilate in 30 CE who still had Sejanus behind him. The \"washing his hands\" capitulation in Matthew 27 fits the post-31 CE Pilate precisely, not the pre-31 CE Pilate who had no reason to fear Jewish complaints.",
      cite: 'Josephus, Ant. 18.3.1–2; 18.4.1–2 · Philo, Embassy to Gaius 38 · Matt 27:24',
    },
  ],
}
