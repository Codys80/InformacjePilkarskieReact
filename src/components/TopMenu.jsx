import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TopMenu() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg sticky-top px-2" style={{
      background: 'var(--bgColor)',
      color: 'var(--widgetWrapperTitleColor)',
      minHeight: 64,
      borderBottom: '1.5px solid var(--widgetWrapperBorderColor)'
    }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/" style={{ fontWeight: "bold", fontSize: 28 }}>
          <span style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-1px" }}>
            <span style={{
              display: "inline-block",
              width: 10,
              height: 10,
              background: "#19c2a5",
              borderRadius: "50%",
              marginRight: 6,
              marginBottom: 2
            }}></span>
            MECZYKI
          </span>
        </a>
        <button
          type="button"
          className="btn btn-light btn-sm rounded-circle mx-2"
          title="Przełącz motyw"
          style={{
            background: theme === "dark" ? "#444" : "#f2f2f2",
            border: "none",
            boxShadow: "none"
          }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark"
            ? <span><i className="bi bi-sun-fill" style={{ color: "#ffd700", fontSize: 18 }} /> <i className="bi bi-moon" style={{ color: "#bbb", fontSize: 18 }} /></span>
            : <span><i className="bi bi-moon" style={{ color: "#444", fontSize: 18 }} /> <i className="bi bi-sun-fill" style={{ color: "#ffac00", fontSize: 18 }} /></span>
          }
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold mx-2" href="#">NEWSY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold mx-2" href="#">WYNIKI NA ŻYWO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold mx-2" href="#">SPORTBUZZ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold mx-2" href="#">SKRÓTY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold mx-2" href="#">TYPY</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link fw-bold mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                BUKMACHERZY
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">STS</a></li>
                <li><a className="dropdown-item" href="#">Fortuna</a></li>
                <li><a className="dropdown-item" href="#">Betclic</a></li>
              </ul>
            </li>
          </ul>
          <a
            href="#"
            className="btn btn-outline-info fw-bold rounded-pill px-3 ms-lg-3"
            style={{
              border: "2px solid #19c2a5",
              color: 'var(--widgetWrapperTitleColor)',
              background: "transparent"
            }}
          >
            Zaloguj się
          </a>
        </div>
      </div>
    </nav>
  );
}