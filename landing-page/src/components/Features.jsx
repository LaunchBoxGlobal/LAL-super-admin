import { motion } from "motion/react";
import { Shield, Sliders, UserPlus, Star, Lock, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Smart Matching",
      description:
        "Our advanced AI algorithm finds profiles that truly align with your interests, values, and lifestyle.",
    },
    {
      icon: <Lock className="w-6 h-6 text-white" />,
      title: "Privacy Control",
      description:
        "You're in charge. Control who sees your profile, hide your age, or browse in incognito mode.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Secure Chat",
      description:
        "End-to-end encrypted messaging ensures your conversations stay private and secure.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-white" />,
      title: "Profile Personalization",
      description:
        "Express your true self with prompts, voice notes, and rich media galleries.",
    },
    {
      icon: <UserPlus className="w-6 h-6 text-white" />,
      title: "Easy Signup",
      description:
        "Get started in seconds. Quick verification keeps our community safe and authentic.",
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Premium Perks",
      description:
        "See who likes you, send super likes, and undo accidental left swipes with Spark Premium.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="gradient-text">find love</span>
          </h2>
          <p className="text-lg text-gray-600">
            We've built the most comprehensive set of features to make your
            dating journey safe, fun, and successful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
