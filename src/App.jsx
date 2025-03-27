import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'

function App() {
  return (
    <>
      {/* Background stays fixed and covers the entire viewport */}
      <div className="full-background"></div>
      
      <div className="page-content">
        <ToastContainer />
        <Header />

        {/* Hero section with gradient overlay */}
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
    </>
  )
}

export default App