import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import hagueware from "../assets/thehaguewarecoder.svg";

interface HackathonEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  achievement: string;
  technologies: string[];
  image: string;
  projectUrl?: string;
}

const hackathonEvents: HackathonEvent[] = [
  {
    id: 1,
    title: "Codebreak 2.0",
    date: "March 17-18, 2025",
    location: "Taguig, Philippines",
    description:
      "Developed an agentic AI-powered training material solution for CSR agents aimed at reducing AHT and DSAT, aligned with the identified problem statement and proposed solution.",
    achievement: "Top 5 Finalist",
    technologies: [
      "Python",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Node.JS",
      "Supabase",
    ],
    image: hagueware,
    projectUrl: "https://github.com/uramazingdanc/tenurAItee",
  },
];

const HackathonEvents: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  return (
    <section
      id="hackathons"
      className="py-8 bg-lightGray min-h-screen flex items-center
     dark:bg-navy transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title dark:text-white dark:after:bg-white">
          Hackathon Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathonEvents.map((event, index) => (
            <ScrollReveal
              key={event.id}
              delay={index * 100}
              direction="up"
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full overflow-hidden transition-all duration-300 dark:border-gray-700 dark:bg-gray-800",
                  hoveredEvent === event.id
                    ? "transform scale-[1.02] shadow-xl"
                    : "shadow-md"
                )}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-navy text-white dark:bg-primary dark:text-navy">
                      <Trophy size={14} className="mr-1" /> {event.achievement}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5">
                  <h3 className="text-xl font-bold text-navy mb-3 dark:text-white">
                    {event.title}
                  </h3>

                  <div className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>

                  <div className="text-gray-600 dark:text-gray-300 mb-3">
                    <span>{event.location}</span>
                  </div>

                  <p
                    className={cn(
                      "text-gray-700 mb-4 transition-all duration-300 dark:text-gray-300",
                      expandedEvent === event.id ? "" : "line-clamp-3"
                    )}
                  >
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-navy text-white/90 dark:bg-primary 
                        dark:text-navy px-2 py-1 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {event.projectUrl && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="border-navy text-navy dark:border-primary dark:text-primary hover:bg-navy/5 dark:hover:bg-primary/10 w-full"
                        asChild
                      >
                        <a
                          href={event.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Project
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonEvents;
