
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  features?: string[];
  screenshots?: string[];
  category: "ai" | "web" | "mobile" | "other";
}

export const projectsData: Project[] = [
  {
    id: "fruit-defect-detection",
    title: "Fruit Defect Detection System",
    description: "AI-powered fruit quality assessment system using computer vision",
    longDescription: "Designed and implemented a multi-camera fruit defect detection system using computer vision techniques to classify bruise severity on bell peppers. The system leverages Python and machine learning libraries to provide accurate detection of various types of fruit defects with high precision. The project involved developing custom AI models specifically trained on fruit datasets.",
    technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch", "Raspberry Pi"],
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    githubUrl: "https://github.com/example/fruit-defect-detection",
    date: "January 2023",
    features: [
      "Multi-camera setup for 360° fruit examination",
      "Real-time defect classification with >95% accuracy",
      "Customizable detection thresholds for different fruit types",
      "Integration with sorting mechanisms for automated quality control",
      "Dashboard for visualization of detection results and statistics"
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
    ],
    category: "ai"
  },
  {
    id: "automated-fruit-sorting",
    title: "Automated Fruit Sorting System",
    description: "Robotic system for automated fruit quality assessment and sorting",
    longDescription: "Led the design of an automated fruit quality assessment system employing a robotic gripper for sorting, using deep learning models trained with transfer learning techniques. The system was deployed on laptop and Arduino-controlled hardware to create an end-to-end solution for fruit processing facilities.",
    technologies: ["Python", "Arduino", "C++", "Deep Learning", "Robotics"],
    image: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    githubUrl: "https://github.com/example/automated-fruit-sorting",
    date: "March 2023",
    features: [
      "Custom-designed robotic gripper for gentle fruit handling",
      "Integration with computer vision for quality assessment",
      "Automated sorting based on defect classification",
      "Configurable sorting parameters for different fruit types",
      "Web interface for monitoring and control"
    ],
    category: "ai"
  },
  {
    id: "bell-pepper-classification",
    title: "Bell Pepper Classification Study",
    description: "Research on consumer preferences for bell pepper imaging and classification",
    longDescription: "Conducted a quantitative study analyzing consumer preferences to accelerate bell pepper imaging and classification technology, publishing the findings in the SAGE Grace conference. This work explored how consumer perception of quality impacts the development of computer vision systems for agricultural applications.",
    technologies: ["Data Analysis", "Statistical Methods", "Research", "MATLAB"],
    image: "https://images.unsplash.com/photo-1563746924237-f81657aab32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    date: "May 2023",
    features: [
      "Comprehensive survey of consumer preferences",
      "Statistical analysis of quality perception factors",
      "Development of metrics for computer vision systems",
      "Published research findings in international conference",
      "Impact on agricultural quality control standards"
    ],
    category: "ai"
  },
  {
    id: "portfolio-website",
    title: "Professional Portfolio Website",
    description: "Personal portfolio website showcasing skills and projects",
    longDescription: "Developed a modern, responsive portfolio website using React, TypeScript, and TailwindCSS. The site features dark mode, responsive design, and interactive elements to create an engaging user experience. The portfolio includes project showcases, skill visualizations, and an AI-powered chatbot assistant.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    githubUrl: "https://github.com/example/portfolio-website",
    liveUrl: "https://example.com",
    date: "April 2024",
    features: [
      "Responsive design for all device sizes",
      "Dark/light mode with theme persistence",
      "Interactive project showcases with detailed information",
      "AI-powered chatbot for portfolio information",
      "Animated UI elements for enhanced user experience"
    ],
    category: "web"
  }
];
