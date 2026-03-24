import { useState } from 'react'
import './CrucifixionDate.css'
import SiteNav from '../../components/SiteNav'
import PageHeader from '../../components/PageHeader'
import TabNav from '../../components/TabNav'
import FaqAccordion from '../../components/FaqAccordion'
import DebateTab from './tabs/DebateTab'
import KeyTensionsTab from './tabs/KeyTensionsTab'
import ScoringTab from './tabs/ScoringTab'
import SourcesTab from './tabs/SourcesTab'
import { faqItems } from './data/faq'

const tabs = [
  { id: 'debate', label: 'The Debate' },
  { id: 'tensions', label: 'Key Tensions' },
  { id: 'scoring', label: 'Scoring Matrix' },
  { id: 'sources', label: 'Sources' },
  { id: 'faq', label: 'FAQ' },
]

export default function CrucifixionDate() {
  const [activeTab, setActiveTab] = useState('debate')

  return (
    <div className="crucifixion-page">
      <SiteNav />
      <PageHeader
        ornament="✦ &nbsp; Chronological Inquiry &nbsp; ✦"
        title="The Year of the Cross"
        subtitle="30 CE &nbsp;·&nbsp; versus &nbsp;·&nbsp; 33 CE"
      />
      <div className="crucifixion-container">
        <div className="intro-card">
          When did Jesus of Nazareth die? Two dates dominate the scholarly and theological debate: 30 CE and 33 CE. Both are defended by serious historians and exegetes. This inquiry marshals the full weight of the Scriptural record, Greco-Roman history, astronomical data, and Jewish sources — then scores each position on a weighted matrix to render a verdict.
        </div>
        <TabNav tabs={tabs} active={activeTab} onChange={setActiveTab} />
        {activeTab === 'debate' && <DebateTab />}
        {activeTab === 'tensions' && <KeyTensionsTab />}
        {activeTab === 'scoring' && <ScoringTab />}
        {activeTab === 'sources' && <SourcesTab />}
        {activeTab === 'faq' && <FaqAccordion items={faqItems} />}
      </div>
    </div>
  )
}
