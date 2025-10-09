import React from "react";
import WidgetCard from "./WidgetCard";

export default function MainCardsBar() {
  return (
    <div className="container-fluid" style={{ maxWidth: "1500px" }}>
      <div className="row justify-content-center mt-3 gx-3">
        <div className="col-12 col-md-6 col-lg-3">
          <WidgetCard
            icon={<i className="bi bi-soccer"></i>}
            title="SKRÓTY"
            color="#19c2a5"
            rows={[
              { left: "Sevilla - FC Barcelona", right: "4:1" },
              { left: "FC Porto - Benfica Lizbona", right: "0:0" },
              { left: "Celta de Vigo - Atlético Madryt", right: "1:1" },
              { left: "Juventus Turyn - AC Milan", right: "2:2" }
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <WidgetCard
            icon={<i className="bi bi-bar-chart-line"></i>}
            title="TYPY"
            color="#FFD700"
            rows={[
              { left: "FC Porto - Benfica Lizbona", right: "" },
              { left: "Celta de Vigo - Atlético Madryt", right: "" },
              { left: "Juventus Turyn - AC Milan", right: "" },
              { left: "Górnik Zabrze - Legia Warszawa", right: "" }
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          
          <WidgetCard
            icon={<i className="bi bi-gift"></i>}
            title="BONUSY"
            color="#ED1C24"
            rows={[
              { left: "Superbet kod promocyjny", right: "" },
              { left: "Betclic kod promocyjny", right: "" },
              { left: "STS kod promocyjny", right: "" },
              { left: "Fortuna kod promocyjny", right: "" },
              { left: "A kod promocyjny", right: "" },
              { left: "B kod promocyjny", right: "" },
              { left: "C kod promocyjny", right: "" },
              { left: "D kod promocyjny", right: "" },
              { left: "E kod promocyjny", right: "" },
            ]}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          
          <WidgetCard
            icon={<i className="bi bi-chat-dots"></i>}
            title="SPORTBUZZ"
            color="#19c2a5"
            rows={[
              { left: "Robert Lewandowski w liczbach", right: "" },
              { left: "Co Wy na to?", right: "" },
              { left: "Robert Lewandowski", right: "" },
              { left: "Nie da się ukryć", right: "" },
              { left: "Wojciech Szczęsny", right: "" },
              { left: "Jakub Błaszczykowski", right: "" },
              { left: "Cash", right: "" },
              { left: "Krzysztof Piątek", right: "" },
            ]}
            // extra={<button className="btn btn-sm btn-success ms-auto">Dodaj +</button>}
          />
        </div>
      </div>
    </div>
  );
}