import { motion } from 'framer-motion';
import recipeImg from '../images/image.png';
import ProjectsTwo from './ProjectTwo';

const Projects = () => {
  return (
    <>
      <div id="Projects" className="py-10 px-6 md:px-16 bg-[#0a0a0a]">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-12">
          Projects
        </h1>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }} // SAME AS ABOUT LEFT ANIMATION
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#111] p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition"
        >
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 max-w-lg"
          >
            <h2 className="text-white text-2xl font-semibold">
              MealRecipe App
            </h2>

            <div className="flex gap-2">
              <p className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-xl text-sm text-gray-400">
                HTML
              </p>
              <p className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-xl text-sm text-gray-400">
                CSS
              </p>
              <p className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-xl text-sm text-gray-400">
                JavaScript
              </p>
              <p className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-xl text-sm text-gray-400">
                API Integration
              </p>
            </div>

            <p className="text-gray-300 font-serif">
              A simple and responsive meal recipe application that fetches food
              data using APIs. Users can search meals, view ingredients, and
              explore categories.
            </p>

            <div>
              <a href="https://github.com/Akshaybabuvp" target="_blank">
                <button className="text-white bg-blue-800 px-2 my-1 py-1 rounded cursor-pointer mx-2 hover:bg-blue-900">
                  View Github
                </button>
              </a>
              <a href="https://mealrecipeappcom.netlify.app/" target="_blank">
                <button className="text-white bg-pink-800 px-2 my-1 py-1 rounded cursor-pointer mx-2 hover:bg-pink-900">
                  View Project
                </button>
              </a>
            </div>
          </motion.div>

          {/* Image Section (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }} // SAME AS ABOUT RIGHT ANIMATION
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden w-full max-w-[500px] aspect-video shadow-lg flex justify-center"
          >
            <img
              src={recipeImg}
              alt="Meal Recipe App"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <ProjectsTwo />
    </>
  );
};

export default Projects;
