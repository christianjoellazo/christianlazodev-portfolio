
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
}

const certifications: Certification[] = [
  {
    name: "Associate AI Engineer for Data Scientists",
    issuer: "DataCamp",
    date: "Jan 2025",
    credentialId: "4a97b46c9891650345b85eb6fcd5e2b82f676bd8",
    image:
      "https://www.datacamp.com/statement-of-accomplishment/badge/track/4a97b46c9891650345b85eb6fcd5e2b82f676bd8.png",
  },
  {
    name: "Data Scientist Associate",
    issuer: "DataCamp",
    date: "Jan 2025",
    credentialId: "DSA0017755702429",
    image:
      "https://media.datacamp.com/legacy/Certification/Badges%202024/outline/DS_Associate_-_badge_with_outline.png",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2024",
    credentialId: "67048aaf-6fa4-48d2-b292-2c9fa9fd31b8",
    image:
      "https://images.credly.com/size/340x340/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png",
  },
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "Great Learning",
    date: "Oct 2024",
    credentialId: "67048aaf-6fa4-48d2-b292-2c9fa9fd31b8",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2024",
    credentialId: "690aa165-af12-465b-a78e-05c25eee2749",
    image:
      "https://images.credly.com/size/340x340/images/edaf0f19-2df0-4759-8871-7b1b44687f53/image.png",
  },
  {
    name: "Oracle Cloud Infrastructure 2024 AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2024",
    credentialId: "100811469OCI24AICFA",
    image:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQEcc_P9kP7qYw/articleshare-shrink_800/articleshare-shrink_800/0/1721899190759?e=2147483647&v=beta&t=dBjAbzNlJ9N9ElGU4uY0JcgwAiQxDUncDFFnLtyPhjQ",
  },
  {
    name: "Fundamentals of Agile Project Management",
    issuer: "Project Management Institute",
    date: "Oct 2023",
    credentialId: "",
    image:
      "https://images.credly.com/size/340x340/images/2677386a-c65f-4d4d-89f2-5b0babbc77d2/KickoffAgileBadge.png",
  },
  {
    name: "Fundamentals of Predictive Project Management",
    issuer: "Project Management Institute",
    date: "Oct 2023",
    credentialId: "",
    image:
      "https://images.credly.com/size/340x340/images/37f7183c-9a25-4c72-916d-0c21572f5875/image.png",
  },
];

const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-8 bg-lightGray min-h-screen flex items-center
     dark:bg-navy transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title dark:text-white dark:after:bg-white">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800",
                "opacity-0 animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 flex-shrink-0 mr-4 bg-white rounded-full p-1">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-navy mb-1 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="flex items-center text-gray-700 dark:text-gray-300 mb-3">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between items-center">
                  <Badge
                    variant="outline"
                    className="border-navy text-navy dark:border-gray-300 dark:text-gray-200"
                  >
                    {cert.date}
                  </Badge>
                  {cert.credentialId && (
                    <span className="text-xs text-gray-600 dark:text-gray-300">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
