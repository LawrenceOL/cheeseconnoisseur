import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'
import Header from './components/Header'
import Cheesemakers from './pages/Cheesemakers'
import About from './pages/About'
import AddCheeseForm from './pages/AddCheeseForm'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cheesemakers" element={<Cheesemakers />} />
          <Route path="/about" element={<About />} />
          <Route path="/addcheeseform" element={<AddCheeseForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
