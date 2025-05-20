import React from "react";
import { Card } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-4 bg-lightGray min-h-screen flex items-center
     dark:bg-navy transition-colors duration-300"
    >
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="text-lg mb-6 text-black/70 dark:text-white/80">
              I am Christian Joel Lazo, an Electronics Engineering graduate from
              the Polytechnic University of the Philippines (PUP) Manila,
              specializing in Data Science and Machine Learning. My academic and
              practical experience centers on developing and computer vision
              solutions utilizing ML models, with a strong emphasis on
              real-world applications such as fruit defect detection and robotic
              automation.
            </p>
            <p className="text-lg mb-6 text-black/70 dark:text-white/80">
              Throughout my journey, I have gained proficiency in Python,
              TensorFlow, Scikit-learn, and related tools such as Pandas,
              Matplotlib, and Seaborn alongside hands-on experience with
              microcontrollers and embedded systems like Arduino and Raspberry
              Pi.
            </p>
            <p className="text-lg text-black/70 dark:text-white/80">
              In my professional experience, I have developed expertise in web
              development utilizing JavaScript, TypeScript, TailwindCSS, HTML,
              and Node.js.
            </p>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6 shadow-lg dark:bg-white hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg text-navy mb-4">
                Personal Details
              </h3>
              <div className="space-y-2 dark:text-black">
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-medium text-navy">Name:</span>
                  <span className="col-span-2">Christian Joel Lazo</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-medium text-navy">Location:</span>
                  <span className="col-span-2">Caloocan City, Philippines</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-medium text-navy">Email:</span>
                  <span className="col-span-2">lazo.c2001@gmail.com</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-medium text-navy">Phone:</span>
                  <span className="col-span-2">(+63) 965-7731801</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-medium text-navy">Languages:</span>
                  <span className="col-span-2">English, Filipino</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
