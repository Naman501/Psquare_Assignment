// import { useState } from "react";
// import axios from "../api/axiosInstance";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function SetPassword() {
//   const [password, setPassword] = useState("");
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const submit = async () => {
//     await axios.post("/auth/set-password", {
//       email: state.email,
//       password
//     });
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Set Password</h2>
//       <input
//         type="password"
//         placeholder="New Password"
//         onChange={e => setPassword(e.target.value)}
//       />
//       <button onClick={submit}>Save Password</button>
//     </div>
//   );
// }

import { useState } from "react";
import axios from "../api/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const submit = async () => {
    if (!password) return alert("Please enter a password.");

    try {
      await axios.post("/auth/set-password", {
        email: state?.email,
        password
      });
      alert("Password set successfully! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Failed to set password:", error);
      alert("Error setting password. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Secure Your Account</h2>
          <p style={styles.subtitle}>
            Create a strong password for <br/>
            <span style={styles.emailHighlight}>{state?.email || "your account"}</span>
          </p>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>New Password</label>
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
          Save Password
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
    margin: 0,
    lineHeight: "1.5"
  },
  emailHighlight: {
    color: "#1e293b",
    fontWeight: "600"
  },
  formGroup: {
    marginBottom: "24px"
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
    transition: "background-color 0.2s"
  },
  buttonHover: {
    backgroundColor: "#4338ca" // Indigo-700
  }
};