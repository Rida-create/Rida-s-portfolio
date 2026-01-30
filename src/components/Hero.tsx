import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Zap } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/* ===================== Cursor Follower ===================== */
const CursorFollower = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  return (
    <div
      className="fixed pointer-events-none transition-all duration-200 ease-out z-50"
      style={{
        left: `${mouseX * 100}%`,
        top: `${mouseY * 100}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-cyan-400/40 animate-pulse" />
        <div className="absolute inset-0 w-12 h-12 rounded-full bg-cyan-300/30 animate-ping" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-200" />
        </div>
      </div>
    </div>
  );
};

/* ===================== Sequential Name Animation ===================== */
const SequentialName = () => {
  const [showRida, setShowRida] = useState(false);
  const [showTanveer, setShowTanveer] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRida(true), 300);
    setTimeout(() => setShowTanveer(true), 1500);
  }, []);

  return (
    <span>
      <span
        className="inline-block transition-all duration-700"
        style={{
          opacity: showRida ? 1 : 0,
          transform: showRida ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.8)',
        }}
      >
        {'Rida'.split('').map((c, i) => (
          <span
            key={`rida-${i}`}
            className="inline-block"
            style={{
              animation: showRida ? 'fadeInScale 0.5s ease-out forwards' : 'none',
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              background: 'linear-gradient(90deg, hsl(225 73% 57%), hsl(200 100% 60%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px hsl(225 73% 57% / 0.5)',
            }}
          >
            {c}
          </span>
        ))}
      </span>
      <span className="inline-block w-4" />
      <span
        className="inline-block transition-all duration-700"
        style={{
          opacity: showTanveer ? 1 : 0,
          transform: showTanveer ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.8)',
        }}
      >
        {'Tanveer'.split('').map((c, i) => (
          <span
            key={`tanveer-${i}`}
            className="inline-block"
            style={{
              animation: showTanveer ? 'fadeInScale 0.5s ease-out forwards' : 'none',
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              background: 'linear-gradient(90deg, hsl(200 100% 60%), hsl(225 73% 57%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px hsl(200 100% 60% / 0.5)',
            }}
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
};

/* ========================== HERO ========================== */
export const Hero = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
      if (iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage({ type: 'spline:mouse', mouseX: x, mouseY: y }, '*');
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showSpline = typeof window !== 'undefined' && window.innerWidth > 768;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {showSpline && (
          <div className="absolute inset-0" style={{ opacity: 0.95 }}>
            <iframe
              ref={iframeRef}
              src="https://my.spline.design/genkubgreetingrobot-vPKeHlBBNvsklwZ4VDbo2tC0/"
              className="absolute inset-0 w-full h-full pointer-events-none scale-110"
              frameBorder="0"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-blue-950/25 to-purple-950/30" />
        <CursorFollower mouseX={mousePos.x} mouseY={mousePos.y} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300">
          <Zap className="w-4 h-4" />
          Deep Learning Engineer
        </div>

        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I&apos;m <SequentialName />
        </h1>

        <p className="text-xl text-muted-foreground">AI Engineer | Computer Vision & Deep Learning</p>

        <p className="text-blue-200/80">
          “Architecting Neural Networks that Learn, Adapt & Transform Reality.”
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button variant="hero" size="xl" onClick={scrollToProjects}>
            View Projects <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* PASTE YOUR GOOGLE DRIVE LINK INSIDE THE href="" BELOW */}
          <a 
            href="https://drive.google.com/file/d/1u3HzQyZStRERiHCiFzqSp3nCwxnbEiTg/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};