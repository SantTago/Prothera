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
    id: 'story1',
    title: 'CNC Prothera: Alta Precisão',
    thumbnail: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600&h=1067', // Matches CNC block carving
    duration: '0:30'
  },
  {
    id: 'story2',
    title: 'Certificação Rigo Concept',
    thumbnail: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600&h=1067', // Matches Classroom/Lecture
    duration: '1:15'
  },
  {
    id: 'story3',
    title: 'Software ShapeFLX & Scan',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=1067', // Matches Digital/Tablet
    duration: '0:45'
  },
  {
    id: 'story4',
    title: 'Confecção de Coletes',
    thumbnail: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600&h=1067', // Matches Workshop/Hands-on
    duration: '1:00'
  },
  {
    id: 'story5',
    title: 'Depoimento: Fisioterapeuta',
    thumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=1067', // Matches Expert Testimonial
    duration: '1:30'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Biomecânica Aplicada a Próteses',
    date: '15 de Novembro, 2023',
    audience: 'Fisioterapeutas e Engenheiros',
    description: 'Aprofunde-se na interação entre dispositivos mecânicos e o corpo humano.'
  },
  {
    id: 'c2',
    title: 'Modelagem 3D para Órteses Personalizadas',
    date: '02 de Dezembro, 2023',
    audience: 'Designers e Técnicos',
    description: 'Domine o software CAD para criar soluções perfeitamente ajustadas.'
  },
  {
    id: 'c3',
    title: 'Materiais Avançados: Fibra de Carbono e Resinas',
    date: '20 de Janeiro, 2024',
    audience: 'Profissionais da Indústria',
    description: 'Técnicas de manipulação de materiais de alta performance.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Roberto Silva',
    role: 'Ortopedista',
    text: 'A precisão das peças fabricadas pela OrthoTech mudou a recuperação dos meus pacientes.'
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
    name: 'Dr. Ricardo Mota',
    role: 'Engenheiro Chefe & Fundador',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'tm2',
    name: 'Dra. Elena Souza',
    role: 'Especialista em Biomecânica',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    id: 'tm3',
    name: "Carlos 'Expert' Mendes",
    role: 'Diretor de Inovação 3D',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400'
  }
];