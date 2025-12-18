import axios from "../api/axiosInstance";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await axios.post("/auth/login", { email, password });
      
      // Save data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      // Redirect based on role (optional logic, defaults to admin here)
      navigate("/admin"); 
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Sign in to your account</p>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input 
            style={styles.input}
            type="email"
            placeholder="psquare@assignment.com"
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input 
            style={styles.input}
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <button 
          style={styles.button} 
          onClick={submit}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Login
        </button>

        <p style={styles.footerText}>
          Don't have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc", // Slate-50
    fontFamily: "'Inter', sans-serif",
    padding: "20px"
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    padding: "40px",
    boxSizing: "border-box"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#1e293b", // Slate-800
    marginBottom: "8px",
    marginTop: 0
  },
  subtitle: {
    fontSize: "0.95rem",
    color: "#64748b", // Slate-500
    margin: 0
  },
  formGroup: {
    marginBottom: "20px"
  },
  label: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#334155", // Slate-700
    marginBottom: "8px"
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1", // Slate-300
    fontSize: "1rem",
    color: "#334155",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.2s",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#4f46e5", // Indigo-600
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.2s"
  },
  buttonHover: {
    backgroundColor: "#4338ca" // Indigo-700
  },
  footerText: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "0.9rem",
    color: "#64748b"
  },
  link: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "600"
  }
};