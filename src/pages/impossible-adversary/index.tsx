import { useState } from 'react'
import SiteNav from '../../components/SiteNav'
import PageHeader from '../../components/PageHeader'
import TabNav from '../../components/TabNav'
import Preface from './tabs/Preface'
import PillarI from './tabs/PillarI'
import PillarII from './tabs/PillarII'
import PillarIII from './tabs/PillarIII'
import PillarIV from './tabs/PillarIV'
import Conclusion from './tabs/Conclusion'
import Appendix from './tabs/Appendix'
import './ImpossibleAdversary.css'

const tabs = [
  { id: 'preface',    label: 'Preface' },
  { id: 'p1',         label: 'I · Nature of God' },
  { id: 'p2',         label: 'II · Genesis 3' },
  { id: 'p3',         label: 'III · Divine Judgment' },
  { id: 'p4',         label: 'IV · Christology' },
  { id: 'conclusion', label: 'Conclusion' },
  { id: 'appendix',  label: 'Appendix' },
]

export default function ImpossibleAdversary() {
  const [activeTab, setActiveTab] = useState('preface')

  function nextTab() {
    const idx = tabs.findIndex(t => t.id === activeTab)
    if (idx < tabs.length - 1) {
      setActiveTab(tabs[idx + 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  function goToTab(id: string) {
    setActiveTab(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="impossible-adversary-page">
      <SiteNav />
      <PageHeader
        ornament="✦ &nbsp; A Theological Thesis in the Apostolic Tradition &nbsp; ✦"
        title="The Impossible Adversary"
        subtitle="Why the Nature and Character of God Make a Literal Satan, Fallen Angels, and a Demonic Order Theologically Impossible"
      />
      <div className="ia-container">
        <div className="ia-intro-card">
          This thesis does not begin with a desire to deconstruct. It begins with a desire to be honest — honest about what the Scriptures actually say, honest about what the character of God actually demands, and honest about how much of what passes for orthodox demonology was borrowed from sources that never belonged in the apostolic deposit.
        </div>

        <TabNav tabs={tabs} active={activeTab} onChange={goToTab} />

        {activeTab === 'preface'    && <Preface onNext={nextTab} onTabChange={goToTab} />}
        {activeTab === 'p1'         && <PillarI onNext={nextTab} />}
        {activeTab === 'p2'         && <PillarII onNext={nextTab} />}
        {activeTab === 'p3'         && <PillarIII onNext={nextTab} />}
        {activeTab === 'p4'         && <PillarIV onNext={nextTab} />}
        {activeTab === 'conclusion' && <Conclusion onNext={nextTab} />}
        {activeTab === 'appendix'   && <Appendix />}
      </div>
    </div>
  )
}
