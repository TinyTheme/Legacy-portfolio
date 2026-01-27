import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { 
  TbMail, 
  TbBrandFacebook, 
  TbBrandLinkedin, 
  TbFileDescription, 
  TbMenu2, 
  TbX      
} from "react-icons/tb";

// --- CONFIGURATION ---
const ACTIVE_BG_COLOR = "#1f1f1f"; 
const ACTIVE_TEXT_COLOR = "#ffffff";

// ... configuration constants

function useIsPhone() {
  // Only phones get the compact header (no middle social icons)
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth < 768);
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return isPhone;
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

function Header() {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isPhone = useIsPhone();
  const isTablet = useIsTablet();
  const location = useLocation();

  // Hide the header on the landing page
  if (location.pathname === "/") {
    return null;
  }

  // Detect when we're on a project detail page to swap theme
  const isProjectDetail = location.pathname.startsWith("/project/");

  // Theme values depending on page
  const headerBackground = isProjectDetail
    ? "linear-gradient(to bottom, rgba(45,52,54,0.9) 0%, rgba(45,52,54,0) 100%)"
    : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)";

  const baseTextColor = isProjectDetail ? "#FFFBF0" : "black";
  const activeTextColor = isProjectDetail ? "#2d3436" : ACTIVE_TEXT_COLOR;
  const activeBgColor = isProjectDetail ? "#FFFBF0" : ACTIVE_BG_COLOR;
  const mobileDrawerBg = isProjectDetail ? "#1f1f1f" : "white";
  const mobileBaseTextColor = isProjectDetail ? "#f5f5f5" : "#333";
  const mobileDividerColor = isProjectDetail ? "rgba(255,255,255,0.2)" : "#eee";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("timothy.work.10@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const iconStyle = { fontSize: "1.5rem", cursor: "pointer", color: baseTextColor, strokeWidth: 1.5 };

  // --- REUSABLE SOCIAL ICONS ---
  const SocialIcons = () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>
      {/* Email */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <motion.div whileHover={{ scale: 1.2 }} onClick={handleCopyEmail}>
            <TbMail style={iconStyle} />
          </motion.div>
          {copied && (
            <span style={{ 
              position: "absolute", top: "35px", left: "-15px", fontSize: "0.75rem", 
              background: "#333", color: "white", padding: "4px 8px", borderRadius: "4px",
              zIndex: 200, width: "max-content"
            }}>
              Copied!
            </span>
          )}
      </div>

{/* 1. Facebook */}
      <motion.a 
        whileHover={{ scale: 1.2 }} 
        href="https://www.facebook.com/thememoti/" 
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <TbBrandFacebook style={iconStyle} />
      </motion.a>

      {/* 2. LinkedIn */}
      <motion.a 
        whileHover={{ scale: 1.2 }} 
        href="https://www.linkedin.com/in/timothyjeromeferaro" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandLinkedin style={iconStyle} />
      </motion.a>

      {/* 3. Resume */}
      <motion.a 
        whileHover={{ scale: 1.2 }} 
        href="resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbFileDescription style={iconStyle} />
      </motion.a>
    </div>
  );

  // Helper to determine if a path is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* --- MAIN HEADER BAR --- */}
      <div style={{
        position: "fixed", 
        top: 0, left: 0, right: 0,
        background: headerBackground,
        zIndex: 100,
        pointerEvents: "none", 
        padding: isPhone
          ? "16px 20px 40px 20px"
          : (isTablet ? "16px 70px 40px 70px" : "20px 240px 60px 240px")
      }}>
        
        <div style={{
          maxWidth: "1200px",       
          margin: "0 auto",        
          display: "grid",          
          // Phone: logo + hamburger
          // Tablet: logo + centered social icons + hamburger
          // Desktop: logo + centered social icons + nav
          gridTemplateColumns: isPhone ? "1fr auto" : "auto 1fr auto",
          alignItems: "center",
          columnGap: (isPhone || isTablet) ? "12px" : "0px"
        }}>

          {/* 1. LEFT: Logo */}
         <Link 
            to="/projects" 
            style={{ 
              pointerEvents: "auto", 
              fontWeight: "bold", 
              fontSize: "1.2rem", 
              justifySelf: "start",
              textDecoration: "none", 
              color: baseTextColor          
            }}
          >
            TJ Feraro
          </Link>

          {/* 2. CENTER: Social Icons (tablet + desktop only) */}
          {!isPhone && (
            <div style={{ 
              pointerEvents: "auto", 
              justifySelf: "center",
              display: "flex",
              alignItems: "center"
            }}>
              <SocialIcons />
            </div>
          )}

          {/* 3. RIGHT: Navigation (Desktop) OR Hamburger (Mobile) */}
          <div style={{ pointerEvents: "auto", justifySelf: "end" }}>
            
            {/* --- Desktop Menu (The Pill) --- */}
            {!isPhone && !isTablet && (
              <div style={{ display: "flex", gap: "10px", fontSize: "1rem", fontWeight: "500" }}>
                
                {/* PROJECTS LINK */}
                <Link to="/projects" style={{ 
                    position: "relative", 
                    padding: "8px 20px",
                    textDecoration: "none", 
                    // Dynamic Text Color: White if active, Black if not
                    color: isActive("/projects") ? activeTextColor : baseTextColor, 
                    display: "flex", 
                    alignItems: "center",
                    transition: "color 0.3s ease"
                  }}>
                  {isActive("/projects") && (
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: activeBgColor, // Adapts to theme
                        borderRadius: "999px",
                        zIndex: -1 
                      }}
                      layout={false}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>Projects</span>
                </Link>

                {/* ABOUT LINK */}
                <Link to="/about" style={{ 
                    position: "relative", 
                    padding: "8px 20px", 
                    textDecoration: "none", 
                    // Dynamic Text Color
                    color: isActive("/about") ? activeTextColor : baseTextColor, 
                    display: "flex", 
                    alignItems: "center",
                    transition: "color 0.3s ease"
                  }}>
                  {isActive("/about") && (
                     <motion.div
                       style={{
                         position: "absolute",
                         inset: 0,
                        backgroundColor: activeBgColor, // Adapts to theme
                         borderRadius: "999px",
                         zIndex: -1 
                       }}
                       layout={false}
                       transition={{ duration: 0.2 }}
                     />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>About</span>
                </Link>

              </div>
            )}

            {/* Phone/Tablet Hamburger */}
            {(isPhone || isTablet) && (
              <div 
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }} 
                onClick={() => setMenuOpen(true)}
              >
                <TbMenu2 size={30} />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* --- MOBILE SIDE DRAWER --- */}
      <AnimatePresence>
        {(isPhone || isTablet) && menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "black", zIndex: 101 }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}    
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, width: "300px", height: "100vh",
                background: mobileDrawerBg, zIndex: 102, padding: "24px",
                display: "flex", flexDirection: "column", boxShadow: "-5px 0 15px rgba(0,0,0,0.1)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
                <TbX size={30} style={{ cursor: "pointer", color: mobileBaseTextColor }} onClick={() => setMenuOpen(false)} />
              </div>

              {/* --- Mobile Links (Whole container active) --- */}
              <div style={{ display: "flex", flexDirection: "column", gap: "15px", fontSize: "1.2rem", fontWeight: "600" }}>
                 {/* Projects Mobile Link */}
                 <Link to="/projects" onClick={() => setMenuOpen(false)} 
                  style={{ 
                    position: "relative", 
                    textDecoration: "none", 
                    // Text color flips to white if active
                    color: isActive("/projects") ? activeTextColor : mobileBaseTextColor, 
                    display: "flex", alignItems: "center", gap: "15px",
                    padding: "12px 15px", // Add padding so the background looks like a container
                    borderRadius: "8px"
                  }}>
                   {isActive("/projects") && (
                     <motion.div
                       layoutId="mobileActiveBg" 
                       style={{
                         position: "absolute", inset: 0,
                        backgroundColor: activeBgColor,
                         borderRadius: "8px", zIndex: -1
                       }}
                     />
                   )}
                    {/* Ensure text sits above background */}
                   <span style={{position: "relative", zIndex: 1}}>Projects</span>
                </Link>

                {/* About Mobile Link */}
                <Link to="/about" onClick={() => setMenuOpen(false)} 
                  style={{ 
                    position: "relative",
                    textDecoration: "none", 
                    color: isActive("/about") ? activeTextColor : mobileBaseTextColor, 
                    display: "flex", alignItems: "center", gap: "15px",
                    padding: "12px 15px",
                    borderRadius: "8px"
                  }}>
                   {isActive("/about") && (
                     <motion.div
                       layoutId="mobileActiveBg"
                       style={{
                         position: "absolute", inset: 0,
                        backgroundColor: activeBgColor,
                         borderRadius: "8px", zIndex: -1
                       }}
                     />
                   )}
                   <span style={{position: "relative", zIndex: 1}}>About Me</span>
                </Link>
              </div>

              <div style={{ flex: 1 }}></div>

              {/* Phone only: show social icons inside the hamburger menu.
                  Tablet: icons are already in the header center, so keep the drawer clean. */}
              {isPhone && (
                <div style={{ borderTop: `1px solid ${mobileDividerColor}`, paddingTop: "20px" }}>
                  <p style={{ color: mobileBaseTextColor, fontSize: "0.9rem", marginBottom: "15px", opacity: 0.8 }}>Connect with me</p>
                  <SocialIcons />
                </div>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;