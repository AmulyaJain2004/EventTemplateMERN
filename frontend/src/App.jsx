// import React from "react";
// import "./App.css";
// import heroImage from "./assets/first.jpeg";
// import Timeline from "./components/Timeline";

// const HackathonPage = () => {
//   const sponsors = [
//     "https://hackathon8-0.vercel.app/static/media/Accorian%20Logo.5969fbc5b35b3ee0cdeb.png",
//     "https://hackathon8-0.vercel.app/static/media/un.9994fb2de3f617e0185c.jpg",
//     "https://hackathon8-0.vercel.app/static/media/cog.87d877782089d4e8fbfc.png",
//     "https://hackathon8-0.vercel.app/static/media/damner-and-codedamn_1f331r7.0aa371765db7be7aca98.png",
//     "https://hackathon8-0.vercel.app/static/media/wolfram-corporate-logo-stacked-lg-1.bf4f14de4852ae2910a0.png",
//     "https://hackathon8-0.vercel.app/static/media/Axure.6602ffd3f44ccc840a0a.png",
//     "https://hackathon8-0.vercel.app/static/media/elixir.9e961e1b98abb8b9f8a7.png",
//     "https://hackathon8-0.vercel.app/static/media/KODERS.9453a1d1bb9a8f8fc4e8.png",
//   ];

//   return (
//     <div className="bg-gray-900">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           <a href="#home" className="navbar-logo">
//             Hackathon 4.0
//           </a>
//           <ul className="navbar-links">
//             <li>
//               <a href="#home">Home</a>
//             </li>
//             <li>
//               <a href="#challenge">Challenge</a>
//             </li>
//             <li>
//               <a href="#perks">Perks</a>
//             </li>
//             <li>
//               <a href="#timeline">Timeline</a>
//             </li>
//             <li>
//               <a href="#sponsors">Sponsors</a>
//             </li>
//             <li>
//               <a href="#faq">FAQ</a>
//             </li>
//             <li>
//               <button className="register-button">Register Now</button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Header Section */}
//       <section id="home" className="hero-section">
//         <div className="hero-content">
//           <h1>
//             <span className="highlight">CODEQUEST</span> <br />
//             HACKATHON <br />
//             WEEK
//           </h1>
//           <p>
//             Join our Online Design Hackathon to showcase your creativity, tackle
//             unique challenges, and win incredible prizes!
//           </p>
//           <button className="register-button">REGISTER TODAY</button>
//         </div>
//         <div
//           className="hero-image"
//           style={{
//             backgroundImage: `url(${heroImage})`,
//           }}
//         ></div>
//       </section>

//       {/* Challenge Section */}
//       <section id="challenge" className="perks-section">
//         <h2 className="perks-title">Challenge</h2>
//         <p className="perks-description">
//           Join hands with your team of 2-4 members and solve real-world problems
//           in limited time!
//         </p>
//       </section>

//       {/* Perks Section */}
//       <section id="perks" className="perks-section">
//         <h2 className="perks-title">PRIZES</h2>
//         <p className="perks-description">
//           Get ready to launch your project! The top performers will receive awards, prizes, and recognition.
//         </p>
//         <div className="perks-container">
//           <div className="main-prize">
//             <div className="prize-ticket">50K</div>
//             <h3 className="prize-title">METAVERSE VISIONARY</h3>
//             <h1 className="prize-amount">₹50K</h1>
//             <p className="prize-details">
//               Prepare for the project launch! Outstanding contributors will be rewarded with awards, prizes, and acknowledgment.
//             </p>
//           </div>
//           <div className="side-prizes">
//             <div className="side-prize">
//               <div className="prize-icon">💡</div>
//               <h4 className="prize-amount">₹30K</h4>
//               <p>Immersive Interaction</p>
//             </div>
//             <div className="side-prize">
//               <div className="prize-icon">👥</div>
//               <h4 className="prize-amount">₹10K</h4>
//               <p>Virtual Crowd's Choice</p>
//             </div>
//             <div className="side-prize">
//               <div className="prize-icon">🌟</div>
//               <h4 className="prize-amount">₹10K</h4>
//               <p>Metaverse for Good</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       {/* <section id="timeline" className="timeline-section">
//         <h2 className="timeline-title">Timeline</h2>
//         <ul className="timeline-list">
//           <li>
//             <strong>14 Jan 2025 -</strong> Registrations Begin
//           </li>
//           <li>
//             <strong>6 Feb 2025 -</strong> Problem Statement Reveal
//           </li>
//           <li>
//             <strong>7 Feb 2025 -</strong> Inaugural Ceremony
//           </li>
//           <li>
//             <strong>9 Feb 2025 -</strong> Grand Finale & Closing
//           </li>
//         </ul>
//       </section> */}

//       {/* Sponsors Section */}
//       <section id="sponsors" className="sponsors-container">
//         <h2 className="sponsors-title">Our Sponsors</h2>
//         <div className="logos">
//           <div className="logos-slides">
//             {sponsors.map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`Sponsor ${index + 1}`}
//                 className="sponsor-logo"
//               />
//             ))}
//           </div>
//           <div className="logos-slides">
//             {sponsors.map((src, index) => (
//               <img
//                 key={index}
//                 src={src}
//                 alt={`Sponsor ${index + 1}`}
//                 className="sponsor-logo"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq">
//         <h2>FAQ</h2>
//         <div>
//           <h3>What is a Hackathon?</h3>
//           <p>A collaborative event for solving challenges.</p>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer>
//         <p>&copy; 2025 Hackathon 4.0. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default HackathonPage;
// // import React from "react";
// // import Timeline from "./components/Timeline/Timeline";

// // const App = () => {
// //   return (
// //     <div>
// //       <Timeline />
// //     </div>
// //   );
// // };

// // export default App;
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Challenge from "./components/Challenge/Challenge";
import Perks from "./components/Perks/Perks";
import Timeline from "./components/Timeline/Timeline"; 
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Challenge />
      <Perks />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
