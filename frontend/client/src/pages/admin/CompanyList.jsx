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
    await axios.post("/companies", { name });
    fetch();
  };

  const del = async (id) => {
    await axios.delete(`/companies/${id}`);
    fetch();
  };

  useEffect(() => { fetch(); }, []);

  return (
    <div>
      <h2>Companies</h2>
      <input placeholder="Company Name" onChange={e => setName(e.target.value)} />
      <button onClick={add}>Add</button>

      <ul>
        {companies.map(c => (
          <li key={c._id}>
            {c.name}
            <Link to={`/admin/jobs/${c._id}`}> Jobs </Link>
            <button onClick={() => del(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
