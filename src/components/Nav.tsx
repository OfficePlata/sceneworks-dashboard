import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sw-nav">
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '0.15rem' }}>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.12em', color: '#f0ede5' }}>SCENE</span>
          <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.12em', color: '#c4a35a' }}>WORKS</span>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} style={{
              textDecoration: 'none',
              fontSize: '0.78rem',
              letterSpacing: '0.04em',
              fontWeight: pathname === link.path ? 600 : 400,
              color: pathname === link.path ? '#c4a35a' : '#9a9590',
              transition: 'color 0.2s',
              whiteSpace: 'nowrap',
            }}>
              {link.label}
            </Link>
          ))}
          <Link to="/services" style={{
            textDecoration: 'none',
            border: '1px solid #c4a35a',
            color: '#c4a35a',
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            padding: '0.45rem 1.1rem',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s, color 0.2s',
          }}>
            無料相談
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0ede5', padding: '0.25rem' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0d0c0a', borderTop: '1px solid #252219', padding: '1rem 2rem 1.5rem' }}>
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setOpen(false)} style={{
              display: 'block', textDecoration: 'none',
              padding: '0.75rem 0',
              fontSize: '0.9rem',
              color: pathname === link.path ? '#c4a35a' : '#9a9590',
              borderBottom: '1px solid #252219',
            }}>
              {link.label}
            </Link>
          ))}
          <Link to="/services" onClick={() => setOpen(false)} style={{
            display: 'inline-block', marginTop: '1.25rem', textDecoration: 'none',
            border: '1px solid #c4a35a', color: '#c4a35a',
            fontSize: '0.85rem', letterSpacing: '0.08em',
            padding: '0.6rem 1.5rem',
          }}>
            無料相談
          </Link>
        </div>
      )}
    </nav>
  );
}
