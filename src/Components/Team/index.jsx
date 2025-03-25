import { Col, Container, Row } from "react-bootstrap"
import OgreAlpha from "../../assets/images/ogre-alpha.png"
import FairyGodmeme from "../../assets/images/fairy-godmeme.png"
import CryptoDonkey from "../../assets/images/crypto-donkey.png"
import styles from "./Team.module.css"
export const Team = () => {
  const TeamData = [
    {
      img: OgreAlpha,
      title: "OGRE ALPHA",
      text1: `"Swamp King" Lead Developer & Visionary`,
      text2: `The mastermind who coded our ecosystem from the depths of the swamp. Veteran of three bull runs and countless rugpulls (never his own).`
    },
    {
      img: CryptoDonkey,
      title: "CRYPTO DONKEY",
      text1: `"Liquidity Wizard" Tokenomics Engineer`,
      text2: `The mathematical genius behind our staking rewards. Known for optimizing gas like nobody's business and surviving the 2022 bear market on ramen alone.`
    },
    {
      img: FairyGodmeme,
      title: "FAIRY GODMEME",
      text1: `"Community Alchemist" Marketing Strategist`,
      text2: `Turned three failed projects into 100x gems through pure meme magic. Can spot a paper hand from miles away and convert FUDders into diamond-handed believers.`
    },
  ]
  return (
    <>
      <section id="team" className={styles.team}>
        <Container className="text-center big-container">
            <h2 className="section-title">TEAM</h2>
          <div className={styles.teamInner}>

            <Row>
              {TeamData.map((item, index) => {
                return (
                  <Col key={index} lg={4} md={6} sm={12} className="size-36">
                    <img src={item.img} alt="" />
                    <h3 className="pt-4 mb-4">{item.title}</h3>
                    <p className="fw-semibold mb-xl-5">{item.text1}</p>
                    <p className="fw-medium">{item.text2}</p>
                  </Col>
                )
              })}
            </Row>
            <Row className="justify-content-center mt-3">
              <Col sm={10}>
                <p className="size-30 fw-light">Note: Our identities remain onion-layered for security, but our code is fully transparent and audited. This is the way of the swamp.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}