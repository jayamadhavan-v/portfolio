import heroWorkspace from '../assets/images/hero-workspace.png';
import madhavanPortrait from '../assets/images/madhavan-portrait.png';
import reactLogo from '../assets/images/react.png';
import javascriptLogo from '../assets/images/javascript.png';
import html5Logo from '../assets/images/html5.png';
import css3Logo from '../assets/images/css3.png';
import tailwindLogo from '../assets/images/tailwind.png';
import nodejsLogo from '../assets/images/nodejs.png';
import expressLogo from '../assets/images/express.png';
import javaLogo from '../assets/images/java.png';
import springLogo from '../assets/images/spring.png';
import mongodbLogo from '../assets/images/mongodb.png';
import postgresqlLogo from '../assets/images/postgresql.png';
import projectNexus from '../assets/images/project-nexus.png';
import projectLumina from '../assets/images/project-lumina.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'MERN STACK EXPERT',
  name: 'Madhavan',
  description:
    'I build high-performance, scalable web applications with a focus on technical precision and elegant user experiences. Specializing in the MERN stack to deliver modern digital solutions.',
  image: heroWorkspace,
  imageAlt: 'A high-fidelity 3D illustration of a developer workspace.',
};

export const about = {
  title: 'Passionate about clean code and efficient architecture.',
  paragraphs: [
    "With several years of experience in full-stack development, I've honed my skills in building robust architectures using React, Node.js, and Express. My goal is to bridge the gap between complex backend logic and seamless frontend interactions.",
    'I am committed to lifelong learning, staying ahead of industry trends like Microservices, Serverless architectures, and advanced TypeScript patterns to provide the best possible value to every project.',
  ],
  image: madhavanPortrait,
  imageAlt: 'A professional headshot of Madhavan, a developer.',
  stats: [
    { value: '15+', label: 'Completed Projects', tone: 'primary' },
    { value: '4+', label: 'Years Experience', tone: 'secondary' },
  ],
};

export const skills = [
  {
    title: 'Frontend',
    icon: 'responsive_layout',
    tone: 'primary',
    items: [
      {
        name: 'React',
        image: reactLogo,
      },
      {
        name: 'JS',
        alt: 'JavaScript',
        image: javascriptLogo,
      },
      {
        name: 'HTML5',
        image: html5Logo,
      },
      {
        name: 'CSS3',
        image: css3Logo,
      },
      {
        name: 'Tailwind',
        image: tailwindLogo,
      },
    ],
  },
  {
    title: 'Backend',
    icon: 'terminal',
    tone: 'secondary',
    items: [
      {
        name: 'Node.js',
        image: nodejsLogo,
      },
      {
        name: 'Express',
        image: expressLogo,
      },
      {
        name: 'Java',
        image: javaLogo,
      },
      {
        name: 'Spring',
        image: springLogo,
      },
    ],
  },
  {
    title: 'Database',
    icon: 'database',
    tone: 'tertiary',
    items: [
      {
        name: 'MongoDB',
        image: mongodbLogo,
      },
      {
        name: 'Postgres',
        alt: 'PostgreSQL',
        image: postgresqlLogo,
      },
      { name: 'Redis' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Tools',
    icon: 'build',
    tone: 'primary',
    items: [
      { name: 'Docker' },
      { name: 'Git/CI-CD' },
      { name: 'AWS' },
      { name: 'Figma' },
    ],
  },
];

export const projects = [
  {
    category: 'FinTech',
    stack: 'MERN Stack',
    title: 'Nexus Analytics Dashboard',
    description:
      'A real-time data visualization platform for enterprise logistics, utilizing WebSockets for live tracking and advanced MongoDB aggregation for complex reporting.',
    image: projectNexus,
    imageAlt:
      'A sophisticated dashboard interface for a financial technology application.',
  },
  {
    category: 'E-Commerce',
    stack: 'Next.js & Stripe',
    title: 'Lumina Marketplace',
    description:
      'High-performance marketplace with server-side rendering, integrated Stripe payments, and a custom CMS for seamless product management.',
    image: projectLumina,
    imageAlt:
      'A modern e-commerce storefront showcasing premium lifestyle products.',
  },
];

export const certifications = [
  {
    title: 'AWS Certified',
    description: 'Cloud Solutions Architect Associate',
    icon: 'verified',
  },
  {
    title: 'MongoDB Expert',
    description: 'Certified Associate Developer',
    icon: 'terminal',
  },
  {
    title: 'Meta Front-End',
    description: 'Professional Developer Certification',
    icon: 'workspace_premium',
  },
];

export const contact = {
  title: "Let's build something exceptional together.",
  description:
    'Currently available for freelance opportunities and full-time collaborations.',
  items: [
    { label: 'Email', value: 'jayamadhavan.vjm@gmail.com', icon: 'mail' },
    { label: 'LinkedIn', value: 'linkedin.com/in/Jayamadhavan', icon: 'link' },
    { label: 'Location', value: 'Chennai, India', icon: 'location_on' },
  ],
};

export const footerLinks = [
  { icon: 'code', label: 'Code' },
  { icon: 'share', label: 'Share' },
  { icon: 'person', label: 'Profile' },
];
