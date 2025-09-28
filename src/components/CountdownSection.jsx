import React, { useEffect, useState } from "react";
import "./CountdownSection.css";

const targetDate = new Date("2025-11-07T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-section">
      <h2 className="countdown-title">FALTAN</h2>
      <div className="countdown-timer">
        <div className="countdown-group">
          <div className="countdown-number">{time.days.toString().padStart(2, "0")}</div>
          <div className="countdown-label">DÍAS</div>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-group">
          <div className="countdown-number">{time.hours.toString().padStart(2, "0")}</div>
          <div className="countdown-label">HORAS</div>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-group">
          <div className="countdown-number">{time.minutes.toString().padStart(2, "0")}</div>
          <div className="countdown-label">MINUTOS</div>
        </div>
        <span className="countdown-sep">:</span>
        <div className="countdown-group">
          <div className="countdown-number">{time.seconds.toString().padStart(2, "0")}</div>
          <div className="countdown-label">SEGUNDOS</div>
        </div>
      </div>

      <a
        className="calendar-btn"
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Andres%20y%20Kaliana&dates=20251107T220000Z/20251107T220000Z&details=¡Acompáñanos%20a%20celebrar%20nuestra%20boda!&location=Maracaibo&color=Tomato"
        target="_blank"
        rel="noopener noreferrer"
        >
        AGREGAR AL CALENDARIO
    </a>
      
    </div>
  );
}
