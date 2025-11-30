import React from 'react';

const Manufacturing: React.FC = () => {
  return (
    <div className="bg-ortho-black min-h-screen">
      
      {/* Header */}
      <div className="bg-ortho-navy py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Central de Fabricação</h1>
          <p className="text-xl text-gray-300">Excelência técnica em cada detalhe.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Section 1: Prosthetics */}
        <section id="proteses" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-ortho-cyan pl-4">Próteses de Alta Performance</h2>
            <p className="text-gray-400 text-lg mb-6">
              Desenvolvemos membros artificiais que devolvem a função e a estética. Utilizamos fibra de carbono e ligas de titânio para garantir leveza e durabilidade.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Próteses Mioelétricas
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Membros Inferiores Esportivos
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Acabamento Cosmético Realista
              </li>
            </ul>
            <button className="bg-transparent border border-gray-600 text-white hover:border-ortho-cyan hover:text-ortho-cyan px-6 py-3 rounded transition-colors">
              Ver Catálogo Técnico
            </button>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-ortho-cyan to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/id/201/600/400" 
              alt="Prótese" 
              className="relative rounded-lg shadow-2xl w-full object-cover border border-gray-800"
            />
          </div>
        </section>

        {/* Section 2: Orthotics */}
        <section id="orteses" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-ortho-cyan rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/id/160/600/400" 
              alt="Órtese" 
              className="relative rounded-lg shadow-2xl w-full object-cover border border-gray-800"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-ortho-cyan pl-4">Órteses Corretivas</h2>
            <p className="text-gray-400 text-lg mb-6">
              Suporte, alinhamento e correção. Nossas órteses são projetadas digitalmente (CAD) para se adaptar perfeitamente à anatomia do paciente, evitando pontos de pressão.
            </p>
             <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Órteses Cranianas
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                AFOs e KAFOs em Termoplástico
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Tutores Longos
              </li>
            </ul>
             <button className="bg-transparent border border-gray-600 text-white hover:border-ortho-cyan hover:text-ortho-cyan px-6 py-3 rounded transition-colors">
              Ver Catálogo Técnico
            </button>
          </div>
        </section>

        {/* Section 3: Vests */}
        <section id="coletes" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-ortho-cyan pl-4">Coletes Ortopédicos</h2>
            <p className="text-gray-400 text-lg mb-6">
              Tratamento eficaz para escoliose e patologias da coluna. Utilizamos escaneamento 3D do tronco para eliminar a necessidade de moldes de gesso desconfortáveis.
            </p>
             <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Coletes Milwaukee e Boston
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Tecnologia de Impressão 3D Respirável
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-ortho-cyan rounded-full mr-3"></span>
                Design Discreto
              </li>
            </ul>
             <button className="bg-transparent border border-gray-600 text-white hover:border-ortho-cyan hover:text-ortho-cyan px-6 py-3 rounded transition-colors">
              Ver Catálogo Técnico
            </button>
          </div>
           <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-ortho-cyan to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/id/250/600/400" 
              alt="Colete" 
              className="relative rounded-lg shadow-2xl w-full object-cover border border-gray-800"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Manufacturing;