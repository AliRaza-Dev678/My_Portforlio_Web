import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight } from "lucide-react";

const roles = ["Machine Learning Engineer", "AI Developer", "Data Scientist", "Flutter Developer"];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-medium tracking-wide mb-3">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4">
              Ali Raza
            </h1>
            
            <div className="h-[40px] md:h-[60px] flex items-center mb-6">
              <h3 className="text-2xl md:text-4xl font-bold text-muted-foreground">
                I am a{" "}
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-foreground inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </h3>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              I build intelligent systems that solve real-world problems. With deep expertise in 
              predictive modeling, NLP, and computer vision, I transform complex data into scalable 
              production-ready solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToProjects} className="gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/Ali-Raza-Resume.pdf" download="Ali-Raza-Resume.pdf">
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
