export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  achievements?: string[];
  period: string;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    title: 'LaneGuard: AI-Powered Driver Safety System',
    description: 'Built a lane departure warning system achieving 92% detection accuracy on over 500 hours of dashcam data.',
    longDescription: 'A comprehensive AI-powered driver safety system that uses computer vision to detect lane departures in real-time. Built with TensorFlow and YOLOv5, the system processes dashcam footage at 30 FPS and issues safety alerts within 200ms of lane drift detection.',
    techStack: ['Python', 'TensorFlow', 'YOLOv5', 'OpenCV', 'Raspberry Pi', 'Canny Edge Detection'],
    achievements: ['92% detection accuracy', '30 FPS processing', '200ms alert latency', '40% false alarm reduction'],
    period: 'June 2024 - Aug. 2024',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Ho-Ho-Hacks: Multiplayer Mining Adventure Platform',
    description: 'Architected distributed microservices supporting real-time gameplay for 15+ concurrent users with 70% engagement boost.',
    longDescription: 'A full-stack multiplayer mining adventure game built with SpringBoot microservices. Features real-time multiplayer functionality via WebSockets, JWT authentication, and MySQL database integration. Deployed on AWS EC2 with Docker containerization.',
    techStack: ['Java', 'SpringBoot', 'WebSockets', 'STOMP', 'MySQL', 'JWT', 'AWS EC2', 'Docker', 'REST API'],
    achievements: ['15+ concurrent users', '70% engagement boost', '50+ simultaneous game sessions', 'Real-time multiplayer'],
    period: 'Dec. 2023 - Mar. 2024',
    links: {
      github: '#',
      demo: '#'
    }
  }
];

export const experiences: Experience[] = [
  {
    title: 'Computer Vision Research Intern',
    company: 'Johns Hopkins Applied Physics Laboratory',
    location: 'Charlottesville, VA (Remote)',
    period: 'Sep. 2025 - Present',
    description: [
      'Researching Neural Radiance Fields (NeRF) for scalable 3D scene reconstruction in mission rehearsal and disaster recovery contexts.',
      'Developing and evaluating pipelines with Nerfstudio and COLMAP, testing robustness across multimodal inputs (drone, satellite, and ground imagery).'
    ],
    techStack: ['NeRF', 'Nerfstudio', 'COLMAP', 'Python', '3D Reconstruction']
  },
  {
    title: 'Machine Learning Intern',
    company: 'Janelia Research Campus | Howard Hughes Medical Institute',
    location: 'Ashburn, VA',
    period: 'June 2025 - Aug. 2025',
    description: [
      'Designed and deployed a scalable CUDA-accelerated 3D optical flow system in PyTorch on a distributed Linux HPC cluster, improving 3D cell tracking accuracy by 30%.',
      'Built automated data pipelines for microscopy analysis using intelligent ROI detection, reducing manual researcher intervention by 85%.',
      'Developed an interactive 3D visualization platform in Python (PyVista, Matplotlib) for rendering flow fields, heatmaps, and animations of 8+ experiments.',
      'Applied CI/CD practices to automate deployment and version control.'
    ],
    techStack: ['PyTorch', 'CUDA', 'Python', 'PyVista', 'Matplotlib', 'Linux', 'HPC', 'CI/CD']
  },
  {
    title: 'Software Developer Intern',
    company: 'Kashmir World Foundation',
    location: 'Ashburn, VA',
    period: 'April 2024 - Jan. 2025',
    description: [
      'Developed a React Native mobile app using TypeScript, with state management via Redux Toolkit and Context API, supporting real-time wildlife monitoring across offline and online modes.',
      'Built responsive dashboards in React.js using D3.js and Chart.js, processing 500+ wildlife observations from 12 countries for data-driven conservation.',
      'Implemented RESTful API integrations, custom React hooks, and async data fetching for efficient data flow and low-latency updates.',
      'Collaborated with a cross-functional team in an Agile environment, conducting code reviews and maintaining version control through Git.'
    ],
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'React.js', 'D3.js', 'Chart.js', 'REST API', 'Git']
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'TypeScript', 'JavaScript', 'SQL', 'NoSQL']
  },
  {
    category: 'Frameworks/Libraries',
    items: ['ReactJS', 'Node.js', 'Django', 'SpringBoot', 'NextJS', 'PyTorch', 'CUDA', 'YOLO', 'Pandas', 'NumPy', 'OpenCV']
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'Docker', 'Linux', 'AWS', 'CI/CD', 'Figma', 'Version Control Systems', 'Agile Development']
  },
  {
    category: 'Interests',
    items: ['Distributed Systems', 'Scalable Backend Design', 'Cloud Computing (AWS)', 'Machine Learning Integration']
  }
];

export const personalInfo = {
  name: 'Ankit Rao',
  title: 'CS and AI at UVA',
  bio: 'Passionate about building innovative solutions at the intersection of computer science and artificial intelligence.',
  email: 'ankrao26@gmail.com',
  phone: '571-577-2416',
  linkedin: 'https://www.linkedin.com/in/ankit-rao-781a0b290/',
  github: 'https://github.com/arao761',
  education: {
    degree: 'B.A in Computer Science',
    school: 'University of Virginia',
    location: 'Charlottesville, VA',
    graduation: 'May 2027',
    coursework: ['Data Structures and Algorithms', 'Linear Algebra', 'Multivariable Calculus', 'Software Development Essentials'],
    extracurriculars: ['Google Developer Group', 'Startups@UVA', 'ML@UVA', 'Robotics Club', 'Trombone Choir (Section Leader)']
  }
};
