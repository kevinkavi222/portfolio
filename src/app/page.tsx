const proofImpactCards = [
  {
    icon: "🧪",
    title: "QA & Automation",
    items: [
      "UI automation: Selenium WebDriver (C#), Playwright, Cypress, Maestro (mobile), SpecFlow/Reqnroll, NUnit, POM, cross-browser, environment-based config.",
      "API automation: REST testing, RestSharp, custom clients, validation, auth handling, data-driven & integration tests.",
      "Test data: Excel/CSV/JSON, parameterised execution, config-driven runs, secrets handling.",
      "CI/CD: Azure DevOps & GitHub Actions — YAML pipelines, nightly regression, quality gates, test reporting, PR checks.",
      "Skills: Test framework design, test strategy, regression suites, CI/CD (Azure DevOps, GitHub Actions, quality gates, reporting, environments).",
    ],
  },
  {
    icon: "💻",
    title: "Development",
    items: [
      "Next.js (App Router), React, TypeScript, Tailwind, responsive UI, reusable components, SEO-friendly pages.",
      "API routes, REST APIs, MongoDB, Mongoose, auth & access control, payment-gated logic.",
      "Production apps: training platforms, business sites, retail — built and shipped.",
      "Languages & stack: TypeScript, Next.js, React, Tailwind CSS; this portfolio and production apps built and shipped.",
    ],
  },
  {
    icon: "📚",
    title: "QA Instructor",
    items: [
      "Manual → Automation learning paths, corporate training, 1-to-1 mentoring, bootcamp-style programs.",
      "Interview prep, portfolio building, real-world project-based learning, ISTQB preparation.",
      "Outcomes: job-ready QA Engineers, confident testers, and teams that ship with quality.",
      "Skills developed: automation foundations, frameworks, CI/CD, portfolio projects, practical testing workflows.",
    ],
  },
];

const featuredCards = [
  {
    type: "qa",
    title: "QA Frameworks",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    imageAlt: "Code editor and IDE — UI/API test frameworks built in Visual Studio, VS Code, or Rider",
    description: "Scalable UI and API automation frameworks for maintainability and fast feedback.",
    details: [
      "Shared libraries, page objects, utilities, config-driven environments",
      "CI/CD-ready execution with reporting and quality gates",
      "POM, cross-browser, SpecFlow/Reqnroll, NUnit, RestSharp, Azure DevOps, GitHub Actions",
    ],
  },
  {
    type: "development",
    title: "Development Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    imageAlt: "Web development and coding",
    description: "Production Next.js applications — training, business, and retail.",
    projects: [
      { name: "Muchuo's Centre", tag: "Training & Development Platform" },
      { name: "Najah PA Services Ltd", tag: "Bookkeeping Business Website" },
      { name: "Retail / Food Business", tag: "Product catalogue & ordering" },
    ],
  },
  {
    type: "instructor",
    title: "Instructor Success Stories",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    imageAlt: "Training and learning",
    description: "Learners and professionals who have grown into QA roles.",
    testimonials: [
      { name: "Sabrira M Fri", role: "Software Automation Engineer", linkedIn: "https://linkedin.com/in/sabrira-mbifi-fri-5420362a2" },
      { name: "Mohamed Suwar", role: "Software Automation Engineer", linkedIn: "https://linkedin.com/in/mohamed-suwar" },
      { name: "Christian Zelioh", role: "Developer", linkedIn: "https://linkedin.com/in/christian-zelioh" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-w-0 space-y-16 text-slate-800 sm:space-y-20">
      <section
        className="relative min-h-0 overflow-hidden pt-4 sm:min-h-[32rem] sm:pt-8"
        aria-labelledby="hero-heading"
      >
        <div className="relative flex min-h-0 flex-col sm:min-h-[28rem] sm:flex-row sm:items-stretch">
          <div className="relative z-10 flex min-w-0 max-w-2xl flex-col justify-center space-y-4 py-6 text-left pr-4 sm:py-8 sm:pr-12">
            <p className="text-xs font-medium tracking-wide text-emerald-700 sm:text-sm">
              QA AUTOMATION. NEXT.JS DEVELOPER. QA INSTRUCTOR
            </p>
            <h1
              id="hero-heading"
              className="text-2xl font-semibold tracking-tight text-slate-800 break-words sm:text-4xl lg:text-5xl"
            >
              Senior QA Automation Engineer · Next.js Developer · QA Instructor
            </h1>
            <p className="text-sm text-slate-700 sm:text-base">
              I build scalable UI/API automation frameworks, CI/CD quality
              pipelines, and production web applications — and I train
              individuals and teams to become job-ready QA Engineers.
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-600">
              Automation · Framework Design · CI/CD · Next.js Apps · Corporate
              Training
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="rounded-full border-2 border-slate-600 bg-slate-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100"
              >
                Hire / Collaborate
              </a>
              <a
                href="#services"
                className="rounded-full border-2 border-slate-600 px-5 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-accent hover:text-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100"
              >
                Train Your Team
              </a>
            </div>
          </div>
          <div className="relative mt-6 w-full flex-1 sm:mt-0 sm:min-h-0">
            <img
              src="/hero-photo.png"
              alt="Kevin Muchuo"
              width={400}
              height={500}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading">
        <div className="space-y-3 text-center">
          <h2
            id="about-heading"
            className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl"
          >
            About
          </h2>
          <p className="mx-auto max-w-2xl break-words px-1 text-sm text-slate-700 sm:px-0 sm:text-base">
            I&apos;m a Senior QA Automation Engineer and Software Developer with
            a passion for building reliable systems and helping people grow into
            high-performing QA Engineers. I&apos;ve designed automation
            frameworks for UI and API testing, integrated quality gates into
            CI/CD pipelines, and built real applications using Next.js and
            modern backend tools.
          </p>
          <p className="mx-auto max-w-2xl break-words px-1 text-sm text-slate-700 sm:px-0 sm:text-base">
            I also teach — from 1-to-1 mentoring to corporate upskilling — using
            a practical, job-focused approach based on real industry workflows.
          </p>
        </div>
      </section>

      <section aria-labelledby="what-i-do-heading">
        <div className="space-y-4 text-center">
          <h2
            id="what-i-do-heading"
            className="text-xl font-semibold tracking-tight text-center text-slate-800 sm:text-2xl"
          >
            What I Do
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            Three pillars: automation that scales, production-grade applications,
            and training that turns learners into confident QA Engineers.
          </p>
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
            <article className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm p-4 shadow-sm shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-emerald-500/20 sm:p-5">
              <h3 className="text-base font-semibold text-slate-800 sm:text-lg">Senior QA Automation Engineer</h3>
              <p className="text-sm text-slate-700">
                I design and deliver automation that scales — not just scripts.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-slate-700">
                <li>
                  UI automation frameworks (robust, maintainable Page Object
                  patterns)
                </li>
                <li>
                  API automation (reusable clients, validations, negative
                  testing, contracts)
                </li>
                <li>Test strategy and coverage planning</li>
                <li>Regression suites built for CI/CD and fast feedback</li>
                <li>Quality coaching and best practices across teams</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Common tools: Selenium, Playwright, NUnit, SpecFlow/Reqnroll,
                REST APIs, Postman, SQL, Azure DevOps, GitHub Actions.
              </p>
            </article>

            <article className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm p-4 shadow-sm shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-emerald-500/20 sm:p-5">
              <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                Next.js Developer
              </h3>
              <p className="text-sm text-slate-700">
                I build production-ready applications with clean architecture and
                real business logic.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-slate-700">
                <li>Next.js / React frontends with modern UI patterns</li>
                <li>Backend APIs and database integration</li>
                <li>Authentication, roles, and gated access experiences</li>
                <li>Performance, structure, and scalability built-in</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Core stack: Next.js, React, Node.js, MongoDB, REST APIs, Vercel.
              </p>
            </article>

            <article className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm p-4 shadow-sm shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-emerald-500/20 sm:p-5">
              <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                QA Teacher / Instructor
              </h3>
              <p className="text-sm text-slate-700">
                I train individuals and organisations to build confidence and
                competence in QA.
              </p>
              <ul className="mt-1 space-y-1.5 text-xs text-slate-700">
                <li>
                  1-to-1 mentoring (career switchers, juniors, testers moving
                  into automation)
                </li>
                <li>Corporate training (upskill employees into QA Engineers)</li>
                <li>
                  Automation foundations → frameworks → CI/CD → real projects
                </li>
                <li>
                  Interview prep + CV/LinkedIn positioning + practical exercises
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Training outcomes: job-ready skills, portfolio projects, real
                testing workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="impact-heading">
        <div className="space-y-4 text-center">
          <h2
            id="impact-heading"
            className="text-xl font-semibold tracking-tight text-center text-slate-800 sm:text-2xl"
          >
            Proof / Impact
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            Tools, delivery, and outcomes — grouped by QA, Development, and Instructor.
          </p>
          <div className="mx-auto grid min-w-0 max-w-5xl grid-cols-1 gap-5 text-left md:grid-cols-3">
            {proofImpactCards.map((card) => (
              <article
                key={card.title}
                className="flex min-w-0 flex-col gap-2 rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm p-4 shadow-sm shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-emerald-500/20 sm:p-5"
              >
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-800 sm:text-lg">
                  <span aria-hidden>{card.icon}</span> {card.title}
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="scroll-mt-20">
        <div className="mx-auto min-w-0 max-w-5xl">
          <h2
            id="services-heading"
            className="text-xl font-semibold tracking-tight text-center text-slate-800 sm:text-2xl"
          >
            Services
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 max-w-2xl mx-auto">
            Three ways I can help: QA training &amp; mentorship, web applications, and consultation.
          </p>
          <div className="mt-8 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex min-w-0 gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-4 transition-colors hover:border-accent hover:bg-white/80 hover:shadow-sm">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" aria-hidden />
              <div className="min-w-0">
                <p className="font-medium text-slate-800">QA Services (Training &amp; Mentorship)</p>
                <div className="mt-1.5 space-y-2 text-sm text-slate-600 leading-relaxed">
                  <p><span className="font-medium text-slate-700">For teams:</span> Automation support, test architecture, and QA coaching.</p>
                  <p><span className="font-medium text-slate-700">For companies:</span> Upskilling into QA Engineers with custom training (manual → automation → CI/CD), hands-on labs, and progress tracking.</p>
                  <p><span className="font-medium text-slate-700">For individuals:</span> Mentorship, career transition, portfolio projects, and interview prep.</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-4 transition-colors hover:border-accent hover:bg-white/80 hover:shadow-sm">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" aria-hidden />
              <div className="min-w-0">
                <p className="font-medium text-slate-800">Web Application</p>
                <div className="mt-1.5 space-y-2 text-sm text-slate-600 leading-relaxed">
                  <p><span className="font-medium text-slate-700">Sites &amp; apps:</span> Custom builds with Next.js, React, and TypeScript — training platforms, business sites, e-commerce, product catalogues.</p>
                  <p><span className="font-medium text-slate-700">APIs &amp; integration:</span> REST APIs, auth, payment logic, and integration with your systems. Built and shipped to production.</p>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-4 transition-colors hover:border-accent hover:bg-white/80 hover:shadow-sm">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600" aria-hidden />
              <div className="min-w-0">
                <p className="font-medium text-slate-800">General Consultation</p>
                <div className="mt-1.5 space-y-2 text-sm text-slate-600 leading-relaxed">
                  <p><span className="font-medium text-slate-700">Strategy:</span> Quality and delivery strategy, where to automate, and how to scale quality.</p>
                  <p><span className="font-medium text-slate-700">Tooling &amp; process:</span> Tool and stack selection for QA and development, pipeline design, and workflow review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <div className="space-y-4 text-center">
          <h2
            id="projects-heading"
            className="text-xl font-semibold tracking-tight text-center text-slate-800 sm:text-2xl"
          >
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            QA frameworks, development applications, and instructor success stories.
          </p>
          <div className="mx-auto grid min-w-0 max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {featuredCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-300 bg-white/80 backdrop-blur-sm shadow-sm shadow-emerald-500/10 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="relative flex h-40 w-full shrink-0 items-center justify-center overflow-hidden bg-slate-200">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="max-h-full max-w-full object-contain transition group-hover:scale-105"
                    width={400}
                    height={160}
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 text-left sm:p-5">
                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-700">
                    {card.description}
                  </p>
                  {"details" in card && (
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-700">
                      {(card.details as string[]).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {"projects" in card && (
                    <ul className="mt-3 space-y-2 text-xs text-slate-700">
                      {(card.projects as { name: string; tag: string }[]).map((p) => (
                        <li key={p.name}>
                          <span className="font-medium text-slate-800">{p.name}</span>
                          <span className="text-slate-600"> — {p.tag}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"testimonials" in card && (
                    <ul className="mt-3 space-y-2 text-xs text-slate-700">
                      {(card.testimonials as { name: string; role: string; linkedIn?: string }[]).map((t, i) => (
                        <li key={i}>
                          {t.linkedIn ? (
                            <a
                              href={t.linkedIn}
                              target="_blank"
                              rel="noreferrer"
                              className="font-medium text-slate-800 underline decoration-emerald-600/60 underline-offset-2 transition hover:text-emerald-700 hover:decoration-emerald-600"
                            >
                              {t.name}
                            </a>
                          ) : (
                            <span className="font-medium text-slate-800">{t.name}</span>
                          )}
                          <span className="text-slate-600"> — {t.role}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <div className="min-w-0 space-y-4 text-center">
          <h2
            id="contact-heading"
            className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl"
          >
            Contact
          </h2>
          <p className="mx-auto max-w-xl break-words px-1 text-sm text-slate-700 sm:px-0 sm:text-base">
            Let&apos;s work together. If you&apos;re hiring, building quality
            automation, or training a team into QA — I&apos;d love to help.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm sm:gap-3">
            <a
              href="https://linkedin.com/in/kevin-muchuo"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-slate-600 px-4 py-2 font-medium text-slate-800 transition-colors hover:border-accent hover:text-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100 sm:px-5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kevinkavi222"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-slate-600 px-4 py-2 font-medium text-slate-800 transition-colors hover:border-accent hover:text-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100 sm:px-5"
            >
              GitHub
            </a>
            <a
              href="mailto:muchuo2005@gmail.com"
              className="rounded-full border-2 border-slate-600 px-4 py-2 font-medium text-slate-800 transition-colors hover:border-accent hover:text-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100 sm:px-5"
            >
              Email
            </a>
            <a
              href="mailto:info@muchuosinstitute.com"
              className="rounded-full border-2 border-slate-600 px-4 py-2 font-medium text-slate-800 transition-colors hover:border-accent hover:text-accent hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-slate-100 sm:px-5"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

