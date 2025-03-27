import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics, HowToBuy } from './Components'

function App() {

  return (
    <>
      <ToastContainer />
      <div className="hero-bg">
        <Header />
        <Hero />
        <About />
      </div>
      <div className="mid-bg">
        <Tokenomics />
        <CoreFeatures />
      </div>
      <div className="bottom-bg">
        <HowToBuy />
        <Roadmap />
        <Team />
        <FAQ />
      </div>
      <Copyrights />
    </>
  )
}

export default App