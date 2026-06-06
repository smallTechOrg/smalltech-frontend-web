import Box from "../components/common/box";
import Image from "next/image";

export default function Portfolio() {
  const clients = [
    {
      name: "Baamboojah",
      logo: "/baamboojah-logo.svg",
      url: "https://baamboojah.com",
    },
    {
      name: "UP Police",
      logo: "/up police.png",
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
      <div className="mt-20 lg:px-[5%]">
        <h2 className="text-expresso font-[500]">Partner Clients</h2>
        <p className="text-liver-brown font-[300] mt-1 mb-10">
          Organisations we have built for and collaborated with.
        </p>

        <div className="relative overflow-hidden h-[90px]">
          <div className="absolute flex animate-marquee top-0 left-0" style={{ width: "max-content" }}>
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <button
                key={i}
                onClick={() => window.open(client.url, "_blank")}
                className="
                  flex flex-row items-center gap-3
                  rounded-[20px]
                  bg-[linear-gradient(145deg,#F7EDEB_0%,#E8D0CC_100%)]
                  shadow-[0_8px_32px_0_rgba(90,42,39,0.15),0_2px_8px_0_rgba(0,0,0,0.08)]
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
