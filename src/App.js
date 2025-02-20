import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import List from "./pages/List";
import Client from "./pages/Client";
import Career from "./pages/Career";
import Webhosting from "./pages/Webhosting";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio/Portfolio";



function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
          <Route path="about" element={<About/>} />
          <Route path="services" element={<Services/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="list" element={<List/>} />
          <Route path="clients" element={<Client/>} />
          <Route path="web-hosting" element={<Webhosting/>}/>
          <Route path="career" element={<Career/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
