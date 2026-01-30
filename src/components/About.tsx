import { Brain, Eye, Cpu, Code2 } from 'lucide-react';

export const About = () => {
  const highlights = [
    { icon: Brain, label: 'Deep Learning' },
    { icon: Eye, label: 'Computer Vision' },
    { icon: Cpu, label: 'Machine Learning' },
    { icon: Code2, label: 'Model Development' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative Elements */}
                <div className="absolute inset-0 gradient-bg rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-card rounded-3xl shadow-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Brain className="w-32 h-32 text-primary mx-auto mb-6 opacity-80" />
                      <p className="text-lg font-heading font-semibold text-foreground">
                        Crafting AI Solutions
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Transforming vision into intelligence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an <span className="text-foreground font-semibold">AI Engineer</span> specializing in{' '}
                <span className="text-primary font-semibold">Computer Vision</span>,{' '}
                <span className="text-primary font-semibold">Deep Learning</span>, and{' '}
                <span className="text-primary font-semibold">Machine Learning</span>. I design intelligent 
                systems that solve real-world problems using modern AI techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have strong expertise in model development, experimentation, and technical 
                documentation using LaTeX. My passion lies in creating solutions that not only 
                work but push the boundaries of what's possible with AI.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
