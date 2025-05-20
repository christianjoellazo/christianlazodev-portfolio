
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Project {
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
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projectsData.find(p => p.id === id);
        if (foundProject) {
          setProject(foundProject);
          toast.success("Project details loaded successfully");
        } else {
          toast.error("Project not found");
        }
        setLoading(false);
      }, 500);
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-64 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-16">
        <div className="section-container">
          <Button 
            variant="outline" 
            asChild 
            className="mb-8 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden shadow-lg dark:bg-gray-800">
                {project.screenshots && project.screenshots.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.screenshots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <img 
                            src={screenshot} 
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-72 sm:h-96 object-cover object-top"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 sm:h-96 object-cover object-top"
                  />
                )}
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-navy dark:text-white mb-4">
                  {project.title}
                </h1>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
                  <Calendar size={18} />
                  <span>{project.date}</span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2 dark:text-gray-200">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-navy text-white dark:bg-primary dark:text-navy">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 mb-6">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      className="w-full border-navy text-navy dark:border-primary dark:text-primary"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button 
                      className="w-full bg-navy text-white dark:bg-primary dark:text-navy"
                      asChild
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
          
          <div className="mt-8">
            <Card className="p-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Project Description</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>
              
              {project.features && project.features.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
