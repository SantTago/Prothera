
import { VideoData, Course, Testimonial, TeamMember } from './types';

export const VIDEOS: VideoData[] = [
  {
    id: 'v1',
    title: 'Design CAD: Onde tudo começa',
    thumbnail: 'https://picsum.photos/id/1/600/400',
    duration: '2:15'
  },
  {
    id: 'v2',
    title: 'Precisão CNC em Ação',
    thumbnail: 'https://picsum.photos/id/119/600/400',
    duration: '1:45'
  },
  {
    id: 'v3',
    title: 'Impressão 3D de Alta Resistência',
    thumbnail: 'https://picsum.photos/id/252/600/400',
    duration: '3:20'
  },
  {
    id: 'v4',
    title: 'Ajuste Humano: Acabamento Técnico',
    thumbnail: 'https://picsum.photos/id/450/600/400',
    duration: '4:10'
  },
  {
    id: 'v5',
    title: 'Controle de Qualidade Rigoroso',
    thumbnail: 'https://picsum.photos/id/656/600/400',
    duration: '2:00'
  }
];

export const VERTICAL_VIDEOS: VideoData[] = [
  {
    id: 'shorts1',
    title: 'CNC Prothera em Ação',
    // YouTube Short 1: vJrSu3YM9Ic
    thumbnail: 'https://img.youtube.com/vi/vJrSu3YM9Ic/hqdefault.jpg', 
    duration: '0:15',
    videoUrl: 'https://www.youtube.com/embed/vJrSu3YM9Ic'
  },
  {
    id: 'shorts2',
    title: 'Processo de Escultura Digital',
    // YouTube Short 2: DrjqW1NpnkU
    thumbnail: 'https://img.youtube.com/vi/DrjqW1NpnkU/hqdefault.jpg',
    duration: '0:20',
    videoUrl: 'https://www.youtube.com/embed/DrjqW1NpnkU'
  },
  {
    id: 'shorts3',
    title: 'Acabamento e Detalhes',
    // YouTube Short 3: 837owKGwuo0
    thumbnail: 'https://img.youtube.com/vi/837owKGwuo0/hqdefault.jpg',
    duration: '0:30',
    videoUrl: 'https://www.youtube.com/embed/837owKGwuo0'
  },
  {
    id: 'shorts4',
    title: 'Tecnologia Aplicada',
    // YouTube Short 4: vUAGAsXhQak
    thumbnail: 'https://img.youtube.com/vi/vUAGAsXhQak/hqdefault.jpg',
    duration: '0:25',
    videoUrl: 'https://www.youtube.com/embed/vUAGAsXhQak'
  }
];

export const COURSES: Course[] = [
  {
    id: 'rigo1',
    title: 'Formação Rigo Concept®️ – Nível 1',
    date: '21, 22, 23 e 24 de Maio de 2026',
    audience: 'Fisioterapeutas e Ortesistas',
    description: 'A certificação essencial para profissionais que tratam Escoliose. Domine o método internacional mais avançado para o manejo clínico e ortésico.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Roberto Silva',
    role: 'Ortopedista',
    text: 'A precisão das peças fabricadas pela Prothera mudou a recuperação dos meus pacientes.'
  },
  {
    id: 't2',
    name: 'Mariana Costa',
    role: 'Aluna do Curso de Modelagem',
    text: 'O curso abriu minha mente para as possibilidades da impressão 3D na saúde. Infraestrutura incrível.'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Artur Teixeira',
    role: 'Diretor Técnico',
    image: 'https://i.ibb.co/8DfSVsTR/5dca3842-e1db-44f3-abfa-5e26952261ae.jpg'
  },
  {
    id: 'tm2',
    name: 'Gledison Oliveira',
    role: 'Especialista Rigo Concept',
    image: 'https://i.ibb.co/Qv7RGrTK/190e3830-3946-45e4-b1a3-c4d96f3f2211.jpg'
  },
  {
    id: 'tm3',
    name: 'Roberto Araújo',
    role: 'CPO Especialista em Escoliose',
    image: 'https://i.ibb.co/B1R88cY/a351250c-6a48-4a98-abd5-5945ddb12fed.jpg'
  }
];

export const ACADEMY_IMAGES = [
  "https://i.ibb.co/Fk7ZjWk1/11.jpg",
  "https://i.ibb.co/XfrdDV86/12.jpg",
  "https://i.ibb.co/1tx1b3L7/13.jpg",
  "https://i.ibb.co/wNg70NgC/14.jpg",
  "https://i.ibb.co/jP0fgGhH/15.jpg",
  "https://i.ibb.co/h1Cthbsp/16.jpg",
  "https://i.ibb.co/vMCygmr/9.jpg"
];

export const MANUFACTURING_IMAGES = [
  "https://i.ibb.co/gZLv8GN9/Whats-App-Image-2025-11-29-at-20-38-10-1.jpg",
  "https://i.ibb.co/CsVsP0m8/Whats-App-Image-2025-11-29-at-20-38-10.jpg",
  "https://i.ibb.co/rK9Sfj5V/Whats-App-Image-2025-11-29-at-20-38-10-3.jpg",
  "https://i.ibb.co/Kcf3DxY9/Whats-App-Image-2025-11-29-at-20-38-09.jpg",
  "https://i.ibb.co/7dTSVxgX/Whats-App-Image-2025-11-29-at-20-38-09-1.jpg",
  "https://i.ibb.co/mVQvMNsy/Whats-App-Image-2025-11-29-at-20-38-09-2.jpg",
  "https://i.ibb.co/0RM6jvbK/Whats-App-Image-2025-11-29-at-20-38-08.jpg",
  "https://i.ibb.co/WWtRVGv5/Whats-App-Image-2025-11-29-at-20-38-08-1.jpg",
  "https://i.ibb.co/gLSBTNF6/Whats-App-Image-2025-11-29-at-20-38-08-2.jpg",
  "https://i.ibb.co/JRDTTs8r/Whats-App-Image-2025-11-29-at-20-38-08-3.jpg",
  "https://i.ibb.co/zVDvQpVD/Whats-App-Image-2025-11-29-at-20-38-07.jpg",
  "https://i.ibb.co/kg6hJ9Vf/Whats-App-Image-2025-11-30-at-00-54-35-1.jpg",
  "https://i.ibb.co/JWMp13QS/Whats-App-Image-2025-11-30-at-00-54-35-2.jpg",
  "https://i.ibb.co/0psyChP1/Whats-App-Image-2025-11-30-at-00-54-34.jpg",
  "https://i.ibb.co/8LMfWXMD/Whats-App-Image-2025-11-30-at-00-54-34-1.jpg",
  "https://i.ibb.co/zVwz9WCN/Whats-App-Image-2025-11-30-at-00-54-34-2.jpg",
  "https://i.ibb.co/HTJwV9NK/Whats-App-Image-2025-11-30-at-00-54-34-3.jpg",
  "https://i.ibb.co/fz7r919D/Whats-App-Image-2025-11-30-at-00-54-34-4.jpg",
  "https://i.ibb.co/gMTjy6Wp/Whats-App-Image-2025-11-30-at-00-54-34-5.jpg",
  "https://i.ibb.co/Gv8xsmPW/Whats-App-Image-2025-11-30-at-00-54-34-6.jpg",
  "https://i.ibb.co/BKBV7Ws8/Whats-App-Image-2025-11-30-at-00-54-33.jpg",
  "https://i.ibb.co/yc7D3Xtr/Whats-App-Image-2025-11-30-at-00-54-31.jpg",
  "https://i.ibb.co/RkJtJT3F/Whats-App-Image-2025-11-30-at-00-54-30.jpg",
  "https://i.ibb.co/9mh2CtLt/Whats-App-Image-2025-11-30-at-00-54-30-1.jpg",
  "https://i.ibb.co/hFhwnnD9/Whats-App-Image-2025-11-30-at-00-54-35.jpg"
];

export const MACHINES_IMAGES = [
  "https://i.ibb.co/1tHLdw9X/Whats-App-Image-2025-11-30-at-01-02-48.jpg",
  "https://i.ibb.co/H0xSk6Q/Whats-App-Image-2025-11-30-at-01-02-47-3.jpg",
  "https://i.ibb.co/PGSDSXzN/Whats-App-Image-2025-11-30-at-01-02-47-2.jpg",
  "https://i.ibb.co/bjZ4ZZJz/Whats-App-Image-2025-11-30-at-01-02-47-1.jpg",
  "https://i.ibb.co/rKPJ0RZc/Whats-App-Image-2025-11-30-at-01-02-46.jpg",
  "https://i.ibb.co/pjp9gqdN/Whats-App-Image-2025-11-30-at-01-02-47.jpg"
];
