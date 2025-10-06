import React, { useState } from "react";

const newsByFilter = {
  Ważne: [
    {
      img: "https://via.placeholder.com/800x400?text=GOL",
      title: "Wieczysta wybrała nowego trenera! Porozumienie jest już blisko [NASZ NEWS]",
      urgent: true,
      comments: 7
    },
    {
      img: "https://via.placeholder.com/400x200?text=BARCA",
      title: "Barcelona zdecydowała ws. Rashforda! Manchester United nie będzie zadowolony",
      urgent: false,
      comments: 20
    }
  ],
  Popularne: [
    {
      img: "https://via.placeholder.com/800x400?text=POPULARNE",
      title: "Lewandowski - rekord strzelonych bramek w Bundeslidze!",
      urgent: false,
      comments: 12
    },
    {
      img: "https://via.placeholder.com/400x200?text=POPULARNE",
      title: "Piłkarze Premier League w szczytowej formie",
      urgent: false,
      comments: 8
    }
  ],
  Dziś: [
    {
      img: "https://via.placeholder.com/800x400?text=DZIŚ",
      title: "Dziś: Sensacyjny remis w Ekstraklasie",
      urgent: false,
      comments: 3
    },
    {
      img: "https://via.placeholder.com/400x200?text=DZIŚ",
      title: "Dziś: Zaskakująca decyzja trenera",
      urgent: false,
      comments: 6
    }
  ],
  Wczoraj: [
    {
      img: "https://via.placeholder.com/800x400?text=WCZORAJ",
      title: "Wczoraj: Mecz pełen emocji",
      urgent: false,
      comments: 9
    },
    {
      img: "https://via.placeholder.com/400x200?text=WCZORAJ",
      title: "Wczoraj: Bohater spotkania",
      urgent: false,
      comments: 4
    }
  ],
  Przedwczoraj: [
    {
      img: "https://via.placeholder.com/800x400?text=PRZEDWCZORAJ",
      title: "Przedwczoraj: Historyczny awans",
      urgent: false,
      comments: 2
    },
    {
      img: "https://via.placeholder.com/400x200?text=PRZEDWCZORAJ",
      title: "Przedwczoraj: Młody talent na boisku",
      urgent: false,
      comments: 5
    }
  ]
};

const filters = ["Ważne", "Popularne", "Dziś", "Wczoraj", "Przedwczoraj"];

export default function MainNewsGrid() {
  const [activeFilter, setActiveFilter] = useState("Ważne");
  const newsList = newsByFilter[activeFilter];

  return (
    <div className="container-fluid" style={{ maxWidth: "1500px" }}>
      <div className="row gx-3">
        <div className="col-12 col-md-7">
          <div className="mb-2 fw-bold text-info d-flex align-items-center" style={{ fontSize: 15 }}>
            <span style={{ color: "#19c2a5", fontSize: 18 }}>&#9679;</span>
            <span className="ms-2" style={{ fontWeight: 700, color: "var(--widgetWrapperTitleColor)" }}>NEWSY</span>
            <div className="d-flex flex-wrap ms-3 gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  className={
                    "btn fw-bold rounded-pill px-3 py-1" +
                    (activeFilter === f
                      ? " btn-active-news"
                      : " btn-outline-info")
                  }
                  style={{
                    background: activeFilter === f ? "#19c2a5" : "transparent",
                    color: activeFilter === f ? "#fff" : "#19c2a5",
                    border: activeFilter === f ? "2px solid #19c2a5" : "2px solid #19c2a5",
                    fontWeight: activeFilter === f ? 700 : 500,
                    fontSize: 16,
                    boxShadow: activeFilter === f ? "0 0 0 2px #19c2a544" : "none",
                    transition: "all 0.18s"
                  }}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{
              position: "relative",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 2px 8px var(--boxShadowColor)",
              background: "var(--bgColor)",
              marginBottom: 18
            }}>
              <img src={newsList[0].img} alt="" style={{ width: "100%", height: "auto", maxHeight: 380, objectFit: "cover" }} />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px 22px 32px",
                background: "linear-gradient(0deg, #a00 90%, rgba(0,0,0,0.22) 100%)"
              }}>
                <div className="d-flex align-items-center mb-2" style={{ color: "#fff" }}>
                  <span className="me-3"><i className="bi bi-chat-left-text"></i> {newsList[0].comments}</span>
                  {newsList[0].urgent &&
                    <span className="badge bg-danger me-2" style={{ fontSize: 16, fontWeight: "bold" }}>
                      <i className="bi bi-lightning-charge-fill"></i> PILNE
                    </span>
                  }
                </div>
                <div className="fw-bold" style={{ fontSize: 2 + "rem", color: "#fff" }}>
                  {newsList[0].title}
                </div>
              </div>
            </div>
            <div className="d-flex gap-3">
              {newsList.slice(1).map((news, idx) => (
                <div key={news.title} style={{
                  borderRadius: 14,
                  background: "var(--bgColor)",
                  boxShadow: "0 2px 8px var(--boxShadowColor)",
                  overflow: "hidden",
                  maxWidth: 340,
                  flex: 1,
                  position: "relative",
                  transition: "box-shadow 0.2s, background 0.2s"
                }}
                  onMouseOver={e => e.currentTarget.style.boxShadow = "0 0 0 3px #19c2a5"}
                  onMouseOut={e => e.currentTarget.style.boxShadow = "0 2px 8px var(--boxShadowColor)"}
                >
                  <img src={news.img} alt="" style={{ width: "100%", height: 140, objectFit: "cover" }} />
                  <div style={{ padding: "14px 14px 10px 14px" }}>
                    <div className="d-flex align-items-center mb-2" style={{ color: "#19c2a5" }}>
                      <span className="me-3"><i className="bi bi-chat-left-text"></i> {news.comments}</span>
                    </div>
                    <div className="fw-bold" style={{ fontSize: 16, color: "var(--textColor)" }}>{news.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}