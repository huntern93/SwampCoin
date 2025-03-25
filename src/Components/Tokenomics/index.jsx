import { Col, Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap"
import { useRef, useState } from "react"
import styles from "./Tokenomics.module.css"
import TokenomicsImg from "../../assets/images/tokenomics.png"

export const Tokenomics = () => {
  // State for tracking active segment
  const [activeSegment, setActiveSegment] = useState(null);
  
  // Refs for allocation items to scroll to
  const allocationRefs = useRef([]);
  
  const TokenomicsData = [
    {
      iconColor: "#FF3D3D",
      title: "PRE SALE (40%)",
      text: "Get in early before the swamp fills up! Initial price is 25x less than launch price",
      percentage: 40,
      dasharray: "201.1 301.6",
      dashoffset: "0"
    },
    {
      iconColor: "#A5FF27",
      title: "STAKING REWARDS (20%)",
      text: "Earn passive rewards for 2 years just by holding. Bonus for longer terms. Up to 110% APY",
      percentage: 20,
      dasharray: "100.5 402.1",
      dashoffset: "-201.1"
    },
    {
      iconColor: "#096AA5",
      title: "AI BOT (10%)",
      text: "Powering our exclusive AI trading bot for holders. Vested over 10 months. ",
      percentage: 10,
      dasharray: "50.3 452.4",
      dashoffset: "-301.6"
    },
    {
      iconColor: "#26BCFF",
      title: "GAME REWARDS (10%)",
      text: "Monthly prizes for the top 10 gamers & top 10 wallets.",
      percentage: 10,
      dasharray: "50.3 452.4",
      dashoffset: "-351.9"
    },
    {
      iconColor: "#615349",
      title: "LIQUIDITY (10%)",
      text: "Locked & loaded for stable trading. Vested over 10 months.",
      percentage: 10,
      dasharray: "50.3 452.4",
      dashoffset: "-402.1"
    },
    {
      iconColor: "#505D6B",
      title: "MARKETING (5%)",
      text: "Fueling the hype & global reach. Vested over 10 months.",
      percentage: 5,
      dasharray: "25.1 477.5",
      dashoffset: "-452.4"
    },
    {
      iconColor: "#FCCC00",
      title: "COMMUNITY (5%)",
      text: "Supporting giveaways, partnerships, & ecosystem growth.",
      percentage: 5,
      dasharray: "25.1 477.5",
      dashoffset: "-477.5"
    },
  ]
  
  // Handle segment click to scroll to corresponding allocation
  const handleSegmentClick = (index) => {
    setActiveSegment(index);
    if (allocationRefs.current[index]) {
      allocationRefs.current[index].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Highlight the item temporarily
      allocationRefs.current[index].classList.add(styles.highlighted);
      setTimeout(() => {
        allocationRefs.current[index].classList.remove(styles.highlighted);
      }, 1500);
    }
  };
  
  return (
    <>
      <section id="tokenomics" className={styles.tokenomics}>
        <Container className="big-container">
          <h2 className="section-title pb-md-5 pb-3">TOKENOMICS</h2>
          
          {/* Desktop View */}
          <div className={`${styles.tokenomicsInner} d-none d-lg-block`}>
            <div className="ps-md-5">
              <h4 className="size-36 fw-bold mb-0">Total Supply: 10,000,000,000 SWAMP</h4>
              <p className="size-24 fw-bold">A fixed supply with zero inflation and no hidden mints. Our tokenomics are designed for long-term sustainability, with clear allocations and transparent vesting schedules. Every SWAMP token is accounted for from day one - no surprises, no hidden team wallets.</p>
            </div>
            <Row className="row-cols-1 row-cols-lg-2">
              <Col>
                <Row className="row-cols-1 row-cols-md-2 g-4">
                  {TokenomicsData.map((item, index) => {
                    return (
                      <Col key={index}>
                        <div className="d-flex gap-3">
                          <Icon color={item.iconColor} />
                          <div>
                            <h4 className="size-30 fw-bold mb-0">{item.title}</h4>
                            <p className="size-20 fw-bold mb-0">{item.text}</p>
                          </div>
                        </div>
                      </Col>
                    )
                  })}
                  <Col>
                    <div className={styles.price}>
                      <p className="size-20 text-white fw-bold mb-0">Initial Price: $0.0002 USD <br/> Final Presale Price: $0.0060 USD <br/>Price Levels: 100<br/>Return Potential: 30x</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
              </Col>
            </Row>
            <img src={TokenomicsImg} className={styles.tokenomicsImg} alt="Tokenomics" />
          </div>
          
          {/* Mobile View */}
          <div className={`${styles.tokenomicsMobile} d-block d-lg-none`}>
            <div>
              <h4 className="size-24 fw-bold mb-2">Total Supply: 10,000,000,000 SWAMP</h4>
              <p className="size-20 fw-bold">A fixed supply with zero inflation and no hidden mints. Our tokenomics are designed for long-term sustainability, with clear allocations and transparent vesting schedules.</p>
            </div>
            
            {/* Mobile Pie Chart */}
            <div className={styles.pieChartContainer}>
              <svg viewBox="0 0 200 200" className={styles.pieChart}>
                {/* SVG Pie Chart Segments with Interactivity */}
                {TokenomicsData.map((item, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${index}`}>
                        <strong>{item.title}</strong><br />
                        {item.percentage}% of total supply
                      </Tooltip>
                    }
                  >
                    <circle 
                      cx="100" 
                      cy="100" 
                      r="80" 
                      fill="transparent" 
                      stroke={item.iconColor} 
                      strokeWidth="80" 
                      strokeDasharray={item.dasharray} 
                      strokeDashoffset={item.dashoffset} 
                      transform="rotate(-90 100 100)"
                      className={`${styles.pieSegment} ${activeSegment === index ? styles.activeSegment : ''}`}
                      onClick={() => handleSegmentClick(index)}
                      onMouseEnter={() => setActiveSegment(index)}
                      onMouseLeave={() => setActiveSegment(null)}
                    />
                  </OverlayTrigger>
                ))}
                
                {/* Center circle for aesthetics */}
                <circle cx="100" cy="100" r="30" fill="#EFF2F0" stroke="#000" strokeWidth="1" />
              </svg>
            </div>
            
            <div className={styles.mobileAllocations}>
              {TokenomicsData.map((item, index) => {
                return (
                  <div 
                    key={index} 
                    className={`${styles.mobileAllocationItem} ${activeSegment === index ? styles.activeItem : ''}`}
                    ref={el => allocationRefs.current[index] = el}
                  >
                    <div className={styles.mobileAllocationHeader}>
                      <Icon color={item.iconColor} />
                      <h4 className="size-18 fw-bold mb-0">{item.title}</h4>
                    </div>
                    <p className="size-16 fw-medium mb-0 ps-5">{item.text}</p>
                  </div>
                )
              })}
            </div>
            
            <div className={styles.price}>
              <p className="size-18 text-white fw-bold mb-0">Initial Price: $0.0002 USD <br/> Final Presale Price: $0.0060 USD <br/>Price Levels: 100<br/>Return Potential: 30x</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

const Icon = ({ color = "#ff#D#D" }) => {
  return (
    <svg className="flex-shrink-0" width="50" height="54" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="28.1763" r="25" fill={color} />
      <path d="M20.148 34.0563V33.3363C20.148 32.3763 20.364 31.5483 20.796 30.8523C21.228 30.1563 21.756 29.5323 22.38 28.9803C23.028 28.4043 23.676 27.8643 24.324 27.3603C24.972 26.8563 25.512 26.3283 25.944 25.7763C26.376 25.2243 26.592 24.5883 26.592 23.8683C26.592 22.7403 26.244 21.9483 25.548 21.4923C24.852 21.0363 23.652 20.8083 21.948 20.8083C20.988 20.8083 19.992 20.9403 18.96 21.2043C17.928 21.4443 17.052 21.7443 16.332 22.1043V18.0003C17.172 17.5923 18.192 17.2683 19.392 17.0283C20.616 16.7643 21.9 16.6323 23.244 16.6323C25.956 16.6323 28.008 17.2323 29.4 18.4323C30.816 19.6323 31.524 21.2763 31.524 23.3643C31.524 24.7323 31.224 25.8243 30.624 26.6403C30.048 27.4563 29.232 28.2843 28.176 29.1243C27.216 29.8923 26.448 30.5763 25.872 31.1763C25.296 31.7523 25.008 32.5323 25.008 33.5163V34.0563H20.148ZM20.004 40.1763V36.6123H25.116V40.1763H20.004Z" fill="black" />
    </svg>
  )
}