import Box from "../components/common/box";
import Image from "next/image";

export default function Portfolio() {
  const clients = [
    {
      name: "Baamboojah",
      logo: "/baamboojah-logo.svg",
      tagline: "E-commerce for artisanal & handcrafted products",
      url: "https://baamboojah.com",
    },
    {
      name: "UP Police",
      logo: "/up police.png",
      tagline: "AI workshop on ethics, pipelines & law enforcement",
      url: "https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3">
      <h1 className="">Building Smart Tools for a Smarter World</h1>
      <h3 className="mb-5 font-[200]">Explore our portfolio of AI agents and apps.</h3>

      <div className="flex flex-col md:flex-row justify-between gap-[20%] md:gap-4 lg:px-[5%]">
        <Box
          image="/sales.svg"
          title="Zer0"
          subtitle="AI Agents for Small Businesses"
          description="Embeddable Smart Agent For Your Website. Automate Customer Support, Lead Generation, and Sales with AI."
          buttonText="Visit Site"
          onButtonClick={() => window.open("https://zero.smalltech.in", "_blank")}
          className="w-full max-w-[350px]"
        />
        <Box
          image="/app.svg"
          title="#local"
          subtitle="Location Based Community Platform"
          description="It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government."
          buttonText="Download"
          onButtonClick={() => window.open("https://local.smalltech.in", "_blank")}
          className="w-full max-w-[350px]"
        />
      </div>

      {/* Partner Clients */}
      <div className="mt-16 lg:px-[5%]">
        <h2 className="text-expresso font-[500]">Partner Clients</h2>
        <p className="text-liver-brown font-[300] mt-1 mb-8">
          Organisations we have built for and collaborated with.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {clients.map((client) => (
            <button
              key={client.name}
              onClick={() => window.open(client.url, "_blank")}
              className="
                flex-1
                rounded-[24px]
                bg-[linear-gradient(to_bottom,#F2E3E1_0%,#DBC2BD_100%)]
                shadow-[0_3px_20px_0_rgba(0,0,0,0.15)]
                px-8 py-6
                flex flex-row items-center gap-6 text-left
                hover:shadow-[0_6px_28px_0_rgba(90,42,39,0.25)]
                hover:scale-[1.02]
                transition-all duration-200
                cursor-pointer
                border-0
              "
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={64}
                height={64}
                className="object-contain opacity-80 shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xl font-[700] tracking-wide text-expresso">
                  {client.name}
                </span>
                <span className="text-liver-brown font-[300] text-sm mt-1">
                  {client.tagline}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
