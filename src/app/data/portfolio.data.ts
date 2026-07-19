export interface Project {
  title: string;
  description: string;
  techStack: string[];
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
  url?: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Co-Founder & CTO',
    company: 'Scyntic',
    url: 'https://scyntic.ai',
    location: 'Charlottesville, VA',
    period: 'Apr 2026 - Present',
    description: [
      'Building an AI agent platform that sends simulated shoppers through ecommerce storefronts to surface conversion friction before real customers hit it.',
      'Scaled to 1,000+ concurrent agent runs on AWS ECS with Redis and Celery, cutting cost per run by 84% and analysis runtime by 87%.',
      'Built reporting pipelines for A/B tests, telemetry aggregation, and code recommendations so merchants can fix checkout drop-off in real time.'
    ],
    techStack: ['AWS ECS', 'Redis', 'Celery', 'PostgreSQL', 'PgBouncer']
  },
  {
    title: 'Computer Vision Research Intern',
    company: 'Johns Hopkins Applied Physics Laboratory',
    url: 'https://www.jhuapl.edu',
    location: 'Charlottesville, VA (Remote)',
    period: 'Sep 2025 - May 2026',
    description: [
      'Collaborated with research scientists to build 3D scene reconstruction models using Neural Radiance Fields (NeRF) for real-world applications in mission planning and disaster response.',
      'Conducted iterative testing and validation of model accuracy across diverse image sources including drones, satellites, and ground cameras using Nerfstudio and COLMAP frameworks.'
    ],
    techStack: ['NeRF', 'Nerfstudio', 'COLMAP', 'Python', '3D Reconstruction']
  },
  {
    title: 'Machine Learning Intern',
    company: 'Howard Hughes Medical Institute',
    url: 'https://www.janelia.org',
    location: 'Ashburn, VA',
    period: 'Jun 2025 - Aug 2025',
    description: [
      'Improved 3D cell-tracking accuracy by 30% on terabyte-scale imaging datasets with a CUDA-accelerated PyTorch pipeline on a Linux HPC cluster.',
      'Debugged and profiled memory bottlenecks and race conditions in multi-threaded C++ real-time data pipelines.',
      'Productionized research code with versioning, testing, and CI/CD so non-engineering researchers could run reproducible experiments. Selected as 1 of 15 from 250 applicants; received a return offer.'
    ],
    techStack: ['PyTorch', 'CUDA', 'C++', 'Linux HPC', 'GitHub Actions']
  },
  {
    title: 'Software Developer Intern',
    company: 'Kashmir World Foundation',
    location: 'Ashburn, VA',
    period: 'Apr 2024 - Jan 2025',
    description: [
      'Built a cross-platform, offline-first React Native app in TypeScript that lets field researchers in 12 countries collect data without network access.',
      'Designed RESTful APIs with authentication, rate limiting, and structured validation, handling 150+ daily requests across mobile and web.',
      'Developed React and D3.js dashboards visualizing 500+ wildlife observations for conservation decision-making.'
    ],
    techStack: ['React Native', 'TypeScript', 'React', 'D3.js', 'REST APIs']
  }
];

export const projects: Project[] = [
  {
    title: 'InterviewAI',
    description:
      'A multi-agent interview simulation platform. LangChain agents parse your resume, generate role-specific questions, and adjust difficulty based on how you answer across multi-turn sessions, with agent memory for context-aware follow-ups and full voice support via speech-to-text and text-to-speech. Deployed on AWS with a FastAPI backend, Next.js frontend, and PostgreSQL.',
    techStack: ['LangChain', 'GPT-4', 'FastAPI', 'Next.js', 'PostgreSQL', 'AWS'],
    period: 'Nov 2025 - Present',
    links: {
      github: 'https://github.com/arao761/InterviewAI',
      website: 'https://interview-ai-umber-six.vercel.app/',
      demo: 'https://youtu.be/ifvUyKzJBYQ'
    }
  },
  {
    title: 'LaneGuard',
    description:
      'A real-time lane departure warning system: a six-stage computer vision pipeline (perspective transform, sliding-window search, polynomial fitting, geometric validation) hitting an 82% detection rate at 30+ FPS. Multi-layer filtering with exponential moving averages cut false positives by 40% across varied driving conditions.',
    techStack: ['Python', 'OpenCV', 'NumPy'],
    period: 'Jun 2025 - Jul 2025',
    links: {
      demo: 'https://youtu.be/ifvUyKzJBYQ'
    }
  }
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'SQL', 'JavaScript', 'TypeScript', 'Bash']
  },
  {
    category: 'Cloud & Infra',
    items: ['AWS', 'Linux HPC clusters', 'Docker', 'CI/CD (GitHub Actions)', 'PostgreSQL', 'Redis', 'MongoDB']
  },
  {
    category: 'ML / AI',
    items: ['PyTorch', 'CUDA', 'LangChain', 'OpenCV', 'NumPy', 'LLM evaluation', 'Prompt engineering']
  },
  {
    category: 'AI Dev Tools',
    items: ['Claude Code', 'Codex', 'GitHub Copilot']
  }
];

export const personalInfo = {
  name: 'Ankit Rao',
  title: 'Co-Founder & CTO at Scyntic · CS at UVA',
  intro:
    'I study computer science at the University of Virginia and I’m the co-founder & CTO of Scyntic, where we build AI agents that shop real ecommerce storefronts to find where checkout breaks. Before that, I trained CUDA-accelerated cell-tracking models at HHMI and built offline-first conservation software used by field researchers in 12 countries.',
  email: 'ankrao26@gmail.com',
  phone: '571-577-2416',
  linkedin: 'https://www.linkedin.com/in/ankit-rao-781a0b290/',
  github: 'https://github.com/arao761',
  scyntic: 'https://scyntic.ai',
  education: {
    degree: 'B.A. in Computer Science',
    school: 'University of Virginia',
    location: 'Charlottesville, VA',
    graduation: 'Expected May 2028',
    gpa: '3.77 / 4.0',
    coursework: [
      'Data Structures & Algorithms',
      'Computer Systems & Architecture',
      'Deep Learning',
      'Artificial Intelligence',
      'Databases',
      'AI-Powered Cyber Security',
      'Discrete Mathematics',
      'Linear Algebra',
      'Probability'
    ],
    honors: [
      'Coca-Cola Scholar Semifinalist (top 1.27%)',
      'MIT Research Conference (Accepted Presenter)'
    ]
  },
  leadership: {
    title: 'Founder, App Development Club',
    period: '2023 - Present',
    description:
      'Grew the club to 20+ students through workshops on algorithm design, full-stack systems, and API development.'
  }
};
