import Image from "next/image";
import React from "react";

export const who_is_this_for = [
  {
    icon: "/emoji.png",
    width: 76,
    height: 76,
    title: "If you've ever wondered who you look like",
    description:
      "This is your app. One upload could turn into your weirdest discovery of the week.",
  },
  {
    icon: "/people-say-icon.png",
    width: 76,
    height: 76,
    title: "If people say you remind them of someone",
    description:
      "Now you can check properly, without being matched to a random celebrity.",
  },
  {
    icon: "/mobile.png",
    width: 76,
    height: 76,
    title: "If your friends love weird internet finds",
    description: "They'll want to try it after you. Send them the results.",
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="relative pt-20 lg:py-20 padding-x">
      <div
        id="who-is-this-for"
        className="w-full flex flex-col items-center gap-4 text-center relative z-20"
      >
        <div className="">
          <span className="font-semibold uppercase text-xs px-4 py-2 shadow-lg glass-card rounded-xl text-[#5E51C9]">
            WHO IS THIS FOR
          </span>
        </div>
        <h2 className="text-4xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          You don't need a reason.{" "}
          <span className="text-[#5E51C9]">Just curiosity</span>
        </h2>
      </div>

      <div className="w-full max-w-[1104px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 relative z-20">
        {who_is_this_for.map((wh) => {
          return (
            <div
              className="w-full glass-card pruple-shadow p-10 flex flex-col items-center justify-center text-center gap-3 rounded-[32px] hover:-translate-y-3 transition-all duration-300"
              key={wh.title}
            >
              <Image
                src={wh.icon}
                width={wh.width}
                height={wh.height}
                alt={wh.title}
                className="object-contain"
              />
              <h3 className="font-bold leading-[1.2]">{wh.title}</h3>
              <p className="text-sm text-[#888888]">{wh.description}</p>
            </div>
          );
        })}
      </div>

      <div className="w-[600px] h-[600px] rounded-full bg-blue-500 absolute right-[-10%] -top-20 z-0 blur-[300px] pointer-events-none opacity-70" />
    </section>
  );
};

export default WhoIsThisFor;
