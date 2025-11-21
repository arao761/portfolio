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
    title: 'InterviewAI: An Interview Preparation Platform',
    description:
      'Built a full-stack web application with FastAPI backend and Next.js/React frontend, integrating OpenAI GPT-4 API to generate personalized interview questions.',
    longDescription:
      'InterviewAI is a comprehensive interview preparation platform built with a team of 4. It features a FastAPI backend and Next.js/React frontend that integrates OpenAI GPT-4 API to generate personalized interview questions based on user resumes. The platform includes an adaptive question system that adjusts difficulty in real-time, speech-to-text/text-to-speech APIs for voice-based interviews, and SQLite database for session persistence to track progress across multiple sessions.',
    techStack: [
      'FastAPI',
      'Next.js',
      'React',
      'Python',
      'OpenAI GPT-4',
      'SQLite',
      'pytest',
      'Speech-to-Text',
      'Text-to-Speech'
    ],
    achievements: [
      'GPT-4 powered question generation',
      'Real-time difficulty adaptation',
      'Voice-based interview support',
      'Session persistence and progress tracking'
    ],
    period: 'Nov. 2025 – Present',
    links: {
      github: 'https://github.com/arao761/InterviewAI',
      demo: 'https://youtu.be/ilLYM_PTssM'
    }
  },
  {
    title: 'LaneGuard: AI-Powered Driver Safety System',
    description:
      'Developed a real-time lane departure warning system using Python (OpenCV, NumPy), achieving 82% detection rate at 30+ FPS on dashcam footage.',
    longDescription:
      'LaneGuard is a real-time lane departure warning system that uses computer vision to detect lane departures. It features a 6-stage vision pipeline including color thresholding, perspective transform, histogram analysis, sliding window search, polynomial fitting, and geometric validation with configurable lane width constraints. Multi-layer filtering with exponential moving average, outlier detection, and spatial smoothing achieves 89% temporal stability, reducing false positives by 40% in varied driving conditions.',
    techStack: [
      'Python',
      'OpenCV',
      'NumPy',
      'Computer Vision',
      'Image Processing'
    ],
    achievements: [
      '82% detection rate at 30+ FPS',
      '6-stage vision pipeline',
      '89% temporal stability',
      '40% false positive reduction'
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
      'Building 3D scene reconstruction models using Neural Radiance Fields (NeRF) technology for real-world applications in mission planning and disaster response',
      'Testing model accuracy with different image sources including drones, satellites, and ground cameras using Nerfstudio and COLMAP frameworks'
    ],
    techStack: ['NeRF', 'Nerfstudio', 'COLMAP', 'Python', '3D Reconstruction']
  },
  {
    title: 'Machine Learning Intern',
    company: 'Janelia Research Campus | Howard Hughes Medical Institute',
    location: 'Ashburn, VA',
    period: 'June 2025 - Aug. 2025',
    description: [
      'Developed a CUDA-accelerated computer vision system in PyTorch to track cell movement in 3D microscopy videos, learning distributed computing on a Linux HPC cluster and improving tracking accuracy by 30%',
      'Built automated data pipelines for microscopy analysis, gaining hands-on experience with workflow automation while reducing manual work by 85%',
      'Created an interactive 3D visualization platform in Python (PyVista, Matplotlib) to display flow fields and heatmaps, learning data visualization techniques through 8+ experiments',
      'Learned CI/CD practices by implementing automated deployment and version control workflows'
    ],
    techStack: ['PyTorch', 'CUDA', 'Python', 'PyVista', 'Matplotlib', 'Linux', 'HPC', 'CI/CD']
  },
  {
    title: 'Software Developer Intern',
    company: 'Kashmir World Foundation',
    location: 'Ashburn, VA',
    period: 'April 2024 - Jan. 2025',
    description: [
      'Built a cross-platform React Native mobile app in TypeScript for wildlife conservation, learning mobile development while implementing offline data collection across 12 countries',
      'Developed web dashboards using React.js and D3.js to visualize 500+ wildlife observations, gaining experience in data visualization and frontend development',
      'Integrated RESTful APIs and learned to optimize data fetching for efficient communication between mobile and web platforms',
      'Participated in Agile sprints and code reviews, learning collaborative software development practices'
    ],
    techStack: ['React Native', 'TypeScript', 'React.js', 'D3.js', 'REST API', 'Git', 'CI/CD', 'Agile']
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
    coursework: ['Data Structures and Algorithms', 'Linear Algebra', 'Multivariable Calculus', 'Software Development Essentials'],
    extracurriculars: ['Google Developer Group', 'Startups@UVA', 'ML@UVA', 'Robotics Club', 'Trombone Choir (Section Leader)']
  }
};
