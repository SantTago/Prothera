import React from 'react';
import VideoCarousel from '../components/VideoCarousel';
import { VIDEOS } from '../constants';

const Machines: React.FC = () => {
  return (
    <div className="bg-ortho-black min-h-screen">
       {/* Hero Machines */}
      <div className="relative py-20 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossa <span className="text-ortho-cyan">Tecnologia</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Onde a precisão do código encontra a arte da reabilitação. Conheça as máquinas que transformam projetos digitais em realidade física.
          </p>
        </div>
      </div>

      {/* CNC Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-ortho-cyan text-sm font-bold tracking-widest mb-2 uppercase">Subtração de Material</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Usinagem CNC de 5 Eixos</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nossa fresadora CNC esculpe blocos de poliuretano e resina com precisão micrométrica. Ao contrário dos métodos manuais, o controle numérico computadorizado garante que a forma positiva do membro do paciente seja replicada com 100% de fidelidade ao arquivo CAD.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded border border-gray-800">
                <span className="block text-2xl font-bold text-white mb-1">0.01mm</span>
                <span className="text-xs text-gray-500">Tolerância</span>
              </div>
              <div className="bg-gray-900 p-4 rounded border border-gray-800">
                <span className="block text-2xl font-bold text-white mb-1">24h</span>
                <span className="text-xs text-gray-500">Operação Contínua</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
            <img 
              src="https://picsum.photos/id/119/800/600" 
              alt="CNC Machine" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3D Printer Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
              <img 
                src="https://picsum.photos/id/252/800/600" 
                alt="3D Printer" 
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-ortho-cyan text-sm font-bold tracking-widest mb-2 uppercase">Manufatura Aditiva</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Impressão 3D Industrial</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Rapidez na prototipagem e liberdade geométrica. Utilizamos impressoras MJF (Multi Jet Fusion) para criar estruturas complexas e leves que seriam impossíveis de fabricar por métodos tradicionais. Ideal para coletes e encaixes de prova.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Materiais: PA11, PA12, Fibra de Carbono</li>
                <li>• Redução de desperdício de material</li>
                <li>• Personalização em massa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Carousel Section - REQUIRED */}
      <section className="py-24 bg-ortho-navy border-t border-ortho-cyan/20 border-b border-ortho-cyan/20">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center gap-3">
             <span className="text-4xl">🛠️</span> Por Dentro da Fabricação: <span className="text-ortho-cyan">Tecnologia em Ação</span>
           </h2>
           <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
             Veja nossos engenheiros e máquinas trabalhando em sincronia para criar o futuro da ortopedia.
           </p>
        </div>
        
        {/* The Carousel Component */}
        <VideoCarousel videos={VIDEOS} />
        
      </section>
    </div>
  );
};

export default Machines;