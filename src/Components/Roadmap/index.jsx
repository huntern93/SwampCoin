import { Col, Container, Row } from "react-bootstrap"
import styles from "./Roadmap.module.css"
import Title from "../../assets/images/roadmap-title.png"

export const Roadmap = () => {
  const RoadmapData = [
    {
      title: "PHASE 1: MARSHLANDS Q2 2025",
      list: [
        "🌱 Launch of community channels and social media presence",
        "🚀 Presale initiation at $0.0002 USD (100 level milestone system)",
        "🧪 Smart contract audit completion",
        "🔒 Initial team token lock-in established",
        "🎭 First community NFTs distributed to early supporters",
        "💫 Grand Opening of Official SWAMP Merch Store - Premium apparel and collectibles for the Swamp Army"
      ]
    },
    {
      title: "PHASE 2: RISING WATERS Q3 2025",
      list: [
        "🏁 Presale completion and token launch on Uniswap at minimum (we will aim for 3 in total for the quarter)",
        "💧 Permanent liquidity lock (365-day minimum)",
        "🏦 Staking platform activation with tiered APY rewards",
        "🏆 Distribution of 800 NFTs to presale participants",
        "🔝 Release of 100 NFTs to top wallet holders",
        "🤝 First strategic partnership announcement",
        "🎮 Game rewards platform launch"
      ]
    },
    {
      title: "PHASE 3: CONQUEST Q4 2025",
      list: [
        "🤖 AI trading system access for qualified holders",
        "📊 Additional exchange listings (CEX integration)",
        "📱 Mobile app beta release",
        "🌉 Cross-chain expansion",
        "🏛️ Introduction of governance proposals for community voting",
        "🌐 Global marketing campaign"
      ]
    },
    {
      title: "PHASE 4: KINGDOM Q1 2026",
      list: [
        "🧠 Enhanced AI features and expanded access",
        "🧩 Ecosystem expansion with new utility components",
        "🏗️ Launch of Swamp DAO for community governance",
        "💫 Revolutionary ecosystem feature (to be revealed)",
        "🚀 Community-driven development initiatives",
        "🌊 The future of Swamp will be decided by our community!"
      ]
    },
  ]
  
  return (
    <>
      <section id="roadmap" className={styles.roadmap}>
        <Container>
          {/* Desktop Version - Similar to original layout */}
          <Row className="g-lg-5 d-none d-md-flex">
            <Col md={12} className={styles.roadmapTitleContainer}>
              <img src={Title} className={styles.roadmapTitle} alt="Roadmap" />
            </Col>
            
            <Col md={6} className={styles.roadmapRod}>
              <RoadmapCard className="mt-0" item={RoadmapData[0]} />
              <RoadmapCard item={RoadmapData[2]} />
            </Col>
            <Col md={6}>
              <RoadmapCard item={RoadmapData[1]} />
              <RoadmapCard item={RoadmapData[3]} />
              <p className="text-white size-24 fw-bold">This roadmap is subject to adjustments based on market conditions and community feedback. The Swamp Army marches forward together!</p>
            </Col>
          </Row>
          
          {/* Mobile Version - Improved timeline style */}
          <div className="d-block d-md-none">
            <div className="text-center mb-4">
              <img src={Title} className={styles.roadmapTitleMobile} alt="Roadmap" />
            </div>
            
            <div className={styles.mobileTimelineContainer}>
              <div className={styles.mobileTimeline}></div>
              
              <div className={styles.mobileCardContainer}>
                <div className={styles.mobileTimePoint}>
                  <div className={styles.mobileTimelineCircle}></div>
                </div>
                <RoadmapCard item={RoadmapData[0]} className={styles.mobileCard} />
                
                <div className={styles.mobileTimePoint}>
                  <div className={styles.mobileTimelineCircle}></div>
                </div>
                <RoadmapCard item={RoadmapData[1]} className={styles.mobileCard} />
                
                <div className={styles.mobileTimePoint}>
                  <div className={styles.mobileTimelineCircle}></div>
                </div>
                <RoadmapCard item={RoadmapData[2]} className={styles.mobileCard} />
                
                <div className={styles.mobileTimePoint}>
                  <div className={styles.mobileTimelineCircle}></div>
                </div>
                <RoadmapCard item={RoadmapData[3]} className={styles.mobileCard} />
              </div>
            </div>
            
            <p className="text-white size-20 fw-bold mt-4 text-center">
              This roadmap is subject to adjustments based on market conditions and community feedback. 
              The Swamp Army marches forward together!
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

const RoadmapCard = ({ item, className }) => {
  return (
    <div className={`${styles.roadmapCard} ${className}`}>
      <h3>{item.title}</h3>
      <ul className="size-24 fw-bold list-unstyled">
        {item.list.map((list, i) => (
          <li key={i} className="mb-3">
            {list}
          </li>
        ))}
      </ul>
    </div>
  )
}