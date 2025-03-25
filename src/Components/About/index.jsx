import { Col, Container, Row } from "react-bootstrap"
import AboutImg1 from "./../../assets/images/shrek-swamp-hand.png";
import AboutImg2 from "./../../assets/images/stayaway.png";
import styles from "./About.module.css"
import { JoinCommunity } from "../JoinCommunity"
export const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <Container className="mid-container">
          <div className={styles.aboutInner}>
            <img src={AboutImg1} className={styles.aboutImg1} alt="Shrek swamp hand" />
            <Row className="g-0">
              <Col md={4}></Col>
              <Col md={6}>
                <h2 className="section-title">ABOUT $SWAMP</h2>
                <p className="size-24 fw-semibold">SwampCoin's no pump-and-dump trash – it's the degen dream straight from the crypto swamp. Built with anti-rug armor, locked liquidity, and hardcore security, we're here to stack sats, meme hard, and moon as a crew. Liquidity locked and loaded, vibes are high and the gains ? Legendary. Dive into the swamp, fam.</p>
                <a className={`size-24 ${styles.buyNow} mb-4`} href="#">
                  <span>BUY NOW</span>
                  <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M18.375 30.875L28.125 19.5L18.375 8.125" stroke="black" strokeWidth="2.4375" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.875 30.875L21.625 19.5L11.875 8.125" stroke="black" strokeWidth="2.4375" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <JoinCommunity size="small" />
              </Col>
            </Row>
            <img src={AboutImg2} className={styles.aboutImg2} alt="Stay away sign" />
          </div>
        </Container>
      </section>
    </>
  )
}