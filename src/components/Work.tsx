import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Agentic Cloud FinOps Analyst',
    description:
      'Fullstack FinOps assistant with Claude Sonnet 4.5 for agentic tool-calling over SSE. Features a TypeScript MCP server with 10+ tools for cross-cloud cost analysis (AWS/Azure/GCP), RSA-OAEP encrypted credentials, and real-time cost visualizations.',
    tags: ['TypeScript', 'MCP', 'Claude Sonnet', 'Next.js', 'PostgreSQL', 'Fastify'],
    github: 'https://github.com/mihirkadam19/finops-web',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    title: 'Multi-Agent Document Processing SaaS',
    description:
      'Enterprise-grade document processing platform with 6+ LangGraph agents, GPT-4.1 on Azure AI Foundry, and a document verification agent achieving 96% accuracy. Reduced DB update times from 25+ minutes to ~60 seconds via MCP tools.',
    tags: ['LangGraph', 'GPT-4.1', 'Azure', 'MCP', 'REST APIs', 'Python'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    title: 'Multi-Agent AI System (B2B MVP)',
    description:
      'Seven-agent AI system built with LangGraph and Claude 3.7 Sonnet. Includes a RAG pipeline ingesting 1.5M+ recipe documents via Pinecone with 92% retrieval precision. Secured $200k in pre-seed funding.',
    tags: ['LangGraph', 'Claude 3.7', 'Pinecone', 'RAG', 'Kubernetes', 'LangSmith'],
    image: 'https://images.pexels.com/photos/8849282/pexels-photo-8849282.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Image Health Risk Scanner',
    description:
      'Serverless image scanning module using Claude 3.5 Sonnet, AWS Lambda, and S3. Achieves 94% accuracy in identifying health risks and allergens with sub-25s latency, integrated into a multi-agent pipeline.',
    tags: ['Claude 3.5', 'AWS Lambda', 'AWS S3', 'API Gateway', 'Python'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'FinOps Cost Observability Platform',
    description:
      'Cost observability platform with 15+ dashboards importing from BigQuery, QuickSight, and Azure Data Lake using Flask REST APIs. Drove up to 25% infrastructure cost savings for enterprise clients.',
    tags: ['Flask', 'BigQuery', 'Azure Data Lake', 'QuickSight', 'Python', 'Docker'],
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Sales Lead & CRM Platform',
    description:
      'End-to-end CRM platform built with Django, React, and MySQL, handling 10K+ daily transactions. Optimized API response times by 40% via N+1 fixes and automated client email notifications via AWS Lambda/SES.',
    tags: ['Django', 'React', 'MySQL', 'AWS EC2', 'AWS Lambda', 'SES'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
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

        {/* Featured projects */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
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
