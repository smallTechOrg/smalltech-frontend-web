import Box from "../components/common/box";
import Image from "next/image";
import { Button } from "../components/common/button";

const products = [
  {
    image: "/sales.svg",
    title: "Zer0",
    subtitle: "AI Agents for Small Businesses",
    description: "Embeddable Smart Agent For Your Website. Automate Customer Support, Lead Generation, and Sales with AI.",
    buttonText: "Visit Site",
    url: "https://zero.smalltech.in",
  },
  {
    image: "/app.svg",
    title: "#local",
    subtitle: "Location Based Community Platform",
    description: "It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government.",
    buttonText: "Download",
    url: "https://local.smalltech.in",
  },
];

const clients = [
  { name: "Baamboojah", logo: "/baamboojah-logo.svg", url: "https://baamboojah.com" },
  { name: "UP Police", logo: "/up police.png", url: "https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl" },
];

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3">

      <h1 className="hidden md:block">Building Smart Tools for a Smarter World</h1>
      <h1 className="md:hidden">Building Smart Tools for a Smarter World</h1>
      <h3 className="mb-4 font-[200]">Explore our portfolio of AI agents and apps.</h3>

      {/* Mobile: original tall vertical cards */}
      <div className="flex flex-col gap-6 md:hidden">
        {products.map((p) => (
          <Box
            key={p.title}
            image={p.image}
            title={p.title}
            subtitle={p.subtitle}
            description={p.description}
            buttonText={p.buttonText}
            onButtonClick={() => window.open(p.url, "_blank")}
            className="w-full"
          />
        ))}
      </div>

      {/* Desktop: compact horizontal cards, two per row */}
      <div className="hidden md:grid md:grid-cols-2 gap-5 lg:px-[5%]">
        {products.map((p) => (
          <div
            key={p.title}
            className="
              flex flex-row items-center gap-5
              rounded-[24px]
              bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]
              shadow-[0_3px_20px_0_rgba(0,0,0,0.4)]
              p-5
            "
          >
            <Image
              src={p.image}
              alt={p.title}
              width={72}
              height={72}
              className="object-contain opacity-70 shrink-0"
            />
            <div className="flex flex-col flex-1 min-w-0">
              <h3 className="font-[500] text-expresso leading-tight">{p.title}</h3>
              <p className="text-liver-brown text-sm font-[400] mt-0.5">{p.subtitle}</p>
              <p className="text-liver-brown text-sm font-[300] mt-1.5 leading-relaxed line-clamp-2">{p.description}</p>
              <div className="mt-3">
                <Button onClick={() => window.open(p.url, "_blank")} text={p.buttonText} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner Clients */}
      <div className="mt-10">
        <h2 className="text-expresso font-[500]">Partner Clients</h2>
        <p className="text-liver-brown font-[300] mt-1 mb-8">
          Organisations we have built for and collaborated with.
        </p>

        <div className="relative overflow-hidden h-[90px]">
          <div className="absolute flex animate-marquee top-0 left-0" style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}>
            {Array.from({ length: 10 }, () => clients).flat().map((client, i) => (
              <button
                key={i}
                onClick={() => window.open(client.url, "_blank")}
                className="
                  flex flex-row items-center gap-3
                  rounded-[20px]
                  bg-transparent
                  px-5 py-4 mx-4 shrink-0
                  border-0 cursor-pointer
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={44}
                  height={44}
                  className="object-contain shrink-0"
                  style={{ width: 44, height: 44 }}
                  loading="eager"
                />
                <span className="text-xs font-[600] tracking-wide text-expresso whitespace-nowrap">
                  {client.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
