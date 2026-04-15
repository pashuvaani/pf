import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1548767797-d8c844163c4a?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#1E293B]/85 to-[#0A1628]/95 dark:from-[#0F172A]/97 dark:via-[#1E293B]/93 dark:to-[#0A1628]/98" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/15 via-[#7C3AED]/8 to-[#22C55E]/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ── LEFT: Profile Photo Circle ── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative group">

              {/* Spinning gradient ring — always visible, spins on hover */}
              <div
                className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#EC4899] opacity-90
                           transition-all duration-500 group-hover:opacity-100 group-hover:blur-[2px] group-hover:scale-105"
              />

              {/* Outer radial glow that appears on hover — matches dark bg palette */}
              <div
                className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500
                           bg-[radial-gradient(circle,_rgba(124,58,237,0.35)_0%,_rgba(79,70,229,0.18)_50%,_transparent_75%)]
                           pointer-events-none"
              />

              {/* Circle photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="1.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center
                             transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover colour overlay — dark indigo tint matching the page */}
                <div
                  className="absolute inset-0 rounded-full
                             bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent
                             group-hover:from-[#4F46E5]/20 group-hover:via-[#7C3AED]/10 group-hover:to-transparent
                             transition-all duration-500"
                />
              </div>

              {/* Floating badge — slides up slightly on hover */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2
                           bg-gradient-to-br from-[#4F46E5] to-[#EC4899]
                           rounded-full px-5 py-2 shadow-lg border border-white/10
                           transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[#7C3AED]/50 group-hover:shadow-xl
                           -translate-y-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-semibold whitespace-nowrap">Mohan Vij</span>
                </div>
              </div>

              {/* Decorative accent dots */}
              <div className="absolute top-1/3 -left-5 w-3 h-3 rounded-full bg-[#7C3AED]/70 group-hover:bg-[#7C3AED] transition-colors duration-300" />
              <div className="absolute top-0 right-4 w-2 h-2 rounded-full bg-[#EC4899]/70 group-hover:bg-[#EC4899] transition-colors duration-300" />
            </div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Tagline */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="text-[#22C55E] font-semibold tracking-wide">CEO & Founder</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
                Building the Future
              </span>
              <br />
              <span className="text-foreground">
                of Animal Healthcare
              </span>
              <br />
              <span className="text-foreground/90">with AI</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl font-light">
              CEO &amp; Founder | Tech Enthusiast | Empowering Animal Care through Intelligent Systems
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <Button
                onClick={() => scrollToSection('experience')}
                size="lg"
                className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Explore Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Contact
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-background/10 backdrop-blur-md border border-foreground/10 rounded-2xl p-5 hover:bg-background/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="text-foreground/70 text-xs font-medium">Advisory Categories</div>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-foreground/10 rounded-2xl p-5 hover:bg-background/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent mb-1">
                  200+
                </div>
                <div className="text-foreground/70 text-xs font-medium">Consultations</div>
              </div>
              <div className="bg-background/10 backdrop-blur-md border border-foreground/10 rounded-2xl p-5 hover:bg-background/20 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#EC4899] to-[#22C55E] bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-foreground/70 text-xs font-medium">Availability</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
