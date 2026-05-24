import { motion } from "framer-motion";
import { Github, GitFork, Star, ExternalLink } from "lucide-react";

const repos = [
  {
    name: "Face_Mask_Detection_using_CNN_DeepLearning_Project_with_Streamlit_App",
    displayName: "Face Mask Detection + Streamlit App",
    description: "CNN deep learning model for face mask detection with an interactive Streamlit deployment.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
  },
  {
    name: "CodeAlpha_ImageRecognitionSystem",
    displayName: "Image Recognition System",
    description: "Image recognition system on an agricultural crops dataset — CodeAlpha internship project.",
    language: "Jupyter Notebook",
    stars: 1,
    forks: 0,
  },
  {
    name: "Movie_Review_Sentiment_Analysis",
    displayName: "Movie Review Sentiment Analysis",
    description: "NLP project classifying movie reviews as positive or negative using machine learning.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
  },
  {
    name: "Fake_News_Detector",
    displayName: "Fake News Detector",
    description: "ML classifier distinguishing real from fake news using text feature extraction.",
    language: "Jupyter Notebook",
    stars: 0,
    forks: 0,
  },
  {
    name: "Kokozaki-Shopping-App",
    displayName: "Kokozaki — Social E-Commerce",
    description: "High-fidelity social e-commerce Flutter app with chat, payments, and checkout lifecycle.",
    language: "Dart",
    stars: 0,
    forks: 0,
  },
  {
    name: "WhatsApp-Clone",
    displayName: "WhatsApp Clone UI",
    description: "WhatsApp clone UI in Flutter with Chats, Status, and Calls tabs and dynamic list views.",
    language: "Dart",
    stars: 0,
    forks: 1,
  },
];

const languages = [
  { name: "Python / Jupyter", percent: 72, color: "#DA5B0B" },
  { name: "Dart", percent: 13, color: "#00B4AB" },
  { name: "Other", percent: 15, color: "#555" },
];

const langColors: Record<string, string> = {
  "Jupyter Notebook": "#DA5B0B",
  "Dart": "#00B4AB",
  "Python": "#3572A5",
};

const langVariants = {
  hidden: { width: 0 },
  visible: (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 0.9, ease: "easeOut" },
  }),
};

export function GithubStats() {
  const githubUrl = "https://github.com/AliRaza-Dev678";

  return (
    <section id="github" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-4">
              <span className="text-primary font-mono text-xl">06.</span> GitHub
              <div className="h-[1px] bg-border flex-1 ml-4 max-w-xs"></div>
            </h2>
            <p className="text-muted-foreground">
              47 public repositories — open-source ML projects and Flutter apps.
            </p>
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline shrink-0"
          >
            <Github className="w-4 h-4" />
            View Profile
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Language breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 mb-8"
        >
          <p className="text-sm font-semibold text-foreground mb-4">Top Languages</p>
          <div className="flex h-3 rounded-full overflow-hidden mb-4 gap-[2px]">
            {languages.map((lang) => (
              <motion.div
                key={lang.name}
                custom={lang.percent}
                variants={langVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ backgroundColor: lang.color, width: `${lang.percent}%` }}
                className="h-full rounded-full"
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className="w-3 h-3 rounded-full inline-block shrink-0"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-foreground font-medium">{lang.name}</span>
                <span className="font-mono">{lang.percent}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Repository cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`${githubUrl}/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Github className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {repo.displayName}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1 border-t border-border/50">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: langColors[repo.language] ?? "#888" }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
