import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const events = [
  { title: "Legia vs Lech", time: "18:00", desc: "Ekstraklasa", type: "football" },
  { title: "Arsenal vs Chelsea", time: "20:30", desc: "Premier League", type: "football" },
  { title: "ZAKSA vs Resovia", time: "17:00", desc: "PlusLiga", type: "volleyball" },
  { title: "NBA: Lakers vs Heat", time: "02:00", desc: "NBA", type: "basketball" },
  { title: "Hurkacz vs Djokovic", time: "15:00", desc: "ATP", type: "tennis" },
  { title: "Świątek vs Sabalenka", time: "13:30", desc: "WTA", type: "tennis" },
  { title: "CSKA vs Fenerbahce", time: "19:00", desc: "Euroliga", type: "basketball" },
  { title: "Real vs Barca", time: "21:00", desc: "La Liga", type: "football" },
  { title: "Jastrzębski vs Zenit", time: "16:00", desc: "Liga Mistrzów", type: "volleyball" },
  { title: "Stelmet vs Anwil", time: "18:45", desc: "PLK", type: "basketball" },
  { title: "Bayern vs Borussia", time: "20:00", desc: "Bundesliga", type: "football" },
  { title: "Skra vs Projekt", time: "14:00", desc: "Superpuchar", type: "volleyball" }
];

function LiveScoreTile({ event }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`card mb-3 border-0 shadow-sm ${theme === "dark" ? "bg-dark text-light" : "bg-white text-dark"}`}
      style={{
        minWidth: 180,
        maxWidth: 220,
        cursor: "pointer",
        transition: "transform 0.16s, box-shadow 0.16s"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(25,194,165,0.13)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="card-body text-center">
        <div className="fw-bold fs-6">{event.title}</div>
        <div className="text-info small">{event.desc}</div>
        <div className="fw-bold text-info">{event.time}</div>
      </div>
    </div>
  );
}

export default function LiveScores() {
  return (
    <div className="container mb-4">
      <h3 className="fw-bold text-info mb-3">Wyniki na żywo</h3>
      <div className="row justify-content-center">
        {events.map(ev => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex" key={ev.title + ev.time}>
            <LiveScoreTile event={ev} />
          </div>
        ))}
      </div>
    </div>
  );
}