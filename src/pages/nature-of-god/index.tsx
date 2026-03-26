import { useState } from 'react'
import './NatureOfGod.css'
import SiteNav from '../../components/SiteNav'
import PageHeader from '../../components/PageHeader'
import TabNav from '../../components/TabNav'
import Section1 from './tabs/Section1'
import Section2 from './tabs/Section2'
import Section3 from './tabs/Section3'
import Section4 from './tabs/Section4'
import Section5 from './tabs/Section5'
import Section6 from './tabs/Section6'
import Section7 from './tabs/Section7'
import Section8 from './tabs/Section8'
import Section9 from './tabs/Section9'
import FaqSection from './tabs/FaqSection'

const tabs = [
  { id: 'I',    label: 'I' },
  { id: 'II',   label: 'II' },
  { id: 'III',  label: 'III' },
  { id: 'IV',   label: 'IV' },
  { id: 'V',    label: 'V' },
  { id: 'VI',   label: 'VI' },
  { id: 'VII',  label: 'VII' },
  { id: 'VIII', label: 'VIII' },
  { id: 'IX',   label: 'IX' },
  { id: 'faq',  label: 'FAQ' },
]

export default function NatureOfGod() {
  const [activeTab, setActiveTab] = useState('I')

  function nextTab() {
    const idx = tabs.findIndex(t => t.id === activeTab)
    if (idx < tabs.length - 1) {
      setActiveTab(tabs[idx + 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="nature-of-god-page">
      <SiteNav />
      <PageHeader
        ornament="✦ &nbsp; Foundational Theology &nbsp; ✦"
        title="The Ground Beneath Everything"
        subtitle="God's Nature, Character, and Why It Must Come First"
      />
      <div className="ng-container">
        <div className="ng-intro-card">
          Every other study on this site rests on what is explored here. Before you can understand what God has done in history — what He commands, what He promises, what He is doing now — you must understand who He is. This is not one doctrine among many. It is the ground beneath everything.
        </div>
        <TabNav tabs={tabs} active={activeTab} onChange={setActiveTab} />
        {activeTab === 'I'    && <Section1 onNext={nextTab} />}
        {activeTab === 'II'   && <Section2 onNext={nextTab} />}
        {activeTab === 'III'  && <Section3 onNext={nextTab} />}
        {activeTab === 'IV'   && <Section4 onNext={nextTab} />}
        {activeTab === 'V'    && <Section5 onNext={nextTab} />}
        {activeTab === 'VI'   && <Section6 onNext={nextTab} />}
        {activeTab === 'VII'  && <Section7 onNext={nextTab} />}
        {activeTab === 'VIII' && <Section8 onNext={nextTab} />}
        {activeTab === 'IX'   && <Section9 />}
        {activeTab === 'faq'  && <FaqSection />}
      </div>
    </div>
  )
}
