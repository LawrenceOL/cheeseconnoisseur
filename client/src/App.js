import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'
import Header from './components/Header'
import Cheesemakers from './pages/Cheesemakers'
import About from './pages/About'
import AddCheeseForm from './pages/AddCheeseForm'
import ConfirmCheese from './pages/ConfirmCheese'
import ConfirmCheesemaker from './pages/ConfirmCheesemaker'

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
          <Route path="/cheeseconfirmation" element={<ConfirmCheese />} />
          <Route
            path="/cheesemakerconfirmation"
            element={<ConfirmCheesemaker />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
