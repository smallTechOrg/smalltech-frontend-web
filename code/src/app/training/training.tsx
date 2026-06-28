import Image from "next/image";
import { Button } from "../components/common/button";
import { trainingTracks, readingList } from "./constants";

export default function Training() {
  return (
    <div className="px-[3%] pt-3 md:min-h-screen flex flex-col justify-center py-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <span className="inline-block bg-almond-silk text-expresso text-xs font-[600] tracking-wide px-3 py-1 rounded-full mb-3">
            New · AI Training
          </span>
          <h1>Teach your team to build with AI</h1>
        </div>
        <h3 className="md:max-w-sm font-[300]">
          Practitioner-led programs — from AI literacy to shipping agentic systems
          with Claude Code.
        </h3>
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[1fr] gap-4">
        {/* FEATURE TILE */}
        <div className="md:col-span-2 md:row-span-2 rounded-[24px] p-7 flex flex-col justify-between bg-[linear-gradient(150deg,#5A2A27_0%,#473733_100%)] shadow-[0_3px_20px_0_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-almond-silk text-xs font-[600] tracking-[2px] uppercase mb-3">
              Flagship Program
            </p>
            <h2 className="text-seashell-pink font-[600] mb-3">
              Agentic AI &amp; Claude Code
            </h2>
            <p className="text-cream font-[300] mb-5">
              A hands-on, build-first program led by the engineers behind our own AI
              agents. Go from prompting to orchestrating multi-agent systems that ship
              real work.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Tool use & MCP", "RAG", "Claude Code", "Multi-agent", "Evals"].map((t) => (
                <span
                  key={t}
                  className="text-cream text-xs font-[400] border border-cream/30 rounded-full px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 flex">
            <Button
              text="Book a workshop"
              onClick={() => window.open("mailto:contact@smalltech.in?subject=AI%20Training", "_blank")}
            />
          </div>
        </div>

        {/* TRACK TILES */}
        {trainingTracks.map((track) => (
          <div
            key={track.title}
            className="rounded-[24px] p-6 bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)] shadow-[0_3px_20px_0_rgba(0,0,0,0.15)] flex flex-col"
          >
            <span className="text-redwood text-[11px] font-[600] tracking-[1.5px] uppercase mb-2">
              {track.level}
            </span>
            <h3 className="text-expresso font-[500] leading-tight mb-2">{track.title}</h3>
            <p className="text-liver-brown text-sm font-[300] mb-3">{track.blurb}</p>
            <ul className="mt-auto space-y-1">
              {track.points.map((p) => (
                <li key={p} className="text-liver-brown text-sm font-[300] flex gap-2">
                  <span className="text-redwood font-[600]">›</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* READING LIST TILE */}
        <div className="md:col-span-2 rounded-[24px] p-6 bg-rose/15 border border-rose/30 flex flex-col md:flex-row md:items-center gap-5">
          <Image
            src="/workshop.svg"
            alt="workshop"
            width={70}
            height={70}
            className="object-contain opacity-80 shrink-0"
          />
          <div>
            <h3 className="text-expresso font-[500] mb-2">Built on the canon</h3>
            <p className="text-liver-brown text-sm font-[300] mb-2">
              Our curriculum draws on the foundational texts in agentic AI:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {readingList.map((b) => (
                <li key={b} className="text-liver-brown text-xs font-[300] flex gap-2">
                  <span className="text-redwood">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
