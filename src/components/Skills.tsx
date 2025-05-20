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
        name: "JavaScript/TypeScript",
        level: 70,
        description: "ES6+, Type safety, Interfaces",
      },
      {
        name: "HTML/TailwindCSS",
        level: 80,
        description: "Responsive design, CSS frameworks",
      },
      {
        name: "Next.js",
        level: 70,
        description: "Server-side rendering, static generation",
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 65,
        description: "RESTful APIs, Express middleware",
      },
      {
        name: "Django",
        level: 70,
        description: "ORM, admin interface, authentication",
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "PostgreSQL",
        level: 70,
        description: "Relational design, performance tuning",
      },
      {
        name: "Firebase",
        level: 55,
        description: "Realtime database, authentication",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        level: 70,
        description: "Version control, branching strategies",
      },
      {
        name: "Docker",
        level: 55,
        description: "Containerization, Docker Compose",
      },
      {
        name: "AWS",
        level: 55,
        description: "S3",
      },
    ],
  },
  {
    name: "Machine Learning",
    skills: [
      {
        name: "Computer Vision",
        level: 80,
        description:
          "Object detection, image classification, image processing techniques",
      },
      {
        name: "TensorFlow",
        level: 75,
        description: "Neural networks, model training",
      },
      {
        name: "Sci-kit",
        level: 70,
        description: "Model deployment, transfer learning",
      },
      {
        name: "PyTorch",
        level: 70,
        description: "Model deployment, transfer learning",
      },
      {
        name: "LangChain",
        level: 70,
        description: "Model orchestration, prompt chaining",
      },
      {
        name: "LangGraph",
        level: 70,
        description: "LLM workflow visualization and execution, RAG",
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
