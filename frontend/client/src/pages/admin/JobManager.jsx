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
    await axios.post("/jobs", { title, companyId });
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`/jobs/${id}`);
    fetch();
  };

  useEffect(() => { fetch(); }, []);

  return (
    <div>
      <h2>Jobs</h2>
      <input placeholder="Job Title" onChange={e => setTitle(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {jobs.map(j => (
          <li key={j._id}>
            {j.title}
            <button onClick={() => del(j._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
