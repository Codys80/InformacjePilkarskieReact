import React from "react";

const newsList = [
  { title: "Haaland zakpił z gracza Man City. 'Gruby Francuz' [ZDJĘCIE]", time: "17:29", comments: 2, img: "https://via.placeholder.com/60x60?text=H" },
  { title: "AS Monaco chce zmienić trenera. Finalista LM na radarze", time: "17:14", comments: 0, img: "https://via.placeholder.com/60x60?text=M" },
  { title: "Tak zachował się Błaszczykowski na meczu. Wszystko uchwyciły kamery [WIDEO]", time: "16:50", comments: 0, img: "https://via.placeholder.com/60x60?text=B" },
  { title: "Lider Holendrów nie dotarł na zgrupowanie. Nietypowy problem gwiazdora", time: "16:49", comments: 8, img: "https://via.placeholder.com/60x60?text=H" },
  { title: "Brzęczek zachwycony polskim talentem. Wróży mu karierę w seniorskiej kadrze", time: "16:20", comments: 0, img: "https://via.placeholder.com/60x60?text=B" },
  { title: "Były reprezentant Holandii otarł się o śmierć. Dramatyczny wypadek", time: "16:09", comments: 3, img: "https://via.placeholder.com/60x60?text=H" },
  { title: "Legenda Legii grilluje Lordaenscu. 'Nie ma pojęcia, co robi'", time: "15:59", comments: 0, img: "https://via.placeholder.com/60x60?text=L" },
  { title: "Flick wytłumaczył się Laportcie. Znalazł przyczynę porażek", time: "15:39", comments: 1, img: "https://via.placeholder.com/60x60?text=F" }
];

export default function SidebarRight() {
  return (
    <aside className="col-lg-3 col-md-4 d-none d-md-block px-2">
      <div className="mt-3 mb-2 fw-bold text-info" style={{ fontSize: 15 }}>
        <span style={{ color: "#19c2a5" }}>&#9679;</span> ZOBACZ TAKŻE
      </div>
      <ul className="list-unstyled">
        {newsList.map(n => (
          <li key={n.title} className="d-flex align-items-center mb-3" style={{ cursor: "pointer", borderRadius: 8, transition: "background 0.1s" }}
            onMouseOver={e => e.currentTarget.style.background = "var(--colorButtonMoreHover)"}
            onMouseOut={e => e.currentTarget.style.background = "transparent"}
          >
            <img src={n.img} alt="" style={{ width: 48, height: 48, borderRadius: 8, marginRight: 11, objectFit: "cover" }} />
            <div className="flex-grow-1">
              <div className="fw-bold" style={{ fontSize: 14 }}>{n.title}</div>
              <div style={{ fontSize: 13, color: "#a7a7a7" }}>{n.time}
                {n.comments > 0 &&
                  <span className="ms-2 text-info" style={{ fontWeight: 700 }}>
                    <i className="bi bi-chat-left-text"></i> {n.comments}
                  </span>
                }
              </div>
            </div>
          </li>
        ))}
        <li className="mt-2">
          <a href="#" className="text-info fw-bold">Zobacz więcej</a>
        </li>
      </ul>
      <div className="mt-4">
        <div className="fw-bold text-info mb-2" style={{ fontSize: 16 }}>&#9679; WYNIKI MECZÓW</div>
        <div style={{ color: "#a7a7a7", fontSize: 13 }}>Ostatnia kolejka popularnych lig</div>
      </div>
    </aside>
  );
}