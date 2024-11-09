import React, { useEffect } from 'react';
import './App.css';
import logo from './logo.png';



function App() {
  useEffect(() => {
    // Embed Chatbot script dynamically
    const script1 = document.createElement('script');
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "KJqcUc0do5QhwGZB4qyWX",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://www.chatbase.co/embed.min.js";
    script2.async = true;
    script2.setAttribute("chatbotId", "KJqcUc0do5QhwGZB4qyWX");
    script2.setAttribute("domain", "www.chatbase.co");
    script2.defer = true;
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="top-bar">
          <a href="#admissions">Admissions are open!</a>
          <a href="#tuition">Tuition Fee and Exam Fee</a>
          <button>Student Education Verification</button>
        </div>
        <div className="logo-section">
          <img src="/logo.png" alt="College Logo" className="logo" />
        </div>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#departments">Departments</a>
          <a href="#placements">Placements</a>
          <a href="#exam">Exam</a>
          <a href="#research">R&D</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="image-left">
            <img src="/award1.png" alt="Award Ceremony" />
          </div>
          <div className="image-right">
            <img src="/award2.png" alt="Another Award" />
          </div>
          <div className="image-bottom">
            <img src="/depts.png" alt="Departments" />
          </div>
        </div>
        <div className="updates-bar">
          <p>
            Placement Statistics A.Y 2023-24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Cybage Kushboo Scholarships 2023-24 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Suspension of Exam
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
