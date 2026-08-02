import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubLinks?: { label: string; url: string }[];
  live?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'codechk — Multi-Agent CLI Code Reviewer',
    description:
      'AI-powered code review tool for the terminal. Runs dedicated security, performance, and style agents in parallel via LangGraph, converging their findings into a single structured report instead of one generalist review pass.',
    tags: ['LangGraph', 'Python', 'CLI', 'Multi-Agent', 'Claude'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-cli-codereviewer' },
    ],
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    title: 'Multi-Agent Travel Planner',
    description:
      'A LangGraph system that plans a full trip from one free-text request. Flight, hotel, and activity agents run concurrently via parallel fan-out/fan-in, with a supervisor agent that re-runs specialists on a conditional retry loop if the plan goes over budget.',
    tags: ['LangGraph', 'Claude', 'Python', 'Multi-Agent'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-travel-planner' },
    ],
    image: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    title: 'Agentic Cloud FinOps Analyst',
    description:
      'Fullstack FinOps assistant with Claude Sonnet 4.5 for agentic tool-calling over SSE, paired with a standalone MCP server exposing 10+ tools for cross-cloud cost analysis (AWS/Azure/GCP) — cost summaries, spike detection, idle-resource and over-provisioning checks, and tagging compliance. RSA-OAEP encrypted credentials and real-time cost visualizations via a Next.js frontend.',
    tags: ['TypeScript', 'MCP', 'Claude Sonnet', 'Next.js', 'PostgreSQL', 'Fastify'],
    githubLinks: [
      { label: 'Web App', url: 'https://github.com/mihirkadam19/finops-web' },
      { label: 'MCP Server', url: 'https://github.com/mihirkadam19/finops-mcp-server' },
    ],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    title: 'Federated Learning System',
    description:
      'A distributed AI/ML training system where multiple clients train locally on their own data and a server aggregates model updates, avoiding centralized data collection. Deployed with Kubernetes manifests for service exposure and autoscaling.',
    tags: ['Python', 'Federated Learning', 'Kubernetes', 'Distributed Systems'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/Federated-Learning-System' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Chat App',
    description:
      'A browser-based real-time chat application built on the MERN stack, with Gemini-powered message translation for cross-language conversations.',
    tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Gemini'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/Chat-App' },
    ],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'RAG Chatbot',
    description:
      'A retrieval-augmented Q&A chatbot for training material. Ingests PPTX/DOCX/PDF documents (including inside ZIPs), chunks and embeds them into Supabase pgvector, and answers questions using hybrid vector + full-text search retrieval with GPT-4o-mini — citing exact source documents.',
    tags: ['Next.js', 'FastAPI', 'Supabase', 'pgvector', 'OpenAI', 'RAG'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/RAG-chatbot' },
    ],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Work</SectionLabel>
        <div className="mt-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className="group relative bg-zinc-900/60 border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300">
      {/* Image */}
      <div className={`overflow-hidden ${large ? 'h-52' : 'h-40'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-white font-semibold leading-snug">{project.title}</h3>
          <div className="flex gap-2 flex-shrink-0 mt-0.5">
            {project.githubLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label={link.label}
                title={link.label}
              >
                <Github size={16} />
              </a>
            ))}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="Live site"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-zinc-500 bg-white/5 rounded-full px-2.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px bg-zinc-700" />
      <span className="text-xs text-zinc-500 uppercase tracking-widest">{children}</span>
    </div>
  );
}