
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, GraduationCap, ChevronLeft, ChevronRight, Calendar, MapPin, CheckCircle, Star } from 'lucide-react';
import VerticalVideoCarousel from '../components/VerticalVideoCarousel';
import { VERTICAL_VIDEOS, TEAM, ACADEMY_IMAGES } from '../constants';

const heroSlides = [
  {
    id: 1,
    // High-tech Laboratory / Engineering
    image: "https://i.ibb.co/WWtRVGv5/Whats-App-Image-2025-11-29-at-20-38-08-1.jpg",
    badge: "Engenharia de Ponta",
    title: <><span className="text-ortho-cyan">Centro</span> de Fabricação</>,
    description: "Desenvolvemos próteses e órteses de alta performance com processos industriais avançados, garantindo qualidade e precisão para cada paciente."
  },
  {
    id: 2,
    // CNC / Precision Manufacturing
    image: "https://i.ibb.co/rKPJ0RZc/Whats-App-Image-2025-11-30-at-01-02-46.jpg",
    badge: "Tecnologia Industrial",
    title: <>Máquinas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Equipamentos</span></>,
    description: "Nossa infraestrutura conta com CNC de 5 eixos e impressão 3D de última geração, transformando projetos digitais em realidade tangível."
  },
  {
    id: 3,
    // Education / Workshop context
    image: "https://i.ibb.co/1tx1b3L7/13.jpg",
    badge: "Educação Especializada",
    title: <><span className="text-transparent bg-clip-text bg-gradient-to-r from-ortho-cyan to-white">Cursos</span> e Treinamentos</>,
    description: "Capacitação profissional completa. Compartilhamos conhecimento técnico e prático para elevar o nível da ortopedia nacional."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? heroSlides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover opacity-60 grayscale scale-105 transform transition-transform duration-[10000ms]" 
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)' }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-ortho-navy/30 to-ortho-black"></div>
          </div>
        ))}

        {/* Content Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0 relative' 
                  : 'opacity-0 translate-y-8 absolute pointer-events-none'
              }`}
            >
              <div className="mb-6 inline-block">
                <span className="bg-ortho-cyan/10 text-ortho-cyan border border-ortho-cyan px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
                  {slide.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/manufacturing" className="border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-gray-600 text-gray-400 hover:text-ortho-cyan hover:border-ortho-cyan transition-all duration-300 bg-black/20 backdrop-blur-md hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full border border-gray-600 text-gray-400 hover:text-ortho-cyan hover:border-ortho-cyan transition-all duration-300 bg-black/20 backdrop-blur-md hidden md:block"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-ortho-cyan' : 'w-4 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-ortho-black border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossa Missão</h2>
            <div className="w-20 h-1 bg-ortho-cyan mx-auto"></div>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Democratizar o acesso a soluções ortopédicas de nível mundial, combinando o cuidado artesanal com a precisão da indústria 4.0. Não fabricamos apenas peças; construímos autonomia.
            </p>
          </div>
        </div>
      </section>
      
      {/* Vertical Video Carousel */}
      <section className="bg-ortho-black pb-12">
        <VerticalVideoCarousel videos={VERTICAL_VIDEOS} />
      </section>

      {/* NEW SECTION: RIGO CONCEPT FEATURED COURSE */}
      <section className="py-24 bg-ortho-black relative overflow-hidden border-t border-gray-900">
         {/* Decorative blurred blobs */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ortho-cyan/5 rounded-full blur-[128px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ortho-navy/20 rounded-full blur-[128px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-ortho-cyan font-bold tracking-widest uppercase text-sm border border-ortho-cyan/30 px-3 py-1 rounded-full">Destaque Acadêmico</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-4">Trilha de <span className="text-transparent bg-clip-text bg-gradient-to-r from-ortho-cyan to-blue-400">Conhecimento</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Acompanhe o próximo grande passo na sua carreira.
              </p>
            </div>

            {/* Featured Course Card */}
            <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-ortho-cyan/10 transition-shadow duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Banner Image Column */}
                <div className="relative h-[400px] lg:h-auto group overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-800">
                   <div className="absolute inset-0 bg-ortho-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay"></div>
                   <img 
                      src="https://i.ibb.co/bMcSkx54/588427097-17929588671139106-2121076450106129035-n.jpg" 
                      alt="Formação Rigo Concept Banner" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   {/* Overlay Text for Mobile */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent lg:hidden flex items-end p-6">
                      <span className="text-white font-bold text-xl">Nível 1 - Certificação Internacional</span>
                   </div>
                </div>

                {/* Content Column */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="bg-ortho-cyan text-black px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                        <Star size={14} fill="black" /> Certificação Internacional
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar size={14} /> Inscrições Abertas
                      </span>
                   </div>

                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                     Formação Rigo Concept®️ <span className="text-ortho-cyan">– Nível 1</span>
                   </h3>
                   
                   <p className="text-gray-300 text-lg mb-6 leading-relaxed border-l-4 border-ortho-cyan pl-4">
                     A certificação essencial para profissionais que tratam Escoliose. Domine o método internacional mais avançado para o manejo clínico e ortésico.
                   </p>

                   <div className="space-y-6 mb-8 bg-black/20 p-6 rounded-xl border border-gray-800">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <GraduationCap size={20} className="text-ortho-cyan" /> 
                        Corpo Docente de Excelência:
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-ortho-cyan mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm"><strong className="text-white">Roberto Araújo</strong> – CPO e Especialista em Escoliose</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-ortho-cyan mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm"><strong className="text-white">Garikoitz Aristegui</strong> – Instrutor Internacional BSPTS / Rigo Concept®️</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-ortho-cyan mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm"><strong className="text-white">Gledison Oliveira</strong> – Especialista em Coletes Rigo Concept®️</span>
                        </li>
                      </ul>
                   </div>

                   <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/courses" className="flex-1 bg-ortho-cyan text-black text-center py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300 shadow-lg shadow-ortho-cyan/20">
                         Garantir Minha Vaga
                      </Link>
                      <Link to="/courses" className="flex-1 border border-gray-600 text-white text-center py-4 rounded-xl font-semibold hover:border-ortho-cyan hover:text-ortho-cyan transition-colors duration-300">
                         Ver Ementa Completa
                      </Link>
                   </div>
                </div>
              </div>
            </div>

         </div>
      </section>

      {/* NEW SECTION: STRUCTURE GALLERY (SCROLLING) */}
      <section className="py-20 bg-ortho-navy/20 border-t border-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Infraestrutura <span className="text-ortho-cyan">Academy</span></h2>
            <p className="text-gray-400 text-sm">Laboratórios equipados para ensino prático.</p>
        </div>
        <div className="relative w-full">
            <div className="flex animate-[scroll_40s_linear_infinite] gap-6 w-[max-content] hover:[animation-play-state:paused]">
                {[...ACADEMY_IMAGES, ...ACADEMY_IMAGES].map((src, index) => (
                    <div key={index} className="w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden border border-gray-700 hover:border-ortho-cyan transition-colors duration-300">
                        <img src={src} alt={`Estrutura Prothera ${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-black border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Quem Faz <span className="text-ortho-cyan">Acontecer</span></h2>
              <p className="text-gray-400">Nossa liderança técnica e educacional.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TEAM.map((member) => (
                <div key={member.id} className="group text-center">
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full p-1 border-2 border-gray-800 group-hover:border-ortho-cyan transition-colors duration-300">
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ortho-cyan transition-colors">{member.name}</h3>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{member.role}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-24 bg-ortho-black border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold text-white mb-4">Onde <span className="text-ortho-cyan">Estamos</span></h2>
                 <p className="text-gray-400">Visite nossa sede e conheça nossa estrutura.</p>
             </div>
             <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-gray-900 group">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.014044764572!2d-38.513461299999996!3d-3.7406110999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74994fc1eb5f9%3A0xeda848d43e2198c4!2sProthera%20O%26P%20Service!5e1!3m2!1spt-BR!2sbr!4v1758393982674!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Localização Prothera"
                    className="w-full h-full transition-all duration-700 hover:filter-none"
                 ></iframe>
             </div>
         </div>
      </section>
      
    </div>
  );
};

export default Home;
