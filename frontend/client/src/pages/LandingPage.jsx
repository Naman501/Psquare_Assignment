import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export default function ResponsiveMinimalLanding() {
  // Track window width for responsive styling
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.page}>
      <Navbar isMobile={isMobile} />
      
      <div style={styles.contentWrapper}>
        <Hero isMobile={isMobile} />
        
        {/* --- ENHANCED COMPANIES SECTION --- */}
        <TrustedCompanies isMobile={isMobile} />
        
        <PhotoGallery isMobile={isMobile} />
      </div>

      <Footer />
    </div>
  );
}

/* ---------- DATA ---------- */

const companyList = [
  { 
    id: 1, 
    name: "TechNova", 
    industry: "Fintech & Blockchain", 
    jobs: 12, 
    logo: "T", 
    color: "#3b82f6" 
  },
  { 
    id: 2, 
    name: "GreenLeaf", 
    industry: "Renewable Energy", 
    jobs: 8, 
    logo: "G", 
    color: "#10b981" 
  },
  { 
    id: 3, 
    name: "QuantumSoft", 
    industry: "AI & Robotics", 
    jobs: 24, 
    logo: "Q", 
    color: "#8b5cf6" 
  },
  { 
    id: 4, 
    name: "UrbanBuild", 
    industry: "Modern Architecture", 
    jobs: 5, 
    logo: "U", 
    color: "#f59e0b" 
  },
  { 
    id: 5, 
    name: "MediCare+", 
    industry: "Health Tech", 
    jobs: 18, 
    logo: "M", 
    color: "#ef4444" 
  }
];

/* ---------- COMPONENTS ---------- */

function Navbar({ isMobile }) {
  return (
    <nav style={{...styles.nav, padding: isMobile ? "20px" : "24px 40px"}}>
      <h1 style={styles.logo}>PSQUARE ASSIGNMENT</h1>
      {!isMobile && (
        <div style={styles.navLinks}>
          <Link to="/contact" style={styles.link}>Get in touch</Link>
          <Link to="/signup" style={styles.ctaBtnNav}>Sign In</Link>
        </div>
      )}
      {isMobile && <span style={{fontSize: '0.8rem', fontWeight: 'bold'}}>MENU</span>}
    </nav>
  );
}

function Hero({ isMobile }) {
  return (
    <header style={{
      ...styles.heroSection, 
      flexDirection: isMobile ? "column-reverse" : "row",
      padding: isMobile ? "60px 0" : "100px 0" // Increased padding for more breathing room
    }}>
      <div style={{...styles.heroContent, textAlign: isMobile ? "center" : "left"}}>
        <h2 style={{
          ...styles.headline, 
          fontSize: isMobile ? "2rem" : "3.5rem",
          minHeight: isMobile ? "80px" : "130px" 
        }}>
          <Typewriter
            options={{
              strings: [
                'Find your dream job.', 
                'Hire top talent.', 
                'Manage companies effortlessly.',
                'Secure. Scalable. Simple.'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h2>
        
        <p style={{...styles.subtext, margin: isMobile ? "0 auto 30px" : "0 0 40px"}}>
          Connecting talent with opportunity. Secure. Fast. Built for the future of work. 
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: isMobile ? 'center' : 'flex-start' }}>
          <Link to="/signup" style={styles.primaryBtn}>Get Started</Link>
          <Link to="/companies" style={styles.secondaryBtn}>Browse Jobs</Link>
        </div>
      </div>
      
      <div style={{
        ...styles.heroImageContainer, 
        width: "100%", 
        height: isMobile ? "300px" : "500px"
      }}>
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80" 
          alt="Modern Office Workspace"
          style={styles.heroImage}
        />
      </div>
    </header>
  );
}

// --- ENHANCED COMPONENT ---
function TrustedCompanies({ isMobile }) {
  return (
    <section style={styles.companySection}>
      <div style={styles.sectionHeader}>
        <p style={styles.companyHeader}>FEATURED EMPLOYERS</p>
        <div style={styles.separator}></div>
      </div>

      <div style={{
        ...styles.logoGrid,
        flexDirection: isMobile ? "column" : "row", // Stack on mobile
        gap: "30px" // More space between cards
      }}>
        {companyList.map((company) => (
          <div key={company.id} style={styles.companyCard}>
            
            {/* Logo and Name Row */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{...styles.logoCircle, backgroundColor: company.color + "20", color: company.color}}>
                {company.logo}
              </div>
              <div style={{ marginLeft: '12px' }}>
                <span style={styles.companyName}>{company.name}</span>
                <span style={styles.companyIndustry}>{company.industry}</span>
              </div>
            </div>

            {/* Job Count Badge */}
            <div style={styles.jobBadge}>
              {company.jobs} Open Positions
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

function PhotoGallery({ isMobile }) {
  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&fit=crop", alt: "Interior" },
    { id: 2, src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&fit=crop", alt: "Concrete" },
    { id: 3, src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&fit=crop", alt: "Design" },
  ];

  return (
    <section style={styles.gallerySection}>
      <div style={styles.sectionHeader}>
        <h3 style={styles.sectionTitle}>Selected Projects</h3>
        <div style={styles.separator}></div>
      </div>
      
      <div style={{
        ...styles.grid,
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)"
      }}>
        {photos.map((photo) => (
          <div key={photo.id} style={styles.gridItem}>
            <img src={photo.src} alt={photo.alt} style={styles.gridImage} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <span style={styles.footerText}>©2025 PSQUARE ASSIGNMENT.</span>
    </footer>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  page: {
    backgroundColor: "#fff",
    color: "#1a1a1a",
    fontFamily: 'Inter, system-ui, sans-serif',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    margin: "0 auto",
    width: "100%",
    padding: "0 40px", // More side padding for the whole page
    boxSizing: "border-box",
  },
  
  /* Navbar */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    borderBottom: "1px solid #f3f4f6"
  },
  logo: { fontSize: "1.1rem", fontWeight: "800", letterSpacing: "2px" },
  navLinks: { display: "flex", alignItems: "center", gap: "30px" },
  link: { textDecoration: "none", color: "#666", fontSize: "0.9rem", fontWeight: "500" },
  ctaBtnNav: {
    textDecoration: "none",
    color: "#000",
    fontSize: "0.8rem",
    fontWeight: "700",
    border: "1px solid #000",
    padding: "10px 20px",
    borderRadius: "4px"
  },
  
  /* Hero */
  heroSection: {
    display: "flex",
    alignItems: "center",
    gap: "60px", // Increased gap between text and image
  },
  heroContent: { flex: 1 },
  headline: {
    fontWeight: "300",
    lineHeight: "1.1",
    marginBottom: "24px",
  },
  subtext: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.6",
    maxWidth: "450px",
  },
  heroImageContainer: { flex: 1, overflow: "hidden", backgroundColor: "#f9f9f9", borderRadius: "4px" },
  heroImage: { width: "100%", height: "100%", objectFit: "cover" },
  
  /* Buttons */
  primaryBtn: {
    display: "inline-block",
    backgroundColor: "#000",
    color: "#fff",
    padding: "16px 36px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    borderRadius: "4px"
  },
  secondaryBtn: {
    display: "inline-block",
    backgroundColor: "transparent",
    color: "#000",
    border: "1px solid #e5e7eb",
    padding: "16px 36px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    borderRadius: "4px"
  },

  /* --- ENHANCED COMPANY CARD STYLES --- */
  companySection: {
    padding: "80px 0", // More vertical space
    borderBottom: "1px solid #f1f5f9",
  },
  companyHeader: {
    fontSize: "0.85rem",
    fontWeight: "800",
    color: "#94a3b8",
    letterSpacing: "2px",
    textAlign: "center",
    marginBottom: "10px"
  },
  logoGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "40px"
  },
  
  /* Individual Company Card */
  companyCard: {
    border: "1px solid #f3f4f6",
    borderRadius: "12px",
    padding: "24px",
    minWidth: "200px",
    flex: "1 1 200px", // Flex grow, shrink, basis
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    backgroundColor: "#fff"
  },
  logoCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: "1.2rem"
  },
  companyName: {
    display: "block",
    fontWeight: "700",
    color: "#1e293b",
    fontSize: "1rem"
  },
  companyIndustry: {
    display: "block",
    fontSize: "0.75rem",
    color: "#94a3b8",
    marginTop: "2px",
    fontWeight: "500"
  },
  jobBadge: {
    marginTop: "15px",
    fontSize: "0.8rem",
    color: "#4f46e5",
    backgroundColor: "#eef2ff",
    padding: "6px 12px",
    borderRadius: "20px",
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "start"
  },

  /* Gallery */
  gallerySection: { padding: "80px 0" },
  sectionHeader: { marginBottom: "50px", textAlign: "center" },
  sectionTitle: { fontSize: "1.4rem", fontWeight: "400", letterSpacing: "1px" },
  separator: { width: "40px", height: "2px", backgroundColor: "#000", margin: "15px auto" },
  grid: { display: "grid", gap: "30px" }, // Increased gap
  gridItem: { height: "400px", overflow: "hidden", borderRadius: "4px" },
  gridImage: { width: "100%", height: "100%", objectFit: "cover" },
  
  /* Footer */
  footer: { padding: "60px 0", borderTop: "1px solid #eee", textAlign: "center" },
  footerText: { color: "#999", fontSize: "0.75rem", letterSpacing: "1px" }
};