import { motion } from "framer-motion";
import { Briefcase, Code, Terminal } from "lucide-react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Code Alpha",
    period: "2024",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Developed ML models, established robust data preprocessing pipelines, and deployed solutions using FastAPI endpoints for rapid integration.",
  },
  {
    role: "AI/ML Developer",
    company: "Developers Hub Corporation",
    period: "2024",
    icon: <Terminal className="w-5 h-5" />,
    description: "Built end-to-end ML solutions covering diverse domains including NLP document classification and computer vision recognition systems.",
  },
  {
    role: "Self-learning & Projects",
    company: "Independent",
    period: "2022 - Present",
    icon: <Code className="w-5 h-5" />,
    description: "Participated in Kaggle competitions, contributed to open-source, and maintained a continuous cycle of model development and research.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span> Experience
            <div className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-border ml-6 md:ml-0 md:space-y-12 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <h4 className="text-primary font-medium text-lg">{exp.company}</h4>
                  </div>
                  <span className="text-sm font-mono text-muted-foreground bg-background px-3 py-1 rounded-full border border-border inline-flex w-max">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
