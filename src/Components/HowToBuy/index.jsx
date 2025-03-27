import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import styles from "./HowToBuy.module.css"

export const HowToBuy = () => {
  const [activeStep, setActiveStep] = useState(null);
  
  const steps = [
    {
      title: "CREATE A WALLET",
      description: "Download MetaMask or Trust Wallet from App Store or Google Play Store for free. Desktop users can install the Chrome extension by going to metamask.io.",
      icon: (
        <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="28.1763" r="25" fill="#FF3D3D" />
          <path d="M18 30V18C18 16.9391 18.4214 15.9217 19.1716 15.1716C19.9217 14.4214 20.9391 14 22 14H33C33.5304 14 34.0391 14.2107 34.4142 14.5858C34.7893 14.9609 35 15.4696 35 16V36C35 36.5304 34.7893 37.0391 34.4142 37.4142C34.0391 37.7893 33.5304 38 33 38H22C20.9391 38 19.9217 37.5786 19.1716 36.8284C18.4214 36.0783 18 35.0609 18 34V30ZM22 16C21.4696 16 20.9609 16.2107 20.5858 16.5858C20.2107 16.9609 20 17.4696 20 18V34C20 34.5304 20.2107 35.0391 20.5858 35.4142C20.9609 35.7893 21.4696 36 22 36H33V30H28C27.7348 30 27.4804 29.8946 27.2929 29.7071C27.1054 29.5196 27 29.2652 27 29C27 28.7348 27.1054 28.4804 27.2929 28.2929C27.4804 28.1054 27.7348 28 28 28H33V24H28C27.7348 24 27.4804 23.8946 27.2929 23.7071C27.1054 23.5196 27 23.2652 27 23C27 22.7348 27.1054 22.4804 27.2929 22.2929C27.4804 22.1054 27.7348 22 28 22H33V16H22Z" fill="black"/>
        </svg>
      )
    },
    {
      title: "CONNECT WALLET",
      description: "Connect your wallet to our website once the pre-sale is ready. Simply click the connect button and approve the connection request.",
      icon: (
        <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="28.1763" r="25" fill="#A5FF27" />
          <path d="M15 28C15 24.13 18.13 21 22 21H30V19H22C17.03 19 13 23.03 13 28C13 32.97 17.03 37 22 37H30V35H22C18.13 35 15 31.87 15 28ZM24 31H36V25H24V31ZM38 19H30V21H38C41.87 21 45 24.13 45 28C45 31.87 41.87 35 38 35H30V37H38C42.97 37 47 32.97 47 28C47 23.03 42.97 19 38 19Z" fill="black"/>
        </svg>
      )
    },
    {
      title: "BUY SWAMP TOKENS",
      description: "Buy SWAMP tokens using ETH, BNB, USDT or Card Payments. Choose your preferred payment method and complete your purchase.",
      icon: (
        <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="28.1763" r="25" fill="#F5B700" />
          <path d="M25 18L18 25L21 28L25 24L29 28L32 25L25 18ZM18 29L21 32L25 28L29 32L32 29L25 22L18 29ZM25 14L35 24L32 27L25 20L18 27L15 24L25 14ZM25 36L35 26L32 23L25 30L18 23L15 26L25 36Z" fill="black"/>
        </svg>
      )
    },
    {
      title: "CLAIM OR STAKE",
      description: "Stake your tokens straight away for rewards or claim once the pre-sale is over. Staking provides passive income while you hold.",
      icon: (
        <svg width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="28.1763" r="25" fill="#26BCFF" />
          <path d="M33 19L25 27L21 23L17 27L25 35L37 23L33 19ZM25 15C19.5 15 15 19.5 15 25C15 30.5 19.5 35 25 35C30.5 35 35 30.5 35 25C35 19.5 30.5 15 25 15ZM25 33C20.6 33 17 29.4 17 25C17 20.6 20.6 17 25 17C29.4 17 33 20.6 33 25C33 29.4 29.4 33 25 33Z" fill="black"/>
        </svg>
      )
    }
  ];

  const handleStepHover = (index) => {
    setActiveStep(index);
  };

  return (
    <section id="how-to-buy" className={styles.howToBuy}>
      <Container className="big-container">
        <h2 className="section-title pb-md-5 pb-3">HOW TO BUY</h2>
        
        <div className={styles.howToBuyInner}>
          <Row className="g-4">
            {steps.map((step, index) => (
              <Col md={6} lg={3} key={index}>
                <div 
                  className={`${styles.stepCard} ${activeStep === index ? styles.activeCard : ''}`}
                  onMouseEnter={() => handleStepHover(index)}
                  onMouseLeave={() => handleStepHover(null)}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
          
          <div className={styles.contractBox}>
            <h3 className="fw-bold mb-3">CONTRACT ADDRESS</h3>
            <div className={styles.addressContainer}>
              <code className={styles.contractAddress}>0x000...000</code>
              <button className={styles.copyBtn} onClick={() => {
                navigator.clipboard.writeText("0x000...000");
                alert("Contract address copied to clipboard!");
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" fill="currentColor"/>
                </svg>
                Copy
              </button>
            </div>
            <p className="mt-3 text-center">
              <span className={styles.badge}>Coming Soon</span>
            </p>
          </div>
          
          <div className={styles.buyButtonContainer}>
            <a href="#" className={styles.buyButton}>
              BUY $SWAMP NOW
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowToBuy;