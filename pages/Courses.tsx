
import React, { useState, useEffect } from 'react';
import { COURSES, ACADEMY_IMAGES } from '../constants';
import { Calendar, User, MessageCircle, MapPin, CheckCircle, Clock } from 'lucide-react';

const Courses: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ACADEMY_IMAGES.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const course = COURSES[0]; // Assuming Rigo Concept is the main focus

  return (
    <div className="bg-ortho-black min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-ortho-navy to-ortho-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Prothera <span className="text-ortho-cyan">Academy</span></h1>
          <p className="text-gray-300 text-lg">
            Formação de elite para especialistas em escoliose.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Unified Course Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-ortho-cyan/10 transition-shadow duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Image Gallery Slider */}
            <div className="relative h-[400px] lg:h-auto overflow-hidden bg-black group">
               {ACADEMY_IMAGES.map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Galeria Prothera ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
               ))}
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-gray-900 pointer-events-none"></div>
               
               <div className="absolute bottom-6 left-6 z-10">
                 <span className="bg-ortho-cyan text-black px-3 py-1 rounded font-bold text-xs uppercase tracking-wide mb-2 inline-block">
                   Imersão Prática
                 </span>
               </div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="p-8 md:p-10 flex flex-col relative">
              
              {/* Date & Location Header Block */}
              <div className="flex items-center gap-4 mb-8 bg-black/40 p-4 rounded-xl border border-gray-800">
                <div className="flex flex-col items-center justify-center bg-ortho-navy px-4 py-2 rounded-lg border border-ortho-cyan/30 min-w-[100px]">
                  <span className="text-2xl font-bold text-white">21-24</span>
                  <span className="text-xs font-bold text-ortho-cyan uppercase">Maio 2026</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                    <MapPin size={14} className="text-ortho-cyan" /> São Paulo - Brasil
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                {course.title}
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {course.description}
              </p>

              {/* Faculty Mini List */}
              <div className="mb-8 space-y-2">
                <p className="text-sm font-semibold text-white border-b border-gray-800 pb-2 mb-2">Com os professores:</p>
                <div className="flex flex-wrap gap-2">
                   <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Roberto Araújo</span>
                   <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Gari Aristegui</span>
                   <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Gledison Oliveira</span>
                </div>
              </div>

              <div className="mt-auto">
                <a 
                  href="https://wa.me/5519993989975?text=Olá, tenho interesse na Formação Rigo Concept" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/20 group transform hover:-translate-y-1"
                >
                  <MessageCircle size={24} className="group-hover:animate-bounce" />
                  <div className="text-left leading-tight">
                    <span className="block text-xs font-normal opacity-90">Últimas Vagas</span>
                    <span className="block text-lg">Inscrever via WhatsApp</span>
                  </div>
                </a>
                <p className="text-center text-gray-500 text-xs mt-3">
                  Clique para falar diretamente com nossa equipe.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;
