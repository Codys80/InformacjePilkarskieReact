import React from "react";

const popularList = [
  { label: "Eliminacje MŚ - Europa", icon: <i className="bi bi-trophy sidebar-icon text-danger"></i> },
  { label: "Liga Mistrzów", icon: <i className="bi bi-shield sidebar-icon text-primary"></i> },
  { label: "Liga Europy", icon: <i className="bi bi-star sidebar-icon text-warning"></i> },
  { label: "Liga Konferencji", icon: <i className="bi bi-trophy sidebar-icon text-success"></i> },
  { label: "Ekstraklasa", icon: <i className="bi bi-circle sidebar-icon text-info"></i> },
  { label: "Premier League", icon: <i className="bi bi-trophy sidebar-icon text-secondary"></i> },
  { label: "La Liga", icon: <i className="bi bi-trophy sidebar-icon" style={{color:"#E30613"}}></i> },
  { label: "Bundesliga", icon: <i className="bi bi-trophy sidebar-icon" style={{color:"#ED1C24"}}></i> },
  { label: "Serie A", icon: <i className="bi bi-trophy sidebar-icon" style={{color:"#1D3557"}}></i> },
  { label: "Ligue 1", icon: <i className="bi bi-trophy sidebar-icon" style={{color:"#FFD700"}}></i> }
];
const importantList = [
  { label: "Anglia", icon: <span className="sidebar-icon"><img alt="Anglia" src="https://flagcdn.com/16x12/gb.png" /></span> },
  { label: "Arabia Saudyjska", icon: <span className="sidebar-icon"><img alt="Arabia" src="https://flagcdn.com/16x12/sa.png" /></span> },
  { label: "Belgia", icon: <span className="sidebar-icon"><img alt="Belgia" src="https://flagcdn.com/16x12/be.png" /></span> },
  { label: "Chorwacja", icon: <span className="sidebar-icon"><img alt="Chorwacja" src="https://flagcdn.com/16x12/hr.png" /></span> },
  { label: "Cypr", icon: <span className="sidebar-icon"><img alt="Cypr" src="https://flagcdn.com/16x12/cy.png" /></span> },
  { label: "Czechy", icon: <span className="sidebar-icon"><img alt="Czechy" src="https://flagcdn.com/16x12/cz.png" /></span> },
  { label: "Dania", icon: <span className="sidebar-icon"><img alt="Dania" src="https://flagcdn.com/16x12/dk.png" /></span> },
  { label: "Francja", icon: <span className="sidebar-icon"><img alt="Francja" src="https://flagcdn.com/16x12/fr.png" /></span> },
  { label: "Grecja", icon: <span className="sidebar-icon"><img alt="Grecja" src="https://flagcdn.com/16x12/gr.png" /></span> },
  { label: "Hiszpania", icon: <span className="sidebar-icon"><img alt="Hiszpania" src="https://flagcdn.com/16x12/es.png" /></span> }
];

export default function SidebarLeft() {
  return (
    <aside className="col-lg-2 col-md-3 d-none d-md-block px-0" style={{ minWidth: 210 }}>
      <div className="sidebar-card">
        <h5>Popularne</h5>
        <ul className="sidebar-list">
          {popularList.map(({ label, icon }) => (
            <li key={label}>
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-card">
        <h5>Ważne</h5>
        <ul className="sidebar-list">
          {importantList.map(({ label, icon }) => (
            <li key={label}>
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}