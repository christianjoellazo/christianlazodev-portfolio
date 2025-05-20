
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Download,
  ArrowLeft, 
  Calendar 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Electronics Engineering",
    institution: "Polytechnic University of the Philippines",
    location: "Manila, Philippines",
    period: "2020 - 2024 (Expected)",
    description: "Thesis: Fruit Defect Detection using Computer Vision. Major GPA: 1.50/5.00 (Top 5%). Ranked 3rd overall in the ECE Department during the first semester of 2020-2021."
  }
];

const experienceData: Experience[] = [
  {
    title: "Process Engineer Intern",
    company: "Philippine Manufacturing Co. of Murata, Inc.",
    location: "Laguna, Philippines",
    period: "June 2023 - August 2023",
    description: "Utilized MS Excel and Power BI for data analysis to ensure machine qualification. Collaborated with cross-functional teams through synchronized scheduling.",
    achievements: [
      "Developed process optimization solutions that improved efficiency by 15%",
      "Created automated reporting tools that reduced manual work by 30%",
      "Implemented data visualization dashboards for real-time monitoring"
    ]
  },
  {
    title: "Assistant Manager",
    company: "Caloocan Relief Operations",
    location: "Caloocan City, Philippines",
    period: "April 2020 - September 2020",
    description: "Managed the distribution of relief goods to various barangays. Supported efficient site operations through leadership and strategic interpersonal skills.",
    achievements: [
      "Coordinated distribution of relief supplies to over 500 families",
      "Developed and implemented an efficient tracking system for donations",
      "Led a team of 10 volunteers in community outreach efforts"
    ]
  }
];

const certificationData: Certification[] = [
  {
    title: "Associate Data Scientist in Python",
    issuer: "DataCamp",
    date: "Expected December 2024",
    credentialId: "DS12345",
    url: "#"
  },
  {
    title: "Python Data Fundamentals",
    issuer: "DataCamp",
    date: "March 2023",
    credentialId: "PY98765",
    url: "#"
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "January 2023",
    credentialId: "AZ-900",
    url: "#"
  }
];

const Resume: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/christian-lazo-resume.pdf";
    link.download = "Christian-Lazo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
        <div className="section-container max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              asChild 
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft size={16} /> Back to Portfolio
              </Link>
            </Button>
            
            <Button 
              onClick={handleDownloadResume}
              className="bg-navy hover:bg-navy/90 text-white dark:bg-primary dark:text-navy flex items-center gap-2"
            >
              <Download size={16} /> Download PDF
            </Button>
          </div>

          <Card className="p-8 shadow-lg mb-10 bg-white dark:bg-gray-800">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2">Christian Joel Lazo</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Electronics Engineer Aspirant | AI Enthusiast | Data Analyst
              </p>
              <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-600 dark:text-gray-300">
                <span>lazo.c2001@gmail.com</span>
                <span className="hidden md:inline">|</span>
                <span>(+63) 965-773-1801</span>
                <span className="hidden md:inline">|</span>
                <span>Manila, Philippines</span>
              </div>
            </div>

            <Separator className="my-6" />

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-navy dark:text-primary" size={24} />
                <h2 className="text-2xl font-bold text-navy dark:text-white">Education</h2>
              </div>

              {educationData.map((education, index) => (
                <div key={index} className="mb-4 last:mb-0 pl-9">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1 md:gap-0">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">
                      {education.degree}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {education.period}
                    </div>
                  </div>
                  <p className="text-navy dark:text-primary font-medium">{education.institution}, {education.location}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {education.description}
                  </p>
                </div>
              ))}
            </section>

            <Separator className="my-6" />

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="text-navy dark:text-primary" size={24} />
                <h2 className="text-2xl font-bold text-navy dark:text-white">Experience</h2>
              </div>

              {experienceData.map((experience, index) => (
                <div key={index} className="mb-6 last:mb-0 pl-9">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1 md:gap-0">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">
                      {experience.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-navy dark:text-primary font-medium">{experience.company}, {experience.location}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {experience.description}
                  </p>
                  <ul className="list-disc ml-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="mt-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <Separator className="my-6" />

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-navy dark:text-primary" size={24} />
                <h2 className="text-2xl font-bold text-navy dark:text-white">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-9">
                {certificationData.map((certification, index) => (
                  <Card 
                    key={index} 
                    className="p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-1">
                      {certification.title}
                    </h3>
                    <p className="text-navy dark:text-primary text-sm font-medium">
                      {certification.issuer}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-xs mt-2">
                      <Calendar size={12} className="mr-1" />
                      {certification.date}
                    </div>
                    {certification.credentialId && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Credential ID: {certification.credentialId}
                      </p>
                    )}
                    {certification.url && (
                      <div className="mt-2">
                        <a 
                          href={certification.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View Certificate
                        </a>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
