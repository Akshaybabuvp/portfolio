import { motion } from 'framer-motion';
import projectImg from '../images/projectT.png';

const ProjectsTwo = () => {
  return (
    <div className="py-10 px-6 md:px-16 bg-[#0a0a0a]">
      {/* Project Card */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#111] p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition"
      >
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl overflow-hidden w-full max-w-[500px] aspect-video shadow-lg flex justify-center"
        >
          <img
            src={projectImg}
            alt="E-Commerce App"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Section - Text */}
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
            active development. Features like product listings, authentication,
            cart system, and checkout are being added. This project evolves
            weekly with new improvements.
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
