import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { projectsData } from "./projectsData";
import ScrollToTop from "./ScrollToTop"; 

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
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
}

function ProjectCard({ id, title, subtitle, color, rotate, topPosition, width, height, isMobile, isTablet, align, image }) {
  const [isHovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const isTouchLayout = isMobile || isTablet;

  const initialAnim = isTouchLayout 
    ? { opacity: 0, y: 50 } 
    : { rotateX: rotate.x, rotateY: rotate.y, rotateZ: rotate.z, y: 100, opacity: 0 };

  const finalAnim = isTouchLayout 
    ? { opacity: 1, y: 0 } 
    : { rotateX: rotate.x, rotateY: rotate.y, rotateZ: rotate.z, y: 0, opacity: 1 };

  return (
    <motion.div
      onClick={() => navigate(`/project/${id}`)}
      initial={initialAnim}
      animate={finalAnim}
      transition={{ duration: 0.8, type: "spring" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={!isTouchLayout ? { 
        scale: 1.05, 
        zIndex: 100, 
        rotateX: 0, rotateY: 0, rotateZ: 0,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.3)" 
      } : {}}
      style={{
        position: isTouchLayout ? "relative" : "absolute",
        top: isTouchLayout ? "auto" : topPosition,
        left: isTouchLayout ? "auto" : (align === "right" ? "50%" : "auto"),
        right: isTouchLayout ? "auto" : (align === "left" ? "50%" : "auto"),
        marginLeft: isTouchLayout ? "0" : (align === "right" ? "30px" : "0"),
        marginRight: isTouchLayout ? "0" : (align === "left" ? "30px" : "0"),
        width: isTouchLayout ? "90%" : width,
        maxWidth: "400px",
        height: height,
        background: "white",
        borderRadius: "20px", 
        cursor: "pointer",
        transformStyle: isTouchLayout ? "flat" : "preserve-3d", 
        overflow: "hidden",
        boxShadow: "0px 15px 35px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: color,
          display: "flex",
        alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {image ? (
          <img 
            src={image} 
            alt={title} 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block"
            }}
          />
        ) : (
          <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "bold", fontSize: "1.5rem" }}>
            NO IMAGE
          </span>
        )}
      </div>

      <motion.div
        animate={{ opacity: (isHovered || isTouchLayout) ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)",
          pointerEvents: "none"
        }}
      />

      <motion.div
        animate={{ 
          y: (isHovered || isTouchLayout) ? 0 : 40, 
          opacity: (isHovered || isTouchLayout) ? 1 : 0 
        }}
        transition={{ duration: 0.3, type: "spring" }}
        style={{
          position: "absolute",
          bottom: 0, left: 0, width: "100%", padding: "20px", boxSizing: "border-box", zIndex: 10
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "700", color: "#fff" }}>{title}</h2>
        <p style={{ margin: "5px 0 0 0", fontSize: "0.95rem", color: "#ddd" }}>{subtitle}</p>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <div style={{ 
      overflowX: "hidden",
      background: "#FFFBF0",
      color: "#2d3436",
      minHeight: "100vh",
      fontFamily: "'Courier Prime', 'Courier New', monospace"
    }}>
      
      <ScrollToTop /> 
      <div style={{ 
        position: "relative", 
        height: (isMobile || isTablet) ? "auto" : "2400px", 
        width: "100%", 
        padding: (isMobile || isTablet) ? "24px" : "50px",
        boxSizing: "border-box",
        maxWidth: (isMobile || isTablet) ? "1000px" : "1200px", margin: "0 auto",
        perspective: "1500px", 
        paddingTop: (isMobile || isTablet) ? "80px" : "140px", paddingBottom: (isMobile || isTablet) ? "90px" : "100px",
        display: "flex", 
        flexDirection: "column", alignItems: "center", gap: (isMobile || isTablet) ? "32px" : "0" 
      }}>
        
        <div style={{ textAlign: "center", marginBottom: "60px",marginTop:"30px", width: "100%" }}>
          <h1 style={{ 
            fontSize: isTablet ? "3rem" : "3.5rem", 
            margin: 0, 
            color: "#e17055",
            fontWeight: "400",
            letterSpacing: "-2px"
          }}>Selected Works</h1>
        </div>

        {projectsData.map((p) => (
          <ProjectCard 
            key={p.id}
            id={p.id}
            title={p.title}
            subtitle={p.subtitle}
            image={p.image}
            color={p.color}
            rotate={p.rotate}
            topPosition={p.topPosition}
            width={p.width}
            height={p.height}
            align={p.align}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        ))}

      </div>
    </div>
  );
}

export default Projects;