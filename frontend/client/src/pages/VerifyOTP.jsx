import { useState } from "react";
import axios from "../api/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isResending, setIsResending] = useState(false);

  const submit = async () => {
    if (!otp) return alert("Please enter the OTP.");
    
    try {
      await axios.post("/auth/verify-otp", {
        email: state?.email,
        otp
      });
      navigate("/set-password", { state });
    } catch (error) {
      console.error("OTP Verification failed:", error);
      alert("Invalid or expired OTP. Please try again.");
    }
  };

  const handleResend = async () => {
    if (isResending) return;
    
    setIsResending(true);
    try {
      // Replace with your actual resend endpoint
      await axios.post("/auth/resend-otp", { 
        email: state?.email 
      });
      alert("A new OTP has been sent to your email.");
    } catch (error) {
      console.error("Resend failed:", error);
      alert("Failed to resend OTP. Please try again later.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Verify Your Email</h2>
          <p style={styles.subtitle}>
            We've sent a code to <br/>
            <span style={styles.emailHighlight}>{state?.email || "your email"}</span>
          </p>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Enter OTP Code</label>
          <input 
            style={styles.input}
            // placeholder="e.g. 123456" 
            maxLength={6}
            value={otp}
            onChange={e => setOtp(e.target.value)} 
          />
        </div>

        <button 
          style={styles.button} 
          onClick={submit}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Verify Code
        </button>

        {/* Resend OTP Section */}
        <div style={styles.resendContainer}>
          <span style={styles.resendText}>Didn't receive code?</span>
          <button 
            style={styles.resendLink} 
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? "Sending..." : "Resend OTP"}
          </button>
        </div>

        <button style={styles.textButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
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
    boxSizing: "border-box",
    textAlign: "center"
  },
  header: {
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
    margin: 0,
    lineHeight: "1.5"
  },
  emailHighlight: {
    color: "#1e293b",
    fontWeight: "600"
  },
  formGroup: {
    marginBottom: "24px",
    textAlign: "left"
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
    fontSize: "1.2rem", // Larger font for OTP
    letterSpacing: "4px", // Spacing for code readability
    color: "#334155",
    textAlign: "center",
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
    transition: "background-color 0.2s"
  },
  buttonHover: {
    backgroundColor: "#4338ca" // Indigo-700
  },
  
  // --- NEW STYLES ADDED BELOW ---
  resendContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px", // Space between text and button
    fontSize: "0.9rem",
  },
  resendText: {
    color: "#64748b", // Slate-500 (matches subtitle)
  },
  resendLink: {
    background: "none",
    border: "none",
    color: "#4f46e5", // Indigo-600 (matches primary button)
    fontWeight: "600",
    cursor: "pointer",
    padding: 0,
    fontSize: "inherit",
    fontFamily: "inherit",
    textDecoration: "none",
  },
  // ------------------------------

  textButton: {
    background: "none",
    border: "none",
    color: "#94a3b8", // Slate-400 (lighter than before to de-emphasize)
    marginTop: "16px",
    cursor: "pointer",
    fontSize: "0.85rem",
    textDecoration: "underline",
    transition: "color 0.2s"
  }
};