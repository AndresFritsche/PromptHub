import { FaGithub, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center gap-">
        <a href="/" className="flex items-center h-16">
          <img
            src="../../src/assets/logo.png"
            alt="Logo"
            className="h-64 ml-20 object-cover"
          />
        </a>
      </div>

      <div className="flex space-x-8 mr-52 text-primary font-medium text-xl">
        <a href="/" className="px-3 py-1 rounded-xl hover:bg-primary/10">
          Home
        </a>
        <a href="/prompts" className="px-3 py-1 rounded-xl hover:bg-primary/10">
          Prompts
        </a>
        <a href="/tags" className="px-3 py-1 rounded-xl hover:bg-primary/10">
          Tags
        </a>
      </div>

      <div className="flex items-center space-x-10 mx-12">
        <a href="/register">
          <FaUser size={22} className="text-primary" />
        </a>
        <a href="https://github.com/AndresFritsche/PromptHub">
          <FaGithub size={22} className="text-primary" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
