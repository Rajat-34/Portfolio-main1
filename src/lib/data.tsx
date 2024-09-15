import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import JavaLogo from '/public/images/logos/javaIcon.svg';
import SpringBootLogo from '/public/images/logos/springboot.svg';
import SpringMVCLogo from '/public/images/logos/springmvc.svg';
import HibernateLogo from '/public/images/logos/hibernate.svg';
import SqlLogo from '/public/images/logos/Sql.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoJest from '/public/images/logos/jest-js-icon.svg';
import LogoRedux from '/public/images/logos/Redux-js-icon.svg';
import LogoD3 from '/public/images/logos/D3-js-icon.svg';

import LogoMSI from '/public/images/logos/logo-msi.svg';
import LogoMSIDark from '/public/images/logos/logo-msi-dark.svg';
import Acranton from '/public/images/logos/acranton-logo.jpg';
import eCargowareLogo from '/public/images/logos/e_cargoware_ltd_logo.jpg';
import highradLogo from '/public/images/logos/highrad.jpg';

import AvatarShekhar from '/public/images/avatar-shekhar.png';
import AvatarShubham from '/public/images/avatar-shukla.png';
import AvatarManju from '/public/images/avatar-manju.png';
import xtratune from '/public/images/xtratune.jpg';
import chatsphere from '/public/images/chatsphere.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Rajat-34',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/rajat-shukla-617388191/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Java',
    logo: JavaLogo,
    url: 'https://www.java.com/en/',
  },
  {
    label: 'SpringBoot',
    logo: SpringBootLogo,
    // darkModeLogo: LogoExpressLight,
    url: 'https://spring.io/projects/spring-boot',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Spring MVC',
    logo: SpringMVCLogo,
    url: 'https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'D3.js',
    logo: LogoD3,
    url: 'https://d3js.org/',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Java Hibernate',
    logo: HibernateLogo,
    url: 'https://hibernate.org/orm/documentation/6.1/',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'Sql Database',
    logo: SqlLogo,
    url: 'https://en.wikipedia.org/wiki/SQL',
  },
  
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  }, 
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'React Native',
    logo: LogoReact,
    url: 'https://reactnative.dev/',
  },
  
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMSIDark,
    darkModeLogo: LogoMSI,
    logoAlt: 'msi logo',
    position: 'Member Technical Staff (R&D)',
    startDate: new Date(2023, 4),
    currentlyWorkHere: true,
    summary: [
      "Full-stack development for the Audit Manager Project, including creating the Login Page UI and implementing all necessary REST APIs for user registration, login, password change, and password reset. Utilized ReactJS for the frontend and NodeJS with ExpressJS and MongoDB for the backend.",
      "Engineered the migration of GRC application from Backbone.js to Next.js, driving a 40% enhancement in user experience and a 30% reduction in load times, resulting in a significant boost in performance & efficiency metrics.",
      "Led the successful migration of charts within a GRC application from Fusion Charts to D3, resulting in a 50% increase in data visualization capabilities and a 40% enhancement in interactivity.",
      "Implemented mpowerAPIs for consumption by the Business Rules team.",
      "Fostered cross-functional collaboration to align project requirements and seamlessly integrate components.",
      "Collaborated with the development team to identify and fix performance bottlenecks, resulting in a 20% increase in application speed using caching.",
      "Resolved 300+ critical bugs in the company’s software, improving stability and customer satisfaction.",
      "Collaborated with cross-functional teams to coordinate project requirements and ensure seamless integration of components, resulting in a 20% reduction in integration issues.",
      "Proven track record of successfully delivering projects within tight deadlines, and ability to manage multiple tasks simultaneously while maintaining attention to detail and quality."
    ],
  },
  {
    logo: eCargowareLogo,
    darkModeLogo: eCargowareLogo,
    logoAlt: 'e-Cargoware',
    position: 'Software Engineer',
    startDate: new Date(2023, 1),
    endDate: new Date(2023, 4),
    summary: [
      'Developed backend services and APIs for the SaaS platform[ GSA, GHA] using Java, Spring, and Spring Boot.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Implemented data persistence and retrieval using Hibernate and SQL queries.',
      'Collaborated with cross-functional teams to integrate and deliver comprehensive solutions for the aviation and freight forwarding industries.',
    ],
  },
  {
    logo: highradLogo,
    darkModeLogo: highradLogo,
    logoAlt: 'highradLogo',
    position: 'Associate Software Engineer',
    startDate: new Date(2021, 1),
    endDate: new Date(2022, 10),
    summary: [
      'Developed full stack web applications using EXTJS, Java Servlets, Java API, Spring MVC, SpringBoot Hibernate, and Struts.',
      'Utilized Eclipse, Sqlyog, Gitlab, and Putty for application development and version control.',
      'Develop and design modules for Cash App Application (CAA) Cloud Platform using Java, ExtJs, and MySQL.',
      'Developing Screens (CRUD web based) in CAA Product using Java,SQL,Extjs, SpringBoot and Hibernate.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'XtraTune',
    description: "Developed a sleek and intuitive song streaming application using Next.js and React.js, seamlessly integrating navigation and playback functionalities for an enhanced user experience.",
    url: 'https://drive.google.com/drive/folders/1b-YejXIVH1sL86IGr6LvkuyhCDJQIQni?usp=sharing',
    previewImage: xtratune,
    technologies: [
      'javascript',
      'React.js',
      'Next.js',
      'typescript',
      'tailwindcss'
    ],
  },
  // {
  //   name: 'ChatSphere',
  //   description: "Developed a real-time chat application utilizing WebSocket API and the ws library, implementing a MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless communication. Designed and styled the user interface of the chat application using TailwindCSS, ensuring a modern and responsive user experience.",
  //   url: 'https://github.com/kumarujjwal959/ChatSphere',
  //   previewImage: chatsphere,
  //   technologies: [
  //     'javascript',
  //     'React.js',
  //     'Next.js',
  //     'typescript',
  //     'WebSockets',
  //     'MongoDB',
  //     'ExpressJS',
  //     'Cloudinary',
  //     'tailwindcss'
  //   ],
  // }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Manjunatha N',
    personAvatar: AvatarManju,
    title: 'Lead Engineer (MetricStream)',
    testimonial:
      "As the team lead, I've had the pleasure of collaborating closely with Rajat. His coding proficiency and commitment to quality are unmatched. Rajat's ability to tackle challenging problems head-on and deliver stellar results has been instrumental in our team's success. With Rajat's expertise in our team, we're not just meeting expectations – we're delivering high quality products.",
  },
  {
    personName: 'Shubham Shukla',
    personAvatar: AvatarShubham,
    title: 'SMTS(MetricStream)',
    testimonial:
      "Working alongside Rajat, I've witnessed his exceptional coding expertise and problem-solving skills. His dedication to quality and willingness to collaborate make him a valuable asset to our team. Rajat's positive attitude and eagerness to learn also makes him a pleasure to work with, further solidifying his reputation as an outstanding software developer and a good team player.",
  },
  {
    personName: 'Shekhar Dubey',
    personAvatar: AvatarShekhar,
    title: 'SMTS(MetricStream)',
    testimonial:
      "Rajat was extremely easy and pleasant to work with and he truly cares about the project being a success. He has a high level of knowledge and was able to work on MERN stack application with me without any issues & consistently demonstrates a keen ability to tackle complex problems with innovative solutions, contributing greatly to our team's success. His collaborative nature and commitment to excellence make him an invaluable asset to any project.",
  },
];
