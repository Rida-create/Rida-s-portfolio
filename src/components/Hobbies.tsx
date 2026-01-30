import { Palette, Sparkles } from 'lucide-react';

export const Hobbies = () => {
  return (
    <section id="hobbies" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Beyond <span className="gradient-text">Code</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Where creativity meets expression
            </p>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto mt-6" />
          </div>

          {/* Hobby Card */}
          <div className="bg-card rounded-3xl border border-border/50 shadow-card overflow-hidden card-hover">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Palette className="w-12 h-12 text-white" />
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-pink-500" />
                    <span className="text-sm font-medium text-pink-500 uppercase tracking-wide">
                      Creative Passion
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Makeup & Beauty Art
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Outside the world of algorithms and neural networks, I express my creativity 
                    through makeup artistry. It's a beautiful blend of precision, color theory, 
                    and aesthetic vision — skills that surprisingly complement my technical work 
                    in computer vision and image processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
