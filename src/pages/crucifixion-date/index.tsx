import { useState } from 'react'
import './CrucifixionDate.css'
import SiteNav from '../../components/SiteNav'
import PageHeader from './PageHeader'
import TabNav, { type TabId } from './TabNav'
import DebateTab from './tabs/DebateTab'
import KeyTensionsTab from './tabs/KeyTensionsTab'
import ScoringTab from './tabs/ScoringTab'
import SourcesTab from './tabs/SourcesTab'
import FaqTab from './tabs/FaqTab'

export default function CrucifixionDate() {
  const [activeTab, setActiveTab] = useState<TabId>('debate')

  return (
    <div className="crucifixion-page">
      <SiteNav />
      <PageHeader />
      <div className="crucifixion-container">
        <div className="intro-card">
          When did Jesus of Nazareth die? Two dates dominate scholarly and theological debate: 30 CE and 33 CE. Both are defended by serious historians and exegetes. This inquiry marshals the full weight of the Scriptural record, Greco-Roman history, astronomical data, and Jewish sources — then scores each position on a weighted matrix to render a verdict.
        </div>
        <TabNav active={activeTab} onChange={setActiveTab} />
        {activeTab === 'debate' && <DebateTab />}
        {activeTab === 'tensions' && <KeyTensionsTab />}
        {activeTab === 'scoring' && <ScoringTab />}
        {activeTab === 'sources' && <SourcesTab />}
        {activeTab === 'faq' && <FaqTab />}
      </div>
    </div>
  )
}
