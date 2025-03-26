import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <>
      {/* Full-page background div that extends behind the header */}
      <div className="full-background"></div>
      
      <ToastContainer />
      
      {/* Header positioned outside of any section for proper z-index */}
      <Header />
      
      {/* Content sections */}
      <div className="hero-bg">
        <Hero />
        <About />
      </div>
      <div className="mid-bg">
        <Tokenomics />
        <CoreFeatures />
      </div>
      <div className="bottom-bg">
        <Roadmap />
        <Team />
        <FAQ />
      </div>
      <Copyrights />
    </>
  )
}

export default App