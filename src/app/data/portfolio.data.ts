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
    description:
      'Built a lane departure warning system in Python (TensorFlow, YOLOv5) achieving 92% detection accuracy on over 500 hours of dashcam data.',
    longDescription:
      'LaneGuard is a real-time driver safety system that detects lane departures using deep learning and computer vision. It combines TensorFlow and YOLOv5 for lane detection, running at 30 FPS with Canny edge detection and polynomial curve fitting. Temporal smoothing reduced false alerts by 40%, and deployment on a Raspberry Pi achieved 200ms response times for live safety warnings.',
    techStack: [
      'Python',
      'TensorFlow',
      'YOLOv5',
      'OpenCV',
      'Raspberry Pi',
      'Canny Edge Detection',
      'Polynomial Fitting'
    ],
    achievements: [
      '92% detection accuracy',
      '30 FPS real-time processing',
      '40% false alarm reduction',
      '200ms lane drift alert latency'
    ],
    period: 'June 2024 – Aug. 2024',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Robotic 3D Printed Prosthetic Finger',
    description:
      'Prototyped a biomimetic prosthetic finger using 3D printing and EMG-based neural decoding with 95% classification precision.',
    longDescription:
      'A functional 3D-printed prosthetic finger designed to mimic natural motion and touch. Built with TPU/PLA composite materials and powered by a custom PyTorch CNN trained on EMG data and finger position images. The system uses Raspberry Pi–Arduino communication for sensor processing and achieves 100ms actuation latency with 95% recognition accuracy.',
    techStack: [
      'Python',
      'PyTorch',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Raspberry Pi',
      'Arduino',
      '3D Printing (TPU/PLA)'
    ],
    achievements: [
      '95% classification precision',
      '100ms response latency',
      'Dual-material 3D printed prototype',
      '1,000+ labeled training samples'
    ],
    period: 'Dec. 2023 – Mar. 2024',
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
      'Building 3D scene reconstruction models using Neural Radiance Fields (NeRF) for mission planning and disaster response applications',
      'Testing reconstruction accuracy across different image sources (drones, satellites, ground cameras) using Nerfstudio and COLMAP'
    ],
    techStack: ['NeRF', 'Nerfstudio', 'COLMAP', 'Python', '3D Reconstruction']
  },
  {
    title: 'Machine Learning Intern',
    company: 'Janelia Research Campus | Howard Hughes Medical Institute',
    location: 'Ashburn, VA',
    period: 'June 2025 - Aug. 2025',
    description: [
      'Designed and deployed a CUDA-accelerated computer vision system in PyTorch on a distributed Linux HPC cluster, to track cell movement in 3D microscopy videos, improving 3D cell tracking accuracy by 30%.',
      'Built automated data pipelines for microscopy analysis, reducing manual researcher intervention by 85%.',
      'Developed an interactive 3D visualization platform in Python (PyVista, Matplotlib) for rendering flow fields, heatmaps, and animations of 8+ experiments.',
      'Applied CI/CD practices to automate deployment and version control'
    ],
    techStack: ['PyTorch', 'CUDA', 'Python', 'PyVista', 'Matplotlib', 'Linux', 'HPC', 'CI/CD']
  },
  {
    title: 'Software Developer Intern',
    company: 'Kashmir World Foundation',
    location: 'Ashburn, VA',
    period: 'April 2024 - Jan. 2025',
    description: [
      'Built cross-platform React Native mobile app in TypeScript for wildlife conservation, supporting offline data collection and real-time syncing across 12 countries',
      'Developed web dashboards using React.js and D3.js to visualize 500+ wildlife observations',
      'Integrated RESTful APIs and optimized data fetching to ensure low-latency updates and efficient data flow between mobile and web platforms',
      'Collaborated in Agile sprints, conducted code reviews, and maintained CI/CD pipelines for automated deployment'
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
