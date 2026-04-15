import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohan-vij-450698237/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/YOUR_USERNAME', label: 'Twitter' }
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-foreground/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-4">
              Mohan Vij
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Building the future of animal healthcare through innovative AI solutions and compassionate technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-foreground/10 hover:bg-gradient-to-br hover:from-[#4F46E5] hover:to-[#7C3AED] flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} PashuVaani Tech. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-[#EC4899] fill-current" /> for animals everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
