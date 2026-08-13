import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubLinks?: { label: string; url: string }[];
  live?: string;
  image: string;
}
const projects: Project[] = [
  {
    slug: 'invoice-extraction-finetune',
    title: 'QLoRA Invoice Extraction Fine-Tune',
    description:
      'Fine-tuned Qwen2.5-3B-Instruct via QLoRA (4-bit NF4, bitsandbytes) on the SROIE receipt dataset for structured JSON field extraction (vendor, date, address, total). Trained with TRL SFTTrainer on GCP/Colab GPU compute with GCS-backed checkpoint sync for resumable runs. A custom eval harness benchmarks base vs. fine-tuned checkpoints on JSON-validity, exact-match, and per-field precision/recall/F1 — pushing JSON validity from 38% to 100% and exact-match accuracy from 1% to 60%.',
    tags: ['QLoRA', 'PEFT', 'Qwen2.5', 'TRL', 'Python', 'GCP', 'Fine-Tuning'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/fine-tuning' },
    ],
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'agentic-researcher',
    title: 'Agentic Researcher — Multi-Agent Crew with Memory',
    description:
      'A multi-agent research/analyst crew (Researcher, Critic, Writer, Supervisor) orchestrated with LangGraph, backed by working, episodic, and semantic memory layers. Postgres + pgvector store episodic/semantic memory with OpenAI embeddings, Redis handles working memory, and an Arq-based job queue decouples the API from async worker processing — all running as separate Docker containers with a GitHub Actions release pipeline to GHCR.',
    tags: ['LangGraph', 'Claude', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Multi-Agent'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-researcher' },
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'rag-chatbot',
    title: 'RAG Chatbot',
    description:
      'A retrieval-augmented Q&A chatbot for training material. Ingests PPTX/DOCX/PDF documents (including inside ZIPs), chunks and embeds them into Supabase pgvector, and answers questions using hybrid vector + full-text search retrieval with GPT-4o-mini — citing exact source documents.',
    tags: ['Next.js', 'FastAPI', 'Supabase', 'pgvector', 'OpenAI', 'RAG'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/RAG-chatbot' },
    ],
    image: 'https://images.pexels.com/photos/5009158/pexels-photo-5009158.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'codechk',
    title: 'codechk — Multi-Agent CLI Code Reviewer',
    description:
      'AI-powered code review tool for the terminal. Runs dedicated security, performance, and style agents in parallel via LangGraph, converging their findings into a single structured report instead of one generalist review pass.',
    tags: ['LangGraph', 'Python', 'CLI', 'Multi-Agent', 'Claude'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-cli-codereviewer' },
    ],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'agentic-tester',
    title: 'agentic-tester — Autonomous Multi-Language Test-Writing Agent',
    description:
      'A CLI tool that scans a codebase, plans which files need tests, and writes them via language-specific agents (Python/JS) before running the generated tests against the real local toolchain (pytest/jest). Built on a LangGraph plan-and-execute-loop and human-in-the-loop with a Critic agent that classifies each result as expected, an isolated bug, or a systemic issue — triggering a targeted replan of only the remaining tasks rather than restarting the run. Ships as standalone cross-platform binaries (PyInstaller) via an automated GitHub Actions release pipeline.',
    tags: ['LangGraph', 'Claude', 'Python', 'CLI', 'Multi-Agent', 'PyInstaller'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-tester' },
    ],
    image: 'https://images.pexels.com/photos/14553730/pexels-photo-14553730.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'finops-analyst',
    title: 'Agentic Cloud FinOps Analyst',
    description:
      'Fullstack FinOps assistant with Claude Sonnet 4.5 for agentic tool-calling over SSE, paired with a standalone MCP server exposing 10+ tools for cross-cloud cost analysis (AWS/Azure/GCP) — cost summaries, spike detection, idle-resource and over-provisioning checks, and tagging compliance. RSA-OAEP encrypted credentials and real-time cost visualizations via a Next.js frontend.',
    tags: ['TypeScript', 'MCP', 'Claude Sonnet', 'Next.js', 'PostgreSQL', 'Fastify'],
    githubLinks: [
      { label: 'Web App', url: 'https://github.com/mihirkadam19/finops-web' },
      { label: 'MCP Server', url: 'https://github.com/mihirkadam19/finops-mcp-server' },
    ],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'travel-planner',
    title: 'Multi-Agent Travel Planner',
    description:
      'A LangGraph system that plans a full trip from one free-text request. Flight, hotel, and activity agents run concurrently via parallel fan-out/fan-in, with a supervisor agent that re-runs specialists on a conditional retry loop if the plan goes over budget.',
    tags: ['LangGraph', 'Claude', 'Python', 'Multi-Agent'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/agentic-travel-planner' },
    ],
    image: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'federated-learning',
    title: 'Federated Learning System',
    description:
      'A distributed AI/ML training system where multiple clients train locally on their own data and a server aggregates model updates, avoiding centralized data collection. Deployed with Kubernetes manifests for service exposure and autoscaling.',
    tags: ['Python', 'Federated Learning', 'Kubernetes', 'Distributed Systems'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/Federated-Learning-System' },
    ],
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'chat-app',
    title: 'Chat App',
    description:
      'A browser-based real-time chat application built on the MERN stack, with Gemini-powered message translation for cross-language conversations.',
    tags: ['MERN', 'React', 'Node.js', 'MongoDB', 'Gemini'],
    githubLinks: [
      { label: 'Repository', url: 'https://github.com/mihirkadam19/Chat-App' },
    ],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  
];

export default function Work() {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const match = projects.find((p) => p.slug === hash);
      if (!match) return;

      const el = document.getElementById(`project-${match.slug}`);
      if (!el) return;

      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlighted(match.slug);
      const timeout = setTimeout(() => setHighlighted(null), 2000);
      return () => clearTimeout(timeout);
    };

    // run on mount, and if the hash changes while already on the page
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <section id="work" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Work</SectionLabel>

        {/* Projects */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} highlighted={highlighted === project.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
  highlighted = false,
}: {
  project: Project;
  large?: boolean;
  highlighted?: boolean;
}) {
  const primaryLink = project.live ?? project.githubLinks?.[0]?.url;

  return (
    <div
      id={`project-${project.slug}`}
      className={`group relative bg-zinc-900/60 border rounded-2xl overflow-hidden scroll-mt-24 transition-all duration-300 ${
        highlighted ? 'border-white/40 ring-2 ring-white/20' : 'border-white/5 hover:border-white/15'
      }`}
    >
      {/* Stretched primary link — covers the whole card, sits below the icon links */}
      {primaryLink && (
        <a
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0"
          aria-label={`Open ${project.title}`}
        />
      )}

      {/* Image */}
      <div className={`overflow-hidden ${large ? 'h-52' : 'h-40'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative p-6 pointer-events-none">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-white font-semibold leading-snug">{project.title}</h3>
          <div className="relative z-10 flex gap-2 flex-shrink-0 mt-0.5 pointer-events-auto">
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
