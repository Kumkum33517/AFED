import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Animated gradient background elements */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-dark-pink/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Big AFED Title */}
        <div className="space-y-4">
          <h1 className="text-9xl md:text-[160px] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-dark-pink drop-shadow-2xl leading-none">
            AFED
          </h1>

          {/* Tagline */}
          <div className="space-y-3">
            <p className="text-3xl md:text-4xl font-bold text-foreground">
              Automated Fraud & Event Detection
            </p>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50"
          >
            {/* Button gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-dark-pink"></div>
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative flex items-center gap-3">
              Start
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Features Preview */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"></div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 text-center text-muted-foreground text-sm">
        <p>© 2026 AFED. Protecting your systems from fraud and anomalies.</p>
      </div>
    </div>
  );
}
