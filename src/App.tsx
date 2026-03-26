import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NatureOfGod from './pages/nature-of-god'
import CrucifixionDate from './pages/crucifixion-date'
import HolyWeek from './pages/holy-week'
import ImpossibleAdversary from './pages/impossible-adversary'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nature-of-god" element={<NatureOfGod />} />
        <Route path="/crucifixion-date" element={<CrucifixionDate />} />
        <Route path="/holy-week" element={<HolyWeek />} />
        <Route path="/impossible-adversary" element={<ImpossibleAdversary />} />
      </Routes>
    </HashRouter>
  )
}
