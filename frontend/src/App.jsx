import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <div style={{backgroundColor:'#2a2b2f'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 

      </Routes>
      <Footer />
    </div>
  )
}

export default App