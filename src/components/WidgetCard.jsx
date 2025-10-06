import React from "react";

export default function WidgetCard({ icon, title, rows, color, extra }) {
  return (
    <div className="widget-card mb-3 p-3">
      <div className="widget-card-title mb-2">
        <span style={{ color, fontSize: 22 }}>{icon}</span>
        <span>{title}</span>
        {extra}
      </div>
      <ul className="list-unstyled mb-2">
        {rows.map(({ left, right }, idx) => (
          <li className="widget-row" key={left}>
            <span>{left}</span>
            {right && <span>{right}</span>}
          </li>
        ))}
      </ul>
      <div className="widget-card-footer">
        <a href="#" className="widget-card-link">Rozwiń <i className="bi bi-chevron-down"></i></a>
        <button className="widget-card-btn">Więcej</button>
      </div>
    </div>
  );
}