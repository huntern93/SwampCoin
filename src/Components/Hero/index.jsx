import { Container, Form } from "react-bootstrap"
import { useState } from "react"
import SolidLogo from "../../assets/images/solid.png"
import Coinsuit from "../../assets/images/coinsult.png"
import styles from "./Hero.module.css"
import { JoinCommunity } from "../JoinCommunity"
import { toast } from "react-toastify"
import { HiOutlineMail } from "react-icons/hi"

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address', {
        position: 'top-right',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This API endpoint will work with Vercel serverless functions
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success !== false) {
        toast.success(data.message || 'Thank you for subscribing!', {
          position: 'top-right',
        });
        setEmail(""); // Clear the form
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to subscribe. Please try again later.', {
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            
            <Form onSubmit={handleSubmit} className="w-100">
              <div className={styles.emailInputWrapper}>
                <HiOutlineMail className={styles.emailIcon} />
                <Form.Control 
                  size="lg" 
                  type="email" 
                  placeholder="Enter your email" 
                  className={styles.emailInput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className={`btn size-36 fw-bold ${styles.heroBtn}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'JOINING...' : 'JOIN THE SWAMP'}
              </button>
            </Form>
            
            <p className="size-18 fw-bold text-uppercase mt-4 mb-1">AUDITED BY</p>
            <p className="size-24 fw-bold text-uppercase mb-3">TRUST AND SAFETY AUDITS</p>
            
            <div className={styles.auditLogos}>
              <img src={SolidLogo} alt="Solid Proof" />
              <img src={Coinsuit} alt="Coinsult" />
            </div>
            
            <div className="mt-3">
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