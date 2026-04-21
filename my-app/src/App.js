import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Card from './components/Card'
import Specials from './components/Specials'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Header/>
      <div className="header-nav">
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
