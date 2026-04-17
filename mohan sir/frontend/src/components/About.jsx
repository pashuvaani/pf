import React from 'react';
import { Code, Brain, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Tech Enthusiast',
      description: 'Leading innovative software solutions with expertise in modern tech stacks and scalable architectures',
      image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4',
      gradient: 'from-[#4F46E5] to-[#7C3AED]'
    },
    {
      icon: Brain,
      title: 'AI Innovator',
      description: 'Pioneering AI-driven solutions that transform how we approach animal healthcare and wellness',
      image: 'https://images.pexels.com/photos/7562026/pexels-photo-7562026.jpeg',
      gradient: 'from-[#7C3AED] to-[#EC4899]'
    },
    {
      icon: Heart,
      title: 'Animal Welfare',
      description: 'Committed to leveraging technology to improve the lives of animals and their caregivers',
      image: 'https://images.unsplash.com/photo-1649172000612-6aa53867391d',
      gradient: 'from-[#EC4899] to-[#22C55E]'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I am the Founder & CEO of PashuVaani, an AI-powered platform for animal health. The idea started when I saw a farmer unable to understand his sick cow despite his care. That moment highlighted a gap—animals communicate, but we often miss it. I wondered: if AI can understand humans, can it help us understand animals? PashuVaani aims to detect early health issues and provide timely guidance. We work alongside veterinarians to improve animal care. Our mission is to make animal healthcare more accessible and effective.
          </p>
        </div>
        {/* Mission Statement */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#4F46E5]/10 via-[#7C3AED]/10 to-[#EC4899]/10 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-start mb-4">
              <div className="w-1 h-16 bg-gradient-to-b from-[#4F46E5] via-[#7C3AED] to-[#EC4899] rounded-full mr-6" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Mission</h3>
                <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed">
                  "Technology should serve every living being, not just humans."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="group bg-background/50 backdrop-blur-sm border-foreground/10 hover:border-foreground/30 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${highlight.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{highlight.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
