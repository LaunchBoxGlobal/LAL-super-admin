import Image from "next/image";
import { motion } from "motion/react";

export default function FloatingCard({
  src,
  name,
  role,
  match,
  className,
  delay = 0,
  duration,
  rotate = 0,
}) {
  return (
    <motion.div
      className={`glass-card p-2.5 pr-3 rounded-[30px] flex items-center gap-3 w-max ${className}`}
      initial={{
        opacity: 1,
        scale: 1,
        rotate,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -25, 0],
        rotate,
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay, type: "spring", stiffness: 100 },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div className="relative">
        <Image
          src={src}
          alt={name}
          width={40}
          height={40}
          className="w-14 h-14 rounded-full object-cover bg-transparent"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-1 right-1.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-slate-800 leading-tight">
          {name}
        </span>
        <span className="text-[10px] font-medium text-slate-500">{role}</span>
      </div>
      <div className="ml-2 min-w-10 px-2 py-1.5 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-indigo-500/20">
        {match}
      </div>
    </motion.div>
  );
}
