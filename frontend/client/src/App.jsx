import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";
import SetPassword from "./pages/SetPassword";
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import CompanyList from "./pages/admin/CompanyList";
import JobManager from "./pages/admin/JobManager";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/companies" element={<Companies />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
        } />

        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
            </ProtectedRoute>
        } />

        <Route path="/admin/companies" element={
          <ProtectedRoute><AdminRoute><CompanyList /></AdminRoute></ProtectedRoute>
        } />

        <Route path="/admin/jobs/:companyId" element={
          <ProtectedRoute>
            <AdminRoute>
              <JobManager />
              </AdminRoute>
              </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
