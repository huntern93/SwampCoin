import { Container } from "react-bootstrap"
import styles from "./Header.module.css"
import { useState, useEffect } from "react"
// Import the logo directly - this is the recommended way in React
import logoImage from "../../assets/images/logo.png"

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  
  // Handle scroll for sticky header on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 991) {
        setIsSticky(window.scrollY > 10)
      } else {
        setIsSticky(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tokenomics",
      link: "#tokenomics",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Roadmap",
      link: "#roadmap",
    },
    {
      name: "Team",
      link: "#team",
    },
    {
      name: "Faq",
      link: "#faq",
    },
    {
      name: "How to Buy",
      link: "#how-to-buy",
    },
    {
      name: "Whitepaper",
      link: "#whitepaper",
    },
  ]

  return (
    <>
      <header id="home" className={`text-white text-center ${isSticky ? styles.stickyHeader : ''}`}>
        <Container className="big-container">
          <nav className={styles.headerNav}>
            {/* Swamp Logo - Visible only on mobile */}
            <div className={styles.logoContainer}>
              <a href="#home" className={styles.logoLink}>
                <img src={logoImage} alt="Swamp Logo" className={styles.logoImage} />
                <div className={styles.swampLogo}>SWAMP</div>
              </a>
            </div>
            
            <div className={`size-20 ${styles.links} gap-xxl-4 gap-3 ${showMenu ? styles.show: ""} `}>
              {links.map((link, index) => {
                return (
                  <a onClick={() => setShowMenu(false)} key={index} href={link.link}>{link.name}</a>
                )
              })}
            </div>
            
            <div className={`d-flex align-items-center gap-xxl-4 gap-2 ${styles.headerButtons}`}>
              <a className={`${styles.memberArea} ${styles.btn} size-20`} href="#">
                <span className="d-none d-xl-inline">Members Area</span>
                <span className="d-inline-block d-xl-none"><svg fill="currentcolor" id="fi_4121044" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 3"><circle cx="4" cy="6" r="3"></circle><path d="m7.29 11.07a6.991 6.991 0 0 0 -3.29 5.93h-2a2.006 2.006 0 0 1 -2-2v-2a3.009 3.009 0 0 1 3-3h2a3 3 0 0 1 2.29 1.07z"></path><circle cx="20" cy="6" r="3"></circle><path d="m24 13v2a2.006 2.006 0 0 1 -2 2h-2a6.991 6.991 0 0 0 -3.29-5.93 3 3 0 0 1 2.29-1.07h2a3.009 3.009 0 0 1 3 3z"></path><circle cx="12" cy="7" r="4"></circle><path d="m18 17v1a3.009 3.009 0 0 1 -3 3h-6a3.009 3.009 0 0 1 -3-3v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5z"></path></svg></span>
              </a>
              <a className={`${styles.joinArmy} ${styles.btn} size-20`} href="#">
                <span className="d-none d-xl-inline">Join The Army</span>
                <svg className="d-inline-block d-xl-none" fill="currentcolor" version="1.1" id="fi_455691" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.092 512.092" xml:space="preserve">
                  <g>
                    <g>
                      <path d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859
			c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318
			c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6
			c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581
			c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0
			c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0
			c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z"></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <path d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387
			c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877
			l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768
			l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0
			c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893
			c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365
			c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597
			c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403
			l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a className={`${styles.buyNow} ${styles.btn} size-20`} href="#">
                <span className="d-none d-xl-inline">Buy Now</span>
                <svg className="d-inline-block d-xl-none" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" id="fi_2420157"><g id="cart_shop_buy_retail" data-name="cart, shop, buy, retail"><path d="M24,23a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,24,23Zm0,4a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,24,27Z"></path><path d="M18,23H10a1,1,0,0,1,0-2H26a1,1,0,0,0,.9863-.8354l2-12A1,1,0,0,0,28,7H12a1,1,0,0,0,0,2H26.8193L25.1528,19h-12.46L6.9365,3.6489A1.0005,1.0005,0,0,0,6,3H4A1,1,0,0,0,4,5H5.3071l5.25,14H10a2.99,2.99,0,0,0-.7791,5.8823A3.005,3.005,0,1,0,14.8157,25H18a1,1,0,0,0,0-2Zm-5,3a1,1,0,1,1-1-1A1.0013,1.0013,0,0,1,13,26Z"></path></g></svg>
              </a>
              <svg onClick={() => setShowMenu(!showMenu)} className="d-inline-block d-lg-none" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_5259008"><path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path></svg>
            </div>
          </nav>
        </Container>
      </header>
    </>
  )
}