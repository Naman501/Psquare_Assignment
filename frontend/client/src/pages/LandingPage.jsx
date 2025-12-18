import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.mainContent}>
        <Hero />
        <div style={styles.featureRow}>
          <Features />
          <HowItWorks />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.containerRow}>
        <h2 style={styles.logo}>JobBank</h2>
        <div style={styles.navLinks}>
          <Link to="/companies" style={styles.link}>Companies</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.primaryBtn}>Get Started</Link>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={styles.heroSection}>
      <div style={styles.containerCenter}>
        <h1 style={styles.heroTitle}>Find Jobs. Manage Companies. <span style={styles.accentText}>Hire Smarter.</span></h1>
        <p style={styles.text}>
          A secure Job Bank platform built using the MERN stack with OTP-based
          authentication and admin-managed job postings.
        </p>
        <div style={styles.btnGroup}>
          <Link to="/signup" style={styles.primaryBtn}>Create Account</Link>
          <Link to="/companies" style={styles.secondaryBtn}>Browse Companies</Link>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section style={styles.subSection}>
      <h3>Why JobBank?</h3>
      <div style={styles.grid}>
        <Card title="OTP Auth" desc="Secure email verification." />
        <Card title="Admin View" desc="Manage jobs easily." />
        <Card title="Full CRUD" desc="Post, Edit, Delete." />
      </div>
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div style={styles.card}>
      <h4 style={{ margin: "0 0 8px 0", color: "#4f46e5" }}>{title}</h4>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>{desc}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section style={styles.subSection}>
      <h3>How It Works</h3>
      <ul style={styles.steps}>
        <li>1. Sign up & Verify OTP</li>
        <li>2. Set password & Login</li>
        <li>3. Manage your Job Board</li>
      </ul>
    </section>
  );
}

function CTA() {
  return (
    <section style={styles.cta}>
      <h2>Ready to get started?</h2>
      <Link to="/signup" style={styles.primaryBtnLarge}>Join JobBank Today</Link>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 JobBank | MERN Stack Application</p>
    </footer>
  );
}

/* ---------- IMPROVED STYLES ---------- */

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8fafc", // Soft Slate
    color: "#1e293b",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden" // Prevents body scroll
  },

  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "20px"
  },

  nav: {
    background: "white",
    padding: "0.5rem 2rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  },

  containerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto"
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#4f46e5", // Indigo
    letterSpacing: "-1px"
  },

  /* Hero */
  heroSection: {
    textAlign: "center",
    padding: "20px 0"
  },

  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "1rem"
  },

  accentText: {
    color: "#4f46e5"
  },

  text: {
    color: "#64748b",
    maxWidth: "600px",
    margin: "0 auto 20px auto",
    fontSize: "1.1rem"
  },

  /* Layout for Mid-section */
  featureRow: {
    display: "flex",
    gap: "20px",
    maxWidth: "1100px",
    margin: "0 auto",
    alignItems: "start"
  },

  subSection: {
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px"
  },

  card: {
    padding: "12px",
    border: "1px solid #e2e8f0",
    borderRadius: "8px"
  },

  steps: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
    color: "#475569",
    fontWeight: "500"
  },

  /* Buttons */
  primaryBtn: {
    background: "#4f46e5",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.2s"
  },

  primaryBtnLarge: {
    background: "#4f46e5",
    color: "white",
    padding: "14px 28px",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "600"
  },

  secondaryBtn: {
    border: "2px solid #e2e8f0",
    color: "#475569",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    marginLeft: "10px"
  },

  cta: {
    textAlign: "center",
    padding: "30px"
  },

  footer: {
    textAlign: "center",
    padding: "10px",
    fontSize: "0.8rem",
    color: "#94a3b8",
    borderTop: "1px solid #e2e8f0"
  }
};