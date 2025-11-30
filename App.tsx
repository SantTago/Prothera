import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Machines from './pages/Machines';
import Courses from './pages/Courses';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Central de Fabricação', path: '/manufacturing' },
    { name: 'Máquinas e Equipamentos', path: '/machines' },
    { name: 'Cursos', path: '/courses' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-ortho-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-ortho-cyan rounded-sm rotate-45"></div>
              <span className="text-white text-2xl font-bold tracking-wider">ORTHO<span className="text-ortho-cyan">TECH</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path) 
                      ? 'text-ortho-cyan border-b-2 border-ortho-cyan' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-transparent border border-ortho-cyan text-ortho-cyan px-6 py-2 rounded-full hover:bg-ortho-cyan hover:text-black transition-all duration-300 font-semibold text-sm">
              Contato
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-ortho-navy border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-ortho-cyan bg-black/20' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <button className="w-full text-left mt-4 bg-ortho-cyan text-black px-3 py-2 rounded-md font-bold">
              Solicite Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-ortho-navy pt-16 pb-8 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
             <div className="w-6 h-6 bg-ortho-cyan rounded-sm rotate-45"></div>
             <span className="text-white text-xl font-bold tracking-wider">ORTHO<span className="text-ortho-cyan">TECH</span></span>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Liderando a revolução na fabricação de próteses e órteses através da engenharia de precisão e tecnologia avançada. Devolvendo movimento, restaurando vidas.
          </p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Links Rápidos</h3>
          <ul className="space-y-4">
            <li><Link to="/manufacturing" className="text-gray-400 hover:text-ortho-cyan transition-colors">Produtos</Link></li>
            <li><Link to="/machines" className="text-gray-400 hover:text-ortho-cyan transition-colors">Tecnologia</Link></li>
            <li><Link to="/courses" className="text-gray-400 hover:text-ortho-cyan transition-colors">Educação</Link></li>
            <li><a href="#" className="text-gray-400 hover:text-ortho-cyan transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400">
              <Mail size={18} className="text-ortho-cyan" />
              contato@orthotech.com
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-ortho-cyan" />
              (11) 99999-8888
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <MapPin size={18} className="text-ortho-cyan" />
              São Paulo, SP - Brasil
            </li>
            <li className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">© 2024 OrthoTech Precision. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ortho-black text-white selection:bg-ortho-cyan selection:text-black">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;