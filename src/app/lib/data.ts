import { Project, Experience, Skill } from '../../../types';


export const projects: Project[] = [
  {
    id: '1',
    title: 'Online Voting System',
    description: 'Full-stack voting solution with fingerprint authentication and admin dashboard.',
    technologies: ['React', 'Tailwind CSS', 'Socket.io', 'PostgreSQL', 'Node.js', 'Express'],
    githubUrl: 'https://github.com/brunocode-s/OVS-frontend.git',
    liveUrl: 'https://ovs-frontend-drab.vercel.app/',
    imageUrl: '/assets/ovs.png',
  },
  // {
  //   id: '2',
  //   title: 'Task Management App',
  //   description: 'Collaborative task management application with real-time updates and team collaboration features.',
  //   technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
  //   githubUrl: 'https://github.com/yourusername/taskmanager',
  //   liveUrl: 'https://taskmanager-demo.vercel.app',
  //   // imageUrl: '/images/taskmanager.png',
  // },
  // {
  //   id: '3',
  //   title: 'Weather Dashboard',
  //   description: 'Interactive weather dashboard with location-based forecasts and historical data visualization.',
  //   technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'Weather API'],
  //   githubUrl: 'https://github.com/yourusername/weather',
  //   liveUrl: 'https://weather-dashboard-demo.vercel.app',
  //   // imageUrl: '/images/weather-dashboard.png',
  // },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Digital Figures Services Enterprises.',
    position: 'Intern Frontend Developer',
    duration: '2024 - Present',
    description: [
      'Led development of customer-facing web applications serving 100K+ users',
      'Mentored junior developers and established coding standards',
      'Implemented performance optimizations reducing load times by 40%',
    ],
    technologies: ['React', 'TypeScript'],
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    duration: '2025',
    description: [
      'Built and maintained multiple client projects using modern web technologies',
      'Collaborated with design teams to implement pixel-perfect UI components',
      'Developed RESTful APIs and database schemas',
    ],
    technologies: ['React', 'Node.js', '', ''],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Other',
    technologies: ['Git', 'Docker', 'AWS', 'Figma'],
  },
];