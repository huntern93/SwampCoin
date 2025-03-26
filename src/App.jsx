import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <>
      {/* Full-page background that covers everything including behind header */}
      <div className="page-background"></div>
      
      <ToastContainer />
      
      {/* Header positioned outside of any section for proper z-index */}
      <Header />
      
      {/* Content sections with dividers to prevent gaps */}
      <div className="hero-bg">
        <Hero />
        <About />
      </div>
      
      {/* Divider to ensure smooth transition between sections */}
      <div className="section-divider"></div>
      
      <div className="mid-bg">
        <Tokenomics />
        <CoreFeatures />
      </div>
      
      {/* Divider to ensure smooth transition between sections */}
      <div className="section-divider"></div>
      
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