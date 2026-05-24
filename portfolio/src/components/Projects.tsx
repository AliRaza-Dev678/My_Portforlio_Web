import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Face Mask Detection",
    description: "CNN deep learning model for real-time face mask detection, deployed as an interactive Streamlit web app.",
    tech: ["Python", "Jupyter", "CNN", "Streamlit"],
    category: "Deep Learning",
    github: "https://github.com/AliRaza-Dev678/Face_Mask_Detection_using_CNN_DeepLearning_Project_with_Streamlit_App"
  },
  {
    title: "Image Recognition System",
    description: "Image recognition system trained on an agricultural crops dataset — built for the CodeAlpha internship.",
    tech: ["Python", "Jupyter", "CNN"],
    category: "Deep Learning",
    github: "https://github.com/AliRaza-Dev678/CodeAlpha_ImageRecognitionSystem"
  },
  {
    title: "Movie Review Sentiment Analysis",
    description: "NLP project classifying movie reviews as positive or negative using machine learning techniques.",
    tech: ["Python", "Jupyter", "NLP", "Scikit-learn"],
    category: "NLP",
    github: "https://github.com/AliRaza-Dev678/Movie_Review_Sentiment_Analysis"
  },
  {
    title: "Fake News Detector",
    description: "Machine learning classifier that distinguishes real news from fake news using text feature extraction.",
    tech: ["Python", "Jupyter", "NLP", "Scikit-learn"],
    category: "NLP",
    github: "https://github.com/AliRaza-Dev678/Fake_News_Detector"
  },
  {
    title: "Customer Segmentation",
    description: "Unsupervised K-Means clustering pipeline to segment customers into distinct behavioral groups.",
    tech: ["Python", "Jupyter", "K-Means", "Scikit-learn"],
    category: "ML",
    github: "https://github.com/AliRaza-Dev678/Customer_Segmentation_k-means_Project"
  },
  {
    title: "Heart Disease Prediction",
    description: "Supervised ML model predicting heart disease risk from clinical patient data with high accuracy.",
    tech: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
    category: "ML",
    github: "https://github.com/AliRaza-Dev678/Heart_Disease_Prediction_Model"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Imbalanced classification model identifying fraudulent credit card transactions from transactional data.",
    tech: ["Python", "Jupyter", "Scikit-learn", "Pandas"],
    category: "ML",
    github: "https://github.com/AliRaza-Dev678/Credit_Card_Fraud_Detection_Model"
  },
  {
    title: "Kokozaki — Social E-Commerce",
    description: "High-fidelity social e-commerce Flutter app with supermarket discovery, integrated chat, secure payments, and a complete checkout flow.",
    tech: ["Flutter", "Dart"],
    category: "Flutter",
    github: "https://github.com/AliRaza-Dev678/Kokozaki-Shopping-App"
  },
  {
    title: "WhatsApp Clone UI",
    description: "WhatsApp clone UI built with Flutter featuring Chats, Status, and Calls tabs with a teal theme and dynamic list views.",
    tech: ["Flutter", "Dart"],
    category: "Flutter",
    github: "https://github.com/AliRaza-Dev678/WhatsApp-Clone"
  },
  {
    title: "Covid-19 Tracking App",
    description: "Real-time COVID-19 tracker with live API integration, interactive pie charts, and country-wise search.",
    tech: ["Flutter", "Dart", "REST API"],
    category: "Flutter",
    github: "https://github.com/AliRaza-Dev678/Covid-Tracking-App"
  }
];

const categories = ["All", "ML", "Deep Learning", "NLP", "Flutter"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span> Featured Work
            <div className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 shadow-sm"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-primary font-mono text-sm">{project.category}</div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
