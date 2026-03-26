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

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#5E51C9] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 -right-20 w-72 h-72 bg-[#408EE8] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Find the connection you've been{" "}
              <span className="gradient-text">looking for.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join millions of singles finding genuine connections, meaningful
              relationships, and true love on Spark. Your perfect match is just
              a swipe away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                <Apple className="w-5 h-5" />
                <span>App Store</span>
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5" />
                <span>Google Play</span>
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                  />
                ))}
              </div>
              <p>
                Over <span className="font-bold text-gray-900">2M+</span> happy
                users
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="App Interface"
                className="w-full h-full object-cover opacity-80"
              />

              {/* UI Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>

              <div className="absolute bottom-8 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  Sarah, 26{" "}
                  <CheckCircle2 className="w-5 h-5 text-blue-400 fill-white" />
                </h3>
                <p className="text-sm text-gray-200 mb-4">
                  Photographer & Coffee Enthusiast ☕️
                </p>
                <div className="flex justify-between items-center gap-4">
                  <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
                    <X className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                    <Heart className="w-8 h-8 text-white fill-current" />
                  </button>
                  <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-4 sm:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">New Message</p>
                <p className="text-sm font-bold text-gray-900">
                  "Hey! I love coffee too!"
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-40 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Heart className="w-5 h-5 text-pink-600 fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  It's a Match!
                </p>
                <p className="text-sm font-bold text-gray-900">
                  You and Alex liked each other
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
