import { Container, Form } from "react-bootstrap"
import SolidLogo from "../../assets/images/solid.png"
import Coinsuit from "../../assets/images/coinsult.png"
import styles from "./Hero.module.css"
import { JoinCommunity } from "../JoinCommunity"
import { toast } from "react-toastify"
import { HiOutlineMail } from "react-icons/hi"

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
            <h2 className="mb-0">THE STRONGEST</h2>
            <h2 className="mb-0">MEME ARMY</h2>
            <h3>PRE SALE</h3>
            <p className="size-24 fw-medium">GET EXCLUSIVE ACCESS FIRST</p>
            
            <div className={styles.emailInputWrapper}>
              <HiOutlineMail className={styles.emailIcon} />
              <Form.Control size="lg" type="text" placeholder="Enter your email" className={styles.emailInput} />
            </div>
            
            <button onClick={topRight} className={`btn size-36 fw-bold ${styles.heroBtn}`}>JOIN THE SWAMP</button>
            
            <p className="size-18 fw-bold text-uppercase mt-4 mb-1">AUDITED BY</p>
            <p className="size-24 fw-bold text-uppercase mb-3">TRUST AND SAFETY AUDITS</p>
            
            <div className={styles.auditLogos}>
              <img src={SolidLogo} alt="Solid Proof" />
              <img src={Coinsuit} alt="Coinsult" />
            </div>
            
            <div className="mt-3">
              <p className="size-20 fw-medium mb-2">Join the community</p>
              <div className={styles.communityBadge}>10k+</div>
              <JoinCommunity size="big" />
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