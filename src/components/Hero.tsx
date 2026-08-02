import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:72px_72px]" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-none">
          Mihir<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Kadam</span>
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mx-auto mb-4 leading-relaxed">
          AI Engineer &amp; Full-Stack Developer
        </p>
        <p className="text-sm text-zinc-500 max-w-lg mx-auto mb-12 leading-relaxed">
          Building intelligent systems at the intersection of AI, cloud infrastructure, and modern web.
          MS Computer Science @ NJIT &mdash; GPA 4.0.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/mihirkadam19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mihir-kadam-447a8421a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mihirkadam1234@gmail.com"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:8622792555"
            className="text-zinc-500 hover:text-white transition-colors duration-200"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
