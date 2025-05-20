import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="py-16 min-h-screen flex items-center bg-white dark:bg-darkBackground transition-colors duration-300"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-navy dark:text-white mb-4">
              Christian Joel Lazo
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-6">
              AI Enthusiast, Electronics Engineer Aspirant, and Innovator
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I have developed projects leveraging AI to reduce human effort and
              enhance productivity. I am passionate about crafting innovative
              solutions that drive meaningful impact.
              <br />
              <br />
              Tell me and I forget, teach me and I remember, involve me and I
              learn.
              <br />
            </p>
            <div className="flex space-x-4">
              <Button
                onClick={handleScrollToProjects}
                variant="outline"
                className="bg-navy hover:bg-navy/90 text-white dark:bg-white dark:border-navy dark:text-black dark:hover:bg-primary/90"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-navy text-navy hover:bg-lightGray dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://flowcv.com/resume/71j98nmqc1di";
                  link.target = "_blank"; // optional: open in new tab
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-navy dark:border-primary shadow-xl animate-fade-in">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGBswO2SkzIFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727874223397?e=1752710400&v=beta&t=OEZoCJai7z7OYwDAEfzPL1KWWmxUPoZbB5nfKJYtyHc"
                alt="Christian Joel Lazo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
