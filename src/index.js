import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"

// Pages of website
import Home from "./pages/Home/home"
import Top2fifi from "./pages/Top2fifi/top2fifi"
import Coup2coeur from "./pages/Coup2coeur/coup2coeur"
import Clip2fifi from "./pages/Clips2fifi/clips2fifi"
import Contact from "./pages/Contact/contact"

// Components of website
import Header from "./components/Header/header"
import Player from "./components/Player/player"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Player />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top2fifi" element={<Top2fifi />} />
        <Route path="/coup2coeur" element={<Coup2coeur />} />
        <Route path="/clips2fifi" element={<Clip2fifi />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

