export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-light text-primary mb-2">Asmi</p>
            <p className="text-sm text-muted-foreground">
              Your AI Chief of Staff
            </p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#team" className="text-muted-foreground hover:text-primary transition-colors">
              Team
            </a>
            <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">
              Vision
            </a>
            <a href="mailto:hello@asmi.ai" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Asmi. Built for people who move fast.
        </div>
      </div>
    </footer>
  );
};
