import { motion } from "motion/react";
import { Apple, Play } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg"></div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to find your match?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Download the app today and start meeting amazing people near you.
            Create your account for free.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={"/contact"}
              className="bg-white text-[#5E51C9] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl flex items-center justify-center gap-2"
            >
              {/* <Apple className="w-5 h-5" /> */}
              Contact Support
            </Link>
            {/* <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Google Play
            </button> */}
          </div>

          <p className="mt-6 text-sm text-indigo-200">
            Available on iOS and Android. Free to download.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
