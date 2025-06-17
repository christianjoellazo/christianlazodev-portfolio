import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen container mx-auto py-20 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold text-center font-serif">About Me</h2>
      <Card className="mt-8 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-serif">My Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            I'm Christian Joel Lazo, a passionate Machine Learning Engineer with
            a knack for building impactful projects. My journey began with a
            fascination for electronics, which quickly evolved into a deep love
            for software development and artificial intelligence. I thrive on
            challenges and am constantly seeking new ways to apply my skills to
            solve real-world problems.
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
