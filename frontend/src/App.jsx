import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"

const App = () => {
  return (
    <div style={{backgroundColor:'#white'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Register" element={<Register />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App