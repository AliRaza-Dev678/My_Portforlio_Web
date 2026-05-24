import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto group">
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center">
                {/* Abstract Geometric SVG representing AI/ML */}
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 50 L350 136.6 L350 310 L200 396.6 L50 310 L50 136.6 Z" stroke="currentColor" strokeWidth="2" className="text-primary" strokeDasharray="5 5" />
                  <circle cx="200" cy="223" r="60" stroke="currentColor" strokeWidth="2" className="text-muted-foreground" />
                  <circle cx="200" cy="223" r="20" fill="currentColor" className="text-primary" />
                  <path d="M200 163 L200 50 M260 223 L350 136.6 M140 223 L50 136.6 M230 275 L350 310 M170 275 L50 310 M200 283 L200 396.6" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <circle cx="200" cy="50" r="6" fill="currentColor" className="text-foreground" />
                  <circle cx="350" cy="136.6" r="6" fill="currentColor" className="text-foreground" />
                  <circle cx="350" cy="310" r="6" fill="currentColor" className="text-foreground" />
                  <circle cx="200" cy="396.6" r="6" fill="currentColor" className="text-foreground" />
                  <circle cx="50" cy="310" r="6" fill="currentColor" className="text-foreground" />
                  <circle cx="50" cy="136.6" r="6" fill="currentColor" className="text-foreground" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a passionate Machine Learning Engineer dedicated to building intelligent systems
              that are both robust and scalable. My focus bridges the gap between raw data and 
              actionable insights, engineering end-to-end pipelines that deliver real value.
            </p>
            <p>
              Beyond training models, I specialize in serving them. I leverage frameworks like
              FastAPI to create efficient, async backend services, ensuring seamless integration
              of AI features into production environments.
            </p>
            <p>
              I also build cross-platform mobile applications with Flutter, bringing AI capabilities
              directly to users' hands — from on-device inference to ML-powered features integrated
              into polished, production-ready apps.
            </p>
            <p>
              Continuous learning is at the core of my methodology. The AI landscape evolves rapidly,
              and I actively engage with new architectures, algorithms, and deployment strategies to
              stay ahead of the curve.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-foreground">30+</h4>
                <p className="text-sm text-primary font-medium">Projects Built</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-foreground">3+</h4>
                <p className="text-sm text-primary font-medium">Years Exp</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold text-foreground">5</h4>
                <p className="text-sm text-primary font-medium">Certifications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
