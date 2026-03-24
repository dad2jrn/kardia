import { SectionCard, CrossDivider, NextSectionButton } from '../components'

const days = [
  { num: 'Day 1', creation: 'God creates light', pointer: 'Jesus said: "I am the light of the world." The very first act of creation announces the one who would come to bring light into a world of darkness.', ref: 'John 1:4; 8:12' },
  { num: 'Day 2', creation: 'God separates the waters', pointer: 'Paul writes that in Christ we become a new creation. Baptism — going under the water and rising up — mirrors that same separation between the old life and the new.', ref: 'Romans 6:4; 2 Corinthians 5:17' },
  { num: 'Day 3', creation: 'Dry land appears — plants rise from the earth', pointer: 'The third day is the day of resurrection — life rising from what appeared to be dead. Jesus rose on the third day. Paul calls Him the firstfruits of those who rise from death.', ref: '1 Corinthians 15:20; John 12:24' },
  { num: 'Day 4', creation: 'Sun, moon, and stars govern the sky', pointer: 'The prophet Malachi calls the coming Messiah the "Sun of Righteousness." In Revelation, the risen Christ is described as having a face like the sun shining at full strength. He governs.', ref: 'Malachi 4:2; Revelation 1:16' },
  { num: 'Day 5', creation: 'Living creatures fill the waters and skies', pointer: 'Jesus commissioned His followers to go into all the world and make disciples. Life multiplying and filling the earth — that is the Great Commission in picture form.', ref: 'Genesis 1:22; Matthew 28:19' },
  { num: 'Day 6', creation: 'Man and woman created in God\'s image', pointer: 'Paul calls Jesus the "last Adam." The first Adam was made in God\'s image on the sixth day. Jesus — the last Adam — came to restore what the first Adam lost. The image of God in humanity, finally made whole.', ref: 'Genesis 1:26; 1 Corinthians 15:45–47' },
  { num: 'Day 7', creation: 'God rests — the Sabbath', pointer: 'Hebrews tells us there remains a Sabbath rest for the people of God. Revelation 20 describes a thousand-year reign of Christ on earth. The seventh day of rest points forward to that coming age — the Millennium (a word that simply means one thousand years).', ref: 'Hebrews 4:9; Revelation 20:4–6' },
]

export default function Section2({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="II" title="A Week That Points Somewhere">
      <p className="hw-body-p">Before we zoom out to the big picture, let's slow down and look at each day of creation. Because here's something most people have never been shown — each day of creation points forward to something Jesus did or something Jesus is.</p>

      <p className="hw-body-p">Have you ever noticed that? Let's walk through it together.</p>

      <div className="hw-day-grid">
        {days.map(day => (
          <div key={day.num} className="hw-day-card">
            <div className="hw-day-label">{day.num}</div>
            <div className="hw-day-creation">{day.creation}</div>
            <div className="hw-day-pointer">{day.pointer}</div>
            <div className="hw-day-ref">{day.ref}</div>
          </div>
        ))}
      </div>

      <CrossDivider />

      <p className="hw-body-p">This is not a coincidence. This is not a stretch. The God who declared the end from the beginning embedded the outline of the entire story of redemption into the first seven days of history. Each day a chapter. Each chapter pointing forward.</p>

      <p className="hw-body-p">Now let's ask the bigger question. What if this pattern is even larger than a single week?</p>

      <NextSectionButton label="Section 3: What If the Week Is Bigger Than We Think?" onClick={onNext} />
    </SectionCard>
  )
}
