import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <>
      <ToastContainer />
      
      <Header />

      {/* Full background now behind header and hero */}
      <div className="full-background"></div>

      <div className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }}>
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

export default App;
