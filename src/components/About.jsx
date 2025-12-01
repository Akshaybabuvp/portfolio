import { Code, Server, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      id="About"
      className="text-gray-300 flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-20 px-6 md:px-16 py-20 bg-[#0a0a0a]"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4 text-lg md:text-xl font-light tracking-wide"
      >
        <p className="hover:text-white transition flex items-center gap-3">
          <Code size={22} className="text-white/60" />
          Development
        </p>

        <p className="hover:text-white transition flex items-center gap-3">
          <Server size={22} className="text-white/60" />
          Web Hosting
        </p>

        <p className="hover:text-white transition flex items-center gap-3">
          <Palette size={22} className="text-white/60" />
          UI/UX Design
        </p>

        <p className="hover:text-white transition flex items-center gap-3 mt-3 font-bold">
          <span className="text-4xl text-pink-300">1.5</span>
          Years Experience
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed text-base md:text-lg font-serif">
          I’m a passionate Web Developer who loves creating clean, responsive,
          and user-friendly websites. I focus on crafting smooth UI/UX
          experiences and writing clean reusable code.
        </p>

        <p className="text-gray-400 leading-relaxed text-base md:text-lg mt-4 font-serif">
          With expertise in HTML, CSS, JavaScript, React, TailwindCSS, and
          backend services like Supabase — I enjoy turning ideas into functional
          and visually appealing web applications.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
