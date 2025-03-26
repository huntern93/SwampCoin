import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <div className="page-wrapper">
      <div className="full-background"></div>
      
      <ToastContainer />
      <Header />

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
    </div>
  )
}

export default App