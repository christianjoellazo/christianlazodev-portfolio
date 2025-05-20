import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import HackathonEvents from "@/components/HackathonEvents";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  // Add class to style the animate-in elements
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translate(0, 0) !important;
      }
      .animate-out {
        transition: all 0.5s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen dark:bg-darkBackground">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <HackathonEvents />
      <Skills />
      <Certifications />
      <Contact />
      <Chatbot />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
