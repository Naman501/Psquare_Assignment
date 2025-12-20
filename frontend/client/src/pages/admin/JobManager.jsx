import { useEffect, useState } from "react";
import axios from "../../api/axiosInstance";
import { useParams } from "react-router-dom";

export default function JobManager() {
  const { companyId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");

  const fetch = async () => {
    const res = await axios.get(`/jobs/company/${companyId}`);
    setJobs(res.data);
  };

  const add = async () => {
    if (!title.trim()) return;
    await axios.post("/jobs", { title, companyId });
    setTitle("");
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`/jobs/${id}`);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Jobs</h2>

      {/* Add Job */}
      <div style={styles.formRow}>
        <input
          style={styles.input}
          placeholder="Job Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button style={styles.addBtn} onClick={add}>
          Add Job
        </button>
      </div>

      {/* Job List */}
      <ul style={styles.list}>
        {jobs.map(j => (
          <li key={j._id} style={styles.listItem}>
            <span>{j.title}</span>
            <button
              style={styles.deleteBtn}
              onClick={() => del(j._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- SIMPLE STYLES ---------- */

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "#ffffff"
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center"
  },
  formRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "8px 10px",
    border: "1px solid #d1d5db",
    borderRadius: "4px"
  },
  addBtn: {
    padding: "8px 14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #e5e7eb"
  },
  deleteBtn: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};
