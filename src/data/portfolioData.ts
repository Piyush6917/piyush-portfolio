export interface Project {
  id: string;
  title: string;
  category: "AI & ML" | "Cloud & DevOps" | "Systems & Vision";
  tagline: string;
  description: string;
  architectureHighlights: string[];
  metrics: string[];
  techStack: string[];
  githubUrl: string;
  featured?: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  year: string;
  status: string;
  role: string;
  abstract: string;
  topics: string[];
  doiPlaceholder?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  points: string[];
  tech: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail: string;
  highlight?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialBadge: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Piyush Pandey",
  role: "AI/ML & Cloud Engineer",
  tagline: "Architecting intelligent models & resilient cloud infrastructure",
  bio: "Computer Science undergraduate specializing in Artificial Intelligence. Passionate about engineering production-grade machine learning pipelines, scalable AWS cloud deployments, and network security frameworks. Experienced in Python, PyTorch, and cloud-native architectures with 2 accepted peer-reviewed research papers.",
  status: "Available for Internships & Engineering Roles",
  location: "Noida, Uttar Pradesh, India",
  timezone: "IST (UTC+5:30)",
  email: "piyushpandeynoida@gmail.com",
  phone: "+91 8527291104",
  github: "https://github.com/Piyush6917",
  linkedin: "https://www.linkedin.com/in/piyush-pandey-489025284/",
  stats: [
    { label: "Research Publications", value: "2", sub: "Peer-reviewed Journals" },
    { label: "Engineering Projects", value: "4+", sub: "Production-ready architectures" },
    { label: "Specialization", value: "AI/ML", sub: "B.Tech CSE Core" },
    { label: "Cloud Ecosystem", value: "AWS", sub: "EC2, S3, IAM, ECS, Lambda" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    name: "AI & Machine Learning",
    badge: "Core Focus",
    skills: [
      { name: "PyTorch", detail: "Deep learning & neural architectures" },
      { name: "TensorFlow", detail: "Model training & evaluation" },
      { name: "Scikit-Learn", detail: "Supervised & unsupervised algorithms" },
      { name: "Hugging Face", detail: "Transformers & LLM embeddings" },
      { name: "OpenCV", detail: "Computer vision & real-time frame processing" },
      { name: "RAG & Vector Search", detail: "Semantic retrieval & document synthesis" }
    ]
  },
  {
    name: "Cloud & Infrastructure",
    badge: "DevOps & Scale",
    skills: [
      { name: "AWS Cloud", detail: "EC2, S3, IAM, Lambda, ECS, EKS" },
      { name: "Docker", detail: "Multi-stage builds & containerization" },
      { name: "Linux / POSIX", detail: "Shell scripting, daemon management & perf" },
      { name: "CI/CD & Git", detail: "Automated pipelines & version workflows" },
      { name: "Networking", detail: "Packet inspection, TCP/IP, Scapy protocols" }
    ]
  },
  {
    name: "Languages & Frameworks",
    badge: "Engineering",
    skills: [
      { name: "Python", detail: "Advanced OOP, async, data engineering" },
      { name: "C++", detail: "Data structures, algorithms & memory" },
      { name: "SQL & PostgreSQL", detail: "Relational modeling, indexing & queries" },
      { name: "Flask / FastAPI", detail: "RESTful microservices & model serving" },
      { name: "HTML / Modern CSS", detail: "Clean, responsive user interfaces" }
    ]
  },
  {
    name: "Data Science & Analytics",
    badge: "Insights",
    skills: [
      { name: "Pandas", detail: "High-volume data wrangling & cleaning" },
      { name: "NumPy", detail: "Vectorized numerical computations" },
      { name: "Matplotlib & Seaborn", detail: "Statistical visualization & EDA" },
      { name: "Jupyter Labs", detail: "Iterative experiment tracking & analysis" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ids-system",
    title: "AI-Driven Network Intrusion Detection System",
    category: "AI & ML",
    tagline: "Real-time packet inspection & machine learning threat classifier",
    description: "An intelligent security pipeline engineered to detect network anomalies, port scans, and malicious payloads at line speed using Python and Scapy packet parsing.",
    architectureHighlights: [
      "Real-time packet capture and protocol parsing with Scapy",
      "Feature engineering pipeline extracting inter-packet arrival times and header statistics",
      "Supervised ML classification identifying zero-day threat patterns with low false positives",
      "Interactive monitoring GUI for system telemetry and instant attack mitigation"
    ],
    metrics: ["98.4% Accuracy", "Sub-10ms Classification", "Zero-packet loss"],
    techStack: ["Python", "Scapy", "Scikit-learn", "Pandas", "Tkinter", "Networking"],
    githubUrl: "https://github.com/Piyush6917",
    featured: true
  },
  {
    id: "doc-assistant",
    title: "AI Semantic Document Assistant & Synthesizer",
    category: "AI & ML",
    tagline: "High-accuracy RAG pipeline with verified page-level source citations",
    description: "An enterprise document intelligence system capable of extracting unstructured data from complex multi-page PDFs, providing grounded answers with source citations and visual synthesis.",
    architectureHighlights: [
      "Vector embedding and retrieval pipeline for semantic chunk search",
      "Grounded prompt orchestration eliminating LLM hallucinations",
      "Direct page-number and passage reference linking for verification",
      "Integrated generative image synthesis module for visual prompts"
    ],
    metrics: ["Sub-second retrieval", "100% Traceable Citations", "Multi-modal Q&A"],
    techStack: ["Python", "PyTorch", "Hugging Face", "Flask", "LangChain", "Vector Search"],
    githubUrl: "https://github.com/Piyush6917",
    featured: true
  },
  {
    id: "cloud-deploy",
    title: "Cloud-Native Container Infrastructure on AWS",
    category: "Cloud & DevOps",
    tagline: "High-availability containerized microservice environment",
    description: "End-to-end cloud infrastructure deployment integrating containerized microservices, managed PostgreSQL instances, and secure access boundaries on Amazon Web Services.",
    architectureHighlights: [
      "Optimized Docker container images utilizing multi-stage build patterns",
      "Scalable compute provisioning on AWS EC2 & ECS with health check monitoring",
      "Hardened security posture utilizing granular IAM policies and secure S3 asset stores",
      "Automated database connection pooling with managed PostgreSQL"
    ],
    metrics: ["Zero downtime deploys", "99.9% Uptime", "Automated scaling"],
    techStack: ["AWS EC2", "AWS S3", "IAM", "Docker", "PostgreSQL", "Nginx", "Python"],
    githubUrl: "https://github.com/Piyush6917",
    featured: true
  },
  {
    id: "face-attendance",
    title: "Biometric Face Recognition Attendance Engine",
    category: "Systems & Vision",
    tagline: "Real-time webcam biometric verification & tamper-proof logging",
    description: "Computer vision attendance tracking solution featuring real-time facial feature extraction, anti-duplicate entry validation, and automated CSV/database ledger synchronization.",
    architectureHighlights: [
      "Real-time webcam stream ingestion with low latency facial bounding box detection",
      "High-confidence facial embedding distance matching under variable lighting",
      "Anti-spoofing logic preventing duplicate entries within configurable time windows",
      "Automated timestamped logging with instant administrative audit exports"
    ],
    metrics: ["60 FPS Processing", "Zero duplicate check-ins", "Offline operational"],
    techStack: ["Python", "OpenCV", "Deep Embeddings", "Tkinter", "SQLite"],
    githubUrl: "https://github.com/Piyush6917",
    featured: false
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: "paper-ids",
    title: "Artificial Intelligence-Driven Hybrid Intrusion Detection Framework for Intelligent and Secure Computer Networks",
    journal: "Journal of Network Security",
    year: "2026",
    status: "Accepted for Publication",
    role: "Primary Author / Lead Researcher",
    abstract: "Presents a novel hybrid framework bridging supervised feature classification with unsupervised anomaly detection over enterprise network streams. Evaluates packet inspection latency, false positive mitigation under adversarial conditions, and resilient traffic classification in high-throughput environments.",
    topics: ["Hybrid Deep Learning", "Network Security", "Scapy Packet Analysis", "Anomaly Detection", "Adversarial Robustness"]
  },
  {
    id: "paper-blockchain",
    title: "Integration of AI and Blockchain: Benefits & Use Cases — A Review",
    journal: "Journal of Multimedia Technology & Recent Advancements",
    year: "2026",
    status: "Accepted for Publication",
    role: "Co-Author & Researcher",
    abstract: "A comprehensive investigation of synergistic convergences between distributed ledger technology and machine intelligence. Analyzes privacy-preserving consensus protocols, smart contract execution for automated ML validation, and decentralized data provenance models.",
    topics: ["Decentralized AI", "Smart Contracts", "Data Provenance", "Consensus Security", "Enterprise Systems"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "phpl-internship",
    role: "AI/ML & Python Development Intern",
    company: "Proto Hellenic Private Limited (PHPL)",
    period: "Aug 2026 – Oct 2026",
    type: "Internship",
    location: "Noida, India",
    points: [
      "Engineered automated Python data processing workflows, reducing manual dataset preparation time by 40%.",
      "Assisted in evaluation and fine-tuning of machine learning classification models for enterprise client datasets.",
      "Configured cloud infrastructure on AWS including EC2 virtual instances, S3 storage buckets, and IAM access controls.",
      "Participated in automated testing and code reviews following modern Python software development practices."
    ],
    tech: ["Python", "AWS (EC2, S3, IAM)", "Pandas", "Scikit-Learn", "Automation"]
  },
  {
    id: "code-alpha-internship",
    role: "Python Developer — Virtual Internship",
    company: "Code-Alpha",
    period: "2025 – 2026",
    type: "Virtual Internship",
    location: "Remote",
    points: [
      "Developed an algorithmic stock market analysis and trend charting tool using Yahoo Finance historical price feeds.",
      "Built custom technical indicator indicators (Moving Averages, Relative Strength Index, Bollinger Bands) using Pandas and NumPy.",
      "Generated interactive visualizations and summary reports with Matplotlib to guide investment strategy evaluation."
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Financial Data Analysis"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "btech-cse-ai",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Greater Noida College",
    period: "2023 – Present",
    detail: "Specialization in Artificial Intelligence & Machine Learning. Core coursework in Data Structures, Algorithms, Computer Networks, Operating Systems, Database Systems, and Neural Networks.",
    highlight: "Specialization: Artificial Intelligence"
  },
  {
    id: "senior-secondary",
    degree: "Senior Secondary (CBSE Class XII)",
    institution: "Maharishi Vidya Mandir, Noida",
    period: "Completed 2023",
    detail: "Physics, Chemistry, Mathematics & Computer Science with strong academic foundations in analytical problem solving.",
    highlight: "Science & Mathematics"
  },
  {
    id: "secondary",
    degree: "Secondary Education (CBSE Class X)",
    institution: "Maharishi Vidya Mandir, Noida",
    period: "Completed 2021",
    detail: "Comprehensive curriculum covering Mathematics, Science, and Information Technology.",
    highlight: "Distinction in Science & Tech"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oracle-foundations",
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    year: "Verified",
    credentialBadge: "Industry Standard",
    description: "Cloud computing fundamentals, database architectures, security governance, and enterprise infrastructure principles."
  },
  {
    id: "ibm-python-ds",
    title: "Python 101 for Data Science",
    issuer: "IBM",
    year: "Verified",
    credentialBadge: "Data Science Specialization",
    description: "Data manipulation, Pandas dataframes, NumPy arrays, scientific data structures, and statistical modeling."
  },
  {
    id: "python-specialist",
    title: "Python Programming Certification",
    issuer: "Professional Certification",
    year: "Verified",
    credentialBadge: "Core Programming",
    description: "Advanced Python object-oriented programming, modular system design, algorithmic problem solving, and unit testing."
  }
];

