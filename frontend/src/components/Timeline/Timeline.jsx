import React from "react";
import "./Timeline.css";

import t2 from '../../images/time2.png';
import t1 from '../../images/time3.png';
import t9 from '../../images/time5.png';

const eventData = {
  timeline: [
    { date: "14 January 2025", time: "08:00 AM", event: "Registrations Begin", icon: t2 },
    { date: "7 February 2025", time: "10:00 AM", event: "Inaugural Ceremony", icon: t1 },
    { date: "7 February 2025", time: "12:00 PM", event: "Presentation Round Evaluation", icon: t9 },
    { date: "7 February 2025", time: "04:00 PM", event: "Presentation Round Result", icon: t2 },
    { date: "8 February 2025", time: "10:00 AM", event: "Round 1 Evaluation", icon: t1 },
    { date: "8 February 2025", time: "01:00 PM", event: "Round 1 Results", icon: t9 },
    { date: "8 February 2025", time: "05:00 PM", event: "Round 2 Evaluation", icon: t2 },
    { date: "8 February 2025", time: "08:00 PM", event: "Round 2 Results", icon: t1 },
    { date: "9 February 2025", time: "10:00 AM", event: "Grand Finale", icon: t9 },
    { date: "9 February 2025", time: "03:00 PM", event: "Closing Ceremony", icon: t2 },
  ],
};

const Timeline = () => {
  const events = eventData.timeline.map((eventItem, index) => ({
    date: eventItem.date,
    time: eventItem.time,
    description: eventItem.event,
    icon: eventItem.icon,
    position: index % 2 === 0 ? "left" : "right",
  }));

  return (
    <section id="timeline">
      <h2>Timeline</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div className={`timeline-item ${event.position}`} key={index}>
            {event.position === "left" && (
              <div className="content">
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.description}</p>
              </div>
            )}
            <div className="icon">
              <img src={event.icon} alt={`Icon for ${event.description}`} />
            </div>
            {event.position === "right" && (
              <div className="content">
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
