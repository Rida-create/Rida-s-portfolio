import { FileText, CheckCircle } from 'lucide-react';

const expertiseItems = [
  'Research papers and academic publications',
  'Technical reports and documentation',
  'Professional thesis formatting',
  'Mathematical equations and formulas',
  'Scientific diagrams and figures',
  'Bibliography management',
];

export const Expertise = () => {
  return (
    <section id="expertise" className="section-padding">
      <div className="container-width">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Additional <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
          </div>

          {/* LaTeX Expertise Card */}
          <div className="bg-card rounded-3xl border border-border/50 shadow-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Visual */}
              <div className="gradient-bg p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10 text-center">
                  <FileText className="w-24 h-24 text-white mx-auto mb-6" />
                  <h3 className="font-heading text-3xl font-bold text-white mb-2">
                    LaTeX Documentation
                  </h3>
                  <p className="text-white/80 text-lg">
                    Expert-level technical writing
                  </p>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Specialized in creating professional, publication-ready documents using LaTeX. 
                  From academic papers to technical reports, I ensure precise formatting and 
                  presentation that meets the highest standards.
                </p>

                <ul className="space-y-4">
                  {expertiseItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
