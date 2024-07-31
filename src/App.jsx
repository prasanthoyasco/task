import Navbar from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import Home from './Home/Home'

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App