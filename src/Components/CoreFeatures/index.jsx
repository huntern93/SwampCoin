import { Col, Container, Row } from "react-bootstrap"
import styles from "./CoreFeatures.module.css"
import TokenomicsImg from "../../assets/images/tokenomics.png"
import ShrekMoney from "../../assets/images/shrek_money.png"
import Knight from "../../assets/images/knight.png"
import Exclusive from "../../assets/images/exclusive.png"
import Keyhole from "../../assets/images/keyhole.png"

export const CoreFeatures = () => {
  return (
    <>
      <section id="features" className="py-5">
        <Container className="big-container">
          <h2 className="section-title text-end">CORE FEATURES</h2>
          <div className={styles.coreFeatureInner}>
            {/* Feature 1: Revolutionary Tokenomics */}
            <div className={styles.featureCard}>
              <Row>
                <Col lg={4} md={6}>
                  <div className={styles.mobileImgContainer}>
                    <img src={TokenomicsImg} className={styles.coreFeatureImg1} alt="Tokenomics" />
                  </div>
                </Col>
                <Col lg={8} md={6} className="mt-4">
                  <h3 className="fw-bold">REVOLUTIONARY TOKENOMICS</h3>
                  <p className="size-24 fw-medium">10 BILLION TOTAL SUPPLY with fair distribution across presale, staking rewards, and ecosystem development. No hidden team allocations – full transparency from day one.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 2: Earn Through Staking */}
            <div className={styles.featureCard}>
              <Row className="flex-row-reverse align-items-center">
                <Col lg={6} md={6}>
                  <div className={styles.mobileImgContainer}>
                    <img src={ShrekMoney} className={styles.coreFeatureImg2} alt="Earn through staking" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <h3 className="fw-bold">EARN THROUGH STAKING</h3>
                  <p className="size-24 fw-medium">Lock your SWAMP and earn up to 10% BONUS APY on top of base rewards of up to 100% APY. The longer you stake, the more you earn – with 2 BILLION tokens allocated exclusively for staking rewards over 2 years.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 3 & 4: Game & Holder Rewards + AI-Powered Trading */}
            <div className={styles.featureCard}>
              <Row className="align-items-center">
                <Col md={6}>
                  <div className={styles.mobileImgContainer}>
                    <img src={Knight} className={styles.coreFeatureImg3} alt="Game rewards" />
                  </div>
                  <h3 className="fw-bold">GAME & HOLDER REWARDS</h3>
                  <p className="size-24 fw-medium">Our Defend The Swamp game rewards the top 10 players and top 10 holders with 1 MILLION TOKENS every month! Play, dominate the leaderboard, and HODL to claim your share of the swamp's riches!</p>
                </Col>
                <Col md={6} className="mt-md-0 mt-4">
                  <h3 className="fw-bold">AI-POWERED TRADING</h3>
                  <p className="size-24 fw-medium">Hold 10,000 SWAMP to access our exclusive AI trading tools. Share access with friends through our unique delegation system – power to the community.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 5: Unbreakable Security */}
            <div className={styles.featureCard}>
              <Row className="align-items-center flex-md-row flex-column-reverse">
                <Col md={6}>
                  <div className={styles.mobileImgContainer}>
                    <img src={Exclusive} alt="Security features" />
                  </div>
                </Col>
                <Col md={6} className="position-relative">
                  <img src={Keyhole} className={styles.coreFeatureImg4} alt="Keyhole" />
                  <h3 className="fw-bold">UNBREAKABLE SECURITY</h3>
                  <p className="size-24 fw-medium">Multi-sig protection, time-locked liquidity, and progressive trading limits keep your investment safe from rugpulls and whales.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 6: Exclusive NFTs */}
            <div className={styles.featureCard}>
              <Row>
                <Col md={12}>
                  <h3 className="fw-bold">EXCLUSIVE NFTs</h3>
                  <p className="size-24 fw-medium mb-4">Join the Swamp Army with our ultra-exclusive NFTs – 800 reserved for presale pioneers buying 100K+ tokens, 100 for top holders after launch, and just 100 for community rewards. Only 1,000 will ever exist, unlocking premium ecosystem benefits and legendary status.</p>
                </Col>
              </Row>
            </div>

            {/* Last message with highlight */}
            <div className={styles.lastMessage}>
              Presale price increases across 100 levels from $0.0002 to $0.0060 – don't miss the early entry!
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}