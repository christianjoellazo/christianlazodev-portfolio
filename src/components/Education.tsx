
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor of Science in Electronics Engineering",
    institution: "Polytechnic University of the Philippines",
    period: "2020 - 2024",
    description: `Specialized in Artificial Intelligence and Machine Learning with a focus on Neural Networks and Deep Learning algorithms
    Rank 3 Overall Top Performing Student of the ECE Department (1st sem 2020-2021)
    President's Lister (5 semesters)
    Major GPA: 1.50 / 5.00
    Best Presenter - 2024 1st International Graduate Conference on Smart Agriculture and Green Renewable Energy`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/PUP.png",
  },
  {
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    institution: "Our Lady of Fatima University",
    period: "2016 - 2018",
    description: "",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/77/OLFU_official_logo.png",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-4 bg-white dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title dark:text-white dark:after:bg-white">Education</h2>

        <div className="space-y-6">
          {educationItems.map((item, index) => (
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
                      alt={item.institution}
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <h3 className="text-xl font-bold text-navy dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap justify-between mb-2">
                      <span className="font-medium dark:text-gray-200">{item.institution}</span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item.period}
                      </span>
                    </div>
                    <p
                      className="text-gray-700 dark:text-gray-300"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.description}
                    </p>
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

export default Education;
