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
      role: ""Swamp King" Lead Developer & Visionary",
      description: "The mastermind who coded our ecosystem from the depths of the swamp. Veteran of three bull runs and countless rugpulls (never his own)."
    },
    {
      img: CryptoDonkey,
      title: "CRYPTO DONKEY",
      role: ""Liquidity Wizard" Tokenomics Engineer",
      description: "The mathematical genius behind our staking rewards. Known for optimizing gas like nobody's business and surviving the 2022 bear market on ramen alone."
    },
    {
      img: FairyGodmeme,
      title: "FAIRY GODMEME",
      role: ""Community Alchemist" Marketing Strategist",
      description: "Turned three failed projects into 100x gems through pure meme magic. Can spot a paper hand from miles away and convert FUDders into diamond-handed believers."
    },
  ]
  
  return (
    <>
      <section id="team" className={styles.team}>
        <Container className="text-center big-container">
          <h2 className="section-title">TEAM</h2>
          <div className={styles.teamInner}>
            <Row className="justify-content-center">
              {TeamData.map((member, index) => (
                <Col key={index} lg={4} md={6} sm={12} className={styles.teamMember}>
                  <img 
                    src={member.img} 
                    alt={member.title} 
                    className={styles.teamImage}
                  />
                  <h3>{member.title}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamDesc}>{member.description}</p>
                </Col>
              ))}
            </Row>
            
            <div className={styles.teamFooter}>
              <p>Note: Our identities remain onion-layered for security, but our code is fully transparent and audited. This is the way of the swamp.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}