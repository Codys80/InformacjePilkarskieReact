import React from "react";

export default function WidgetCard({ icon, title, rows, color, extra }) {
  const [isExpanded, setIsExpanded] = React.useState(true);
  return (
    <div className="widget-card mb-3 p-3">
      <div className="widget-card-title mb-2">
        <span style={{ color, fontSize: 22 }}>{icon}</span>
        <span>{title}</span>
        {extra}
      </div>
      <ul className="list-unstyled mb-2">
      {isExpanded
        ? rows.slice(0, 4).map(({ left, right }, idx) => (
            <li className="widget-row" key={left}>
              <span>{left}</span>
              {right && <span>{right}</span>}
            </li>
          ))
        : rows.slice(0, rows.length).map(({ left, right }, idx) => (
            <li className="widget-row" key={left}>
              <span>{left}</span>
              {right && <span>{right}</span>}
            </li>
          ))
      }
      </ul>
      <ul className="list-unstyled mb-2">
        
      </ul>
      <div className="widget-card-footer">
        <button className={isExpanded? "widget-card-btn bi-chevron-down" : "widget-card-btn bi-chevron-up"} onClick={() => setIsExpanded(!isExpanded)}>Rozwiń</button>
        
        <button className="widget-card-btn">Więcej</button>
      </div>
    </div>
  );
}