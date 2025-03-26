function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      
      {/* Wrap hero section and background together */}
      <div className="hero-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="full-background"></div>  {/* Background within Hero only */}
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
