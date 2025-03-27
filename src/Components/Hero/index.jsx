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
            <Form.Control size="lg" type="text" placeholder="Email address" />
            <button onClick={topRight} className={`btn size-36 fw-bold ${styles.heroBtn}`}>JOIN THE SWAMP</button>
            <p className="size-24 fw-bold text-uppercase mt-2">Trust And Safety Audits</p>
            <div className="d-flex gap-4 justify-content-center align-items-center">
              <img src={SolidLogo} alt="" className="w-25" />
              <img src={Coinsuit} alt="" className="w-25" />
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column mt-4">
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