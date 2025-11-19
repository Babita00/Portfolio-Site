import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import XLogo from "../../assets/images/x-logo.png";

const Contact = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", url: "mailto:devbabit07@gmail.com" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/babita-asth/",
    },
    { icon: Github, label: "GitHub", url: "https://github.com/Babita00" },
    {
      icon: () => (
        <img src={XLogo} alt="X logo" className="w-5 h-5 object-contain" />
      ),
      label: "X",
      url: "https://x.com/_imbabita07",
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const baseButton =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300";

  const socialButton =
    " text-gray-700 hover:bg-indigo-600 hover:text-white bg-gray-100   px-8 py-4 shadow-lg hover:-translate-y-0.5";

  const heroButton =
    "bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white border border-indigo-600 px-8 py-4 hover:shadow-lg hover:-translate-y-0.5";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-section-alt"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-lg text-muted-foreground mb-12 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          {/* Social buttons */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {socialLinks.map(({ icon: Icon, label, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`${baseButton} ${socialButton}`}
              >
                <Icon size={20} />
                {label}
              </a>
            ))}
          </div>

          {/* Hero email button (reverse color scheme) */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={() =>
                (window.location.href = "mailto:your.email@example.com")
              }
              className={`${baseButton} ${heroButton}`}
            >
              Send me an email
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Babita Awasthi. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
