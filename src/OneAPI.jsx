import { Swiper, SwiperSlide } from "swiper/react";
import {
  LoopedSquare,
  Google,
  Meta,
  Chatgpt,
  Arrow,
  Arrow2,
  Amazon,
  Github,
  Triangle,
  N,
  Doc,
  User
} from "./Icon";
import "swiper/css";

import { Swipercard } from "./Common/Helper";

export const OneAPI = () => {
  return (
    <section className="bg-black px-3 py-4">
      <div className=" flex flex-col md:flex-row items-center gap-3  max-w-[1216px] justify-between m-auto">
        <div className="group  relative w-full md:max-w-[289px] border-t-3 border-white/20 rounded-2xl pt-4 bg-black">
          <div className="z-3 bg-gradient-to-b from-transparent to-black h-full w-full absolute top-0"></div>
          <Swiper spaceBetween={30} slidesPerView={1.5} loop={true}>
            {Swipercard.map((obj, index) => (
              <SwiperSlide key={index}>
                <div className="group-hover:border-white/50 max-w-[192px] w-full bg-black p-[16px] rounded-2xl border-2 border-white/20 text-white/40 shadow-md">
                  <p className=" font-semibold">{obj.head}</p>
                  <p className=" text-sm mt-2">{obj.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="text-white px-4 relative group-hover:translate-y-[-30px] transition-all duration-300 z-4">
            <p className="text-xl mb-3 font-bold">Memory API</p>
            <p className="text-white/60 leading-5">
              50-100x in-expensive serverless RAG, vectors, files, and
              attributes. 97% Reduced hallucinations.
            </p>
          </div>
        </div>
        <div className="max-w-[907px]  w-full border-2 border-white/30 rounded-2xl">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between  py-[45px] px-[40px] lg:px-[96px] items-center">
            <div className="px-4 py-2  text-center  text-white rounded-4xl font-bold border-t-2 border-white/30">
              <p>App</p>
            </div>
            <div className="rounded-full p-4 border-t-2 border-white/30">
              <LoopedSquare />
            </div>
            <div className="flex flex-row md:flex-col gap-4">
              <div className="p-3 rounded-full border-t-2 border-white/30">
                <Chatgpt />
              </div>
              <div className="p-3 rounded-full border-t-2 border-white/30">
                <Google />
              </div>
              <div className="p-3 rounded-full border-t-2 border-white/30">
                <Meta />
              </div>
              <div className="p-3 rounded-full border-t-2 border-white/30"></div>
              <div className="p-3 rounded-full border-t-2 border-white/30"></div>
            </div>
          </div>
          <div className=" md:mt-[-130px] text-white ml-6  ">
            <p className=" text-[20px] font-bold ">
              One API for all LLMs – Unified Dev Experience
            </p>
            <p className="text-white/50 max-w-[512px] mt-4">
              Switch between 250+ LLMs with one standard API for OpenAI,
              Anthropic, Google, Mistral, Llama, Together, Fireworks.
            </p>
            <p >Learn more</p>
          </div>
        </div>
      </div>

      <div className=" flex max-w-[1216px] xl:flex-row flex-col  items-center gap-4 justify-between mt-4  m-auto ">
        <div className="max-w-[598px]  h-[500px] sm:h-[560px] lg:h-[655px] flex relative  justify-center    w-full border-t-2 rounded-3xl  border-white/30 ">
          <div className="border-dashed border-2 border-white/20  rounded-full mt-5  flex justify-center items-center  max-w-[350px] lg:max-w-[500px]  h-[340px] lg:h-[500px] w-full">
            <div className="border-dashed  border-2 border-white/20 rounded-full   flex justify-center items-center max-w-[285px] lg:max-w-[440px]  h-[280px] lg:h-[440px] w-full">
              <div className="border-dashed border-2 border-white/20 rounded-full max-w-[230px] lg:max-w-[380px] w-full h-[230px] lg:h-[380px]"></div>
            </div>
          </div>

          <p className="absolute text-[60px] lg:text-[10rem] sm:mt-0 mt-20 text-white/60 font-semibold translate-y-[50%]  ">
            PIPE
          </p>

          <div className="text-white absolute   bottom-0">
            <p className="text-[30px]  font-bold ">
              AI Pipes: Serverless AI Agents
            </p>
            <p>
              Pipes are serverless AI agents with memory and tools. Pipes are
              serverless, composable, forkable — like Docker containers or React
              components. Agentic memory and self-healing tools.
            </p>
          </div>
        </div>
        <div className=" max-w-[598px] overflow-hidden rounded-3xl border-t-2 flex flex-col gap-5  border-white/30">
          <div className="flex  max-w-[330px] sm:max-w-[370px] m-auto lg:max-w-[598px] gap-2 mt-4  ml-[-10px] ">
            <div className="border-t-1 border-white/30 lg:text-base  sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 bg-white">
              <p>Prompt Engineering</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base  sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 text-white">
              <p>Genrative</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 bg-white">
              <p>Prompt Engineering</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 text-white">
              <p>Versiioning</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 bg-white">
              <p>Prompt Engineering</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl py-1 px-[4px] text-center lg:px-3 lg:py-1 text-white">
              <p>Chats</p>
            </div>
          </div>
          <div className="flex  max-w-[330px]  sm:max-w-[370px] m-auto lg:max-w-[598px] gap-2 ml-[-50px]">
            <div className="border-t-1 border-white/30 lg:text-base text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 bg-white">
              <p>Tools</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 text-white">
              <p>Prompt Engineering</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 bg-white">
              <p>Prompt Engineering</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 text-white">
              <p>Message Storage</p>
            </div>
            <div className="border-t-1 border-white/30lg:text-base  sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 bg-white">
              <p>Moderation</p>
            </div>
            <div className="border-t-1 border-white/30lg:text-base  sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 py-1 text-white">
              <p>Prompt Engineering</p>
            </div>
          </div>
          <div className="flex  max-w-[330px] w-full  sm:max-w-[370px]   m-auto lg:max-w-[598px]  gap-2 ml-[-30px] ">
            <div className="border-t-1 border-white/30 lg:text-base text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 lg:py-1 bg-white">
              <p>Streaming</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 lg:py-1 text-white">
              <p>Fork</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 lg:py-1 bg-white">
              <p>JSON Modes</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 lg:py-1 text-white">
              <p>Presets</p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl px-3 lg:px-3 lg:py-1 bg-white">
              <p>Usages Prediction </p>
            </div>
            <div className="border-t-1 border-white/30 lg:text-base sm:text-[14px] sm:px-2 text-[10px] min-w-fit rounded-3xl lg:3x-3 lg:py-1 text-white">
              <p>Saftey</p>
            </div>
          </div>
          <div className=" text-white text-center lg:text-left mt-[30px] px-[20px]">
            <p className="text-[20px] font-bold  mb-3">
              Build for "Any Developer"
            </p>
            <p className="text-white/40">
              Langbase is built for developers, not just AI/ML experts. Your
              current R&D team can do it. 10x innovation time-to-market.
            </p>
          </div>
          <div className=" flex flex-col items-center md:flex-row justify-between rounded-2xl text-white">
            <div>
              <div className="max-w-[289px] relative border-white/30 border-t-2 rounded-2xl ">
                <div className="max-w-fit left-[30px] top-[40px] absoulte relative py-1 px-3 flex gap-2 items-center border-t-2 border-white/30 mt-2 rounded-3xl ">
                  <img
                    className="max-w-[30px] rounded-full"
                    src="./src/assets/images/man.jpeg"
                    alt=""
                  />
                  <p className="font-bold ">AA</p>
                  <span className="absolute top-[-25px] left-[-10px] ">
                    <Arrow />
                  </span>
                </div>

                <div className="max-w-fit absolute left-[100px] top-[70px] relative py-1 px-3 flex gap-2 items-center border-t-2 border-white/30 mt-2 rounded-3xl ">
                  <img
                    className="max-w-[30px] border-2 border-yellow-500 rounded-full"
                    src="./src/assets/images/girl.jpeg"
                    alt=""
                  />
                  <p className="font-bold  ">Maedah</p>
                  <span className="absolute top-[-25px] left-[-10px] ">
                    <Arrow2 />
                  </span>
                </div>
              </div>
              <div className="max-w-[289px] mt-[80px] p-6 ">
                <p className="text-[1.1rem] font-bold">Collaborate</p>
                <p className="text-white/40 mt-4">
                  Collaborate on AI like GitHub. Your team or dev community.
                  Open pipes = truly "Open" AI.
                </p>
              </div>
            </div>
            <div className="max-w-[289px] p-[24px] w-full border-t-1 border-white/30 rounded-2xl">
              <div>
                <div className="max-w-[244px] px-3 py-2 m-auto border-t-2 border-white/30 rounded-2xl  items-center justify-center  gap-[40px] flex">
                  <Amazon />
                  <div>
                    <p>AWS Guru</p>
                    <p>Langbase Pipe</p>
                  </div>
                </div>
                <div className="max-w-[244px] mt-5 px-3 py-2 m-auto border-t-2 border-white/30 rounded-2xl  items-center justify-center  gap-[40px] flex">
                  <Amazon />
                  <div>
                    <p>Documentation Q</p>
                    <p>Langbase Pipe</p>
                  </div>
                </div>
                <div className="max-w-[244px] mt-6">
                  <p className="mb-3 font-bold ">Exlplore AI</p>
                  <p className="leading-6">
                    Fork thounsands of source AI Agents builds developer
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1216px] flex flex-col xl:flex-row items-center justify-between m-auto mt-5">
        <div className=" border-t-3 border-white/30 max-w-[598px] rounded-4xl">
          <div className="max-w-[550px] border-2 m-auto border-white/10 py-6 mx-2 mt-3  lg:m-auto text-center text-white rounded-2xl lg:mt-5 ">
            <p className="text-[2rem] lg:text-[5rem] font-bold text-center">
              Memory
            </p>
            <div className="flex max-w-fit gap-7   m-auto">
              <Github />
              <Triangle />
              <N />
              <Doc />
            </div>
          </div>
          <div className="text-white  p-6">
            <p className="text-[1.1rem] font-bold">Memory</p>
            <p className="leading-6 text-white/50">
              Serverless zero-config semantic RAG with industry leading accuracy
              in retrieval, augmentation, and semantic chunking.
            </p>
          </div>
          <div className="flex flex-col items-center lg:flex-row justify-between">
            <div className="max-w-[289px] relative border-t-2 border-white/30 p-6 rounded-3xl flex  flex-col gap-2">
              <div className="max-w-[241px] flex justify-between p-3 rounded-2xl bg-[#19191b] ">
                <div className="flex text-white items-center gap-2">
                  <Chatgpt />
                  <p className="text-[12px] font-bold">OpenAI</p>
                </div>
                <button className="border-1 rounded-2xl text-[10px] border-green-500 text-green-500 px-3 py-1 bg-green-500/20">
                  Live
                </button>
              </div>
              <div className="max-w-[241px] flex justify-between p-3 rounded-2xl bg-[#19191b] ">
                <div className="flex text-white items-center gap-2">
                  <Chatgpt />
                  <p className="text-[12px] font-bold">Together</p>
                </div>
                <p className="text-white text-[12px] font-bold">Add Key</p>
              </div>
              <div className="max-w-[241px] flex justify-between p-3 rounded-2xl bg-[#19191b]">
                <div className="flex text-white items-center gap-2">
                  <Chatgpt />
                  <p className="text-[12px]">OpenAI</p>
                </div>
                <button className="border-1 rounded-2xl text-[10px] border-green-500 text-green-500 px-3 py-1 bg-green-500/20">
                  Live
                </button>
              </div>
              <div className="text-white z-2 ">
                <p className="fint-bold">Keysets</p>
                <p className="leading-6 text-white/50">
                  Securely store any LLM keys. RBAC controlled keysets Org,
                  User, or Pipe level access.
                </p>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="max-w-[289px]  border-white relative border-t-2 border-white/30 p-6 rounded-3xl flex flex-col gap-2">
              <div className="max-w-[241px] text-center border-1 border-white/20  p-4 text-white/30 rounded-3xl bg-[#050505] ">
                <p className="text-center text-green-500">Cost Prediction</p>
                <p className="text-[14px]">
                  OpenAI: $ <span className="text-[18px]">21,739</span>/M reqs
                </p>
                <p>Open-source LLMs:$28/M </p>
              </div>
              <div className="text-white z-2 mt-15 ">
                <p className="font-bold">Smart Cost Prediction</p>
                <p className="leading-6 text-white/50">
                  Customers saw 60-90% LLM cost savings. LLMOps: run logs &
                  pipeline traces.
                </p>
              </div>
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
            </div>
          </div>
        </div>
        <div className="max-w-[598px] w-full rounded-4xl   border-t-2 border-white/30">
          <div className="text-white h-[280px] overflow-hidden rounded-4xl  relative  flex">
            <div className="max-w-[240px] h-fit z-3 absolute bg-[#1d1d20]  top-[100px] min-w-[240px] p-3 border-t-2 border-white/30 rounded-3xl ">
              <p className=" text-sm pb-2">documentation.md</p>
              <p className="p-[16px] text-white/50 text-xs bg-[#161618] rounded-2xl ">
                Welcome to [Company Name]. We are excited to have you as part of
                our team. This handbook is designed to familiarize you with our
                company policies, procedures, and benefits.
              </p>
            </div>
            <div className="max-w-[240px] absolute z-2 left-[200px] bg-[#1d1d20] top-[70px] h-fit min-w-[240px]  p-3 border-t-2 border-white/30 rounded-3xl ">
              <p className=" text-sm pb-2">employee-handbook.pdf</p>
              <p className="p-[16px] bg-[#161618] text-white/50 text-xs   rounded-2xl">
                This spreadsheet contains financial projections and details of
                companies. We ensure all data is accurate and up-to-date.
                Monthly reviews to track progress and adjust forecasts.
              </p>
            </div>
            <div className="max-w-[240px] absolute z-1 top-[20px] right-[-30px] h-fit min-w-[240px]  p-3 border-t-2 bg-[#1d1d20] border-white/30 rounded-3xl ">
              <p className=" text-sm pb-2">finance.xlsx</p>
              <p className="p-[16px] bg-[#161618] text-white/50 text-xs  rounded-2xl">
                This spreatsheet contain financial projection and deatails of
                companies .We ensure all data is accurate and up to date.
                Monthly review to track progress and adjust .
              </p>
            </div>
          </div>
          <div className="py-3 flex items-center gap-2 px-2 bg-[#202024] border-t-2 border-white/30 rounded-2xl  mt-3 mx-2 text-white">
            <span className="p-1 rounded-full bg-black">
              <User />
            </span>
            <p>How do I generate a sales report in the CRM system?</p>
          </div>
          <div className="flex gap-2 items-start border-t-2 px-3 mt-3 pt-[20px] border-white/30 rounded-3xl">
            <span className="p-2 leading-7 bg-[#202024] rounded-xl">
              <LoopedSquare />
            </span>
            <p className="text-white/50 text-[14px]">
              According to our employee handbook, employees are allowed to work
              remotely up to two days per week, provided they have manager
              approval. These remote workdays need to be scheduled in advance
              and documented in the company's HR system. During remote workdays,
              employees are expected to be available during standard working
              hours and maintain productivity levels consistent with in-office
              work. For security and compliance, it is required to use company
              equipment, such as laptops and phones, for all remote work
              activities.
            </p>
          </div>
          <div className="px-6 mt-5 ">
            <p className="text-[1.1rem] text-white font-semibold">
              RAG - Talk to your Data & Internet Access
            </p>
            <p className="text-white/50">
              Pipes x Memory x Tools. A managed search engine as an API for
              developers. Our long-term memory solution has the ability to
              acquire, process, retain, and later retrive information.
            </p>
            <p className="text-white  text-[14px]">Learn more </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneAPI;
