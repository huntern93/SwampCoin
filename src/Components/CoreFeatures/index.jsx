import { Col, Container, Row } from "react-bootstrap"
import styles from "./CoreFeatures.module.css"
import TokenomicsImg from "../../assets/images/tokenomics.png"
import ShrekMoney from "../../assets/images/shrek_money.png"
import Knight from "../../assets/images/knight.png"
import Exclusive from "../../assets/images/exclusive.png"
import Keyhole from "../../assets/images/keyhole.png" // Add this import
import NFT1 from "../../assets/images/nft1.png"
import NFT2 from "../../assets/images/nft2.png"
import NFT3 from "../../assets/images/nft3.png"
import NFT4 from "../../assets/images/nft4.png"


export const CoreFeatures = () => {
  return (
    <>
      <section id="features" className="">
        <Container className="big-container">
          <h2 className="section-title text-end">CORE FEATURES</h2>
          <div className={styles.coreFeatureInner}>
            <Row>
              <Col lg={4} md={6}>
                <img src={TokenomicsImg} className={styles.coreFeatureImg1} />
              </Col>
              <Col lg={8} md={6} className="mt-4">
                <h3 className="fw-bold">REVOLUTIONARY TOKENOMICS</h3>
                <p className="size-24 fw-medium">10 BILLION TOTAL SUPPLY with fair distribution across presale, staking rewards, and ecosystem development. No hidden team allocations – full transparency from day one.</p>
              </Col>
            </Row>
            <Row className="flex-row-reverse align-items-center">
              <Col lg={6} md={6}>
                <img src={ShrekMoney} className={styles.coreFeatureImg2} />
              </Col>
              <Col lg={6} md={6}>
                <h3 className="fw-bold">EARN THROUGH STAKING</h3>
                <p className="size-24 fw-medium">Lock your SWAMP and earn up to 10% BONUS APY on top of base rewards of up to 100% APY. The longer you stake, the more you earn – with 2 BILLION tokens allocated exclusively for staking rewards over 2 years.</p>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={6}>
                <img src={Knight} className={styles.coreFeatureImg3} />
                <h3 className="fw-bold">GAME & HOLDER REWARDS</h3>
                <p className="size-24 fw-medium">Our Defend The Swamp game rewards the top 10 players and top 10 holders with 1 MILLION TOKENS every month! Play, dominate the leaderboard, and HODL to claim your share of the swamp's riches!                 </p>
              </Col>
              <Col md={6}>
                <h3 className="fw-bold">AI-POWERED TRADING</h3>
                <p className="size-24 fw-medium">Hold 10,000 SWAMP to access our exclusive AI trading tools. Share access with friends through our unique delegation system – power to the community.</p>
              </Col>
            </Row>
            <Row className="align-items-center flex-md-row flex-column-reverse">
              <Col md={6} className="position-relative" >
                <img src={Keyhole} className={styles.coreFeatureImg4} />
                <h3 className="fw-bold">UNBREAKABLE SECURITY</h3>
                <p className="size-24 fw-medium">Multi-sig protection, time-locked liquidity, and progressive trading limits keep your investment safe from rugpulls and whales.</p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h3 className="fw-bold">EXCLUSIVE NFTs</h3>
                <p className="size-24 fw-medium">Join the Swamp Army with our ultra-exclusive NFTs – 800 reserved for presale pioneers buying 100K+ tokens, 100 for top holders after launch, and just 100 for community rewards. Only 1,000 will ever exist, unlocking premium ecosystem benefits and legendary status.</p>
                
                {/* NFT Grid - Will be visible on mobile but styled differently */}
                <div className={styles.nftGrid}>
                  <div className={styles.nftItem}>
                    <img src={NFT1} alt="NFT Example 1" />
                  </div>
                  <div className={styles.nftItem}>
                    <img src={NFT2} alt="NFT Example 2" />
                  </div>
                  <div className={styles.nftItem}>
                    <img src={NFT3} alt="NFT Example 3" />
                  </div>
                  <div className={styles.nftItem}>
                    <img src={NFT4} alt="NFT Example 4" />
                  </div>
                </div>
              </Col>
            </Row>
            <p className={`size-30 fw-bold mb-0 ${styles.lastMessage}`}>Presale price increases across 100 levels from $0.0002 to $0.0060 – don't miss the early entry!</p>
          </div>
        </Container>
      </section>
    </>
  )
}