const Trust = () => {
  const items = [
    "FREE SHIPPING OVER $100",
    "SECURE CHECKOUT",
    "PREMIUM STREETWEAR",
    "7-DAY RETURNS",
    "DESIGNED IN LAGOS",
  ];

  return (
    <div className="bg-black py-4 border-y border-neutral-800 relative overflow-hidden">
      {/* Left side for white background */}
      <div className="absolute top-0 left-0 w-15 h-full z-10 bg-linear-to-r from-white/30 to-transparent pointer-events-none"></div>

      {/* Right side for white background */}
      <div className="absolute top-0 right-0 w-15 h-full z-10 bg-linear-to-l from-white/30 to-transparent pointer-events-none"></div>
      {/* This is the container that moves */}
      <div className="animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {/* We map the items twice to create the infinite loop effect */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-10">
            <span className="text-white text-[10px] font-mono tracking-[0.3em] uppercase whitespace-nowrap">
              {item}
            </span>
            {/* The separator dot */}
            <span className="ml-20 text-emerald-500 text-xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trust;
