import logo from './logo.svg';
import './App.css';
import './equipo.css';
import { motion } from 'framer-motion'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from './components/header';
import { Equipo } from './pages/Equipo';
import { Error404 } from './pages/Error404';
import {Bolsadetrabajo} from './pages/Bolsadetrabajo';
import { FloatingButton, Item } from "react-floating-button";
import whatsapp from "./asset/whatsapp.svg"

function App() {
  return (
    <>
  
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/bolsadetrabajo" element={<Bolsadetrabajo />} />
         {/*
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
