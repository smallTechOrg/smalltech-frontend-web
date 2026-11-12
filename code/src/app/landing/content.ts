// Landing page content. Copy lives here; layout lives in components/landingPro.tsx.
//
// Positioning: one unified "AI-Native" message across three practices —
// AI Training, AI Consulting and Applied AI — carried by a collective that
// builds and runs its own agentic software.
//
// Disclosure rules agreed with the founder:
//   · Named clients limited to UP Police and Warburg Pincus (+ its portfolio companies).
//   · No named testimonials, no per-participant pricing.
//   · Facilitator identities sit behind progressive disclosure (see `facilitators`).

/* ------------------------------------------------------------------ hero */

export const hero = {
  eyebrow: "AI-Native by practice",
  titleLead: "Changing how the world",
  titleAccent: "works.",
  body:
    "We are a collective of engineers, designers and thinkers on a mission to ensure tech enables " +
    "the democratisation of power, not the concentration of it. We aim to do this by building tools " +
    "and platforms that empower individuals and communities to work towards a more equitable future.",
};

/* ------------------------------------------------------------------- zer0 */

/** Zer0 leads the page (SMA-8). Umbrella site: zer0.smalltech.in. */
export const zer0: {
  url: string;
  label: string;
  title: string;
  body: string;
  products: { title: string; blurb: string; url?: string; cta?: string }[];
} = {
  url: "https://zer0.smalltech.in",
  label: "Zer0 by smallTech",
  title: "Operationalising agentic AI for everyone",
  body:
    "Zer0 is a multi-agent operating system for businesses. Classical workflows were built for people " +
    "passing work between multiple tools. Zer0 agents bring it all together under one control plane. " +
    "Zer0 will not replace your workers, it will help them compete with businesses ten times your size.",
  products: [
    {
      title: "sales0",
      blurb: "The AI-native CRM: finds buyer enquiries, keeps the pipeline, drafts outreach for your approval and follows up.",
      url: "https://sales0.smalltech.in",
    },
    {
      title: "workshop0",
      blurb: "A workshop assistant for facilitator-led hands-on labs: milestones, a live dashboard of the whole room and a built-in help desk.",
      url: "https://github.com/smallTechOrg/workshop0",
    },
    {
      title: "data0",
      blurb: "A data analyst agent for all of your analytics needs. Ask questions of your data in plain English and get explainable answers with inline charts.",
      url: "https://data0.smalltech.in",
    },
    {
      title: "chatbot0",
      blurb: "An AI chat agent on your website: answers visitors, captures leads and hands you the warm conversation.",
      url: "https://chatbot0.smalltech.in",
    },
    {
      title: "harness0",
      blurb: "Our Claude Code skills: give it a one-line idea and get a working, tested, phased project, spec-first.",
      url: "https://github.com/smallTechOrg/zero-shot-harness",
    },
  ],
};


export const stats: { value: string; label: string }[] = [
  { value: "30+", label: "CXOs, MDs & HODs through our training programmes" },
  { value: "10+", label: "Enterprise & government organisations" },
  { value: "7+", label: "AI agents deployed" },
];

/* --------------------------------------------------------------- practices */

export const services: { title: string; blurb: string }[] = [
  {
    title: "Applied AI",
    blurb:
      "Forward-deployed engineers who design, ship and run production agents inside your organisation, alongside your people.",
  },
  {
    title: "AI Consulting",
    blurb:
      "Where AI actually pays back: use-case discovery, adoption roadmaps, build-vs-buy, governance and the economics of running it.",
  },
  {
    title: "Technical Advisory",
    blurb:
      "Fractional CTO and senior technical leadership: architecture reviews, build-vs-buy calls, hiring and MVP delivery for startups and scaling teams.",
  },
  {
    title: "AI Training",
    blurb:
      "Hands-on upskilling for leadership and engineering teams, from GenAI foundations to multi-agent architectures.",
  },
];

/** The collective's reason for building — kept from the original site. */
export const ethos =
  "Engineers first. We design, ship and operate production agents, and help your teams do the same.";

/* ------------------------------------------------------------- ai training */

export interface Programme {
  kicker: string;
  title: string;
  format: string;
  blurb: string;
  outcomes: string[];
  flagship?: boolean;
  /** Drafted without source material — review before publishing. */
  draft?: boolean;
}

export const programmes: Programme[] = [
  {
    kicker: "Flagship · Executive",
    title: "The AI-Native Leader",
    format: "12 weeks · hybrid · cohort of 20–25",
    blurb:
      "Every leader builds and runs their own multi-agent AI chief of staff — and writes an AI " +
      "adoption roadmap for their function.",
    outcomes: [
      "A personal SuperAgent, built two weeks at a time",
      "Working prototypes to real business problems, not proposals",
      "Governance, data safety and token economics, installed as instinct",
      "A per-function AI adoption roadmap, authored by each leader",
    ],
    flagship: true,
  },
  {
    kicker: "Taster · Executive",
    title: "The Executive AI Masterclass",
    format: "120 minutes · on site",
    blurb:
      "The room picks an agent; we specify and build it live while covering the tools your leaders " +
      "already have licences for.",
    outcomes: [
      "Copilot vs Claude vs Gemini vs ChatGPT, compared on identical work",
      "An executive prompt library, reusable on Monday",
      "A data analyst on demand — spreadsheets interrogated in plain English",
      "A custom agent, specified and running inside the session",
    ],
  },
  {
    kicker: "Hands-on · Engineering",
    title: "Engineering Tracks",
    format: "Three tiers · one day to multi-week",
    blurb:
      "The builder path, run by the engineers who ship our own agents — from AI literacy to " +
      "multi-agent systems in production.",
    outcomes: [
      "AI Literacy — how LLMs work, prompting and context design",
      "Agentic AI & Claude Code — tool use, MCP, RAG, spec-driven delivery",
      "Multi-Agent in Production — orchestration, cost, observability, security",
    ],
  },
  {
    kicker: "Compact · Small business",
    title: "AI-Native in a Day",
    format: "One day · on site or remote",
    blurb:
      "The essentials of running a business AI-natively — the tools, the workflows worth " +
      "automating first, and one agent live in your stack by the end of the day.",
    outcomes: [
      "An audit of where AI actually pays back in your business",
      "Everyday workflows rebuilt around AI tools",
      "One Zer0 agent deployed and running on your real work",
    ],
    draft: true,
  },
];

/** The 12-week journey — revealed on request, not shown by default. */
export const journey: { when: string; title: string; ships: string }[] = [
  { when: "W1", title: "Foundations", ships: "Your AI, live on your phone" },
  { when: "W2–3", title: "Communication Agent", ships: "Drafts and answers in your voice" },
  { when: "W4–5", title: "Inbox Agent", ships: "Triage, priorities, drafted replies" },
  { when: "W6–7", title: "Meetings Agent", ships: "Prep, red flags, follow-ups" },
  { when: "W8–9", title: "Knowledge Agent", ships: "Your documents, answered with citations" },
  { when: "W10", title: "Hackathon", ships: "Team prototypes on real problems" },
  { when: "W11", title: "Assembly", ships: "Four agents become one SuperAgent" },
  { when: "W12", title: "Demo Day", ships: "Roadmaps presented · certification" },
];

/** What happens between sessions — revealed on request. */
export const deliveryModel: { title: string; blurb: string }[] = [
  {
    title: "Field assignments",
    blurb: "Run the sprint's agent on live work — real inbox, real meetings — and bring wins and friction back to the room.",
  },
  {
    title: "A tracked cohort",
    blurb: "Progress, usage and blockers logged in a shared tracker. We follow up before the next session; nobody arrives stuck.",
  },
  {
    title: "A direct line",
    blurb: "A support channel to the facilitation team between sessions, with office hours on request. Answers in hours.",
  },
  {
    title: "Peer review",
    blurb: "Leaders demo to each other every sprint. The cohort learns from twenty-five builds, not one.",
  },
];

/**
 * Facilitator credentials. `summary` is always visible; the named cards are
 * revealed only when a visitor opens the facilitators disclosure.
 */
export const facilitators = {
  summary:
    "Four practice heads averaging 14 years each across engineering, revenue strategy and data — " +
    "all still shipping. No career trainers in the room.",
  employers: [
    "Microsoft", "Mastercard", "Swiggy", "Loblaws Canada", "MediBuddy", "OLX", "Tesco", "Danaher",
  ],
  people: [
    {
      name: "Sai Krishna Vennamaneni",
      role: "Founder & CTO",
      bio: "15 years in distributed systems, simulation research and product engineering. Ex-Swiggy, Loblaw Digital, MediBuddy. NIT Allahabad.",
    },
    {
      name: "Jay Puranik",
      role: "Business Practice Head",
      bio: "15 years in revenue growth and strategy across Fortune 500 companies. Grew Danaher medical devices $6B → $12B across ME, LATAM, SEA and ANZ. IIM Calcutta.",
    },
    {
      name: "Rachit Verma",
      role: "Data Practice Head",
      bio: "15 years turning data into ROI. Ex-Mastercard, OLX, Tesco, dunnhumby. Two-time patent inventor across retail, banking and e-commerce.",
    },
    {
      name: "Tamoghna Biswas",
      role: "AI Practice Head",
      bio: "11 years in engineering; built Azure cloud commerce platforms at Microsoft. IIT Roorkee.",
    },
  ],
};

/* ------------------------------------------------------------- our products */

export interface Product {
  image: string;
  title: string;
  role: string;
  /** Short pill shown on the tile — the only segmentation we do. */
  tag: string;
  description: string;
  cta: string;
  url: string;
  /** Secondary link, e.g. a live demo alongside source. */
  altCta?: string;
  altUrl?: string;
  /** Optional bullets — rendered on the large flagship tile. */
  points?: string[];
  flagship?: boolean;
}

/**
 * One portfolio. We do not separate "platforms" from "agents" — everything here
 * is an AI-native product we build and run; the tag is the only distinction.
 */
export const products: Product[] = [
  {
    image: "/robot.svg",
    title: "Zer0",
    role: "A multi-agent operating system for small businesses",
    tag: "Zer0 suite",
    description:
      "Agents that run a small business's everyday workflows end to end, with a human approval gate wherever it matters and an audit trail for every step.",
    cta: "Visit Zer0",
    url: "https://zer0.smalltech.in",
    points: [
      "sales0: the AI-native CRM, from enquiry to follow-up",
      "chatbot0: an AI chat agent for your website",
      "data0: your data, asked in plain English",
    ],
    flagship: true,
  },
  {
    image: "/local.png",
    title: "#local",
    role: "Civic issues, solved together",
    tag: "Civic Tech",
    description:
      "A location-based platform where neighbours report potholes, illegal dumping, broken lights and other civic issues, and work together to get them resolved. Our longest-running product, built and run by us.",
    cta: "Visit #local",
    url: "https://local.smalltech.in",
  },
  {
    image: "/marketplace.png",
    title: "FinWerse",
    role: "MVP build & tech mentorship",
    tag: "FinTech",
    description:
      "AI-powered scores for every listed stock across four dimensions and three timeframes. We built the MVP and mentor the team. MeitY-funded.",
    cta: "Visit site",
    url: "https://finwerse.com",
  },
  {
    image: "/app.svg",
    title: "GLITCH",
    role: "AI literacy, as a game",
    tag: "AI Literacy",
    description:
      "A game for 13 to 18 year olds that teaches them to spot what AI gets wrong and make the call. Plays in the browser, no sign-up.",
    cta: "Play GLITCH",
    url: "https://smalltechorg.github.io/GLITCH/",
    altCta: "Source",
    altUrl: "https://github.com/smallTechOrg/GLITCH",
  },
  {
    image: "/draw.png",
    title: "harness0",
    role: "Installable skills for Claude & Hermes",
    tag: "Open Source",
    description:
      "Three agent skills (build, fix and sync) for Claude Code or Hermes. Give it a one-line idea and get a working, tested, phased project, spec-first with a human gate at every phase.",
    cta: "View on GitHub",
    url: "https://github.com/smallTechOrg/zero-shot-harness",
  },
];



/* ------------------------------------------------------------ tech stack */

/** AI-only stack. Third-party names are shown as text, not logos. */
export const aiStack: { group: string; items: string[] }[] = [
  {
    group: "Frontier models",
    items: ["Anthropic Claude", "OpenAI GPT", "Google Gemini", "Meta Llama", "Mistral", "DeepSeek", "Qwen"],
  },
  {
    group: "Agent frameworks",
    items: ["LangChain", "LangGraph", "LiteLLM", "Claude Agent SDK", "OpenAI Agents SDK", "CrewAI", "Pydantic AI"],
  },
  {
    group: "Agent tooling",
    items: ["Claude Code", "Model Context Protocol", "Playwright", "Browser Use", "E2B sandboxes"],
  },
  {
    group: "Inference & platforms",
    items: ["Google Vertex AI", "Amazon Bedrock", "Azure AI Foundry", "Groq", "OpenRouter", "Ollama", "vLLM", "Hugging Face"],
  },
  {
    group: "Retrieval, evals & observability",
    items: ["pgvector", "Qdrant", "LlamaIndex", "LangSmith", "Langfuse", "Ragas"],
  },
];
