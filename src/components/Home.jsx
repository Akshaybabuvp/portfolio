import { motion } from 'framer-motion';
import image from '../images/me.jpg';

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col md:flex-row items-center justify-evenly px-10 md:px-20 mt-20 text-white mb-20"
    >
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h2 className="text-xl text-gray-300">Hello 👋</h2>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            I'm Akshay
          </h1>
          <h2 className="text-2xl mt-2 text-gray-300">
            Web Developer & Designer
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a href="#Projects">
            <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition duration-200 shadow-lg cursor-pointer">
              Projects
            </button>
          </a>

          <a href="/Akshay_Latest_cv.pdf" target="_blank">
            <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gray-800 transition duration-200 cursor-pointer">
              My Resume
            </button>
          </a>
        </div>
      </motion.div>

      {/* RIGHT SECTION - IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-10 md:mt-0"
      >
        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-purple-500/30">
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
