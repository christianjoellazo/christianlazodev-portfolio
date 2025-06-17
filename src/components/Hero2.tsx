import {
  Heart,
  Code,
  User,
  Mail,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const handleScrollToContact = () => {
  const projectsSection = document.getElementById("contact");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

const tags = [
  { icon: Heart, text: "AI Enthusiast" },
  { icon: Code, text: "Frontend Developer" },
  { icon: User, text: "Electronics Engineer Aspirant" },
];

const socialCards = [
  {
    icon: Github,
    text: "300+ Contributions",
    href: "https://github.com/christianjoellazo",
  },
  {
    icon: Linkedin,
    text: "400+ Followers",
    href: "https://www.linkedin.com/in/laxseuss/",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex items-center px-4 md:px-6 min-h-screen relative overflow-hidden"
    >
      {" "}
      {/* Background with overlay */}
      <div
        className="absolute z-10 inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://c4.wallpaperflare.com/wallpaper/146/565/309/painting-starry-night-abstract-vincent-van-gogh-wallpaper-preview.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-white/70 to-white dark:from-black/30 dark:via-black/70 dark:to-slate-900"></div>
      </div>
      <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div
          className="md:col-span-1 flex flex-col items-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGBswO2SkzIFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727874223397?e=1752710400&v=beta&t=OEZoCJai7z7OYwDAEfzPL1KWWmxUPoZbB5nfKJYtyHc"
            alt="Christian Joel Lazo"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white shadow-lg"
          />
        </div>
        <div className="mt-28 md:col-span-2 space-y-6 text-center md:text-left">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold font-serif dark:text-white/90 text-black/90">
              Christian Joel Lazo
            </h1>
            <p className="dark:text-white/70 mt-1 text-lg md:text-xl text-black/70">
              Machine Learning Engineer
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center md:justify-start gap-2 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-full bg-card/50 px-3 py-1 text-sm"
              >
                <tag.icon className="h-4 w-4" />
                <span>{tag.text}</span>
              </div>
            ))}
          </div>

          <blockquote
            className="border-l-4 border-primary pl-4 italic dark:text-white/80 text-black/80 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            "Tell me and I forget. Teach me and I remember. Involve me and I
            learn. Dedicated to building projects that make an impact."
          </blockquote>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button size="lg" className="transition-transform hover:scale-105">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="transition-transform hover:scale-105"
            >
              <FileText className="mr-2 h-4 w-4" /> My Resume
            </Button>
          </div>

          <div
            className="flex justify-center md:justify-start gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            {socialCards.map((card, index) => (
              <a
                href={card.href}
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-card/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 shadow-md"
              >
                <card.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{card.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
