import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, GraduationCap, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import VerticalVideoCarousel from '../components/VerticalVideoCarousel';
import { VERTICAL_VIDEOS, COURSES, TEAM } from '../constants';

const heroSlides = [
  {
    id: 1,
    // High-tech Laboratory / Engineering
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    badge: "Engenharia de Ponta",
    title: <><span className="text-ortho-cyan">Centro</span> de Fabricação</>,
    description: "Desenvolvemos próteses e órteses de alta performance com processos industriais avançados, garantindo qualidade e precisão para cada paciente."
  },
  {
    id: 2,
    // CNC / Precision Manufacturing
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=1920",
    badge: "Tecnologia Industrial",
    title: <>Máquinas e <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Equipamentos</span></>,
    description: "Nossa infraestrutura conta com CNC de 5 eixos e impressão 3D de última geração, transformando projetos digitais em realidade tangível."
  },
  {
    id: 3,
    // Education / Workshop context
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1920",
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
                <button className="bg-ortho-cyan text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                  Solicite um Orçamento
                </button>
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

      {/* NEW SECTION: Academic Timeline & Team */}
      <section className="py-24 bg-ortho-black relative overflow-hidden border-t border-gray-900">
         {/* Decorative blurred blobs */}
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-ortho-navy rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ortho-cyan rounded-full blur-[128px] opacity-5 pointer-events-none"></div>

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Timeline Header */}
            <div className="text-center mb-20">
              <span className="text-ortho-cyan font-bold tracking-widest uppercase text-sm">Cronograma Acadêmico</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Trilha de <span className="text-transparent bg-clip-text bg-gradient-to-r from-ortho-cyan to-blue-500">Conhecimento</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Acompanhe nossa agenda de workshops e especializações. Uma jornada contínua de aprendizado técnico e prático.
              </p>
            </div>

            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-6 md:left-1/2 top-0 bottom-32 w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent md:-translate-x-1/2"></div>

               <div className="space-y-12">
                  {COURSES.map((course, index) => (
                     <div key={course.id} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Spacer for Desktop centering */}
                        <div className="hidden md:block w-5/12"></div>

                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black border-2 border-ortho-cyan rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,255,255,0.6)]"></div>

                        {/* Content Card */}
                        <div className="ml-16 md:ml-0 w-full md:w-5/12 group">
                           <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-ortho-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-ortho-cyan/10 relative overflow-hidden`}>
                              {/* Hover Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-ortho-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4">
                                  <Calendar size={16} className="text-ortho-cyan" />
                                  <span className="text-sm font-mono text-ortho-cyan uppercase tracking-wider">{course.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-ortho-cyan transition-colors">{course.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{course.description}</p>
                                
                                {/* Visual Element (Image) inside the card */}
                                <div className="h-32 w-full rounded-lg overflow-hidden relative mb-4 border border-gray-800">
                                  <img 
                                    src={`https://picsum.photos/seed/${course.id}/600/300`} 
                                    alt={course.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                  />
                                </div>

                                <Link to="/courses" className="inline-flex items-center text-sm font-semibold text-white hover:text-ortho-cyan transition-colors mt-2">
                                  Detalhes do Módulo <ChevronRight size={16} className="ml-1" />
                                </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               
               {/* Bottom CTA */}
               <div className="text-center mt-16 mb-24">
                  <Link to="/courses" className="inline-block px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-ortho-cyan hover:text-white transition-all duration-300 backdrop-blur-sm hover:bg-ortho-cyan/10">
                     Ver Calendário Completo
                  </Link>
               </div>
            </div>

            {/* TEAM SECTION */}
            <div className="pt-16 border-t border-gray-800">
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

            {/* MAP SECTION - NEW */}
            <div className="pt-24 mt-16 border-t border-gray-800">
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

         </div>
      </section>
      
    </div>
  );
};

export default Home;