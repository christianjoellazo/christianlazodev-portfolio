import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { cn } from "../lib/utils";
import ScrollReveal from "./ScrollReveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Skill {
  name: string;
  level: number;
  description?: string;
}

interface SkillCategory {
  name: string;
  icon?: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        level: 70,
        description: "Component architecture, hooks, state management",
      },
      {
        name: "TypeScript",
        level: 70,
        description: "ES6+, static typing, interfaces",
      },
      {
        name: "JavaScript",
        level: 70,
        description: "ES6+, DOM manipulation, asynchronous programming",
      },
      {
        name: "TailwindCSS",
        level: 80,
        description: "Utility-first CSS framework, responsive design",
      },
      {
        name: "HTML",
        level: 80,
        description: "Semantic markup, responsive web design",
      },
      {
        name: "Next.js",
        level: 70,
        description: "Server-side rendering, static site generation, routing",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 60,
        description:
          "RESTful APIs, Express middleware, asynchronous programming",
      },
      {
        name: "Supabase",
        level: 55,
        description: "Realtime database, authentication, ORM",
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: 70,
        description: "Relational database design, performance tuning, indexing",
      },
      {
        name: "Supabase",
        level: 55,
        description: "PostgreSQL-based realtime DB, authentication, API",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        level: 60,
        description: "Version control, branching strategies, collaboration",
      },
      {
        name: "Docker",
        level: 55,
        description: "Containerization, Docker Compose, image management",
      },
      {
        name: "AWS",
        level: 55,
        description: "S3, cloud storage, basic AWS services",
      },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      {
        name: "Python",
        level: 80,
        description: "Scripting, data processing, ML libraries",
      },
      {
        name: "Computer Vision",
        level: 80,
        description: "Object detection, image classification, image processing",
      },
      {
        name: "TensorFlow",
        level: 75,
        description: "Neural network design, training, model deployment",
      },
      {
        name: "Keras",
        level: 75,
        description: "High-level neural network API, model prototyping",
      },
      {
        name: "Scikit-Learn",
        level: 70,
        description: "Classical ML models, evaluation, deployment",
      },
      {
        name: "PyTorch",
        level: 70,
        description: "Dynamic neural networks, model training, deployment",
      },
      {
        name: "LangChain",
        level: 70,
        description: "LLM orchestration, prompt chaining, workflow automation",
      },
      {
        name: "Ragas",
        level: 70,
        description:
          "LLM workflow visualization, Retrieval-Augmented Generation (RAG)",
      },
    ],
  },
  {
    name: "Data Science",
    skills: [
      {
        name: "Pandas",
        level: 80,
        description: "Data manipulation, analysis, and cleaning",
      },
      {
        name: "Seaborn",
        level: 80,
        description: "Statistical data visualization, plotting",
      },
      {
        name: "Matplotlib",
        level: 75,
        description: "Customizable plotting and charting",
      },
      {
        name: "OpenCV",
        level: 75,
        description: "Image processing, computer vision algorithms",
      },
      {
        name: "Scikit-Learn",
        level: 70,
        description: "Machine learning, classification, regression",
      },
      {
        name: "Image Processing Techniques",
        level: 70,
        description: "Filtering, transformation, feature extraction",
      },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const handleSkillHover = (skill: Skill) => {
    setActiveSkill(skill);
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    if (level >= 50) return "Beginner";
    return "Novice";
  };

  return (
    <section
      id="skills"
      className="py-4 bg-white dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title dark:text-white">Skills & Expertise</h2>

        <div className="mb-8">
          <Tabs defaultValue="Frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className="data-[state=active]:bg-navy data-[state=active]:text-white dark:data-[state=active]:bg-primary dark:data-[state=active]:text-navy"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="animate-fade-in"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill, index) => (
                    <ScrollReveal
                      key={skill.name}
                      delay={index * 150}
                      direction="up"
                    >
                      <Card
                        className={cn(
                          "p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700",
                          activeSkill?.name === skill.name
                            ? "ring-2 ring-navy dark:ring-primary"
                            : ""
                        )}
                        onMouseEnter={() => handleSkillHover(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-lg dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {getLevelText(skill.level)}
                          </span>
                        </div>
                        <div className="mb-4 relative h-2">
                          <Progress
                            value={skill.level}
                            className="h-2 bg-gray-200 dark:bg-gray-700"
                          />
                        </div>

                        {skill.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            {skill.description}
                          </p>
                        )}
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
