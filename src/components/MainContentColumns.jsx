import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const leftInfos = [
  "Nowe transfery w Ekstraklasie",
  "Wyniki ostatniej kolejki",
  "Zapowiedź meczu Legia-Lech",
  "Transmisje na żywo",
  "Analiza spotkań",
  "Statystyki drużyn",
  "Wywiad z trenerem",
  "Składy drużyn",
  "Typy ekspertów"
];

const newsTabs = [
  { label: "Ważne", href: "#" },
  { label: "Popularne", href: "#" },
  { label: "Dziś", href: "#" },
  { label: "Wczoraj", href: "#" }
];

const mainNews = {
  title: "Nowy trener Legii Warszawa",
  desc: "Legia zatrudniła nowego szkoleniowca. Sprawdź szczegóły!",
  img: "https://via.placeholder.com/480x220?text=Trener",
  href: "#"
};

const newsList = [
  { title: "Wygrana Lecha w ostatnim meczu", href: "#" },
  { title: "Świątek awansuje do finału", href: "#" },
  { title: "Bayern pokonuje Borussię", href: "#" },
  { title: "Zenit wygrywa w siatkówce", href: "#" },
  { title: "Lakers wygrywają w NBA", href: "#" }
];

const rightInfos = [
  {
    img: "https://via.placeholder.com/60x60?text=PL",
    desc: "Ekstraklasa: podsumowanie kolejki",
    date: "06.10.2025"
  },
  {
    img: "https://via.placeholder.com/60x60?text=NBA",
    desc: "NBA: kontuzja gwiazdy Lakers",
    date: "06.10.2025"
  },
  {
    img: "https://via.placeholder.com/60x60?text=WTA",
    desc: "WTA: Świątek w finale",
    date: "05.10.2025"
  },
  {
    img: "https://via.placeholder.com/60x60?text=LM",
    desc: "Liga Mistrzów: Jastrzębski pokonuje Zenit",
    date: "06.10.2025"
  }
];

export default function MainContentColumns() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Lewa kolumna */}
        <div className="col-12 col-lg-3 mb-4">
          <h5 className="fw-bold text-info mb-3">Popularne</h5>
          <ul className="list-unstyled">
            {leftInfos.map((info, i) => (
              <li key={info} className="mb-2">
                <a href="#" className={`fw-medium d-block px-2 py-1 rounded-2 ${theme === "dark" ? "text-light" : "text-dark"}`}
                  style={{ textDecoration: "none", transition: "background 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.background = "#e7f0fd"}
                  onMouseOut={e => e.currentTarget.style.background = "transparent"}
                >
                  {info}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Środkowa kolumna */}
        <div className="col-12 col-lg-6 mb-4">
          {/* Tabs */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="fw-bold text-info fs-5">Newsy</div>
            <div className="d-flex gap-2 flex-wrap">
              {newsTabs.map(tab => (
                <a key={tab.label} href={tab.href}
                  className={`fw-bold px-3 py-1 rounded-2 ${theme === "dark" ? "text-light" : "text-info"}`}
                  style={{ textDecoration: "none", transition: "background 0.18s" }}
                  onMouseOver={e => e.currentTarget.style.background = "#e7f0fd"}
                  onMouseOut={e => e.currentTarget.style.background = "transparent"}
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>
          {/* Duża główna informacja */}
          <a href={mainNews.href} className="d-block mb-3" style={{ textDecoration: "none" }}>
            <div
              className={`card mb-3 shadow-sm ${theme === "dark" ? "bg-dark border-secondary text-light" : "bg-white border-light text-dark"}`}
              style={{ overflow: "hidden", cursor: "pointer", transition: "box-shadow 0.17s" }}
              onMouseOver={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(25,194,165,0.11)"}
              onMouseOut={e => e.currentTarget.style.boxShadow = ""}>
              <div className="row g-0">
                <div className="col-5 col-md-4">
                  <img src={mainNews.img} alt="news" className="img-fluid h-100" style={{ objectFit: "cover" }} />
                </div>
                <div className="col-7 col-md-8">
                  <div className="card-body">
                    <h6 className="card-title fw-bold">{mainNews.title}</h6>
                    <p className="card-text text-info">{mainNews.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          {/* Pozostałe newsy w dwóch rzędach */}
          <div className="row">
            {newsList.map(news => (
              <div className="col-6 mb-3" key={news.title}>
                <a href={news.href} style={{ textDecoration: "none" }}>
                  <div
                    className={`card px-2 py-2 shadow-sm ${theme === "dark" ? "bg-dark border-secondary text-light" : "bg-white border-light text-dark"}`}
                    style={{ cursor: "pointer", transition: "background 0.16s" }}
                    onMouseOver={e => e.currentTarget.style.background = "#e7f0fd"}
                    onMouseOut={e => e.currentTarget.style.background = theme === "dark" ? "#212529" : "#fff"}
                  >
                    {news.title}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Prawa kolumna */}
        <div className="col-12 col-lg-3 mb-4">
          {rightInfos.map(info => (
            <div key={info.desc}
              className={`card mb-3 shadow-sm d-flex flex-row align-items-center ${theme === "dark" ? "bg-dark border-secondary text-light" : "bg-white border-light text-dark"}`}
              style={{ cursor: "pointer", transition: "background 0.16s" }}
              onMouseOver={e => e.currentTarget.style.background = "#e7f0fd"}
              onMouseOut={e => e.currentTarget.style.background = theme === "dark" ? "#212529" : "#fff"}
            >
              <img src={info.img} alt="" className="rounded-2 m-2" style={{ width: 60, height: 60, objectFit: "cover" }} />
              <div className="flex-grow-1 px-2">
                <div className="fw-bold">{info.desc}</div>
                <div className="text-secondary small fst-italic" style={{ fontFamily: "monospace" }}>{info.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}