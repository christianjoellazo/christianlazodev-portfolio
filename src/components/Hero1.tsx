import React from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Heart,
  Code,
  User,
} from "lucide-react";

const handleScrollToContact = () => {
  const projectsSection = document.getElementById("contact");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const cards = [
  {
    icon: Github,
    title: "GitHub",
    subtitle: "300+ Contributions",
    href: "https://github.com/christianjoellazo",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    subtitle: "400+ Followers",
    href: "https://www.linkedin.com/in/laxseuss/",
  },
];

const Hero1 = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://c4.wallpaperflare.com/wallpaper/146/565/309/painting-starry-night-abstract-vincent-van-gogh-wallpaper-preview.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/90 to-white"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-60vh] px-8 md:px-16 pt-60">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Left Content – Profile + Info */}
            <div className="flex items-start space-x-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQGBswO2SkzIFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727874223397?e=1752710400&v=beta&t=OEZoCJai7z7OYwDAEfzPL1KWWmxUPoZbB5nfKJYtyHc"
                    alt="Profile photo of Christian Joel Lazo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-black font-['Montserrat']">
                    Christian Joel Lazo
                  </h1>
                  <p className="text-lg text-gray-600 font-medium font-['Montserrat']">
                    Machine Learning Engineer
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors border hover:border-black">
                    <Heart className="w-4 h-4 mr-1" />
                    AI Enthusiast
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors border hover:border-black">
                    <Code className="w-4 h-4 mr-1" />
                    Full Stack Dev
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm flex items-center hover:bg-white hover:text-black transition-colors border hover:border-black">
                    <User className="w-4 h-4 mr-1" />
                    Electronics Engineer Aspirant
                  </span>
                </div>

                <p className="text-gray-700 leading-relaxed font-['Inter'] max-w-lg">
                  Tell me and I forget. Teach me and I remember. Involve me and
                  I learn. Dedicated to building projects that make an impact.
                </p>
              </div>
            </div>

            {/* Right Content – CTAs */}
            <div className="flex flex-row space-x-2 flex-shrink-0">
              <Button
                onClick={handleScrollToContact}
                className="
                  bg-inherit
                  border-2 border-gray-400
                  text-inherit
                  hover:bg-white/90 hover:text-black
                  transition-all
                  transform hover:-translate-y-2 hover:shadow-xl
                  px-4 py-4 text-sm
                "
                aria-label="Contact Christian Joel Lazo"
              >
                <Mail className="w-4 h-4 mr-1" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="
                  bg-white/90
                  border-2 border-gray-400
                  text-black
                  hover:bg-inherit hover:text-black
                  transition-all
                  transform hover:-translate-y-2 hover:shadow-xl
                  px-4 py-4 text-sm
                "
                aria-label="View Resume of Christian Joel Lazo"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://flowcv.com/resume/71j98nmqc1di";
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileText className="w-4 h-4 mr-0" />
                My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Social/Store Cards */}
      <div className="w-full max-w-5xl mx-auto px-1">
        <div className="z-10 relative flex flex-wrap justify-center gap-4 py-8">
          {cards.map((c) =>
            c.href ? (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full sm:w-[48%] md:w-[23%] p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                {/* Icon (either a Lucide component or a Remix Icon class) */}
                {typeof c.icon === "string" ? (
                  // Remix Icon (string case)
                  <i className={`${c.icon} text-2xl text-gray-700`} />
                ) : (
                  // Lucide-React component (JSX component case)
                  <c.icon className="text-2xl text-gray-700" />
                )}

                <div className="ml-4">
                  <h4 className="text-md font-light text-gray-900">
                    {c.title}
                  </h4>
                  <p className="mt-0 text-sm text-gray-600">{c.subtitle}</p>
                </div>
              </a>
            ) : (
              <div
                key={c.title}
                className="flex items-center w-full sm:w-[48%] md:w-[23%] p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                {/* Icon (either a Lucide component or a Remix Icon class) */}
                {typeof c.icon === "string" ? (
                  // Remix Icon (string case)
                  <i className={`${c.icon} text-2xl text-gray-700`} />
                ) : (
                  // Lucide-React component (JSX component case)
                  <c.icon className="text-2xl text-gray-700" />
                )}

                <div className="ml-4">
                  <h4 className="text-md font-light text-gray-900">
                    {c.title}
                  </h4>
                  <p className="mt-0 text-sm text-gray-600">{c.subtitle}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero1;
