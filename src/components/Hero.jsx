import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <main
      id="home"
      className=" flex flex-col justify-center md:mt-15 items-center md:flex-row md:justify-around"
    >
      <div className="mt-25 md:mt-10 mb-6 text-center flex flex-col items-center md:items-start">
        <h1 className="font-Anton text-[36px] md:text-[48px] lg:text-[60px]">
          OWN the DRILL
        </h1>
        <h2 className="font-Anton text-[24px] mb-4 text-drape-black">
          Keep the VIBES
        </h2>
        <p className="text-center w-60 text-[12px] mb-6 tracking-[.07em]">
          silhouettes designed for the motion of the city — designed in lagos.
          worn everywhere.
        </p>
        <button className="text-[12px] flex items-center justify-center text-white py-2 px-4 gap-3 bg-cta rounded-lg">
          SHOP NOW
          <span className="flex items-center">
            <ArrowUpRight
              color="#ffffff"
              className="bg-drape-black rounded-full"
              strokeWidth={1.25}
            />
          </span>
        </button>
      </div>
      <div className="relative w-[256px] lg:w-[384px]">
        <img src="/images/hero.png" className="w-[256px] lg:w-[384px]" alt="" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent"></div>
      </div>
    </main>
  );
};

export default Hero;
