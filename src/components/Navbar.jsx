const Navbar = () => {
  return (
    <div className="text-white flex justify-between p-5 px-4 container mx-auto shadow-xl shadow-gray-800 fixed top-0 left-0 right-0">
      <h2 className="text-xl font-serif cursor-pointer">Akshay Babu</h2>
      <div className="sm:flex gap-3 text-gray-300 hidden">
        <h2 className="font-serif mr-3 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear">
          <a href="#Home">Home</a>
        </h2>
        <h2 className="font-serif mr-3 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear">
          <a href="#About">About</a>
        </h2>
        <h2 className="font-serif mr-3 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear">
          <a href="#Projects">Projects</a>
        </h2>
        <h2 className="font-serif mr-3 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear">
          <a href="#Contact">Contact</a>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
