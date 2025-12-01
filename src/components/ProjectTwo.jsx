import { motion } from 'framer-motion';
import recipeImg from '../images/projectT.png';

const ProjectsTwo = () => {
  return (
    <div className="pb-7 px-6 md:px-16 bg-[#0a0a0a]">
      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#111] p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition"
      >
        {/* 🔥 IMAGE ANIMATION (LEFT SLIDE) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            rounded-xl overflow-hidden 
            w-full 
            max-w-[500px] 
            aspect-video
            shadow-lg flex justify-center
          "
        >
          <img
            src={recipeImg}
            alt="E-Commerce App"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 🔥 TEXT ANIMATION (RIGHT SLIDE) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 max-w-lg"
        >
          <h2 className="text-white text-2xl font-semibold">E-Commerce App</h2>

          {/* Tech Stack */}
          <div className="flex gap-2 flex-wrap">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React.js',
              'Tailwind',
              'Supabase',
              'Framer Motion',
              'API Integration',
            ].map((tech, i) => (
              <p
                key={i}
                className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-xl text-sm text-gray-400"
              >
                {tech}
              </p>
            ))}
          </div>

          <p className="text-gray-300 font-serif">
            This is my ongoing freelance e-commerce project, currently under
            active development. New features such as product listings, user
            authentication, cart system, and secure checkout are being added.
            The project continues to evolve with new improvements weekly.
          </p>

          <div>
            <a href="#" target="_blank">
              <button className="text-white bg-blue-800 px-2 my-1 py-1 rounded cursor-pointer mx-2 hover:bg-blue-900">
                View Github
              </button>
            </a>
            <a href="#" target="_blank">
              <button className="text-white bg-pink-800 px-2 my-1 py-1 rounded cursor-pointer mx-2 hover:bg-pink-900">
                View Project
              </button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsTwo;
