import { Eye, Brain, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Computer Vision',
    icon: Eye,
    skills: ['Object Detection', 'Image Classification', 'Pose Estimation', 'Image Segmentation'],
  },
  {
    title: 'Deep Learning & ML',
    icon: Brain,
    skills: ['CNNs', 'Transfer Learning', 'Supervised Learning', 'Unsupervised Learning', 'Model Training & Evaluation'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Code,
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'YOLO', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Google Colab', 'Jupyter Notebook', 'Git & GitHub', 'VS Code', 'Docker'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI solutions
          </p>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mt-6" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card rounded-2xl border border-border/50 p-8 shadow-card card-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shadow-glow-sm">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
