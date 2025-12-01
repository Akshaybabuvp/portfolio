import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
const Footer = () => {
  return (
    <div className="text-gray-400 flex flex-col items-center justify-center bg-[#0a0a0a] p-5">
      <h2 className="text-gray-100 text-xl font-serif mb-2">Akshay Babu</h2>
      <p>Designed with love,all right reserved for Akshaybabu</p>
      <div className="flex space-x-5">
        <a href="https://github.com/Akshaybabuvp" target="_blank">
          <FaGithub className="text-gray-100 text-4xl mt-3 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-babu-10035b255/"
          target="_blank"
        >
          <SiLinkedin className="text-gray-100 text-4xl mt-3 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
