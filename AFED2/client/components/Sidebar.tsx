import { Link } from "react-router-dom";
import { X, Github, Linkedin, Twitter } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  language?: "en" | "hi";
}

const translations = {
  en: {
    dashboard: "Dashboard",
    detection: "Detection",
    analytics: "Analytics",
    reports: "Reports",
    settings: "Settings",
    about: "About",
    documentation: "Documentation",
    support: "Support",
    guide: "Guide",
    footer: "© 2026 AFED. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  hi: {
    dashboard: "डैशबोर्ड",
    detection: "पहचान",
    analytics: "विश्लेषण",
    reports: "रिपोर्ट",
    settings: "सेटिंग्स",
    about: "परिचय",
    documentation: "दस्तावेज़",
    support: "समर्थन",
    guide: "गाइड",
    footer: "© 2026 AFED। सर्वाधिकार सुरक्षित।",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
  },
};

const mainNavItems = [
  { key: "dashboard", path: "/" },
  { key: "detection", path: "/detection" },
  { key: "analytics", path: "/analytics" },
  { key: "reports", path: "/reports" },
  { key: "settings", path: "/settings" },
];

const secondaryNavItems = [
  { key: "about", path: "/about" },
  { key: "documentation", path: "/documentation" },
  { key: "support", path: "/support" },
  { key: "guide", path: "/guide" },
];

export default function Sidebar({ isOpen, onClose, language = "en" }: SidebarProps) {
  const t = translations[language || "en"];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-72 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out lg:static lg:top-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button (Mobile) */}
          <div className="lg:hidden px-6 py-4 border-b border-border flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Menu</h2>
            <button
              onClick={onClose}
              className="text-foreground hover:text-muted-foreground"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8">
            {/* AFED Branding */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-2">AFED</h3>
              <p className="text-sm text-muted-foreground">
                Automated Fraud & Event Detection
              </p>
            </div>

            {/* Main Navigation */}
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors font-medium text-lg"
                    onClick={onClose}
                  >
                    {t[item.key as keyof typeof t]}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Secondary Navigation */}
            <div className="border-t border-border pt-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Resources
              </h4>
              <nav className="flex flex-col gap-2">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={onClose}
                  >
                    {t[item.key as keyof typeof t]}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div className="border-t border-border pt-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-6 py-6 bg-background text-xs text-muted-foreground space-y-3">
            <p>{t.footer}</p>
            <div className="flex gap-4">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                {t.privacyPolicy}
              </a>
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                {t.termsOfService}
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
