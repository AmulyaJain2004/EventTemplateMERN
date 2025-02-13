import React from 'react';
import './Perks.css';

const Perks = () => {
  return (
    <section id="prizes" className="prizes-section">
      <h2 className="prizes-title">PRIZES</h2>
      <p className="prizes-description">
        Get ready to launch your project! The top performers will receive awards, prizes, and recognition.
      </p>
      <div className="main-prize">
        <div className="prize-ticket">50K</div>
        <h3 className="main-prize-title">METAVERSE VISIONARY</h3>
        <h1 className="main-prize-amount">₹50K</h1>
        <p className="main-prize-details">
          Prepare for the project launch! Outstanding contributors will be rewarded with awards, prizes, and acknowledgment.
        </p>
      </div>
      <div className="side-prizes">
        <div className="side-prize">
          <h4 className="side-prize-amount">₹30K</h4>
          <p className="side-prize-description">Immersive Interaction</p>
        </div>
        <div className="side-prize">
          <h4 className="side-prize-amount">₹10K</h4>
          <p className="side-prize-description">Virtual Crowd's Choice</p>
        </div>
        <div className="side-prize">
          <h4 className="side-prize-amount">₹10K</h4>
          <p className="side-prize-description">Metaverse for Good</p>
        </div>
      </div>
    </section>
  );
};

export default Perks;
