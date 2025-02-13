import React from 'react';
import './Sponsors.css'; 

const Sponsors = () => {
  const sponsors = [
    "https://hackathon8-0.vercel.app/static/media/Accorian%20Logo.5969fbc5b35b3ee0cdeb.png",
    "https://hackathon8-0.vercel.app/static/media/un.9994fb2de3f617e0185c.jpg",
    "https://hackathon8-0.vercel.app/static/media/cog.87d877782089d4e8fbfc.png",
    "https://hackathon8-0.vercel.app/static/media/damner-and-codedamn_1f331r7.0aa371765db7be7aca98.png",
    "https://hackathon8-0.vercel.app/static/media/wolfram-corporate-logo-stacked-lg-1.bf4f14de4852ae2910a0.png",
    "https://hackathon8-0.vercel.app/static/media/Axure.6602ffd3f44ccc840a0a.png",
    "https://hackathon8-0.vercel.app/static/media/elixir.9e961e1b98abb8b9f8a7.png",
    "https://hackathon8-0.vercel.app/static/media/KODERS.9453a1d1bb9a8f8fc4e8.png",
  ];

  return (
    <div className="sponsors-container">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="logos">
        <div className="logos-slides">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
        <div className="logos-slides">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="sponsor-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
