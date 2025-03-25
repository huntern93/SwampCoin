import React, { useState, useEffect } from 'react';
import styles from './AnimatedPieChart.module.css';
import shrekImage from '../../assets/images/shrek-face.png'; // Make sure to add this image to your assets

const AnimatedPieChart = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Token allocations data
  const tokenomicsData = [
    {
      id: 0,
      title: "PRE SALE",
      percentage: 40,
      tokens: 4000000000, // 4 billion
      color: "#FF3D3D",
      rotateStart: 0,
      rotateEnd: 144 // 40% of 360 degrees
    },
    {
      id: 1,
      title: "STAKING REWARDS",
      percentage: 20,
      tokens: 2000000000, // 2 billion
      color: "#A5FF27",
      rotateStart: 144,
      rotateEnd: 216 // 20% of 360 degrees
    },
    {
      id: 2,
      title: "AI BOT",
      percentage: 10,
      tokens: 1000000000, // 1 billion
      color: "#096AA5",
      rotateStart: 216,
      rotateEnd: 252 // 10% of 360 degrees
    },
    {
      id: 3,
      title: "GAME REWARDS",
      percentage: 10,
      tokens: 1000000000, // 1 billion
      color: "#26BCFF",
      rotateStart: 252,
      rotateEnd: 288 // 10% of 360 degrees
    },
    {
      id: 4,
      title: "LIQUIDITY",
      percentage: 10,
      tokens: 1000000000, // 1 billion
      color: "#615349",
      rotateStart: 288,
      rotateEnd: 324 // 10% of 360 degrees
    },
    {
      id: 5,
      title: "MARKETING",
      percentage: 5,
      tokens: 500000000, // 500 million
      color: "#505D6B",
      rotateStart: 324,
      rotateEnd: 342 // 5% of 360 degrees
    },
    {
      id: 6,
      title: "COMMUNITY",
      percentage: 5,
      tokens: 500000000, // 500 million
      color: "#FCCC00",
      rotateStart: 342,
      rotateEnd: 360 // 5% of 360 degrees
    }
  ];

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Start animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Match this with the CSS animation duration
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.tokenomicsChartContainer}>
      <div className={styles.pieChartContainer}>
        <div className={styles.pieChart}>
          {tokenomicsData.map((segment, index) => (
            <div
              key={index}
              className={`${styles.segment} ${animationComplete ? styles.animate : ''} ${activeSegment === index ? styles.active : ''}`}
              style={{
                '--start-angle': `${segment.rotateStart}deg`,
                '--end-angle': `${segment.rotateEnd}deg`,
                '--segment-color': segment.color,
                '--animation-delay': `${index * 0.2}s`
              }}
              onMouseEnter={() => setActiveSegment(index)}
              onMouseLeave={() => setActiveSegment(null)}
            ></div>
          ))}
          <div className={styles.centerImage}>
            <img src={shrekImage} alt="Shrek" />
          </div>
        </div>
      </div>
      
      <div className={styles.tokenAllocationContainer}>
        <h3 className={styles.allocationTitle}>Token Allocation</h3>
        <p className={styles.totalSupply}>Total Supply: 10,000,000,000 SWAMP</p>
        
        <div className={styles.allocationList}>
          {tokenomicsData.map((segment, index) => (
            <div 
              key={index} 
              className={`${styles.allocationItem} ${activeSegment === index ? styles.activeItem : ''}`}
              onMouseEnter={() => setActiveSegment(index)}
              onMouseLeave={() => setActiveSegment(null)}
            >
              <div className={styles.colorIndicator} style={{ backgroundColor: segment.color }}></div>
              <div className={styles.allocationDetails}>
                <div className={styles.allocationName}>{segment.title} ({segment.percentage}%)</div>
                <div className={styles.tokenAmount}>{formatNumber(segment.tokens)} SWAMP</div>
              </div>
              <div className={styles.percentageBar} style={{ width: `${segment.percentage * 2}px` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedPieChart;