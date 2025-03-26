import { Container, Form } from "react-bootstrap"
import SolidLogo from "../../assets/images/solid.png"
import Coinsuit from "../../assets/images/coinsult.png"
import styles from "./Hero.module.css"
import { JoinCommunity } from "../JoinCommunity"
import { toast } from "react-toastify"
export const Hero = () => {
  const topRight = () => {
    toast.success('Thank you!', {
      position: 'top-right',
    });
  };
  return (
    <>
      <div className={styles.hero}>
        <Container className="text-center big-container">
          <div className={styles.heroForm}>
            <h2 className="mb-0">The Strongest Meme Army</h2>
            <h3>PRE SALE</h3>
            <p className="size-24 fw-medium">GET EXCLUSIVE ACCESS FIRST</p>
            
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#999999"/>
                </svg>
              </span>
              <Form.Control size="lg" type="email" placeholder="Enter your email" />
            </div>
            
            <button onClick={topRight} className={`btn size-36 fw-bold ${styles.heroBtn}`}>JOIN THE SWAMP</button>
            
            <p className={`size-24 fw-bold text-uppercase mt-2 ${styles.auditedBy}`}>AUDITED BY</p>
            <p className={`size-24 fw-bold text-uppercase ${styles.trustSafety}`}>TRUST AND SAFETY AUDITS</p>
            
            <div className={`d-flex gap-4 justify-content-center align-items-center ${styles.auditLogos}`}>
              <img src={SolidLogo} alt="SolidProof audit" className="w-25" />
              <img src={Coinsuit} alt="Coinsult audit" className="w-25" />
            </div>
            
            <div className="d-flex justify-content-center align-items-center flex-column mt-4">
              <JoinCommunity size="big" className={styles.heroCommunity} />
            </div>
          </div>
        </Container>
        <div className={`${styles.marquee} ${styles.marquee1} size-36 fw-bold`}>
          <marquee direction="right">
            {Array.from({ length: 25 }, (_, index) => (
              <span key={index} className="d-inline-flex gap-lg-5 gap-3"><span>#</span> <span>$SWAMP</span> <span></span> </span>
            ))}
          </marquee>
        </div>
        <div className={`${styles.marquee} ${styles.marquee2} size-36 fw-bold`}>
          <marquee>
            {Array.from({ length: 15 }, (_, index) => (
              <span key={index} className="d-inline-flex gap-lg-5 gap-3"><span>#</span> <span>$SWAMP</span> <span></span> </span>
            ))}
          </marquee>
        </div>
      </div>
    </>
  )
}