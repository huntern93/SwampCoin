import { Accordion, Container } from "react-bootstrap"
import styles from "./FAQ.module.css"

export const FAQ = () => {
  const data = [
    {
      title: "What is SWAMP Token?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "When will SWAMP launch?",
      text: "SWAMP Token is scheduled to launch in Q2 2025, following the completion of our presale campaign. The exact date will be announced on our social media channels and through email notifications to presale participants."
    },
    {
      title: "Is the contract audited?",
      text: "Yes, our smart contract has been fully audited by leading blockchain security firms. The audit reports are available on our website, demonstrating our commitment to transparency and security for all participants."
    },
    {
      title: "What is the price during presale?",
      text: "The presale starts at $0.0002 and increases through 100 milestone levels, reaching $0.0060 by the end. Early participants get the best rates, with each level offering a limited allocation of tokens before the price increases."
    },
    {
      title: "What payment methods are accepted?",
      text: "We accept ETH, USDT, USDC, and BNB for presale purchases. All transactions are secured through our website's integrated payment system, with immediate confirmation upon successful payment."
    },
    {
      title: "What anti-scam & anti-rug protections are in place?",
      text: "We've implemented multi-sig protection, time-locked liquidity (365-day minimum), progressive trading limits, and transparent tokenomics with no hidden team allocations. The contract is fully audited and all team tokens are locked with public verification."
    },
    {
      title: "When will I receive my tokens?",
      text: "Presale participants will receive their tokens immediately upon launch, which is scheduled for Q3 2025. You'll be able to claim them through our website using the same wallet address used for purchase."
    },
  ]
  
  return (
    <>
      <div id="faq" className="py-5">
        <Container className="mid-container">
          <h2 className="section-title">FAQ</h2>
          <Accordion defaultActiveKey={0} className={styles.FAQs}>
            {data.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} key={index} className="bg-transparent">
                  <Accordion.Header>
                    <span className={styles.questionText}>{item.title}</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <span className={styles.answerText}>
                      {item.text}
                    </span>
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}
          </Accordion>
        </Container>
      </div>
    </>
  )
}