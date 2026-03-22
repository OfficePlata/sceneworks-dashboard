import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BusinessModel from './pages/BusinessModel';
import Services from './pages/Services';
import Works from './pages/Works';
import Partners from './pages/Partners';
import Store from './pages/Store';
import Company from './pages/Company';

export default function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Hiragino Sans', 'Noto Sans JP', sans-serif", color: '#1e293b' }}>
        <Nav />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/model" element={<BusinessModel />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/store" element={<Store />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
