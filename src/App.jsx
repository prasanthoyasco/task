import Navbar from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from './Home/Home'
import Header from "./components/Header/Header"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Header/>}/>
      </Routes>
    </div>
  )
}

export default App