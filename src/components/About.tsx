import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen container mx-auto py-20 animate-fade-in-up"
    >
      <h2 className="text-4xl font-bold text-center font-serif text-white mb-4">
        About Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-12"></div>

      <Card className="glass-card hover-lift border-white/20">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-white">
            My Story
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            I'm Christian Joel Lazo, a passionate aspiring Machine Learning
            Engineer with a knack for building impactful projects th. My journey
            began with a fascination for electronics, which quickly evolved into
            a deep love for software development and artificial intelligence. I
            thrive on challenges and am constantly seeking new ways to apply my
            skills to solve real-world problems.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            I believe in learning by doing and am dedicated to continuous growth
            and innovation in the ever-evolving world of technology.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
