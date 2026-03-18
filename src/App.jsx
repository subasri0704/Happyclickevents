import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import Wedding from './Pages/Wedding';
import Birth from './Pages/Birth';
import Commercial from './Pages/Commercial';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/birth" element={<Birth/>}/>
        <Route path="/commercial" element={<Commercial/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;