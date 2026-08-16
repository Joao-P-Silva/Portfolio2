export default function Home() {
  const projects = [
    {
      name: "Atlas Finance",
      summary:
        "Dashboard de investimentos com previsao de caixa, alertas e visualizacao de risco em tempo real.",
      stack: "Next.js, TypeScript, Prisma",
      href: "#",
    },
    {
      name: "Sonic Store",
      summary:
        "E-commerce de audio premium com foco em conversao, checkout rapido e experiencia mobile-first.",
      stack: "Next.js, Stripe, Tailwind",
      href: "#",
    },
    {
      name: "Pulse Studio",
      summary:
        "Site institucional para agencia criativa com CMS, animacoes fluidas e SEO tecnico estruturado.",
      stack: "Next.js, Sanity, Framer Motion",
      href: "#",
    },
  ];

  const skills = [
    "Front-end Engineering",
    "Design Systems",
    "Acessibilidade",
    "Performance Web",
    "Back-end APIs",
    "Arquitetura de Produto",
  ];

  return (
    <main className="portfolio-shell">
      <section className="hero-grid mx-auto w-full max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="space-y-8 reveal-up">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--tone-primary)]">
            Portfolio 2026
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.04] text-[var(--tone-ink)] md:text-7xl">
            Eu crio produtos digitais com foco em negocio, clareza e impacto visual.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--tone-muted)] md:text-xl">
            Sou desenvolvedor full stack e transformo ideias em experiencias
            performaticas, acessiveis e memoraveis para web.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn-secondary" href="#contato">
              Falar comigo
            </a>
          </div>
        </div>

        <aside className="hero-card reveal-up-delay">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--tone-muted)]">
            Atualmente
          </p>
          <p className="mt-4 text-2xl font-semibold text-[var(--tone-ink)]">
            Disponivel para freelas e vagas remotas
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--tone-muted)]">Base</p>
              <p className="mt-1 font-medium text-[var(--tone-ink)]">Brasil</p>
            </div>
            <div>
              <p className="text-[var(--tone-muted)]">Experiencia</p>
              <p className="mt-1 font-medium text-[var(--tone-ink)]">5+ anos</p>
            </div>
            <div>
              <p className="text-[var(--tone-muted)]">Projetos</p>
              <p className="mt-1 font-medium text-[var(--tone-ink)]">40 entregues</p>
            </div>
            <div>
              <p className="text-[var(--tone-muted)]">Foco</p>
              <p className="mt-1 font-medium text-[var(--tone-ink)]">SaaS e e-commerce</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="projetos" className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold text-[var(--tone-ink)] md:text-4xl">
            Projetos em destaque
          </h2>
          <p className="text-sm uppercase tracking-[0.15em] text-[var(--tone-muted)]">
            Selecionados por resultado
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="project-card" style={{ animationDelay: `${index * 110}ms` }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--tone-primary)]">
                {project.stack}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--tone-ink)]">{project.name}</h3>
              <p className="mt-3 leading-relaxed text-[var(--tone-muted)]">{project.summary}</p>
              <a href={project.href} className="mt-7 inline-flex items-center gap-2 font-medium text-[var(--tone-primary)]">
                Ver case completo
                <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
        <div className="skill-panel">
          <h2 className="text-3xl font-semibold text-[var(--tone-ink)] md:text-4xl">
            Como eu trabalho
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[var(--tone-muted)]">
            Entrego solucoes com estrategia, prototipacao rapida e desenvolvimento
            orientado a performance para cada etapa do produto.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill} className="skill-chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-4 md:px-10">
        <div className="contact-block">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-[var(--tone-muted)]">Contato</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--tone-ink)] md:text-4xl">
              Bora construir algo forte juntos?
            </h2>
          </div>
          <a className="btn-primary" href="mailto:contato@seuportfolio.dev">
            contato@seuportfolio.dev
          </a>
        </div>
      </section>
    </main>
  );
}
