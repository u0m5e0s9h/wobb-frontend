import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampaignList from "./components/CampaignList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <CampaignList />
      </main>
      <Footer />
    </div>
  );
}

export default App;