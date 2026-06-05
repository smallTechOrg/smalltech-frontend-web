import Box from "../components/common/box";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden px-[3%] pt-3 ">
    
      <h1 className="">Building Smart Tools for a Smarter World</h1>
      <h3 className=" mb-5 font-[200]"> Explore our portfolio of AI agents and apps.</h3>
      <div className="flex flex-col md:flex-row justify-between gap-[20%] md:gap-4 lg:px-[5%]">
        {/* <div className="flex flex-col md:flex-row justify-between gap-8"> */}
        <Box
          image="/sales.svg"
          title="Zer0"
          subtitle="AI Agents for Small Businesses"
          description="Embeddable Smart Agent For Your Website. Automate Customer Support, Lead Generation, and Sales with AI."
          buttonText="Visit Site"
          onButtonClick={() => window.open("https://zero.smalltech.in", "_blank")}
          className="w-full max-w-[350px] 
        "
        />
        <Box
          image="/app.svg"
          title="#local"
          subtitle="Location Based Community Platform"
          description="It is the fastest way to report local potholes, illegal dumping, broken lights, and other civic issues directly to your local government. "
          buttonText="Download"
          onButtonClick={() => window.open("https://local.smalltech.in", "_blank")}
          className="w-full max-w-[350px]
        "
        />
        <Box
          image="/shop.svg"
          title="Baamboojah"
          subtitle="E-commerce for artisanal and handcrafted products"
          description="Custom designed, end to end e-commerce platform for Baamboojah, focused on selling soulful products to the world. "
          buttonText="Visit Baamboojah"
          onButtonClick={() => window.open("https://baamboojah.com", "_blank")}
          className="w-full max-w-[350px]
        "
        />
        <Box
          image="/workshop.svg"
          title="AI Workshop with UP Police"
          subtitle="To walk hand in hand with AI"
          description="Conducted a workshop to talk about AI, agents, and how it can be leveraged in their operations. It covered AI pipelines, learning calendar, and ethical considerations."
          buttonText="Learn More"
          onButtonClick={() => window.open("https://www.linkedin.com/posts/madhyamakist_what-does-real-sovereign-ai-mean-for-india-ugcPost-7462018105133940736-wDwl", "_blank")}
          className="w-full max-w-[350px]
        "
        />
      </div>
    </div>
    
  );
}
