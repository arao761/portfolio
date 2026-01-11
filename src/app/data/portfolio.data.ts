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
    title: 'InterviewAI: AI-Powered Interview Preparation Platform',
    description:
      'Built an AI agent system using LangChain and GPT-4 that autonomously generates personalized interview questions from resumes and adapts difficulty in real-time.',
    longDescription:
      'InterviewAI is an AI-powered interview preparation platform that uses LangChain and GPT-4 to create an intelligent agent system. The platform autonomously generates personalized interview questions from resumes, adapts difficulty in real-time, and maintains conversational context across multi-turn interactions. It features agent memory and reasoning chains for context-aware follow-ups, voice-based interviews using speech-to-text/text-to-speech APIs, and a full-stack architecture with FastAPI backend and Next.js/React frontend. User progress is tracked in PostgreSQL to enable iterative improvements, and the backend is deployed on AWS (EC2, S3, IAM) for scalable, production-grade deployment.',
    techStack: [
      'LangChain',
      'GPT-4',
      'FastAPI',
      'Next.js',
      'React',
      'Python',
      'PostgreSQL',
      'AWS (EC2, S3, IAM)',
      'Speech-to-Text',
      'Text-to-Speech',
      'Claude Code'
    ],
    achievements: [
      'AI agent system with autonomous question generation and real-time difficulty adaptation',
      'Agent memory and reasoning chains for context-aware follow-ups',
      'Full-stack architecture with FastAPI backend and Next.js/React frontend',
      'AWS deployment (EC2, S3, IAM) for scalable production-grade infrastructure',
      'Reduced development time by 75% using Claude Code for rapid prototyping'
    ],
    period: 'Nov. 2025 – Present',
    links: {
      github: 'https://github.com/arao761/InterviewAI',
      website: 'https://interview-ai-umber-six.vercel.app/'
    }
  },
  {
    title: 'LaneGuard: AI-Powered Driver Safety System',
    description:
      'Built real-time lane departure warning system achieving 82% detection rate at 30+ FPS with Python (OpenCV, NumPy).',
    longDescription:
      'LaneGuard is a real-time lane departure warning system that uses computer vision to detect lane departures. It features a 6-stage vision pipeline including color thresholding, perspective transform, histogram analysis, sliding window search, polynomial fitting, and geometric validation with configurable lane width constraints. Multi-layer filtering with exponential moving average, outlier detection, and spatial smoothing achieves 89% temporal stability, reducing false positives by 40% in varied driving conditions. Utilized Cursor AI to accelerate algorithm optimization and parameter tuning workflows.',
    techStack: [
      'Python',
      'OpenCV',
      'NumPy',
      'Computer Vision',
      'Cursor AI'
    ],
    achievements: [
      '82% detection rate at 30+ FPS with Python (OpenCV, NumPy)',
      'Reduced false positives by 40% through multi-layer filtering',
      '89% temporal stability across varied driving conditions',
      'Utilized Cursor AI to accelerate algorithm optimization and parameter tuning'
    ],
    period: 'June 2025 – July 2025',
    links: {
      demo: 'https://youtu.be/ifvUyKzJBYQ'
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
      'Collaborating with research scientists to build 3D scene reconstruction models using Neural Radiance Fields (NeRF) technology for real-world applications in mission planning and disaster response',
      'Conducting iterative testing and validation of model accuracy across diverse image sources including drones, satellites, and ground cameras using Nerfstudio and COLMAP frameworks'
    ],
    techStack: ['NeRF', 'Nerfstudio', 'COLMAP', 'Python', '3D Reconstruction']
  },
  {
    title: 'Machine Learning Intern',
    company: 'Howard Hughes Medical Institute',
    location: 'Ashburn, VA',
    period: 'June 2025 - Aug. 2025',
    description: [
      'Developed a CUDA-accelerated computer vision system in PyTorch to track cell movement in 3D microscopy videos on a Linux HPC cluster, improving tracking accuracy by 30%',
      'Built automated data pipelines for microscopy analysis with workflow automation, reducing manual work by 85%',
      'Created an interactive 3D visualization platform in Python (PyVista, Matplotlib) to display flow fields and heatmaps across 8+ experiments',
      'Implemented CI/CD practices with automated deployment and version control workflows'
    ],
    techStack: ['PyTorch', 'CUDA', 'Python', 'PyVista', 'Matplotlib', 'Linux', 'HPC']
  },
  {
    title: 'Software Developer Intern',
    company: 'Kashmir World Foundation',
    location: 'Ashburn, VA',
    period: 'April 2024 - Jan. 2025',
    description: [
      'Built a cross-platform React Native mobile app in TypeScript for wildlife conservation, implementing offline data collection across 12 countries',
      'Developed web dashboards using React.js and D3.js to visualize 500+ wildlife observations',
      'Integrated RESTful APIs and optimized data fetching for efficient communication between mobile and web platforms',
      'Participated in Agile sprints and code reviews as part of collaborative development workflow'
    ],
    techStack: ['React Native', 'TypeScript', 'React.js', 'D3.js', 'REST API', 'Agile']
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'Bash/Shell']
  },
  {
    category: 'Frameworks/Libraries',
    items: ['React.js', 'Next.js', 'FastAPI', 'Flask', 'React Native', 'PyTorch', 'LangChain']
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'AWS (EC2, S3, Lambda, IAM)', 'Docker', 'Linux/Unix', 'CI/CD (GitHub Actions)', 'PostgreSQL', 'MongoDB']
  },
];

export const personalInfo = {
  name: 'Ankit Rao',
  title: 'CS and DS at UVA',
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
    coursework: ['Data Structures and Algorithms', 'Linear Algebra', 'Multivariable Calculus'],
    extracurriculars: ['Google Developer Group', 'Startups@UVA', 'ML@UVA'],
    awards: ['Coca-Cola Scholar Semifinalist (1.27% acceptance rate)', 'MIT Research Conference (accepted presenter)']
  },
  leadership: {
    title: 'Founder, Web & Mobile App Development Club',
    period: '2023 - Present',
    description: 'Lead technical workshops for 20+ students on full-stack and mobile development'
  }
};
