import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const categories = [
  {
    title: "Piłka nożna",
    infos: [
      "Ekstraklasa: Legia vs Lech",
      "Premier League: Arsenal vs Chelsea",
      "La Liga: Real vs Barca",
      "Bundesliga: Bayern vs Borussia",
      "Serie A: Milan vs Roma",
      "Ligue 1: PSG vs Lyon"
    ]
  },
  {
    title: "Siatkówka",
    infos: [
      "PlusLiga: ZAKSA vs Resovia",
      "Liga Mistrzów: Jastrzębski vs Zenit",
      "Superpuchar: Skra vs Projekt",
      "Mistrzostwa Świata: Polska vs Brazylia",
      "Puchar Polski: Czarni vs Trefl"
    ]
  },
  {
    title: "Koszykówka",
    infos: [
      "NBA: Lakers vs Heat",
      "PLK: Stelmet vs Anwil",
      "Euroliga: CSKA vs Fenerbahce",
      "WNBA: Sky vs Mercury",
      "Liga Hiszpańska: Real vs Barca"
    ]
  },
  {
    title: "Tenis",
    infos: [
      "ATP: Hurkacz vs Djokovic",
      "WTA: Świątek vs Sabalenka",
      "Roland Garros: Nadal vs Alcaraz",
      "US Open: Raducanu vs Gauff",
      "Australian Open: Zverev vs Medvedev"
    ]
  }
];

function Card({ title, infos }) {
  const [expanded, setExpanded] = React.useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card mb-3 shadow-sm ${theme === "dark" ? "bg-dark border-secondary text-light" : "bg-white border-light text-dark"}`}
      style={{ minWidth: 220, maxWidth: 320 }}>
      <div className="card-body">
        <h5 className="card-title text-info fw-bold">{title}</h5>
        <ul className="list-unstyled mb-2">
          {(expanded ? infos : infos.slice(0, 4)).map((info, i) => (
            <li key={info} className="mb-1">
              <a href="/pusta-strona"
                className={`fw-medium d-block px-2 py-1 rounded-2 ${theme === "dark" ? "text-light" : "text-dark"}`}
                style={{ textDecoration: "none", transition: "background 0.2s" }}
                onMouseOver={e => e.currentTarget.style.background = "#e7f0fd"}
                onMouseOut={e => e.currentTarget.style.background = "transparent"}
              >
                {info}
              </a>
            </li>
          ))}
        </ul>
        {infos.length > 4 && !expanded &&
          <button
            className="btn btn-sm btn-info mb-2"
            onClick={() => setExpanded(true)}
          >
            Rozwiń
          </button>
        }
        <a href="/pusta-strona"
          className="d-block text-end fw-bold text-info"
          style={{ textDecoration: "none" }}
          onMouseOver={e => e.currentTarget.style.textDecoration = "underline"}
          onMouseOut={e => e.currentTarget.style.textDecoration = "none"}
        >
          Więcej &rarr;
        </a>
      </div>
    </div>
  );
}

export default function CategoryCards() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {categories.map(cat =>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={cat.title}>
            <Card title={cat.title} infos={cat.infos} />
          </div>
        )}
      </div>
    </div>
  );
}