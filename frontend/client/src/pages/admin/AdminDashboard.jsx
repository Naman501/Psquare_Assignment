import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          Manage companies and job postings from here.
        </p>

        <Link to="/admin/companies" style={styles.button}>
          Manage Companies
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    padding: "40px",
    boxSizing: "border-box"
  },
  heading: {
    marginBottom: "20px",
    color: "#111827"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "8px",
    maxWidth: "400px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
  },
  text: {
    marginBottom: "16px",
    color: "#374151"
  },
  button: {
    display: "inline-block",
    padding: "10px 16px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "500"
  }
};
