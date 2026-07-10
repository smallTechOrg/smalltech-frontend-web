// AI Training content — themed around Agentic AI & Claude Code.
// Source: notes "AI Learning/context.md". Edit copy freely.

export interface Track {
  level: string;
  title: string;
  blurb: string;
  points: string[];
}

export const trainingTracks: Track[] = [
  {
    level: "Foundations",
    title: "AI Literacy for Teams",
    blurb: "From zero to confident — how modern AI actually works and how to use it well, every day.",
    points: [
      "How LLMs work, in plain terms",
      "Prompting & context design",
      "Safe, effective everyday use",
    ],
  },
  {
    level: "Builder",
    title: "Agentic AI & Claude Code",
    blurb: "Build real agents that take actions — tool use, retrieval, and agentic coding with Claude Code.",
    points: [
      "Tool use, MCP & RAG patterns",
      "Agentic coding with Claude Code",
      "Evaluation & guardrails",
    ],
  },
  {
    level: "Enterprise",
    title: "Multi-Agent Systems in Production",
    blurb: "Orchestrate fleets of agents and ship them into your stack with confidence.",
    points: [
      "Multi-agent orchestration",
      "Cost, latency & observability",
      "Security & governance",
    ],
  },
];

// Curated reading the programs draw from (from notes/AI Learning).
export const readingList: string[] = [
  "Artificial Intelligence: A Modern Approach — Russell & Norvig",
  "An Introduction to MultiAgent Systems — Wooldridge",
  "AI Agents and Applications: LangChain, LangGraph & MCP — Infante",
  "Designing Multi-Agent Systems — Dibia",
  "Agentic AI Engineering — Gunjan",
  "Generative AI Design Patterns — Lakshmanan & Hapke",
];
