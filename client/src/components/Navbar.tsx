import { FaGithub, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 h-20 bg-white">
        <a href="/" className="w-42 mb-4">
          <img
            src="../../src/assets/logo.png"
            alt="Logo"
            className=""
          />
        </a>
      <div className="flex space-x-8 text-primary-color font-medium text-xl">
        <a href="/" className="px-3 py-1 rounded-xl hover:bg-primary-color/10">
          Home
        </a>
        <a href="/prompts" className="px-3 py-1 rounded-xl hover:bg-primary-color/10">
          Prompts
        </a>
        <a href="/tags" className="px-3 py-1 rounded-xl hover:bg-primary-color/10">
          Tags
        </a>
      </div>

      <div className="flex items-center space-x-10 mx-12">
        <a href="/register">
          <FaUser size={22} className="text-primary-color" />
        </a>
        <a href="https://github.com/AndresFritsche/PromptHub">
          <FaGithub size={22} className="text-primary-color" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
