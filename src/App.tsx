import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CrucifixionDate from './pages/crucifixion-date'
import HolyWeek from './pages/holy-week'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crucifixion-date" element={<CrucifixionDate />} />
        <Route path="/holy-week" element={<HolyWeek />} />
      </Routes>
    </HashRouter>
  )
}
