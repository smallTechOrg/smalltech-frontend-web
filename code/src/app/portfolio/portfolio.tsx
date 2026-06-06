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
  { name: "Baamboojah", logo: "/baamboojah-logo.svg", url: "https://baamboojah.com", showName: true,  logoW: 44,  logoH: 44  },
  { name: "UP Police",   logo: "/up police.png",        url: "https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl", showName: true,  logoW: 44,  logoH: 44  },
  { name: "Canvs",       logo: "/canvs.jpeg",           url: "", showName: true,  logoW: 44,  logoH: 44  },
  { name: "Swiggy",      logo: "/swiggy.png",           url: "", showName: true, logoW: 44, logoH: 44  },
  { name: "MediBuddy",   logo: "/medibuddy.png",        url: "", showName: true, logoW: 44, logoH: 44  },
  { name: "Super Procure", logo: "/super procure.png",  url: "", showName: false, logoW: 140, logoH: 50  },
  { name: "Loblaws",     logo: "/loblaws.png",          url: "", showName: false, logoW: 140, logoH: 50  },
];

type Client = typeof clients[number];

function ClientLogo({ client, small = false }: { client: Client; small?: boolean }) {
  const w = small ? Math.round(client.logoW * 0.75) : client.logoW;
  const h = small ? Math.round(client.logoH * 0.75) : client.logoH;
  return (
    <button
      onClick={() => client.url && window.open(client.url, "_blank")}
      className={`flex flex-row items-center gap-3 rounded-[20px] bg-transparent px-4 py-3 mx-3 shrink-0 border-0 ${client.url ? "cursor-pointer" : "cursor-default"}`}
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={w}
        height={h}
        className="object-contain shrink-0"
        style={{ width: w, height: h }}
        loading="eager"
      />
      {client.showName && (
        <span className="text-xs font-[600] tracking-wide text-expresso whitespace-nowrap">
          {client.name}
        </span>
      )}
    </button>
  );
}

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

      {/* Brands */}
      <div className="mt-10">
        <h2 className="text-expresso font-[500]">Partner Clients</h2>
        <p className="text-liver-brown font-[300] mt-1 mb-8">
          Brands our team has worked with.
        </p>

        {/* Desktop: single row */}
        <div className="hidden md:block relative overflow-hidden h-[90px]">
          <div className="absolute flex animate-marquee top-0 left-0" style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}>
            {Array.from({ length: 10 }, () => clients).flat().map((client, i) => (
              <ClientLogo key={i} client={client} />
            ))}
          </div>
        </div>

        {/* Mobile: two rows */}
        <div className="md:hidden flex flex-col gap-3">
          {[clients.filter((_, i) => i % 2 === 0), clients.filter((_, i) => i % 2 !== 0)].map((row, rowIdx) => (
            <div key={rowIdx} className="relative overflow-hidden h-[72px]">
              <div
                className={`absolute flex top-0 left-0 ${rowIdx === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
                style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}
              >
                {Array.from({ length: 10 }, () => row).flat().map((client, i) => (
                  <ClientLogo key={i} client={client} small />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
