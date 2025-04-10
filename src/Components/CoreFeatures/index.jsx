import { Col, Container, Row } from "react-bootstrap"
import styles from "./CoreFeatures.module.css"
import TokenomicsImg from "../../assets/images/tokenomics.png"
import ShrekMoney from "../../assets/images/shrek_money.png"
import Knight from "../../assets/images/knight.png"
import Keyhole from "../../assets/images/keyhole.png"
import AITrading from "../../assets/images/aitrading.png"
import NFT1 from "../../assets/images/nft1.png"
import NFT2 from "../../assets/images/nft2.png"
import NFT3 from "../../assets/images/nft3.png"
import NFT4 from "../../assets/images/nft4.png"

export const CoreFeatures = () => {
  return (
    <>
      <section id="features" className="py-5">
        <Container className="big-container">
          <h2 className="section-title text-end">CORE FEATURES</h2>
          <div className={styles.coreFeatureInner}>
            {/* Feature 1: Revolutionary Tokenomics */}
            <div className={styles.featureSection}>
              <Row className="align-items-center">
                <Col lg={4} md={6}>
                  <img src={TokenomicsImg} className={styles.coreFeatureImg1} alt="Tokenomics" />
                </Col>
                <Col lg={8} md={6} className="mt-lg-0 mt-4">
                  <h3 className="fw-bold">REVOLUTIONARY TOKENOMICS</h3>
                  <p className="size-24 fw-medium">10 BILLION TOTAL SUPPLY with fair distribution across presale, staking rewards, and ecosystem development. No hidden team allocations – full transparency from day one.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 2: Earn Through Staking */}
            <div className={styles.featureSection}>
              <Row className="flex-lg-row-reverse align-items-center">
                <Col lg={6} md={6}>
                  <img src={ShrekMoney} className={styles.coreFeatureImg2} alt="Earn through staking" />
                </Col>
                <Col lg={6} md={6}>
                  <h3 className="fw-bold">EARN THROUGH STAKING</h3>
                  <p className="size-24 fw-medium">Lock your SWAMP and earn up to 10% BONUS APY on top of base rewards of up to 100% APY. The longer you stake, the more you earn – with 2 BILLION tokens allocated exclusively for staking rewards over 2 years.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 3 & 4: Game & Holder Rewards + AI-Powered Trading */}
            <div className={styles.featureSection}>
              {/* Desktop layout - side by side */}
              <Row className="d-none d-md-flex">
                {/* First create a row just for images with fixed height */}
                <Col lg={6} md={6}>
                  <div className={styles.imageContainer}>
                    <img src={Knight} className={styles.coreFeatureImg3} alt="Game rewards" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className={styles.imageContainer}>
                    <img src={AITrading} className={styles.aiTradingImage} alt="AI Trading" />
                  </div>
                </Col>
              </Row>
              
              {/* Desktop titles and text */}
              <Row className="mt-4 d-none d-md-flex">
                <Col lg={6} md={6}>
                  <h3 className="fw-bold">GAME & HOLDER REWARDS</h3>
                  <p className="size-24 fw-medium">Our Defend The Swamp game rewards the top 10 players and top 10 holders with 1 MILLION TOKENS every month! Play, dominate the leaderboard, and HODL to claim your share of the swamp's riches!</p>
                </Col>
                <Col lg={6} md={6}>
                  <h3 className="fw-bold">AI-POWERED TRADING</h3>
                  <p className="size-24 fw-medium">Hold 10,000 SWAMP to access our exclusive AI trading tools. Share access with friends through our unique delegation system – power to the community.</p>
                </Col>
              </Row>
              
              {/* Mobile layout - stacked vertically */}
              <div className="d-md-none">
                {/* Game & Holder Rewards */}
                <div className="mb-5">
                  <div className={styles.imageContainer}>
                    <img src={Knight} className={styles.coreFeatureImg3} alt="Game rewards" />
                  </div>
                  <h3 className="fw-bold mt-3">GAME & HOLDER REWARDS</h3>
                  <p className="size-24 fw-medium">Our Defend The Swamp game rewards the top 10 players and top 10 holders with 1 MILLION TOKENS every month! Play, dominate the leaderboard, and HODL to claim your share of the swamp's riches!</p>
                </div>
                
                {/* AI-Powered Trading */}
                <div>
                  <div className={styles.imageContainer}>
                    <img src={AITrading} className={styles.aiTradingImage} alt="AI Trading" />
                  </div>
                  <h3 className="fw-bold mt-3">AI-POWERED TRADING</h3>
                  <p className="size-24 fw-medium">Hold 10,000 SWAMP to access our exclusive AI trading tools. Share access with friends through our unique delegation system – power to the community.</p>
                </div>
              </div>
            </div>

            {/* Feature 5: Unbreakable Security */}
            <div className={`${styles.featureSection} ${styles.securitySection}`}>
              <Row className="align-items-center">
                <Col lg={6} md={12} className="position-relative">
                  <div className={styles.securityLockContainer}>
                    <img src={Keyhole} className={styles.securityLockImage} alt="Security Lock" />
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <h3 className="fw-bold">UNBREAKABLE SECURITY</h3>
                  <p className="size-24 fw-medium">Multi-sig protection, time-locked liquidity, and progressive trading limits keep your investment safe from rugpulls and whales.</p>
                  <p className="size-20 fw-medium">Our contract features advanced anti-scam mechanisms embedded in the code, including locked LP tokens, transaction limits, and automated audit trails for complete transparency.</p>
                </Col>
              </Row>
            </div>

            {/* Feature 6: Exclusive NFTs */}
            <div className={styles.featureSection}>
              <Row>
                <Col lg={12}>
                  <h3 className="fw-bold text-center">EXCLUSIVE NFTs</h3>
                  <p className="size-24 fw-medium text-center mb-4">Join the Swamp Army with our ultra-exclusive NFTs – 800 reserved for presale pioneers buying 100K+ tokens, 100 for top holders after launch, and just 100 for community rewards. Only 1,000 will ever exist, unlocking premium ecosystem benefits and legendary status.</p>
                  
                  {/* NFT Grid with improved styling */}
                  <div className={styles.nftGrid}>
                    <div className={styles.nftItem}>
                      <img src={NFT1} alt="Astronaut Shrek NFT" />
                    </div>
                    <div className={styles.nftItem}>
                      <img src={NFT2} alt="Cool Shrek NFT" />
                    </div>
                    <div className={styles.nftItem}>
                      <img src={NFT3} alt="Demon Shrek NFT" />
                    </div>
                    <div className={styles.nftItem}>
                      <img src={NFT4} alt="Cyber Shrek NFT" />
                    </div>
                  </div>
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