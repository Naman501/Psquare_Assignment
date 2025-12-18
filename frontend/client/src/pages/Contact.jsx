import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Injecting CSS Styles for pseudo-classes (hover, focus) */}
      <style>{`
        .contact-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          padding: 20px;
        }

        .contact-container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 900px;
          display: flex;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        /* Left Side (Info) */
        .info-side {
          background: #1e293b;
          color: white;
          padding: 60px 40px;
          flex: 0 0 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        
        /* Decorative circle */
        .info-side::before {
          content: "";
          position: absolute;
          top: -50px;
          left: -50px;
          width: 150px;
          height: 150px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
        }

        .info-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .info-text {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
        }

        .icon {
          background: rgba(255,255,255,0.1);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          font-size: 1.2rem;
        }

        /* Right Side (Form) */
        .form-side {
          padding: 60px 50px;
          flex: 1;
        }

        .input-group {
          margin-bottom: 25px;
          position: relative;
        }

        .input-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .styled-input, .styled-textarea {
          width: 100%;
          padding: 14px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
          background: #f8fafc;
          color: #334155;
          box-sizing: border-box; /* Fixes padding width issues */
        }

        .styled-input:focus, .styled-textarea:focus {
          border-color: #4f46e5;
          background: white;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
        }

        .styled-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .submit-btn {
          background: #4f46e5;
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 4px 6px rgba(79, 70, 229, 0.2);
        }

        .submit-btn:hover {
          background: #4338ca;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px rgba(79, 70, 229, 0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }
          .info-side, .form-side {
            padding: 40px 25px;
          }
          .info-side {
            flex: auto;
          }
        }
      `}</style>

      <div className="contact-container">
        
        {/* Left Column */}
        <div className="info-side">
          <h2 className="info-title">Let's talk.</h2>
          <p className="info-text">
            Have a project in mind or just want to say hi? We'd love to hear from you.
          </p>
          
          <div className="contact-details">
            <div className="contact-row">
              <div className="icon">📧</div>
              <span>hello@psquare.com</span>
            </div>
            <div className="contact-row">
              <div className="icon">📍</div>
              <span>E-27 E26, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055</span>
            </div>
            <div className="contact-row">
              <div className="icon">📞</div>
              <span>+91 70090 77294</span>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="form-side">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input
                className="styled-input"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ramesh Pandey"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                className="styled-input"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="rames@panda.com"
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea
                className="styled-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}