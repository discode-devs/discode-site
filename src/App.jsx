import React from "react"
import Card from "./components/Card"
import About from "./components/About"
import Features from "./components/Features"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() =>
  {
    Aos.init({
      once: true,
    })
  })
  
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-300">
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
        <Card />
      </div>
      <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <div data-aos="fade-up-left" data-aos-duration="800" data-aos-delay="400">
        <Features />
      </div>
    </div>
  )
}

export default App