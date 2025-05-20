// This simulates a RAG system with some predefined information
export const KNOWLEDGE_BASE = [
  {
    question: [
      "who is christian",
      "about christian",
      "tell me about christian",
    ],
    answer:
      "Christian Joel Lazo is a skilled software engineer with expertise in full-stack development, cloud architecture, and AI integration. He has worked on numerous projects across different industries and is passionate about creating innovative solutions that solve real-world problems.",
  },
  {
    question: ["skills", "what skills", "technical skills"],
    answer:
      "Christian's technical skills include JavaScript/TypeScript, React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and machine learning frameworks like TensorFlow and PyTorch. He's also experienced in database technologies including SQL and NoSQL solutions.",
  },
  {
    question: [
      "education",
      "where did christian study",
      "university",
      "college",
    ],
    answer:
      "Christian studied Electronics Engineering. He continues to expand his knowledge through professional certifications and ongoing education in emerging technologies.",
  },
  {
    question: ["projects", "what projects", "portfolio projects"],
    answer:
      "Christian has worked on various projects including web applications, mobile apps, and AI solutions. Some notable projects include an AI-powered recommendation engine, a real-time collaboration platform, and enterprise-level cloud infrastructure implementations.",
  },
  {
    question: ["hackathons", "hackathon experience", "competitions"],
    answer:
      "Christian is an active participant in hackathons. He has won several awards for his innovative solutions and quick problem-solving abilities in time-constrained environments.",
  },
  {
    question: ["contact", "how to contact", "reach out"],
    answer:
      "You can contact Christian through the contact form on this website, or connect with him on LinkedIn. He's open to collaboration opportunities and professional networking.",
  },
  {
    question: ["resume", "cv", "download resume"],
    answer:
      "You can download Christian's resume using the download button in the navigation bar or contact section. It contains detailed information about his professional experience and qualifications.",
  },
  {
    question: ["summary", "about experience", "professional summary"],
    answer:
      "Christian Joel Lazo has experience in Data Analytics and Data Science focusing on academic projects and internships. He is skilled in delivering insights and solutions under tight deadlines and excels in team collaboration and data-driven decision-making.",
  },
  {
    question: [
      "education details",
      "degree",
      "where did christian study electronics engineering",
    ],
    answer:
      "Christian is pursuing a Bachelor of Science in Electronics Engineering at Polytechnic University of the Philippines (PUP) Manila, expected to graduate in October 2024. His thesis focuses on Fruit Defect Detection using Computer Vision.",
  },
  {
    question: ["gpa", "academic ranking", "achievements in school"],
    answer:
      "Christian has a Major GPA of 1.50 out of 5.00, was ranked 3rd overall in the ECE Department during the first semester of 2020-2021, is a 5-semester President's Lister, and received Best Presenter recognition at the 2024 International Graduate Conference on Smart Agriculture and Green Renewable Energy.",
  },
  {
    question: [
      "academic projects",
      "projects in school",
      "machine learning projects",
    ],
    answer:
      "Christian led several academic projects, including a multi-camera fruit bruise detection system using machine learning, a study on consumer preferences to accelerate bell pepper imaging and classification, and the development of an automated fruit sorting system using robotic arms and deep learning.",
  },
  {
    question: ["work experience", "internship", "past jobs"],
    answer:
      "Christian completed an internship as a Process Engineer at Philippine Manufacturing Co. of Murata, Inc. where he utilized MS Excel and Power BI for data analysis and scheduling. He also volunteered as Assistant Manager for Caloocan Relief Operations, demonstrating leadership in distributing relief goods.",
  },
  {
    question: ["technical skills", "programming skills", "tools"],
    answer:
      "Christian is proficient in computer vision, machine learning frameworks (TensorFlow, Sci-kit, Keras, Seaborn), Python, C++, project management, and Microsoft Azure fundamentals. He also has experience with Arduino IDE, Raspberry Pi, robotics, image processing, SQL, and Microsoft Excel.",
  },
  {
    question: ["languages", "spoken languages"],
    answer: "Christian is fluent in both English and Filipino.",
  },
  {
    question: ["certifications", "data science certifications", "training"],
    answer:
      "Christian holds DataCamp certifications in Python Data Fundamentals (30 hours) and Associate Data Scientist in Python (90 hours), expected to complete by December 2024.",
  },
  {
    question: ["contact info", "email", "phone number"],
    answer:
      "Christian can be contacted via phone at (+63) 965-773-1801 or by email at lazo.c2001@gmail.com. He is also reachable through his LinkedIn profile.",
  },
  {
    question: ["volunteering", "community service", "leadership"],
    answer:
      "Christian volunteered as Assistant Manager for Caloocan Relief Operations from April to September 2020, where he managed the distribution of relief goods and demonstrated leadership and strategic interpersonal skills.",
  },
  {
    question: ["thesis topic", "final year project"],
    answer:
      "Christian's thesis focuses on Fruit Defect Detection utilizing Computer Vision, aiming to leverage technology to improve agricultural quality control.",
  },
  {
    question: ["deployment experience", "projects deployed"],
    answer:
      "Christian has experience deploying machine learning models on Raspberry Pi and laptops, controlling devices such as Arduino Uno, demonstrating hands-on skills in embedded systems and IoT.",
  },
  {
    question: ["leadership experience", "team management"],
    answer:
      "Christian has led teams in multiple academic projects, managing the design and implementation phases, demonstrating his ability to coordinate and deliver complex technical projects.",
  },
  {
    question: ["project tools", "software used in projects"],
    answer:
      "Christian's projects utilized tools including Python, Sci-kit Learn, Pandas, Seaborn, TensorFlow, Keras, Google Colaboratory, Jupyter Notebooks, and C++ for embedded programming.",
  },
  {
    question: [
      "fruit bruise detection",
      "fruit defect detection project",
      "computer vision project",
    ],
    answer:
      "Christian led a project to design and implement a multi-camera fruit detection system using computer vision techniques to classify bruise severity on bell peppers, leveraging Python and machine learning libraries.",
  },
  {
    question: ["machine learning models", "ml frameworks used", "tools for ml"],
    answer:
      "Christian developed machine learning models using Python frameworks such as Sci-kit Learn, TensorFlow, Keras, and used tools like Pandas and Seaborn for data analysis and visualization.",
  },
  {
    question: [
      "robotic gripper project",
      "automated fruit sorting",
      "transfer learning project",
    ],
    answer:
      "Christian led the design of an automated fruit quality assessment system employing a robotic gripper for sorting, using deep learning models trained with transfer learning techniques deployed on laptop and Arduino-controlled hardware.",
  },
  {
    question: [
      "consumer quality preference study",
      "fruit classification study",
    ],
    answer:
      "Christian conducted a quantitative study analyzing consumer preferences to accelerate bell pepper imaging and classification technology, publishing the findings in the SAGE Grace conference.",
  },
  {
    question: ["internship tasks", "process engineer responsibilities"],
    answer:
      "During his internship, Christian utilized MS Excel and Power BI for data analysis to ensure machine qualification, collaborated effectively with teams via synchronized scheduling, and compiled progress reports with objective findings.",
  },
  {
    question: ["volunteering impact", "relief operations role"],
    answer:
      "As Assistant Manager in Caloocan Relief Operations, Christian managed relief goods distribution to various barangays, supporting efficient site operations through leadership and strategic interpersonal skills.",
  },
  {
    question: ["programming languages", "languages used"],
    answer:
      "Christian is proficient in Python and C++ programming languages, applying them in AI development and embedded systems projects.",
  },
  {
    question: ["microcontroller experience", "hardware platforms used"],
    answer:
      "Christian has hands-on experience with microcontrollers and microprocessors including Arduino IDE and Raspberry Pi, integrating them with robotics and image processing applications.",
  },
  {
    question: ["data science fundamentals", "certification details"],
    answer:
      "Christian is certified in Python Data Fundamentals (30 hours) and Associate Data Scientist in Python (90 hours) through DataCamp, demonstrating solid foundational knowledge in data science.",
  },
  {
    question: ["academic awards", "presentation awards"],
    answer:
      "Christian earned Best Presenter at the 2024 1st International Graduate Conference on Smart Agriculture and Green Renewable Energy and has consistently been a President’s Lister for five semesters.",
  },
  {
    question: ["collaboration skills", "teamwork examples"],
    answer:
      "Christian’s experience includes leading teams in complex projects, coordinating cross-functional collaboration, and effectively communicating technical progress and results.",
  },
  {
    question: ["software tools", "analytics software"],
    answer:
      "Christian is skilled in Microsoft Excel and Power BI for data analysis and visualization in industrial and academic settings.",
  },
  {
    question: ["agriculture technology", "agritech applications"],
    answer:
      "Christian’s research and projects focus on applying AI and computer vision to agriculture, such as fruit defect detection and automated sorting, to enhance quality control and operational efficiency.",
  },
  {
    question: ["project deployment", "embedded system integration"],
    answer:
      "Christian deployed machine learning models on edge devices like Raspberry Pi and controlled hardware via Arduino using C++, showcasing integration of AI with embedded systems.",
  },
  {
    question: ["language proficiency", "communication skills"],
    answer:
      "Christian is proficient in English and Filipino, enabling effective communication in diverse professional and academic environments.",
  },
  {
    question: ["project leadership", "managing academic teams"],
    answer:
      "Christian has demonstrated leadership by managing academic project teams, setting goals, delegating tasks, and ensuring timely delivery of results.",
  },
  {
    question: [
      "data analytics experience",
      "analytics skills",
      "data science background",
    ],
    answer:
      "Christian has solid experience in data analytics and data science, particularly in applying analytical tools for quick turnaround on academic projects and internships, focusing on troubleshooting and deriving actionable insights.",
  },
  {
    question: [
      "deadline management",
      "working under pressure",
      "time management skills",
    ],
    answer:
      "Christian is adept at delivering solutions and insights under tight deadlines, leveraging analytical skills and disciplined project management to meet objectives efficiently.",
  },
  {
    question: ["decision-making", "team collaboration", "leadership skills"],
    answer:
      "Christian exhibits strong collaboration and leadership, employing data-driven decision-making to successfully lead teams and manage projects from conception to delivery.",
  },
  {
    question: ["thesis project details", "fruit defect detection thesis"],
    answer:
      "Christian’s thesis involves developing a fruit defect detection system using computer vision, aimed at enhancing accuracy and efficiency in agricultural quality control.",
  },
  {
    question: ["scientific publication", "conference presentation"],
    answer:
      "Christian presented his research on consumer quality preferences for bell pepper imaging and classification at the 2024 SAGE Grace International Graduate Conference, showcasing his expertise in agricultural technology.",
  },
  {
    question: ["deep learning experience", "neural networks"],
    answer:
      "Christian developed and trained deep learning models using TensorFlow and Keras frameworks, applying neural networks for fruit quality assessment and classification.",
  },
  {
    question: ["hardware programming", "embedded coding"],
    answer:
      "Christian has experience programming embedded systems in C++ to control hardware such as Arduino Uno, integrating AI models for practical automation solutions.",
  },
  {
    question: ["project deployment environments", "cloud and local deployment"],
    answer:
      "Christian deploys machine learning models in various environments including Google Colaboratory, local laptops, and edge devices like Raspberry Pi, demonstrating versatility in deployment.",
  },
  {
    question: ["project management", "organizational skills"],
    answer:
      "Christian applies project management principles to organize tasks, coordinate team members, and track progress to ensure timely completion of academic and internship projects.",
  },
  {
    question: ["volunteering leadership", "community engagement"],
    answer:
      "Christian’s leadership in volunteer roles involved coordinating relief distribution and assisting site operations, highlighting his commitment to community service and teamwork.",
  },
  {
    question: ["interpersonal skills", "communication"],
    answer:
      "Christian demonstrates effective interpersonal communication, facilitating collaboration across teams and stakeholders during internships and volunteer activities.",
  },
  {
    question: ["data visualization", "reporting skills"],
    answer:
      "Christian utilizes tools like Seaborn, Matplotlib, and Power BI to create visualizations and reports that communicate data insights clearly to technical and non-technical audiences.",
  },
  {
    question: ["programming environment", "development tools"],
    answer:
      "Christian uses integrated development environments such as Jupyter Notebook and Google Colaboratory for data science workflows and collaborative coding.",
  },
  {
    question: ["robotics knowledge", "automation"],
    answer:
      "Christian integrates robotics concepts with AI by designing automated sorting systems that use robotic arms and grippers controlled via embedded systems.",
  },
  {
    question: ["agriculture impact", "technology in farming"],
    answer:
      "Christian’s projects contribute to smart agriculture by applying AI and computer vision to improve crop quality monitoring and automate labor-intensive tasks.",
  },
  {
    question: ["professional certifications", "continuous learning"],
    answer:
      "Christian actively pursues professional growth through certifications in Python data science fundamentals and associate-level data science courses.",
  },
];
