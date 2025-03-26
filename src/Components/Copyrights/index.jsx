import { Container } from "react-bootstrap";
import styles from "./Copyrights.module.css";

export const Copyrights = () => {
  return (
    <>
      <footer className={`${styles.footer} text-white text-center py-5`}>
        <Container fluid>
          {/* Footer Links */}
          <div className={styles.footerLinks}>
            <a href="/terms-of-service" className={styles.footerLink}>Terms of Service</a>
            <span className={styles.separator}> | </span>
            <a href="/cookies" className={styles.footerLink}>Cookies</a>
            <span className={styles.separator}> | </span>
            <a href="/privacy-policy" className={styles.footerLink}>Privacy Policy</a>
          </div>

          {/* Disclaimer Text */}
          <p className="size-36 m-0 fw-light mt-3">
            Important Notice: Swamp Token &#40;$SWAMP&#41; is a community-driven project with no guarantees of financial returns. 
            Cryptocurrencies are volatile and involve high risks, including total loss of funds.
            <br/><br/>
            Not Financial Advice: This website does not provide financial, legal, or investment advice. 
            Always do your own research &#40;DYOR&#41; and consult professionals before investing.
            <br/><br/>
            No Liability: The Swamp Token team is not responsible for financial losses, market fluctuations, or regulatory issues. 
            Participation is at your own risk.
          </p>
        </Container>
      </footer>
    </>
  );
};