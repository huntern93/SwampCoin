import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            {/* Footer Links - Updated to use React Router Links */}
            <div className={styles.footerLinks}>
              <Link to="/terms" className={styles.footerLink}>Terms of Service</Link>
              <span className={styles.separator}>|</span>
              <Link to="/cookies" className={styles.footerLink}>Cookies</Link>
              <span className={styles.separator}>|</span>
              <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
              <span className={styles.separator}>|</span>
              <Link to="/contact" className={styles.footerLink}>Contact Us</Link>
            </div>

            {/* Social Media Links - Uncomment if needed */}
            {/* <div className={styles.socialLinks}>
              <a href="https://t.me/SwampArmyHQ" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTelegram size={20} />
              </a>
              <a href="https://twitter.com/SwampArmy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter size={20} />
              </a>
              <a href="https://discord.gg/swamparmyhq" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaDiscord size={20} />
              </a>
              <a href="https://instagram.com/swamparmy" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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