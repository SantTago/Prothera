export interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  date: string;
  audience: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export enum PageRoute {
  HOME = '/',
  MANUFACTURING = '/manufacturing',
  MACHINES = '/machines',
  COURSES = '/courses',
  CONTACT = '/contact' // Usually an anchor or modal, but treating as route for simplicity
}