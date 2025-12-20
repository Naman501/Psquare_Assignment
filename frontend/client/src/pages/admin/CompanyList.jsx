import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";
import { Link } from "react-router-dom";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => {
    const res = await axios.get("/companies");
    setCompanies(res.data);
  };

  const add = async () => {
    if (!name) return;
    await axios.post("/companies", { name });
    setName("");
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`/companies/${id}`);
    fetch();
  };

  useEffect(() => { fetch(); }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Companies</h2>

      {/* Add Company */}
      <div style={styles.addBox}>
        <input
          placeholder="Company Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={styles.input}
        />
        <button onClick={add} style={styles.addBtn}>Add Company</button>
      </div>

      {/* Company List */}
      <div style={styles.list}>
        {companies.map(c => (
          <div key={c._id} style={styles.card}>
            <span style={styles.companyName}>{c.name}</span>

            <div style={styles.actions}>
              <Link to={`/admin/jobs/${c._id}`} style={styles.jobsBtn}>
                Jobs
              </Link>
              <button onClick={() => del(c._id)} style={styles.deleteBtn}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  container: {
    padding: "40px",
    background: "#f5f7fb",
    minHeight: "100vh"
  },
  heading: {
    marginBottom: "20px"
  },
  addBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px"
  },
  input: {
    padding: "10px",
    flex: 1,
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  addBtn: {
    padding: "10px 15px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  card: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
  },
  companyName: {
    fontWeight: "500"
  },
  actions: {
    display: "flex",
    gap: "10px"
  },
  jobsBtn: {
    padding: "6px 10px",
    background: "#e0e7ff",
    color: "#1e40af",
    textDecoration: "none",
    borderRadius: "4px"
  },
  deleteBtn: {
    padding: "6px 10px",
    background: "#fee2e2",
    color: "#991b1b",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};
