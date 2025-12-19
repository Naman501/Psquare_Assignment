// import axios from "axios";
// import { useEffect, useState } from "react";
// // import axios from "../api/axiosInstance";

// export default function Companies() {
//   // 1. Define your mock data here
//   const mockCompanies = [
//     { _id: "1", name: "TechNova", industry: "Fintech" },
//     { _id: "2", name: "GreenLeaf", industry: "Energy" },
//     { _id: "3", name: "QuantumSoft", industry: "AI & Robotics" },
//     { _id: "4", name: "UrbanBuild", industry: "Architecture" },
//     { _id: "5", name: "MediCare+", industry: "Healthcare" },
//     { _id: "6", name: "SkyHigh Travels", industry: "Tourism" },
//     { _id: "7", name: "Cyber Shield", industry: "Security" },
//     { _id: "8", name: "EduGrow", industry: "Education" },
//   ];

//   // 2. Set the mock data as the initial state
//   const [companies, setCompanies] = useState(mockCompanies);

//   useEffect(() => {  
//     axios.get("/companies")
//       .then(res => {
//         if (res.data.length > 0) {
//           setCompanies(res.data);
//         }
//       })
//       .catch(err => console.error("Error fetching companies:", err));
    
//   }, []);

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <h2 style={styles.title}>Partner Companies</h2>
//           <p style={styles.subtitle}>Explore the organizations hiring on JobBank</p>
//         </div>

//         <div style={styles.grid}>
//           {companies.map(c => (
//             <div key={c._id} style={styles.card}>
//               {/* Logo Circle: Uses first letter of name */}
//               <div style={styles.logoPlaceholder}>
//                 {c.name.charAt(0).toUpperCase()}
//               </div>
              
//               <h3 style={styles.companyName}>{c.name}</h3>
              
//               {/* Added Industry Label if it exists */}
//               {c.industry && <span style={styles.industryBadge}>{c.industry}</span>}

//               <button style={styles.viewBtn}>View Jobs</button>
//             </div>
//           ))}
          
//           {companies.length === 0 && (
//             <p style={styles.emptyState}>No companies found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------- STYLES ---------- */

// const styles = {
//   page: {
//     minHeight: "100vh",
//     backgroundColor: "#f8fafc", // Slate-50
//     fontFamily: "'Inter', sans-serif",
//     padding: "40px 20px"
//   },
//   container: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   header: {
//     marginBottom: "40px",
//     textAlign: "center"
//   },
//   title: {
//     fontSize: "2rem",
//     fontWeight: "800",
//     color: "#1e293b", // Slate-800
//     margin: "0 0 10px 0"
//   },
//   subtitle: {
//     color: "#64748b", // Slate-500
//     fontSize: "1.1rem"
//   },
  
//   /* Grid Layout */
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
//     gap: "24px",
//     width: "100%"
//   },
  
//   /* Card Styling */
//   card: {
//     backgroundColor: "white",
//     borderRadius: "12px",
//     padding: "30px",
//     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
//     border: "1px solid #e2e8f0",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     transition: "transform 0.2s, box-shadow 0.2s",
//     cursor: "pointer"
//   },
  
//   /* Fake Logo Circle */
//   logoPlaceholder: {
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     backgroundColor: "#e0e7ff", // Indigo-100
//     color: "#4f46e5", // Indigo-600
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "1.5rem",
//     fontWeight: "700",
//     marginBottom: "16px"
//   },
  
//   companyName: {
//     margin: "0 0 8px 0",
//     color: "#1e293b",
//     fontSize: "1.1rem",
//     fontWeight: "600"
//   },

//   industryBadge: {
//     fontSize: "0.8rem",
//     color: "#64748b",
//     background: "#f1f5f9",
//     padding: "4px 10px",
//     borderRadius: "20px",
//     marginBottom: "20px"
//   },
  
//   viewBtn: {
//     marginTop: "auto", 
//     padding: "8px 20px",
//     borderRadius: "6px",
//     border: "1px solid #cbd5e1",
//     backgroundColor: "transparent",
//     color: "#475569",
//     fontWeight: "500",
//     cursor: "pointer",
//     fontSize: "0.9rem",
//     width: "100%",
//     transition: "all 0.2s"
//   },
  
//   emptyState: {
//     gridColumn: "1 / -1", 
//     textAlign: "center",
//     color: "#64748b",
//     marginTop: "40px"
//   }
// };


import React from 'react'

const Companies = () => {
  return (
    <div>Companies</div>
  )
}

export default Companies