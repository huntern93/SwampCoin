import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <div className="app-container">
      <ToastContainer />
      <Header />

      <div className="hero-bg">
        <Hero />
        <div className="about-section">
          <About />
        </div>
      </div>

      <div className="mid-bg">
        <div className="tokenomics-section">
          <Tokenomics />
        </div>
        <CoreFeatures />
      </div>

      <div className="bottom-bg">
        <Roadmap />
        <Team />
        <FAQ />
      </div>

      <Copyrights />
    </div>
  )
}

export default App