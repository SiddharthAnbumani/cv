
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Contact from "./pages/About"
import Landing from "./pages/Landing"
import './index.css'
import ThinkSync from "./pages/individual/ThinkSync"
import EnduroChrono from "./pages/individual/EnduroChrono"
import NasaDaily from "./pages/individual/NasaDaily"
import Skipsense from "./pages/individual/SkipSense"

export default function App(){
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>

          <Route path="/project" element={<Project/>} />
          <Route path="/thinksync" element={<ThinkSync/>} />
          <Route path="/skipsense" element={<Skipsense/>} />
          <Route path="/enduro" element={<EnduroChrono/>} />
          <Route path="/nasa" element={<NasaDaily/>} />

          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}