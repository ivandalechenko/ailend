import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Direction from "./Direction"
import Chat from "./Chat"
import Highlights from "./Highlights"
import Api from "./Api"
import Roadmap from "./Roadmap"
import Footer from "./Footer"

function App() {

  return (
    <div className='App'>
      <Header />
      <Hero />
      <Features />
      <Direction />
      <Chat />
      {/* <Highlights /> */}
      <Api />
      <Roadmap />
      <Footer />
    </div>
  )
}

export default App
