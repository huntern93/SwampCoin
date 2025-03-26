import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <>
      {/* Full-page background wrapper */}
      <div className="page-wrapper"></div>
      
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
    </>
  )
}

export default App