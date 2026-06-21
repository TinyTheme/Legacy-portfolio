import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

 

function About() {
  // 1. Responsive State Logic
  // Phones only. iPad/tablet behaves like desktop layout with adjusted sizing.
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Colors
  const charcoal = "#1f1f1f"; 
  const creamBg = "#FFFBF0"; 

  return (
    <>
   

      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: creamBg, 
        // Mobile: stacked + tight padding
        // Tablet: desktop layout, but less side padding
        // Desktop: full side padding
        padding: isMobile ? "80px 20px 40px" : (isTablet ? "60px 60px 40px" : "40px 240px 30px"),
      }}>
        
        <div style={{
          maxWidth: "1200px", 
          width: "100%",
          display: "grid",
          // Mobile: 1 column
          // Tablet/Desktop: 2 columns
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
          gap: isMobile ? "30px" : (isTablet ? "40px" : "60px"), 
          alignItems: "center"
        }}>

          {/* --- LEFT COLUMN (TEXT) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              order: isMobile ? 2 : 1, // Text moves to bottom on mobile
              textAlign: "left" 
            }}
          >
            <h1 style={{ 
              fontFamily: "'Courier New', Courier, monospace", 
              fontSize: isMobile ? "2.2rem" : (isTablet ? "3rem" : "3.5rem"), 
              fontWeight: "700", 
              color: charcoal, 
              lineHeight: 1.2,
              marginBottom: "30px"
            }}>
              Hello!<br/>
              I'm <span style={{ 
                letterSpacing: "0.05em" 
              }}>TJ Feraro</span>.
            </h1>

            <div style={{ 
              fontSize: "1.1rem", 
              lineHeight: "1.5", 
              opacity: 0.8, 
              display: "flex", 
              flexDirection: "column", 
              color: charcoal,
              fontFamily: "sans-serif" 
            }}>
              <p>
                My full name is <strong>Timothy Jerome Feraro</strong>, and I’m a 4th Year BSIT student at <strong>Pamantasan ng Lungsod ng Valenzuela</strong> with a love for building things on the web. 
              </p>
              <p>
                For me, coding isn't just about syntax, it's about finding <strong>creative solutions</strong> to real-world problems.
              </p>
              <p>
                Right now, I’m specializing in <strong>Front-End Development</strong>, ensuring that every pixel serves a purpose. However, I never stop learning; I’m currently diving deep into backend technologies to evolve into a versatile <strong>Full-Stack Developer</strong>.
              </p>
              <p style={{ marginTop: "10px" }}>
                 I love the challenge of taking an idea from concept to a fully functional application.
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (IMAGE) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              display: "flex", 
              justifyContent: isMobile ? "center" : "flex-end",
              order: isMobile ? 1 : 2 // Image moves to top on mobile
            }}
          >
            <div style={{
              width: isMobile ? "100%" : (isTablet ? "340px" : "400px"),
              maxWidth: isMobile ? "320px" : "none", 
              height: isMobile ? "320px" : (isTablet ? "480px" : "550px"),
              backgroundColor: "#e5e0d8", 
              borderRadius: "200px", 
              overflow: "hidden",
              position: "relative",
              boxShadow: "15px 15px 0px rgba(0,0,0,0.05)"
            }}>
              <img 
                src="/Portfolio/images/Minimalist.webp"
                alt="TJ Feraro"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)"
              }} />
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default About;