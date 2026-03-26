import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  MessageCircle,
  Shield,
  Sliders,
  UserPlus,
  Star,
  Menu,
  X,
  Apple,
  Play,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create your profile",
      description:
        "Add your best photos and answer a few fun prompts to show your personality.",
    },
    {
      number: "02",
      title: "Discover matches",
      description:
        "Browse through curated profiles based on your preferences and location.",
    },
    {
      number: "03",
      title: "Make a connection",
      description:
        "Swipe right if you're interested. If they swipe right too, it's a match!",
    },
    {
      number: "04",
      title: "Start chatting",
      description:
        "Break the ice with our built-in conversation starters and plan your first date.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-wide uppercase text-[#5E51C9] mb-2">
              How It Works
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your journey to find a match starts here
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              We've made finding your perfect match as simple and intuitive as
              possible. Just follow these steps.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <span className="text-[#5E51C9] font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Couple laughing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">5.0</span>
              </div>
              <p className="text-sm text-gray-600 italic">
                "Met my fiancé on Spark within a week of downloading. Best
                decision ever!"
              </p>
              <p className="text-xs font-bold text-gray-900 mt-2">
                — Jessica M.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
