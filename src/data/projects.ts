import prepboxLanding from '../assets/projects/prepbox-landing.webp';
import interviewForYouHome from '../assets/projects/interviewforyou.png';
import grahamantraHome from '../assets/projects/grahamantra-home.webp';
import icrPipeline from '../assets/projects/incountryrepresentative.png';
import globalSathiDashboard from '../assets/projects/globalsathi.png';
import heiNexusHome from '../assets/projects/heinexus-home.webp';
import icaptainHome from '../assets/projects/icaptain-home.webp';
import type { Project, SiteLink } from '../types/project';

const icrSite: SiteLink = {
  label: 'incountryrepresentative.com',
  href: 'https://incountryrepresentative.com',
  available: true,
};

const globalSathiSite: SiteLink = {
  label: 'globalsathi.com',
  href: 'https://globalsathi.com',
  available: true,
};

export const projects: Project[] = [
  {
    slug: 'international-education',
    title: 'International Education & Representation Platforms',
    category: 'Multi-tenant SaaS',
    context: 'Independent build',
    tagline:
      'A multi-tenant platform for study-abroad agencies: a white-label CRM for every agency, and the head-office console that connects them all to foreign universities.',
    cardSummary:
      'Study-abroad agencies ran on paper forms, spreadsheets, WhatsApp and email, with no single link to universities. I built one platform where every agency runs its student pipeline, and a head office mediates with universities.',
    role: 'Sole developer: both Next.js apps, the shared NestJS API, the database and deployment',
    keyFacts: [
      { value: '2', label: 'apps on one NestJS API' },
      { value: '29', label: 'offer, COE and visa statuses tracked' },
      { value: '242', label: 'access-control and route tests' },
    ],
    highlights: [
      'Agency CRM: public inquiry forms, leads, a 4-step application wizard, documents, chat, staff and commissions',
      'Head-office console: one global university catalog, application review and agency approvals',
      'Permission-based access (4 agency roles, 9 permissions) enforced on both the API and the UI',
    ],
    stack: {
      Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Hook Form', 'Zod', 'Recharts'],
      Backend: ['NestJS', 'Node.js', 'Express.js', 'Passport JWT', 'REST API'],
      Data: ['PostgreSQL', 'Prisma'],
      'Cloud & tooling': ['Docker', 'Fly.io', 'GitHub Actions', 'Cloudflare R2', 'AWS SES', 'Turborepo', 'pnpm', 'Jest'],
    },
    sites: [icrSite, globalSathiSite],
    previews: [
      {
        src: icrPipeline,
        alt: 'In-Country Representative pipeline dashboard with filters for year, country, intake, university and stream, and stage cards from application submitted through offer, fee paid, CAS and visa granted',
        caption: 'Live product: In-Country Representative application pipeline',
        address: 'incountryrepresentative.com',
        width: 1618,
        height: 571,
      },
      {
        src: globalSathiDashboard,
        alt: 'Global Sathi platform dashboard with totals for consultancies, students and applications, a platform growth chart and an application pipeline breakdown',
        caption: 'Live product: Global Sathi platform overview',
        address: 'globalsathi.com',
        width: 1585,
        height: 721,
      },
    ],
    overview:
      'A multi-tenant SaaS platform for study-abroad agencies, run by Universal University Group. In-Country Representative is a white-label CRM where each agency, on its own subdomain, handles inquiries, leads, applications, documents, staff, commissions and processing. Global Sathi is the head-office console: it owns the university and course catalog, reviews every agency’s applications, approves agencies and talks to them through a chat thread on each application. Both run on one NestJS API and one PostgreSQL database in a single monorepo.',
    problem:
      'Each agency ran on its own mix of paper intake forms, spreadsheets, WhatsApp, email and university portals. Two agencies representing the same university kept different copies of its entry rules, eligibility was checked by hand, offer letter, COE and visa progress lived in email threads, re-uploaded documents overwrote old ones, and commission rates arrived in PDFs that went out of date. Head office could not see how many agencies, students or applications existed, or vet a new agency before it went live.',
    users: [
      'Head-office super admins who own the catalog, review applications and approve agencies',
      'Agency owners (Consultancy Admin) with full control of their agency',
      'Agency staff with scoped roles: Application Manager, Receptionist and Finance Manager',
      'Students, who fill in an agency’s public inquiry form without logging in',
    ],
    responsibilities: [
      'Designed and built the agency app, the admin app and the shared API on my own, in one pnpm and Turborepo monorepo',
      'Designed the PostgreSQL data model in Prisma: about 30 models, 20 enums and 48 migrations',
      'Built authentication, permission-based access control and strict tenant isolation',
      'Set up Docker deployments to Fly.io through GitHub Actions, with a preview environment for every pull request',
    ],
    platforms: [
      {
        name: 'In-Country Representative',
        site: icrSite,
        audience: 'Agency owners and staff',
        purpose: 'A white-label CRM where each agency runs its whole business on its own subdomain.',
        features: [
          'Email-OTP sign-up and a 4-step registration wizard, held at Pending until head office approves',
          'Public 3-step inquiry form per agency (link or office QR code) that creates leads without retyping',
          'Leads with counsellor assignment, call logs and statuses',
          'Course search filtered by a student’s GPA, gap years, work experience and English test bands',
          '4-step application wizard with server-saved drafts and 9 document categories',
          'Offer letter, COE and visa tracking, an 8-stage pipeline dashboard, staff management and commission rates',
        ],
      },
      {
        name: 'Global Sathi',
        site: globalSathiSite,
        audience: 'Head-office super admins',
        purpose: 'Platform administration for incountryrepresentative.com: the one mediator between agencies and universities.',
        features: [
          'Platform dashboard with consultancy, student and application totals',
          'Agency registration approval (single or bulk) and a separate commission-access approval',
          'Global university and course catalog with per-degree eligibility rules and course overrides',
          'Two-gate duplicate protection for universities and courses',
          'Application review: approve or reject each document, then accept, reject or reopen',
          'Commission publishing by university, level, intake and year, with CSV export',
        ],
      },
    ],
    features: [
      {
        title: 'Inquiry form to lead',
        description:
          'Each agency shares a public form by link or QR code. Students fill in personal, academic and destination details in three steps, and the result lands as a lead that staff assign, call and track.',
      },
      {
        title: 'Eligibility search',
        description:
          'One click turns a lead’s academic profile into course filters. Universities set rules per degree (GPA or percentage, gap years, qualification, work experience, English bands) and courses can override them.',
      },
      {
        title: 'Applications with full history',
        description:
          'A 4-step wizard saves drafts on the server, so work resumes on any device. Every edit after submission becomes a numbered revision with before and after values, and replaced files are archived, never deleted.',
      },
      {
        title: 'Offer letter, COE and visa tracking',
        description:
          'Once head office accepts an application, three tracks with 29 statuses open, with files, notes and history. Either side can upload first, and both see the same timeline.',
      },
      {
        title: 'Pipeline dashboard',
        description:
          'Stage tiles from submitted through offer, fee paid, CAS and visa, filterable by year, country, intake, university, stream and date. Counts come from an append-only event log dated when each stage really happened.',
      },
      {
        title: 'Chat on every application',
        description: 'One thread per application between the agency and head office, with attachments, read receipts and unread counts.',
      },
      {
        title: 'Commissions',
        description:
          'One published rate per university, level, intake and year, net or gross, with conditions. Agencies see rates only after head office approves their commission access.',
      },
      {
        title: 'Interview invites',
        description:
          'Agencies invite one student, or up to 20 at once, to a recorded mock interview on Interview For You and read the results in the CRM.',
      },
    ],
    frontend: [
      'Two separate Next.js 16 App Router bundles on React 19, so no admin code ships to agencies and no agency code ships to admin. Each has its own session cookies.',
      'A shared design system package built on base-ui and shadcn/ui, with a reusable data table, breadcrumbs, tabs and Recharts charts.',
      'A typed API client package with automatic token refresh and typed errors, used with TanStack Query v5.',
      'React Hook Form with Zod 4 for long multi-step forms, including region-specific checks such as Nepal phone numbers.',
      'Sorting, filtering and pagination run on the server, with list state kept in the URL.',
      'Images and PDFs are compressed in the browser before upload.',
    ],
    backend: [
      'NestJS 11 on Express 5, organised into modules for identity and access, agency registration, admin, leads, applications, universities, courses, commissions, staff, uploads and interviews.',
      'PostgreSQL 16 through Prisma 7: about 30 models, 20 enums and 48 migrations, with hand-written data migrations where needed.',
      'Three security layers: a Next.js route guard, a JWT guard, then role and permission guards.',
      'Tenant isolation: every agency query is scoped by agency inside the where clause, so guessing another agency’s id returns nothing. The super admin can only use dedicated /admin routes.',
      'Auth state lives in Postgres: single-use, rotating refresh tokens, hashed one-time codes, and atomic rate limits in one INSERT … ON CONFLICT … RETURNING query.',
      'bcrypt password hashing, sanitised rich text, files stored in Cloudflare R2, email through AWS SES, and zip downloads of all of an application’s documents.',
      'Docker images deployed to Fly.io by GitHub Actions (install, generate, test, build, deploy, smoke check), with a preview app for every pull request that tears itself down when the pull request closes.',
    ],
    decisions: [
      {
        challenge: 'Many agencies share one database, and none may see another’s students.',
        decision:
          'The caller’s agency is resolved on every request and applied inside each query. The super admin has no agency, so it is refused on agency routes and works only through /admin endpoints, in a separate app with separate cookies.',
      },
      {
        challenge: 'A hidden button and an open endpoint must never disagree.',
        decision:
          'One role-to-permission map in a shared config package is read by both the API guards and the UI. A route-coverage test fails any new route that does not declare a permission, alongside 121 end-to-end access tests.',
      },
      {
        challenge: 'Each agency kept its own copy of the same universities.',
        decision:
          'One global catalog owned by head office, protected by a normalized unique index on name, country and city plus a similarity warning. A hand-written migration merged existing duplicates without losing any agency’s links.',
      },
      {
        challenge: 'Dashboard numbers have to be trustworthy and answer questions later.',
        decision: 'Stages are written to an append-only event log dated when each stage happened, not when it was typed in.',
      },
      {
        challenge: 'A paid Redis service existed only to hold auth state.',
        decision:
          'Refresh tokens, one-time codes and rate limits moved into Postgres with atomic SQL, which removed the paid dependency.',
      },
    ],
    outcomes: [
      'Both platforms are live and served by one production API.',
      '121 end-to-end access-control tests plus 121 route-coverage tests that fail any unprotected route.',
      'Removed a paid Redis dependency by moving auth state into Postgres.',
      'Every pull request that touches a frontend gets its own preview deployment.',
    ],
  },
  {
    slug: 'interview-for-you',
    title: 'Interview For You',
    category: 'AI interview practice',
    context: 'Independent build',
    tagline:
      'Recorded video mock interviews for study-abroad credibility and visa checks, scored afterwards by an AI judge.',
    cardSummary:
      'Students rehearse timed, recorded credibility and visa interviews, then get a 0–100 readiness score, feedback on each skill and any contradictions with their own application.',
    role: 'Sole developer: Next.js frontend, FastAPI service, AI scoring and deployment',
    keyFacts: [
      { value: '15–18', label: 'timed, recorded questions per interview' },
      { value: '0–100', label: 'readiness score from an AI judge' },
      { value: '~460', label: 'backend tests that run offline' },
    ],
    highlights: [
      'Timed, one-take video answers with a spoken-phrase liveness check',
      'AI scoring where the model grades each skill and code computes the final score',
      'Question selection matched to each student, using vector search over a question bank',
    ],
    stack: {
      Frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zod', 'MediaRecorder', 'Web Speech API'],
      Backend: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic'],
      Data: ['PostgreSQL', 'pgvector'],
      'AI & media': ['Anthropic SDK', 'Deepgram', 'RAG'],
      'Cloud & tooling': ['Docker', 'Fly.io', 'Cloudflare R2', 'GitHub Actions', 'pytest', 'Vitest'],
    },
    sites: [{ label: 'interviewforyou.com', href: 'https://interviewforyou.com', available: true }],
    previews: [
      {
        src: interviewForYouHome,
        alt: 'Interview For You home screen with the headline “Master Your Admissions & Visa Interviews” and a button to start interview preparation',
        caption: 'Live product: student home screen',
        address: 'interviewforyou.com',
        width: 1327,
        height: 582,
      },
    ],
    overview:
      'Interview For You is a practice platform for study-abroad credibility interviews, such as the pre-CAS checks UK universities run and student-visa interviews. A student records a timed video interview built from real question patterns, and an AI judge scores it afterwards against a weighted rubric. The student gets a readiness score, feedback per skill, red flags and contradictions with their own declared facts. No AI runs while the student is answering.',
    problem:
      'Credibility interviews decide whether a student gets a CAS or a visa, yet most students practise by reading question lists. Real interviews are timed, recorded and allow one take. Counsellors can only mock-interview a few students a week, feedback like “be more confident” is not actionable, contradictions with the student’s own application go unnoticed, and agencies cannot see which students are ready.',
    users: [
      'Students who sign up on their own',
      'Students invited by their agency from In-Country Representative',
      'Admins who approve accounts and review recorded interviews',
      'Agency counsellors, who invite students and read results inside the agency CRM',
    ],
    responsibilities: [
      'Built the Next.js student app and admin console, and the FastAPI interview service with its own database',
      'Designed the recorded-interview flow, the question selection and the scoring engine',
      'Integrated speech-to-text, video storage and the AI judge behind swappable provider interfaces',
      'Connected it to the agency CRM through server-to-server invite APIs',
      'Deployed it with Docker on Fly.io',
    ],
    features: [
      {
        title: 'Two interview types',
        description:
          'University admission (up to 18 questions) and student visa (up to 15), for the UK, Australia, Canada and New Zealand. Each has its own rubric, questions and context form on the same engine.',
      },
      {
        title: 'Profile set up once',
        description:
          'A 5-step profile records offers, fees, academics, English scores, funding and any visa refusals. It is frozen onto each interview, so answers can be checked against it.',
      },
      {
        title: 'Recorded interview room',
        description:
          'Each question is read aloud during a prep countdown, then recording starts and stops on its own when the answer window ends. Usually one take per question.',
      },
      {
        title: 'Liveness check',
        description: 'Each interview opens with a random 3-word phrase the student must say on camera, so a pre-recorded video cannot pass.',
      },
      {
        title: 'Readiness report',
        description:
          'A 0–100 score and band, a 1–5 score with evidence and a tip for each skill, focus areas ranked by points to recover, red flags and contradictions. Downloadable as a PDF.',
      },
      {
        title: 'History and progress',
        description: 'Past interviews and a trend chart of the readiness score and each skill over time.',
      },
      {
        title: 'Admin console',
        description:
          'Platform stats and an interview funnel, account approval, role management, review of any recorded interview, and a switch into a student’s view.',
      },
      {
        title: 'Agency invites',
        description:
          'Agencies invite one student or up to 20 at once from In-Country Representative, and only see results for students they invited.',
      },
    ],
    frontend: [
      'Next.js App Router with React 19 and TypeScript, using TanStack Query for server state and Zod for forms.',
      'MediaRecorder captures each answer in the best format the browser supports, in 1-second chunks, so a crashed tab does not lose a whole answer.',
      'The camera and microphone are opened once and held for the whole interview, and the Web Speech API reads each question aloud.',
      'A background upload queue sends answers one at a time with progress, up to 3 retries and backoff. The interview completes only once every upload has landed.',
      'Report, history and progress pages, with a print stylesheet for PDF export.',
    ],
    backend: [
      'A separate FastAPI service in Python 3.11, with SQLAlchemy 2 async, asyncpg, Pydantic v2 and 16 Alembic migrations.',
      'Its own accounts: argon2 password hashing, HS256 JWTs, 6-digit email verification codes and an admin approval gate.',
      'Question selection with RAG: questions are embedded in pgvector and ranked by similarity to the student’s context, with a fallback to tag filtering if embeddings are down.',
      'Deepgram speech-to-text with word timings for pace and filler words. Videos are stored in Cloudflare R2 and purged after 7 days, while transcripts and scores are kept.',
      'Scoring makes one structured call to the AI judge (Kimi through the Anthropic SDK). Every AI call is logged with tokens and latency.',
      'Server-to-server /internal routes, protected by a shared secret, let the agency CRM create and invite students.',
      'Docker images on Fly.io, with PostgreSQL and pgvector on Neon.',
    ],
    decisions: [
      {
        challenge: 'AI scores must be reproducible and explainable.',
        decision:
          'The model only grades each skill from 1 to 5 with evidence. All maths (the 0–100 score, bands and focus areas) runs in code, so the same grades always give the same score.',
      },
      {
        challenge: 'A pre-recorded or stand-in video should not pass.',
        decision: 'A random 3-word phrase per session is checked against the transcript; at least 2 of the 3 words must match.',
      },
      {
        challenge: 'A crash at question 15 should not lose the interview.',
        decision:
          'Each answer uploads in the background as soon as it is submitted. If speech-to-text fails, the video is kept and the answer is marked failed, never a server error.',
      },
      {
        challenge: 'Real interviews catch answers that contradict the application.',
        decision:
          'The profile is frozen at the start, and the judge lists every answer that contradicts it. Contradictions are only requested when a profile exists, so none are invented.',
      },
      {
        challenge: 'Memorised scripts hide how a student really performs.',
        decision: '2–3 off-topic wildcard questions are scattered through each interview and are not scored against the rubric.',
      },
      {
        challenge: 'Testing against paid AI, speech and storage services is slow and costly.',
        decision: 'Every provider has a fake version chosen by config, so the whole system and about 460 tests run offline.',
      },
    ],
    outcomes: [
      'Live at interviewforyou.com.',
      'About 460 backend tests that run fully offline.',
      'The real scoring path was checked live: a full-length transcript used 3,951 of 8,000 tokens and parsed cleanly.',
      'Agencies can invite up to 20 students at once from In-Country Representative.',
    ],
  },
  {
    slug: 'prepbox',
    title: 'Prepbox',
    category: 'Exam preparation',
    context: 'Data Construct',
    tagline:
      'Timed mock tests for Nepal’s professional licence and entrance exams: engineering and medical licensing, IOE, CEE and more.',
    cardSummary:
      'Licence and entrance candidates practise under real exam conditions, with timed tests, a question navigator and performance tracking across attempts.',
    role: 'Full Stack Developer on the Data Construct team',
    keyFacts: [
      { value: 'IOE · CEE', label: 'plus engineering and medical licence exams' },
      { value: 'Timed', label: 'exams that submit automatically' },
      { value: '2', label: 'local payment gateways' },
    ],
    highlights: [
      'Timed exam engine with a question navigator and automatic submission on timeout',
      'Admin authoring for categories, subjects, tests and questions',
      'Subscription packages paid through eSewa and Khalti',
    ],
    stack: {
      Frontend: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'React Hook Form', 'Zod', 'KaTeX'],
      Backend: ['Node.js', 'Express.js', 'REST API'],
    },
    sites: [{ label: 'prepbox.net', href: 'https://prepbox.net', available: true }],
    previews: [
      {
        src: prepboxLanding,
        alt: 'Prepbox landing page with the headline “Professional Exam Preparation, Simplified”',
        caption: 'Live product: landing page',
        address: 'prepbox.net',
        width: 1440,
        height: 900,
      },
    ],
    overview:
      'Prepbox is a mock-test platform where students sit practice exams for professional licences (engineering, medical) and entrance exams such as IOE and CEE. Tests run under timed, exam-like conditions and results are kept per attempt so candidates can see how they are progressing.',
    problem:
      'Question banks alone do not prepare candidates for the time pressure and format of the real exam. Candidates need full-length, timed papers in the right category, with results they can compare over time, and the platform team needs a way to publish and price that content.',
    users: [
      'Engineering and medical licence candidates',
      'Students preparing for IOE, CEE and similar entrance exams',
      'Administrators who author tests, manage subjects and handle subscriptions and payments',
    ],
    responsibilities: [
      'Worked across the React frontend and the Express API as part of the Data Construct team',
      'Built and maintained exam-taking and admin screens',
      'Integrated API endpoints for tests, attempts, results and subscriptions',
    ],
    features: [
      {
        title: 'Categories and subjects',
        description: 'Tests are organised by exam category and subject so candidates find papers for their exact exam.',
      },
      {
        title: 'Timed exam mode',
        description:
          'A countdown, a question navigator, a full-screen mode and a low-time warning. When time runs out the test is submitted automatically.',
      },
      {
        title: 'Question types and notation',
        description: 'Multiple-choice and true/false questions, with KaTeX rendering for mathematical and scientific notation.',
      },
      {
        title: 'Attempts and results',
        description: 'Every attempt is stored with its result so candidates can review performance over time.',
      },
      {
        title: 'Subscriptions and payments',
        description: 'Test packages are unlocked through subscriptions, paid with eSewa or Khalti. A free test is available to try.',
      },
      {
        title: 'Admin workspace',
        description:
          'Create and edit tests, add questions, and manage categories, subjects, users, payments and subscriptions.',
      },
    ],
    frontend: [
      'Single-page React app built with Vite and React Router, with separate student and admin route trees.',
      'Exam screen state covering the countdown, answered and unanswered questions in the navigator, and the full-screen toggle.',
      'KaTeX for rendering equations inside questions and options.',
      'Zod-validated forms, including password rules for upper case, lower case and numbers, plus Google sign-in.',
    ],
    backend: [
      'Express REST API (api.prepbox.net) with consistent success and message response envelopes.',
      'Resources for authentication with refresh tokens, categories, subjects, tests, questions, attempts, results, subscriptions and payments.',
      'Payment flows through Nepal’s eSewa and Khalti gateways.',
    ],
    decisions: [
      {
        challenge: 'Candidates must not lose an attempt when time runs out.',
        decision:
          'The client warns when time is running low and submits automatically on expiry, and the attempt is persisted so the result is available immediately afterwards.',
      },
      {
        challenge: 'Engineering and medical questions are full of formulae.',
        decision: 'Questions and options are rendered with KaTeX instead of images, keeping them searchable, editable and sharp.',
      },
      {
        challenge: 'Charging for content in a local market.',
        decision: 'Subscriptions gate test packages and payments use the gateways candidates already have: eSewa and Khalti.',
      },
      {
        challenge: 'Publishing large volumes of exam content.',
        decision:
          'A structured authoring flow (category, subject, test, questions) in the admin workspace keeps content consistent as the catalogue grows.',
      },
    ],
    outcomes: ['Live at prepbox.net, with a free test available to new users.'],
  },
  {
    slug: 'hei-nexus',
    title: 'HEI Nexus',
    category: 'Higher-education network',
    context: 'Data Construct',
    tagline:
      'A multi-tenant platform connecting higher-education institutions across Nepal through grants, events, courses and recruitment.',
    cardSummary:
      'Institutions collaborate through funding calls, events, course offerings and hiring. HEI Nexus gives each one its own space on a shared network, with role-scoped access to every module.',
    role: 'Full stack developer: frontend architecture, search, data tables and API integration',
    keyFacts: [
      { value: '50+', label: 'institutions connected' },
      { value: '8+', label: 'modules' },
      { value: '~40%', label: 'faster to build new data views' },
    ],
    highlights: [
      'Multi-tenant system with 3-tier role-based access across 50+ institutions',
      'Advanced search and filtering over 20+ REST endpoints',
      'TanStack Table data layer and 20+ reusable components',
    ],
    stack: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'TanStack Table', 'Tailwind CSS'],
      Backend: ['Node.js', 'REST APIs'],
    },
    sites: [{ label: 'hei.dataconstruct.com.np', href: 'https://hei.dataconstruct.com.np/', available: true }],
    previews: [
      {
        src: heiNexusHome,
        alt: 'HEI Nexus home page with the headline “Welcome to HEI Nexus” and the tagline “Connecting Higher Education in Nepal”',
        caption: 'Live product: public home page',
        address: 'hei.dataconstruct.com.np',
        width: 1440,
        height: 900,
      },
    ],
    overview:
      'HEI Nexus is a digital platform connecting higher-education institutions across Nepal, where researchers, universities and students collaborate, share opportunities and find funding, courses and fellowships in one place. It is multi-tenant, with each institution operating inside a shared platform, and spans 8+ modules including Institutes, Grants, Vacancies, Events, Experts, Documents and Courses.',
    problem:
      'Institutions share opportunities and information through scattered channels. A shared platform has to serve many institutions and many roles at once, keep each tenant’s data properly scoped, and stay usable when every module is a large, filterable dataset.',
    users: [
      'Platform administrators overseeing the network',
      'Institution administrators managing their institution’s presence and content',
      'Institution members who browse and act on grants, events, courses and roles',
    ],
    responsibilities: [
      'Built frontend modules of the multi-tenant platform with 3-tier role-based access',
      'Designed and built advanced search and filtering',
      'Integrated 20+ REST endpoints with React Query',
      'Created the data-visualization layer and a library of reusable components',
      'Led performance work using incremental rendering and memoization across major modules',
    ],
    features: [
      {
        title: 'Institution and user management',
        description: 'Tenants, users and roles managed with three tiers of access.',
      },
      {
        title: 'Grants',
        description: 'Funding opportunities published and discovered across the network.',
      },
      {
        title: 'Events & Programs',
        description: 'Events and programmes shared between institutions.',
      },
      {
        title: 'Course Catalog',
        description: 'A searchable catalog of course offerings across institutions.',
      },
      {
        title: 'Recruitment',
        description: 'Recruitment workflows for institutions hiring across the network.',
      },
      {
        title: 'Search and data tables',
        description: 'Every module is backed by searchable, sortable, paginated tables.',
      },
    ],
    frontend: [
      'Debounced search inputs, dynamic query building and filter state that persists across navigation.',
      'React Query for caching and keeping data in sync across 20+ endpoints.',
      'TanStack Table with server-side pagination, sorting and column management for datasets of 1,000+ records.',
      'A library of 20+ reusable components that keeps tables, modals and tabbed layouts consistent across modules.',
      'Incremental rendering and memoization on the heaviest screens.',
    ],
    backend: [
      'Consumed 20+ REST endpoints, with role and tenant scoping enforced through the API.',
      'Three-tier role-based access control reflected in both routes and rendered actions.',
    ],
    decisions: [
      {
        challenge: 'Many tenants and many roles in one interface.',
        decision:
          'Access rules are applied at route level and again when rendering actions, so users never see controls they cannot use.',
      },
      {
        challenge: 'Large datasets in every module.',
        decision:
          'Pagination and sorting run on the server, and tables only render the current page, which keeps 1,000+ record views responsive.',
      },
      {
        challenge: 'Search should feel instant without flooding the API.',
        decision:
          'Inputs are debounced, filter state is turned into stable query keys, and React Query serves cached results for repeated queries.',
      },
      {
        challenge: 'Eight modules built by a team need to feel like one product.',
        decision:
          'A shared component and table layer, which reduced development time for new data views by about 40%.',
      },
    ],
    outcomes: [
      'Connects 50+ education institutions.',
      '8+ modules on one multi-tenant platform.',
      'About 40% less development time for new data views after introducing the shared table layer.',
    ],
  },
  {
    slug: 'graha-mantra',
    title: 'Graha Mantra',
    category: 'Consultation website',
    context: 'Independent build',
    tagline: 'A bilingual site for a Kathmandu astrology consultation centre: services, booking and a daily horoscope.',
    cardSummary:
      'A Nepali and English website where visitors browse priced consultation services, book a session and check a daily horoscope.',
    role: 'Sole developer',
    keyFacts: [
      { value: '2', label: 'languages: Nepali and English' },
      { value: 'Solo', label: 'built end to end' },
    ],
    highlights: ['Nepali and English language toggle', 'Service catalogue with consultation booking', 'Daily horoscope and reference tables'],
    stack: {
      Frontend: ['Next.js', 'Tailwind CSS'],
      Backend: ['Supabase'],
    },
    sites: [{ label: 'grahamantra.vercel.app', href: 'https://grahamantra.vercel.app', available: true }],
    repository: 'https://github.com/Babita00/Jyotish',
    previews: [
      {
        src: grahamantraHome,
        alt: 'Graha Mantra home page with a Nepali headline and a zodiac wheel illustration',
        caption: 'Live product: home page',
        address: 'grahamantra.vercel.app',
        width: 1440,
        height: 900,
      },
    ],
    overview:
      'Graha Mantra is the website for a Jyotish (Vedic astrology) consultation centre in Kathmandu. Visitors can read about services and prices, book a consultation, check a daily horoscope by zodiac sign and use reference tables, in Nepali or English.',
    problem:
      'The centre’s clients are mostly Nepali speakers who book by phone. It needed a site that reads naturally in Devanagari, explains services and prices clearly and turns visits into bookings.',
    users: ['Clients in Nepal and abroad looking for consultations', 'The centre, which receives bookings and enquiries'],
    responsibilities: ['Built the site end to end', 'Set up Supabase for accounts and data'],
    features: [
      { title: 'Bilingual content', description: 'A Nepali and English toggle across the site.' },
      { title: 'Services and booking', description: 'Priced service cards with a booking page for consultations.' },
      { title: 'Daily horoscope', description: 'A sign selector for the daily horoscope.' },
      {
        title: 'Reference tools',
        description: 'Zodiac information, name-based zodiac tables, an hora table and a list of annual festivals.',
      },
    ],
    frontend: ['Next.js with Tailwind CSS, with typography tuned for Devanagari script.'],
    backend: ['Supabase for authentication and data.'],
    decisions: [
      {
        challenge: 'Most visitors read Nepali first.',
        decision: 'Nepali is the default language, with English one tap away.',
      },
    ],
    outcomes: ['Live at grahamantra.vercel.app.'],
  },
  {
    slug: 'icaptain',
    title: 'iCaptain',
    category: 'Sports academy platform',
    context: 'Data Construct',
    tagline:
      'A marketplace for sports academies to sell more, managers to track better and parents to search easier.',
    cardSummary:
      'Academies juggle nets, coaches, equipment and players across overlapping schedules. I built iCaptain’s academy management and booking engine, which cannot double-book a slot.',
    role: 'Full stack developer: built the platform end to end, from schema design to responsive UI',
    keyFacts: [
      { value: '30+', label: 'API endpoints designed' },
      { value: '4', label: 'admin modules' },
      { value: 'End to end', label: 'database to interface' },
    ],
    highlights: [
      'Transactional booking engine that prevents double-bookings under concurrent requests',
      '30+ REST endpoints with JWT authentication and role-based access control',
      'Normalized, indexed PostgreSQL schema for academy, booking and user operations',
    ],
    stack: {
      Frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit Query', 'React Hook Form', 'Zod'],
      Backend: ['Node.js', 'Express.js', 'JWT', 'REST API'],
      Data: ['PostgreSQL'],
    },
    sites: [{ label: 'dev.icaptain.org', href: 'https://dev.icaptain.org/login', available: true }],
    previews: [
      {
        src: icaptainHome,
        alt: 'iCaptain welcome screen describing a marketplace for sports academies, beside a panel listing Marketplace, Bookings, Payment, Promotion, Travel & Bookings, Logistics, Parents and Fans',
        caption: 'Live product: welcome screen',
        address: 'dev.icaptain.org',
        width: 1440,
        height: 900,
      },
    ],
    overview:
      'iCaptain describes itself as “a powerful marketplace for sports academies to sell more, managers to track better and parents to search easier.” I built the cricket academy management side: academy and player administration, and a booking engine for sessions and facilities that accounts for staff and equipment availability and applies dynamic pricing.',
    problem:
      'An academy’s bookable time depends on several things at once: the facility, the coach and the equipment. Managed by phone and spreadsheet, slots get double-booked, availability goes stale and pricing is inconsistent. The academy needed one system of record for its operations and bookings.',
    users: [
      'Academy administrators managing players, staff, facilities and pricing',
      'Coaches and staff whose availability determines which slots can be booked',
      'Players booking sessions and facilities',
    ],
    responsibilities: [
      'Owned end-to-end development, from database schema design to responsive UI',
      'Designed the REST API (30+ endpoints) and the normalized PostgreSQL schema with indexing',
      'Implemented JWT authentication, role-based access control and transactional SQL for bookings',
      'Built the admin module and dashboard',
    ],
    features: [
      {
        title: 'Academy and player management',
        description: 'Create and manage academies, players and staff from one admin dashboard.',
      },
      {
        title: 'Time-slot generation',
        description: 'Bookable slots are generated from facility schedules, so availability is always derived rather than typed in.',
      },
      {
        title: 'Conflict-free booking',
        description:
          'Bookings check staff and equipment availability and resolve conflicts at the moment of booking, so the same slot cannot be sold twice.',
      },
      {
        title: 'Dynamic pricing',
        description: 'Prices are computed when a booking is made rather than fixed per slot.',
      },
      {
        title: 'Role-based access',
        description: 'Each role sees and can change only what it is responsible for.',
      },
      {
        title: 'Responsive admin dashboard',
        description: 'Mobile-first dashboard with dynamic data tables, modal workflows and tabbed navigation.',
      },
    ],
    frontend: [
      'Next.js 14 with React and TypeScript.',
      'Redux Toolkit Query for API caching and request de-duplication.',
      'React Hook Form with Zod for validated create and edit flows.',
      'A reusable Tailwind component layer shared across four core admin modules.',
    ],
    backend: [
      'Express.js REST API with 30+ endpoints for academies, bookings and users.',
      'Normalized PostgreSQL schema with indexes on the hot booking and availability queries.',
      'JWT authentication and role-based authorization on every protected route.',
      'Booking writes run inside database transactions.',
    ],
    decisions: [
      {
        challenge: 'Two people booking the same slot at the same moment.',
        decision:
          'Availability is re-checked and the booking is written inside a single PostgreSQL transaction, so concurrent requests for one slot cannot both succeed.',
      },
      {
        challenge: 'A slot is only free if the facility, the coach and the equipment are all free.',
        decision:
          'The slot generator and booking engine evaluate staff and equipment availability together and resolve conflicts in real time.',
      },
      {
        challenge: 'Keeping four admin modules consistent while building alone.',
        decision:
          'Shared form, table and modal components with schema-driven validation, so new modules reuse the same patterns.',
      },
    ],
    outcomes: ['30+ REST endpoints on a normalized PostgreSQL schema.', 'Four core admin modules built on one shared component layer.'],
  },
];
