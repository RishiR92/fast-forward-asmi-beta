import asmiLogo from "@/assets/asmi-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo Section */}
          <div className="text-center sm:text-left">
            <img 
              src={asmiLogo} 
              alt="Asmi" 
              className="h-12 sm:h-14 mx-auto sm:mx-0 mb-3"
            />
            <p className="text-sm text-muted-foreground">
              AI that gets things done
            </p>
          </div>
          
          {/* Policy Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-foreground mb-3">Policy</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold text-foreground mb-3">Contact</h3>
            <a 
              href="mailto:rishi@asmiai.com" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              rishi@asmiai.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Huintel Labs, Inc
        </div>
      </div>
    </footer>
  );
};
