import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Briefcase, Rocket, Brain } from 'lucide-react';
import { Badge } from './ui/badge';

export const Experience = () => {
  const timeline = [
    {
      icon: Rocket,
      role: 'CEO & Founder',
      company: 'PashuVaani Tech Private Limited',
      period: 'Present',
      description: 'Leading the development of AI-powered solutions for animal healthcare, building a team focused on innovation and impact.',
      achievements: [
        'Built AI-driven veterinary advisory platform',
        'Secured partnerships with veterinary clinics',
        'Developed proprietary health monitoring algorithms'
      ]
    },
    {
      icon: Code2,
      role: 'Director',
      company: 'Vesper Group',
      period: '2024-Present',
      description: 'Led technical teams in developing cutting-edge AI and machine learning solutions for various industries.',
      achievements: [
        'Architected scalable AI infrastructure',
        'Implemented ML models for real-time analytics',
        'Mentored engineering teams on best practices'
      ]
    },
    {
      icon: Brain,
      role: 'Management Engineer',
      company: 'ConsultAdd Inc',
      period: '2022-2024',
      description: 'Worked on diverse AI and data science projects, gaining expertise in machine learning and predictive analytics.',
      achievements: [
        'Developed NLP models for text analysis',
        'Built computer vision solutions',
        'Created predictive analytics dashboards'
      ]
    },
    /*{
      icon: Briefcase,
      role: 'Software Development',
      company: 'Tech Companies',
      period: '2015 - 2018',
      description: 'Started career in software development, building full-stack applications and learning modern development practices.',
      achievements: [
        'Built scalable web applications',
        'Implemented CI/CD pipelines',
        'Collaborated with cross-functional teams'
      ]
    }*/
  ];

  const projects = [
    {
      title: 'AI Animal Chatbot',
      description: 'Intelligent conversational AI that provides instant pet care advice and health guidance to pet owners 24/7.',
      image: 'https://images.unsplash.com/photo-1649172000612-6aa53867391d',
      tags: ['NLP', 'Machine Learning', 'Chat Interface'],
      gradient: 'from-[#4F46E5] to-[#7C3AED]'
    },
    {
      title: 'Veterinary Advisory System',
      description: 'Comprehensive platform connecting pet owners with veterinary professionals for expert consultations and care recommendations.',
      image: '2.jpeg',
      tags: ['AI Advisory', 'Healthcare', 'Real-time'],
      //gradient: 'from-[#7C3AED] to-[#EC4899]'
    },
    {
      title: 'Smart Health Monitoring',
      description: 'IoT-enabled health monitoring solutions that track vital signs and provide early detection of health issues in animals.',
      image: 'https://images.pexels.com/photos/36101262/pexels-photo-36101262.jpeg',
      tags: ['IoT', 'Predictive Analytics', 'Health Tech'],
      gradient: 'from-[#EC4899] to-[#22C55E]'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Timeline Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Professional <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">Journey</span>
          </h2>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <Card className="bg-background/50 backdrop-blur-sm border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#EC4899] flex items-center justify-center shadow-lg">
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h3 className="text-2xl font-bold text-foreground">{item.role}</h3>
                          <span className="text-sm text-foreground/60 font-semibold mt-1 md:mt-0">{item.period}</span>
                        </div>
                        <p className="text-[#22C55E] font-semibold mb-3">{item.company}</p>
                        <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#22C55E] mr-2">•</span>
                              <span className="text-foreground/80">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-background/50 backdrop-blur-sm border-foreground/10 hover:border-foreground/30 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-foreground/10 text-foreground/80 hover:bg-foreground/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
