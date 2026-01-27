import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TbArrowLeft } from "react-icons/tb";
import { projectsData } from "./projectsData";

// --- HELPER HOOK ---
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile(); 

  const project = projectsData.find((p) => p.id === parseInt(id));

  const gallery = useMemo(() => {
    const imgs = Array.isArray(project?.gallery) ? project.gallery.filter(Boolean) : [];
    if (imgs.length > 0) return imgs;
    return project?.image ? [project.image] : [];
  }, [project]);

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    // Reset carousel when switching projects
    setActiveImageIdx(0);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: "100vh",
        // --- STYLE CHANGE: INVERTED COLORS ---
        background: "#2d3436", // Dark background (was text color)
        color: "#FFFBF0",      // Light text (was background color)
        fontFamily: "'Courier Prime', 'Courier New', monospace",
        padding: isMobile ? "140px 20px 30px" : "160px 40px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px" }}>
        
        {/* Back Button (Styled for Dark Mode) */}
        <div 
          onClick={() => navigate(-1)}
          style={{ 
            display: "flex", alignItems: "center", gap: "10px", 
            cursor: "pointer", 
            marginBottom: isMobile ? "40px" : "60px", 
            color: "#e17055", // Accent color for navigation
            fontWeight: "600", fontSize: "1rem",
            opacity: 0.8
          }}
        >
          <TbArrowLeft size={24} /> <span>BACK TO INDEX</span>
        </div>

        {/* 1. Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ 
            color: "#FFFBF0", 
            opacity: 0.5,
            fontSize: "0.9rem", 
            fontWeight: "400", margin: "0 0 20px 0", 
            textTransform: "uppercase", letterSpacing: "2px" 
          }}>
            {project.category}
          </h3>

          <h1 style={{ 
            color: "#FFFBF0", 
            fontSize: isMobile ? "2.5rem" : "4.5rem", 
            lineHeight: "1.1", fontWeight: "400", 
            margin: "0 0 60px 0",
            letterSpacing: "-1px"
          }}>
            {project.headline}
          </h1>
        </motion.div>

        {/* 2. Metadata Grid (Clean Lines Style) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", 
          gap: "40px", 
          borderTop: "1px solid rgba(255, 251, 240, 0.2)", 
          borderBottom: "1px solid rgba(255, 251, 240, 0.2)", 
          padding: "40px 0", marginBottom: "80px"
        }}>
          <div>
            <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "10px", textTransform: "uppercase" }}>Company</div>
            <div style={{ fontSize: "1.1rem" }}>{project.meta.company}</div>
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "10px", textTransform: "uppercase" }}>Role</div>
            <div style={{ fontSize: "1.1rem" }}>{project.meta.role}</div>
          </div>
          <div>
            <div style={{ fontSize: "0.75rem", opacity: 0.5, marginBottom: "10px", textTransform: "uppercase" }}>Date</div>
            <div style={{ fontSize: "1.1rem" }}>{project.meta.date}</div>
          </div>
        </div>

        {/* 3. The Content (Two Column on Desktop for Variety) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", // Left label, Right text
          gap: isMobile ? "30px" : "60px",
          marginBottom: "100px"
        }}>
          
          {/* Context Section */}
          <div style={{ color: "#e17055", fontWeight: "bold", fontSize: "1.2rem" }}>
            The Context
          </div>
          <p style={{ 
            fontSize: isMobile ? "1.1rem" : "1.4rem", 
            lineHeight: "1.6", margin: 0, opacity: 0.9 
          }}>
            {project.context}
          </p>

          {/* Spacer */}
          <div style={{ height: "20px" }}></div>
          <div style={{ height: "20px" }}></div>

          {/* Role Section */}
          <div style={{ color: "#e17055", fontWeight: "bold", fontSize: "1.2rem" }}>
            My Role
          </div>
          <p style={{ 
            fontSize: isMobile ? "1.1rem" : "1.4rem", 
            lineHeight: "1.6", margin: 0, opacity: 0.9 
          }}>
            {project.roleDescription}
          </p>
        </div>

        {/* 4. Image Carousel */}
        {gallery.length > 0 && (
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ 
              width: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <div style={{ position: "relative", width: "100%", height: isMobile ? "260px" : "560px" }}>
              <img
                src={gallery[activeImageIdx]}
                alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />

              {gallery.length > 1 && (
                <>
                  {/* Prev */}
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setActiveImageIdx((i) => (i - 1 + gallery.length) % gallery.length)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: isMobile ? "10px" : "16px",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "rgba(0,0,0,0.45)",
                      color: "#FFFBF0",
                      width: isMobile ? "40px" : "46px",
                      height: isMobile ? "40px" : "46px",
                      borderRadius: "999px",
                      cursor: "pointer",
                      fontSize: "22px",
                      lineHeight: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(6px)"
                    }}
                  >
                    ‹
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setActiveImageIdx((i) => (i + 1) % gallery.length)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: isMobile ? "10px" : "16px",
                      transform: "translateY(-50%)",
                      border: "none",
                      background: "rgba(0,0,0,0.45)",
                      color: "#FFFBF0",
                      width: isMobile ? "40px" : "46px",
                      height: isMobile ? "40px" : "46px",
                      borderRadius: "999px",
                      cursor: "pointer",
                      fontSize: "22px",
                      lineHeight: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(6px)"
                    }}
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {gallery.length > 1 && (
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "14px 16px",
                background: "rgba(0,0,0,0.25)"
              }}>
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to image ${idx + 1}`}
                    onClick={() => setActiveImageIdx(idx)}
                    style={{
                      width: idx === activeImageIdx ? "22px" : "10px",
                      height: "10px",
                      borderRadius: "999px",
                      border: "none",
                      background: idx === activeImageIdx ? "#e17055" : "rgba(255,255,255,0.35)",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}

export default ProjectPage;