import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Clapperboard, Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'ホーム' },
  { path: '/about', label: 'ビジョン' },
  { path: '/model', label: 'ビジネスモデル' },
  { path: '/services', label: '事業内容' },
  { path: '/works', label: '実績' },
  { path: '/partners', label: 'パートナー' },
  { path: '/store', label: 'ストア' },
  { path: '/company', label: '会社概要' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sw-nav">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Clapperboard size={22} color="#f59e0b" />
          <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.06em', color: '#f8fafc' }}>
            SCENE<span style={{ color: '#f59e0b' }}>WORKS</span>
          </span>
        </Link>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: pathname === link.path ? 700 : 400,
                color: pathname === link.path ? '#f59e0b' : '#94a3b8',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services"
            style={{
              textDecoration: 'none',
              background: '#f59e0b',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.8rem',
              padding: '0.45rem 1.2rem',
              borderRadius: '0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            無料相談
          </Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f8fafc', padding: '0.25rem' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: '#1e293b', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '0.5rem 1.5rem 1rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                textDecoration: 'none',
                padding: '0.75rem 0',
                fontSize: '0.95rem',
                fontWeight: pathname === link.path ? 700 : 400,
                color: pathname === link.path ? '#f59e0b' : '#cbd5e1',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              textDecoration: 'none',
              background: '#f59e0b',
              color: '#0f172a',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.6rem 1.5rem',
              borderRadius: '0.5rem',
            }}
          >
            無料相談
          </Link>
        </div>
      )}
    </nav>
  );
}
