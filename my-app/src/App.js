import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card'
import Specials from './components/Specials'
import Hero from './components/Hero'

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";

import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="header-nav">
            <Nav/>
          </div>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reservations" element={<BookingPage />} />
              <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
