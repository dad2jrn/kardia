import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CrucifixionDate from './pages/crucifixion-date'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crucifixion-date" element={<CrucifixionDate />} />
      </Routes>
    </HashRouter>
  )
}
