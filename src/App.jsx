import React from "react";
import { ThemeProvider } from "./ThemeContext";
import TopMenu from "./components/TopMenu.jsx";
import SidebarLeft from "./components/SidebarLeft.jsx";
import SidebarRight from "./components/SidebarRight.jsx";
import MainCardsBar from "./components/MainCardsBar.jsx";
import LiveScoresBar from "./components/LiveScoresBar.jsx";
import MainNewsGrid from "./components/MainNewsGrid.jsx";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <TopMenu />
      <MainCardsBar />
      <LiveScoresBar />
      <div className="container-fluid" style={{ maxWidth: "1500px" }}>
        <div className="row">
          <SidebarLeft />
          <div className="col-12 col-md-7 col-lg-7 px-2">
            <MainNewsGrid />
          </div>
          <SidebarRight />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;