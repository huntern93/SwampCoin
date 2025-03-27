import { Container, Row, Col } from "react-bootstrap";
import styles from "./Copyrights.module.css";
// Import icons (if you're using react-icons)
// import { FaTelegram, FaTwitter, FaDiscord, FaInstagram, FaMedium } from "react-icons/fa";

export const Copyrights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerWrapper}>
            {/* Footer Links */}
            <div className={styles.footerLinks}>
              <a href="/terms" className={styles.footerLink}>Terms of Service</a>
              <span className={styles.separator}>|</span>
              <a href="/cookies" className={styles.footerLink}>Cookies</a>
              <span className={styles.separator}>|</span>
              <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
              <span className={styles.separator}>|</span>
              <a href="/contact" className={styles.footerLink}>Contact Us</a>
            </div>

            {/* Social Media Links - Uncomment if needed */}
            {/* <div className={styles.socialLinks}>
              <a href="https://t.me/SwampCoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTelegram size={20} />
              </a>
              <a href="https://twitter.com/SwampCoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter size={20} />
              </a>
              <a href="https://discord.gg/swampcoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaDiscord size={20} />
              </a>
              <a href="https://instagram.com/swampcoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaInstagram size={20} />
              </a>
              <a href="https://medium.com/@swampcoin" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaMedium size={20} />
              </a>
            </div> */}
            
            {/* Disclaimer Section */}
            <div className={styles.disclaimerSection}>
              <div className={styles.disclaimerTitle}>IMPORTANT DISCLOSURE</div>
              <p className={styles.disclaimerText}>
                <strong>Important Notice:</strong> Swamp Token ($SWAMP) is a community-driven project with no guarantees of financial returns. 
                Cryptocurrencies are volatile and involve high risks, including total loss of funds.
              </p>
              
              <p className={styles.disclaimerText}>
                <strong>Not Financial Advice:</strong> This website does not provide financial, legal, or investment advice. 
                Always do your own research (DYOR) and consult professionals before investing.
              </p>
              
              <p className={styles.disclaimerText}>
                <strong>No Liability:</strong> The Swamp Token team is not responsible for financial losses, market fluctuations, or regulatory issues. 
                Participation is at your own risk.
              </p>
            </div>
            
            {/* Copyright Text */}
            <div className={styles.copyrightText}>
              © {currentYear} Swamp Token. All rights reserved. The Swamp belongs to everyone and no one.
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};