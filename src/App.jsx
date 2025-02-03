import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Direction from "./Direction"
import Chat from "./Chat"
import Highlights from "./Highlights"
import Api from "./Api"
import Roadmap from "./Roadmap"
import Footer from "./Footer"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <div className='App'>
      <Header />
      <Hero />
      <Features />
      <Direction />
      <Chat />
      <Highlights />
      <Api />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
