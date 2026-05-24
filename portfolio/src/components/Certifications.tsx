import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Machine Learning Specialization", issuer: "Andrew Ng / Coursera" },
  { name: "Deep Learning Specialization", issuer: "Coursera" },
  { name: "Python for Data Science", issuer: "IBM" },
  { name: "Data Analysis with Python", issuer: "Coursera" },
  { name: "FastAPI Development", issuer: "Udemy" },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous education is critical in AI. I actively pursue advanced coursework to refine my theoretical knowledge and practical engineering skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-lg shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-foreground leading-tight mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
