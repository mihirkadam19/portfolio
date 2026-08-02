const skills = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Java', 'C/C++'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'FastAPI', 'Django', 'Flask', 'LangChain', 'LangGraph', 'Node.js'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    category: 'AI / ML',
    items: ['LLM Orchestration', 'Generative AI', 'RAG Pipelines', 'MCP', 'PyTorch', 'OpenCV', 'MLOps'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Vector DB', 'MySQL'],
  },
];

const experience = [
  {
    role: 'AI Engineer',
    company: 'FieldWorker',
    location: 'New York, NY',
    period: 'Jan 2026 – May 2026',
    highlights: [
      'Led multi-agent document processing SaaS with 6+ agents via LangGraph & GPT-4.1 on Azure AI Foundry, achieving 95%+ accuracy',
      'Built MCP wrapper tools for CRUD across 30+ internal APIs, reducing DB update times from 25+ min to ~60 sec',
      'Engineered a document verification agent achieving 96% accuracy using Azure Document Intelligence',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Alervio',
    location: 'New York, NY',
    period: 'Jan 2025 – Dec 2025',
    highlights: [
      'Built Multi-Agent AI system (7+ agents) with Claude 3.7 Sonnet, MCP, Redis & K8s; MVP secured $200k pre-seed funding',
      'Built RAG pipeline with Pinecone ingesting 1.5M+ documents, reaching 92% retrieval precision at k=5',
      'Architected image scanning module using Claude 3.5 Sonnet with sub-25s latency and 94% accuracy',
    ],
  },
  {
    role: 'Cloud Engineer',
    company: 'Pentagon System and Services',
    location: 'Mumbai, India',
    period: 'Apr 2023 – Jul 2024',
    highlights: [
      'Created GoLang CLI tool for automated file processing across 20+ servers, reducing manual effort by 70%',
      'Orchestrated FinOps cost observability platform with 15+ dashboards, driving up to 25% infrastructure savings',
      'Refactored monolith apps into microservices on Docker & K8s, boosting utilization 35% and cutting spin-ups 60–70%',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Trivia Softwares',
    location: 'Mumbai, India',
    period: 'Jan 2023 – Mar 2023',
    highlights: [
      'Built end-to-end sales lead & ticketing platform on Django/React/MySQL, handling 10K+ daily CRM transactions',
      'Cut API response times by 40% via N+1 fixes and pagination across 200K+ records',
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>About</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-16 mt-12 mb-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Turning complex systems into<br />
              <span className="text-zinc-400">elegant solutions</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I'm an AI Engineer and full-stack developer with a passion for building intelligent, scalable systems.
              Currently completing my M.S. in Computer Science at NJIT with a 4.0 GPA.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My work spans multi-agent AI systems, cloud infrastructure, RAG pipelines, and production-grade web applications.
              I thrive at the intersection of cutting-edge AI research and pragmatic engineering.
            </p>
          </div>

          <div className="space-y-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-zinc-300 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-sm text-zinc-500 uppercase tracking-widest mb-10">Experience</h3>
          <div className="space-y-0">
            {experience.map((job, i) => (
              <div key={i} className="group relative flex gap-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-white mt-1.5 transition-colors flex-shrink-0" />
                  {i < experience.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 mt-2" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h4 className="text-white font-semibold">{job.role}</h4>
                    <span className="text-zinc-400 text-sm">{job.company}</span>
                    <span className="text-zinc-600 text-xs">&middot; {job.location}</span>
                  </div>
                  <p className="text-xs text-zinc-600 mb-3">{job.period}</p>
                  <ul className="space-y-1.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-zinc-700 mt-1.5 flex-shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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
