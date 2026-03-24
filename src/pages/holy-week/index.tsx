import { useState } from 'react'
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
import FaqSection from './tabs/FaqSection'
import './HolyWeek.css'

const tabs = [
  { id: 'I',    label: 'I' },
  { id: 'II',   label: 'II' },
  { id: 'III',  label: 'III' },
  { id: 'IV',   label: 'IV' },
  { id: 'V',    label: 'V' },
  { id: 'VI',   label: 'VI' },
  { id: 'VII',  label: 'VII' },
  { id: 'VIII', label: 'VIII' },
  { id: 'faq',  label: 'FAQ' },
]

export default function HolyWeek() {
  const [activeTab, setActiveTab] = useState('I')

  function nextTab() {
    const idx = tabs.findIndex(t => t.id === activeTab)
    if (idx < tabs.length - 1) {
      setActiveTab(tabs[idx + 1].id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="holy-week-page">
      <SiteNav />
      <PageHeader
        ornament="✦ &nbsp; Biblical &amp; Historical Study &nbsp; ✦"
        title="The Week God Has Been Writing All Along"
        subtitle="A typological study of creation, prophecy, and time"
      />
      <div className="hw-container">
        <TabNav tabs={tabs} active={activeTab} onChange={setActiveTab} />
        {activeTab === 'I'    && <Section1 onNext={nextTab} />}
        {activeTab === 'II'   && <Section2 onNext={nextTab} />}
        {activeTab === 'III'  && <Section3 onNext={nextTab} />}
        {activeTab === 'IV'   && <Section4 onNext={nextTab} />}
        {activeTab === 'V'    && <Section5 onNext={nextTab} />}
        {activeTab === 'VI'   && <Section6 onNext={nextTab} />}
        {activeTab === 'VII'  && <Section7 onNext={nextTab} />}
        {activeTab === 'VIII' && <Section8 onNext={nextTab} />}
        {activeTab === 'faq'  && <FaqSection />}
      </div>
    </div>
  )
}
