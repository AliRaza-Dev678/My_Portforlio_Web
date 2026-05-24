import { motion } from "framer-motion";
import { 
  SiPython, SiScikitlearn, SiPandas, SiNumpy,
  SiTensorflow, SiPytorch, SiOpencv,
  SiFastapi, SiSqlalchemy, SiPostgresql, SiSqlite,
  SiGit, SiGithub, SiStreamlit,
  SiFlutter, SiDart
} from "react-icons/si";
import { Database, BarChart, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: <BarChart className="w-5 h-5" />,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ]
  },
  {
    title: "Deep Learning",
    icon: <BarChart className="w-5 h-5" />,
    skills: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "OpenCV", icon: SiOpencv },
    ]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "REST APIs", icon: Server },
    ]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "SQL", icon: Database },
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ]
  },
  {
    title: "Tools & Deployment",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Streamlit", icon: SiStreamlit },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span> Technical Arsenal
            <div className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors shadow-sm group">
              <div className="flex items-center gap-3 mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.icon}
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={sIdx} 
                      className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_10px_rgba(var(--primary),0.2)] transition-all"
                    >
                      <Icon className="w-4 h-4" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
