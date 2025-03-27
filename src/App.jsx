import { ToastContainer } from 'react-toastify'
import './App.css'
import { About, Copyrights, CoreFeatures, FAQ, Header, Hero, Roadmap, Team, Tokenomics } from './Components'
// Import the background image directly
// import heroBg from './assets/images/hero.jpg' // Uncomment and adjust path if needed

function App() {
  // Define an inline style for testing
  const fullBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundImage: `url('./assets/images/hero.jpg')`, // Try direct path
    // backgroundImage: `url(${heroBg})`, // Alternative: use imported image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    zIndex: -2
  };

  return (
    <>
      {/* Background with inline style for debugging */}
      <div style={fullBackgroundStyle}></div>
      
      <div className="page-content">
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
    </>
  )
}

export default App