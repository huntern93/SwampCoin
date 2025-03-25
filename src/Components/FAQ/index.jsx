import { Accordion, Container } from "react-bootstrap"
import styles from "./FAQ.module.css"
export const FAQ = () => {
  const data = [
    {
      title: "What is SWAMP Token?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "When will SWAMP launch? ",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "Is the contract audited?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "What is the price during presale?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "What payment methods are accepted?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "What anti-scam & anti-rug protections are in place?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
    {
      title: "When will I receive my tokens ?",
      text: "SWAMP Token ($SWAMP) is a community-driven cryptocurrency featuring staking rewards, AI trading tools, gaming incentives, and exclusive NFTs. Built on the Ethereum blockchain, our ecosystem offers multiple ways to earn and engage."
    },
  ]
  return (
    <>
      <div id="faq" className="">
        <Container className="mid-container">
          <h2 className="section-title">FAQ</h2>
          <Accordion defaultActiveKey={0} flush className={styles.FAQs}>
            {data.map((item, index) => {
              return (
                <Accordion.Item eventKey={index} className="bg-transparent">
                  <Accordion.Header><span className="size-30 text-black">{item.title}</span></Accordion.Header>
                  <Accordion.Body>
                    <span className="size-24 fw-light">
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