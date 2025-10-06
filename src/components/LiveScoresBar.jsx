import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const matches = [
  { flag1: "cz", flag2: "bou", time: "Jutro 13:00" },
  { flag1: "hr", flag2: "pl19", time: "08/10 15:45" },
  { flag1: "fi", flag2: "lit", time: "09/10 18:00" },
  { flag1: "ro", flag2: "mol", time: "09/10 20:45" },
  { flag1: "at", flag2: "smn", time: "09/10 20:45" },
  { flag1: "cy", flag2: "bih", time: "09/10 20:45" },
  { flag1: "fo", flag2: "czar", time: "09/10 20:45" },
  { flag1: "sk", flag2: "gre", time: "09/10 20:45" },
  { flag1: "cz", flag2: "cho", time: "09/10 20:45" },
  { flag1: "dk", flag2: "dan", time: "09/10 20:45" },
  { flag1: "pl", flag2: "zel", time: "09/10 20:45" },
  { flag1: "ma", flag2: "bah", time: "09/10 21:00" }
];

function getFlag(code) {
  const flagUrls = {
    cz: "https://flagcdn.com/24x18/cz.png",
    bou: "https://flagcdn.com/24x18/bg.png",
    hr: "https://flagcdn.com/24x18/hr.png",
    pl19: "https://flagcdn.com/24x18/pl.png",
    fi: "https://flagcdn.com/24x18/fi.png",
    lit: "https://flagcdn.com/24x18/lt.png",
    ro: "https://flagcdn.com/24x18/ro.png",
    mol: "https://flagcdn.com/24x18/md.png",
    at: "https://flagcdn.com/24x18/at.png",
    smn: "https://flagcdn.com/24x18/sm.png",
    cy: "https://flagcdn.com/24x18/cy.png",
    bih: "https://flagcdn.com/24x18/ba.png",
    fo: "https://flagcdn.com/24x18/fo.png",
    czar: "https://flagcdn.com/24x18/cz.png",
    sk: "https://flagcdn.com/24x18/sk.png",
    gre: "https://flagcdn.com/24x18/gr.png",
    cho: "https://flagcdn.com/24x18/ch.png",
    dk: "https://flagcdn.com/24x18/dk.png",
    dan: "https://flagcdn.com/24x18/dk.png",
    pl: "https://flagcdn.com/24x18/pl.png",
    zel: "https://flagcdn.com/24x18/zw.png",
    ma: "https://flagcdn.com/24x18/ma.png",
    bah: "https://flagcdn.com/24x18/bh.png"
  };
  return <img src={flagUrls[code] || "https://via.placeholder.com/24x18"} alt="" style={{ width: 24, height: 18, borderRadius: 3 }} />;
}

export default function LiveScoresBar() {
  return (
    <div className="container-fluid px-2 mb-3" style={{ maxWidth: "1500px" }}>
      <div>
        <h5 className="fw-bold mb-2" style={{ color: "var(--widgetWrapperTitleColor)" }}>WYNIKI NA ŻYWO</h5>
        <div className="d-flex flex-wrap gap-1">
          {matches.map((m, idx) => (
            <div
              key={idx}
              className="live-score-cell"
              tabIndex={0}
              style={{
                background: 'var(--liveScoreCellBg)',
                color: 'var(--liveScoreCellText)'
              }}
              onMouseOver={e => {
                e.currentTarget.style.boxShadow = "0 0 0 3px #19c2a5";
                e.currentTarget.style.color = "#19c2a5";
                e.currentTarget.style.borderColor = "#19c2a5";
              }}
              onMouseOut={e => {
                e.currentTarget.style.boxShadow = "0 2px 8px var(--boxShadowColor)";
                e.currentTarget.style.color = 'var(--liveScoreCellText)';
                e.currentTarget.style.borderColor = 'var(--widgetWrapperBorderColor)';
              }}
            >
              <div className="live-score-flags">
                {getFlag(m.flag1)}
                {getFlag(m.flag2)}
              </div>
              <div style={{ fontWeight: 600 }}>{m.flag1.toUpperCase()} <span style={{ color: "#19c2a5" }}>•</span> {m.flag2.toUpperCase()}</div>
              <div className="live-score-time">{m.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}