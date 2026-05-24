import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-foreground font-semibold">Ali Raza</p>
          <p className="text-sm text-muted-foreground font-mono">Machine Learning Engineer</p>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://github.com/AliRaza-Dev678" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground text-center md:text-right font-mono">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
