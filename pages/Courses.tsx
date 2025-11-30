import React, { useState } from 'react';
import { COURSES, TESTIMONIALS } from '../constants';
import { Calendar, User, CheckCircle } from 'lucide-react';

const Courses: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    // In real app, send to API
  };

  return (
    <div className="bg-ortho-black min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-gradient-to-b from-ortho-navy to-ortho-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">OrthoTech <span className="text-ortho-cyan">Academy</span></h1>
          <p className="text-gray-300 text-lg">
            Compartilhando conhecimento para elevar o padrão da ortopedia técnica nacional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
        
        {/* Course List (Left Col) */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">Próximos Cursos</h2>
          
          {COURSES.map((course) => (
            <div key={course.id} className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-ortho-cyan transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
                <span className="bg-ortho-navy text-ortho-cyan px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
                  Vagas Abertas
                </span>
              </div>
              <p className="text-gray-400 mb-6">{course.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-ortho-cyan" />
                  {course.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-ortho-cyan" />
                  {course.audience}
                </div>
              </div>
            </div>
          ))}

          {/* Testimonials */}
          <div className="pt-12">
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-2">O que dizem nossos alunos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-ortho-navy/30 p-6 rounded-lg italic text-gray-300 relative">
                  <span className="text-4xl text-ortho-cyan absolute top-2 left-2 opacity-20">"</span>
                  <p className="mb-4 relative z-10">{t.text}</p>
                  <div>
                    <strong className="block text-white not-italic">{t.name}</strong>
                    <span className="text-sm text-ortho-cyan not-italic">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form (Right Col - Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-gray-700 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Interesse no Curso</h3>
            
            {formStatus === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <p className="text-white text-lg font-semibold">Inscrição Recebida!</p>
                <p className="text-gray-400 text-sm mt-2">Entraremos em contato em breve.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-ortho-cyan underline text-sm">Voltar</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                  <input type="text" required className="w-full bg-black border border-gray-700 rounded p-2 text-white focus:border-ortho-cyan focus:outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
                  <input type="email" required className="w-full bg-black border border-gray-700 rounded p-2 text-white focus:border-ortho-cyan focus:outline-none transition-colors" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Telefone</label>
                  <input type="tel" className="w-full bg-black border border-gray-700 rounded p-2 text-white focus:border-ortho-cyan focus:outline-none transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Curso de Interesse</label>
                  <select className="w-full bg-black border border-gray-700 rounded p-2 text-white focus:border-ortho-cyan focus:outline-none transition-colors">
                    {COURSES.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full bg-ortho-cyan text-black font-bold py-3 rounded hover:bg-white transition-colors duration-300 mt-4">
                  Enviar Inscrição
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;