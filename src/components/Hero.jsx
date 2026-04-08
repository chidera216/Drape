const Hero = () => {
  return (
    <div className=" bg-hero">
      <div className=" flex flex-col justify-center items-center  ">
        <div className="mt-25 text-center">
          <h1 className="font-Anton text-6xl">OWN the DRILL</h1>
          <h2 className="font-Anton text-4xl text-drape-black">
            Keep the VIBES
          </h2>
        </div>
        <img src="/images/hero.png" className="w-80" alt="" />;
      </div>
    </div>
  );
};

export default Hero;
