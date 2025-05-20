import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
}

const experienceItems: ExperienceItem[] = [
  {
    position: "Project Engineer",
    company: "TELKHA Networks Inc.",
    location: "BGC, Taguig",
    period: "March 2024 - Present",
    description: [
      "Current working on a AI-based chatbot for office use",
      "Currently working on a AI-based project to improve operational efficiency",
      "Developed and maintained web applications using React.js, Typescript, HTML, TailwindCSS, and Node.js",
      "Developed energy dashboard using React.js and TailwindCSS for real-time implementation",
      "Contributed on technical documentation in on-site surveys",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGbjznn4csTEA/company-logo_200_200/company-logo_200_200/0/1679389932866/telkha_network_inc_logo?e=1753315200&v=beta&t=179gk-yNG5cPo1aPElGOHYMw1jVb6pQw5s3m-biqy5M",
  },
  {
    position: "Product Engineer",
    company: "ElectifAI Solutions Corp.",
    location: "Start-Up",
    period: "March 2024 - Present",
    description: ["https://www.electrifaiph.tech/", "https://serbisyow.ai/"],
    logo: "https://www.electrifaiph.tech/svgs/elec_logo.svg",
  },
  {
    position: "Process Engineer Intern",
    company: "Philippine Manufacturing Co. of Murata, Inc.",
    location: "Sto. Tomas, Batangas",
    period: "Aug 2023 - Nov 2023",
    description: [
      "Utilized MS Excel and Power BI for data analysis ensuring the qualification of a specific machine to the item.",
      "Demonstrated interpersonal skills for collaboration through synchronized scheduling to ensure completion.",
      "Developed comprehensive progress reports and presented objective findings.",
      "Deployed a specific machine to the production upon completion of the qualification.",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Muratamanifacturecorporationnewlogo.png",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-4 bg-white dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title dark:text-white dark:after:bg-white">
          Experience
        </h2>

        <div className="space-y-6">
          {experienceItems.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "overflow-hidden transition-all duration-300 hover:shadow-lg dark:border-gray-700",
                "opacity-0 animate-fade-in-up"
              )}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <CardContent className="p-0 bg-white dark:bg-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-1 p-6 flex justify-center items-center bg-lightGray dark:bg-gray-700">
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-25 h-25 object-fill"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-navy dark:text-white mb-">
                        {item.position}
                      </h3>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mb-4">
                      <span className="font-medium dark:text-gray-200">
                        {item.company}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.location}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.description.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 dark:text-gray-300"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
