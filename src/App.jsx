import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { 
  TbArrowDown, 
  TbSchool, 
  TbCode, 
  TbPlant, 
  TbAtom 
} from "react-icons/tb"; 

// --- 0. HELPER HOOKS ---
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function useIsTablet() {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );
  useEffect(() => {
    const handleResize = () =>
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isTablet;
}

// --- 1. BADGE SHAPES ---
const MainStickerBadge = ({ color }) => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
    <path 
      d="M50,5 C70,5 80,15 90,25 C95,35 95,65 90,75 C80,85 70,95 50,95 C30,95 20,85 10,75 C5,65 5,35 10,25 C20,15 30,5 50,5 Z" 
      fill="none" stroke={color} strokeWidth="3" fillOpacity="0.1" style={{ fill: color }} 
    />
  </svg>
);
const BadgeBlue = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
    <path d="M50,0 C60,0 65,5 70,10 C75,5 85,5 90,12 C95,20 92,28 95,35 C100,40 100,55 95,60 C92,68 85,72 80,78 C75,85 65,95 55,95 C45,95 35,85 30,78 C25,72 18,68 15,60 C10,55 10,40 15,35 C18,28 15,20 20,12 C25,5 35,5 40,10 C45,5 50,0 50,0 Z" fill="none" stroke="#74b9ff" strokeWidth="2" fillOpacity="0.1" style={{ fill: "#74b9ff" }} />
  </svg>
);
const BadgePink = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
    <path d="M20,20 Q40,5 60,20 T90,50 Q95,70 80,85 T50,95 Q20,90 10,70 T20,20 Z" fill="#fab1a0" fillOpacity="0.2" />
  </svg>
);
const BadgeGreen = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
    <path d="M50,5 L60,25 L80,20 L85,40 L100,50 L85,60 L80,80 L60,75 L50,95 L40,75 L20,80 L15,60 L0,50 L15,40 L20,20 L40,25 Z" fill="#55efc4" fillOpacity="0.2" />
  </svg>
);
const BadgeRed = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ overflow: "visible" }}>
    <path d="M20,50 Q5,35 25,20 Q40,5 60,20 Q80,5 90,30 Q105,50 90,70 Q80,95 50,90 Q20,95 10,70 Q-5,65 20,50 Z" fill="#d63031" />
  </svg>
);

// --- 2. CONTENT DATA ---
const contentList = [
  {
    text: "BSIT 4th Year Student at \n Pamantasan ng Lungsod ng Valenzuela",
    Badge: BadgeBlue,
    Icon: TbSchool,
    color: "#0984e3", 
    badgePos: { right: "-100px", top: "-15px" }, 
    mobilePos: { right: "-10px", top: "-40px" } 
  },
  {
    text: "Aspiring Front-end \n Developer",
    Badge: BadgePink,
    Icon: TbCode,
    color: "#e84393", 
    badgePos: { right: "100%", marginRight: "20px", top: "-5px" }, 
    mobilePos: { left: "-10px", top: "-40px" }
  },
  {
    text: "Wants to Grow and Explore \n new things",
    Badge: BadgeGreen,
    Icon: TbPlant,
    color: "#00b894", 
    badgePos: { right: "-70px", bottom: "-15px" }, 
    mobilePos: { right: "-10px", bottom: "-30px" }
  },
  {
    text: "Science and Technology \n enthusiast",
    Badge: BadgeRed,
    Icon: TbAtom,
    color: "white",   
    badgePos: { right: "100%", marginRight: "20px", top: "5px" }, 
    mobilePos: { left: "-10px", top: "-20px" }
  }
];

function App() {
  const [count, setCount] = useState(1); 
  const navigate = useNavigate(); 
  const isMobile = useIsMobile(); 
  const isTablet = useIsTablet();

  const handleClick = () => {
    if (count < 4) {
      setCount(count + 1);
    } else {
      navigate("/projects"); 
    }
  };

  return (
    <div 
      style={{ 
        height: "100vh", 
        width: "100vw", 
        padding: isMobile ? "20px" : "50px", 
        boxSizing: "border-box", 
        position: "fixed",
        inset: 0,
        display: "block",
        fontFamily: "'Courier Prime', 'Courier New', monospace", 
        background: "#FFFBF0", 
        color: "#2d3436",
        overflow: "hidden", 
      }}
    >
      
      {/* --- TOP LEFT: NAME --- */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ 
          position: "absolute",
          top: isMobile ? "20px" : "50px",
          left: isMobile ? "20px" : "50px",
          fontSize: isMobile ? "3rem" : "5rem", 
          lineHeight: "1", 
          margin: 0,
          color: "#e17055", 
          fontWeight: "400", 
          letterSpacing: "-2px",
          zIndex: 5
        }}
      >
        Timothy Jerome <br /> Feraro
      </motion.h1>

      {/* --- CONTENT AREA --- */}
      <div style={{ 
          position: "absolute",
          left: isMobile ? "20px" : "50px",
          right: isMobile ? "20px" : "50px",
          bottom: isMobile ? "0px" : "50px",
          top: isMobile ? "0px" : "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-end",
          justifyContent: isMobile ? "center" : "flex-end",
          maxHeight: "100%",
          overflow: "visible",
          
          // --- ALIGNMENT FIX START ---
          // 1. Right padding: 
          paddingRight: isMobile ? "0" : "160px",
          
          // 2. Bottom Padding:
          paddingBottom: isMobile ? "120px" : "0px",
          // --- ALIGNMENT FIX END ---

          paddingTop: isMobile ? "80px" : "0px",
          zIndex: 3
      }}>
        
        {/* TEXT STACK */}
        <div style={{
           display: "flex",
           flexDirection: "column",
           alignItems: isMobile ? "center" : "flex-end", 
           position: "relative", 
           marginRight: "0px",
           marginBottom: "0px",
           width: "100%",
           justifyContent: "flex-end"
        }}>
          {contentList.slice(0, count).map((item, index) => {
            const isCurrent = index === count - 1;
            const BadgeComponent = item.Badge;
            const IconComponent = item.Icon;
            const pos = isMobile ? item.mobilePos : item.badgePos;
            const isHiddenOnMobile = isMobile && index < count - 1;

            if (isHiddenOnMobile) return null; 

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: isCurrent ? 1 : 0.4, y: 0 }} 
                transition={{ duration: 0.5 }}
                style={{
                  position: "relative", 
                  marginBottom: isMobile ? "40px" : (isTablet ? "32px" : "25px"), 
                  zIndex: isCurrent ? 10 : 5,
                  width: "fit-content", 
                  maxWidth: "100%", 
                  display: "flex",
                  flexDirection: "column", 
                  alignItems: isMobile ? "center" : "flex-end" 
                }}
              >
                {/* BADGE */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 15, -15, 0], 
                    y: [0, -10, 5, 0]        
                  }} 
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                  style={{ 
                    position: "absolute",
                    width: isMobile ? "90px" : (isTablet ? "95px" : "110px"), 
                    height: isMobile ? "90px" : (isTablet ? "95px" : "110px"),
                    zIndex: -1, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...pos 
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                    <BadgeComponent />
                  </div>
                  <IconComponent size={isMobile ? 35 : 40} color={item.color} style={{ zIndex: 2, opacity: 0.8 }} />
                </motion.div>

                {/* TEXT */}
                <p style={{ 
                  fontSize: isMobile ? "1.8rem" : (isTablet ? "2.0rem" : "2.5rem"), 
                  textAlign: isMobile ? "center" : "right", 
                  margin: 0, 
                  whiteSpace: "pre-line",
                  lineHeight: "1.25",
                  color: "#2d3436",
                  position: "relative",
                  pointerEvents: "none",
                  width: "auto" 
                }}>
                  {item.text}
                </p>

              </motion.div>
            );
          })}
        </div>

        {/* MAIN BUTTON */}
        <motion.div
          onClick={handleClick}
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: isMobile ? "30px" : "50px",
            right: isMobile ? "30px" : "50px",
            width: isMobile ? "80px" : "100px", 
            height: isMobile ? "80px" : "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100
          }}
        >
           <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
             <MainStickerBadge color={count >= 4 ? "#ff7675" : "#0984e3"} />
           </div>

           <TbArrowDown 
             size={isMobile ? 35 : 45} 
             color={count >= 4 ? "#ff7675" : "#0984e3"} 
             style={{ zIndex: 2 }}
           />
        </motion.div>

      </div>
    </div>
  );
}

export default App;