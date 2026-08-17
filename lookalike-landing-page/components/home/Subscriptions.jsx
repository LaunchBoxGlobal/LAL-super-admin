import { ArrowRight, Check } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const Subscriptions = ({ handleToggleWaitlistModal }) => {
  return (
    <section className="w-full py-20 flex flex-col items-center relative padding-x">
      <div className="w-[600px] h-[600px] rounded-full absolute right-[-25%] top-[-40%] z-0 blur-[300px] pointer-events-none bg-blue-500 opacity-50" />

      <div className="w-full flex flex-col items-center gap-4 text-center relative z-20">
        <div className="">
          <span className="font-semibold uppercase text-xs px-4 py-2 glass-card custom-shadow rounded-xl text-[#5E51C9]">
            get in free
          </span>
        </div>
        <h2 className="text-3xl lg:text-[58px] font-semibold leading-[1.2] text-center">
          3 Days Free. Then You're <br className="hidden lg:block" /> Hooked{" "}
          Brain Goes: <span className="primary-text">Anyway</span>
        </h2>
        <p className="secondary-text text-lg max-w-[700px]">
          Verify your face, get full access for 3 days unlimited matches, real
          chats, the whole rabbit hole. After that, a simple subscription keeps
          it going.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-4xl w-full justify-center items-stretch my-12">
        {/* Card 1 - Free Trial */}
        <div className="glass-card rounded-3xl p-8 pb-10 w-full lg:w-[380px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] relative flex flex-col hover:scale-[1.03] transition-all duration-300">
          <div className="glass-card max-w-max px-4 p-1 rounded-[12px] mb-2 border-2 border-white text-xs font-bold uppercase flex items-center gap-1.5 tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-green-500">3-day free trial</span>
          </div>

          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-[51px] font-black tracking-tight text-slate-900">
              $0
            </span>
            <span className="text-xs text-slate-500 font-medium">/month</span>
          </div>

          <ul className="space-y-4 flex-1">
            {[
              "3 Day Free Trial",
              "Enjoy Unlimited Swipes And Matches",
              "Chat Freely With All Your Matches",
              "Get Full LookAlike Results With Similarity Scores",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 w-full">
                <div className="mt-1 shrink-0 w-[20px] h-[20px] rounded-full glass-card flex items-center justify-center">
                  <Check
                    className="w-3.5 h-3.5 text-indigo-500"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-[13px] text-slate-700 font-medium leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2 - Premium Plan */}
        <div
          className="glass-card rounded-3xl p-8 pb-10 w-full lg:w-[380px] shadow-[0_25px_60px_-15px_rgba(79,70,229,0.15)] relative flex flex-col overflow-hidden border border-[#5E51C938] hover:scale-[1.03] transition-all duration-300"
          style={{
            border: "1px solid #5E51C938",
            borderTop: "none",
          }}
        >
          {/* Top blue border accent */}
          <div className="absolute top-0 left-[15%] right-[15%] h-1 bg-indigo-500 rounded-b-md" />

          <div className="glass-card max-w-max px-4 p-1 rounded-[12px] mb-2 border-2 border-white text-xs font-bold uppercase">
            <span className="gradient-text">Premium plan</span>
          </div>

          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-[51px] font-black tracking-tight text-slate-900">
              $3.99
            </span>
            <span className="text-xs text-slate-500 font-medium">/month</span>
          </div>

          <ul className="space-y-4 flex-1 items-start">
            {[
              "Enjoy Unlimited Swipes And Matches",
              "Experience Our Full Library",
              "Chat Freely With All Your Matches",
              "Get Full LookAlike Results With Similarity Scores",
              "Boost Your Profile Visibility And Get Noticed Faster",
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 w-full">
                <div className="w-[20px] h-[20px] rounded-full gradient-bg flex items-center justify-center shrink-0 mt-[3px]">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <span className="text-[15px] text-slate-800 font-medium leading-[1.2]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10">
        <button
          type="button"
          onClick={() => handleToggleWaitlistModal()}
          className="gradient-bg text-white h-[57px] flex items-center gap-2 justify-center px-8 lg:px-12 rounded-[16px] font-semibold shadow-lg shadow-[#5E51C961] hover:scale-[1.05] transition-all duration-300"
        >
          Join The Waitlist
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight />
          </motion.span>
        </button>
      </div>
    </section>
  );
};

export default Subscriptions;
