import { ExternalLink, Eye, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Halal & Haram Food Detection App',
    subtitle: 'YOLO Object Detection',
    description: 'Real-time detection system using YOLO (You Only Look Once) for identifying halal and haram food items. Integrates image detection and classification for mobile and web applications.',
    features: [
      'Real-time object detection',
      'Halal/Haram classification',
      'Mobile & web integration',
      'High accuracy detection'
    ],
    icon: Scan,
    gradient: 'from-blue-500 to-indigo-600',
    githubUrl: 'https://github.com/Rida-create/Halal-and-haram-food-detection-app' // PASTE YOUR GITHUB LINK HERE
  },
  {
    id: 2,
    title: 'Gym Pose Detection System',
    subtitle: 'Human Pose Estimation',
    description: 'AI-powered system for real-time human pose detection that helps users correct their posture during workouts. Uses keypoint detection and angle analysis for precise feedback.',
    features: [
      'Real-time pose tracking',
      'Posture correction feedback',
      'Keypoint detection',
      'Angle analysis'
    ],
    icon: Eye,
    gradient: 'from-indigo-500 to-purple-600',
    githubUrl: 'https://github.com/Rida-create/Gym-Pose-Detection-System' // PASTE YOUR GITHUB LINK HERE
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my portfolio of AI-powered solutions that solve real-world problems
          </p>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden shadow-card card-hover opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <Icon className="w-16 h-16 text-white/90 relative z-10" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-sm text-white/80 font-medium">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link Button */}
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mt-4"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      View Code on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};