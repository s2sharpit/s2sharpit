"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "github", href: "https://github.com/s2sharpit" },
    { name: "linkedin", href: "https://linkedin.com/in/s2sharpit" },
    { name: "x", href: "https://x.com/s2sharpit" },
  ];

  return (
    <footer className="w-full border-t border-border/20 py-8 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-text font-sans tracking-wider lowercase space-y-4 sm:space-y-0">
        <div>
          <span>© {currentYear} Tushar Saini</span>
        </div>

        <div className="flex items-center space-x-4">
          {socialLinks.map((social, idx) => (
            <div key={idx} className="flex items-center">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 relative group"
              >
                {social.name}
                <span className="absolute bottom-0 left-0 w-full h-[0.5px] bg-accent origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </a>
              {idx < socialLinks.length - 1 && (
                <span className="text-border/60 ml-4">·</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
