import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-40 h-16 ">
        {/* Logo */}
        <a href="/">
          <h2 className="text-3xl font-semibold text-white">
            Prompt
            <span className="text-4xl text-green-800 ">Hub</span>
          </h2>

          {/* Links */}
        </a>
        <div className="flex space-x-8 font-semibold text-white text-lg">
          <a href="/" className="px-3 py-1 rounded-lg hover:text-green-800 hover:bg-white">
            Home
          </a>
          <a
            href="/prompts"
            className="px-3 py-1 rounded-lg hover:text-green-800 hover:bg-white"
          >
            Prompts
          </a>
          <a
            href="/tags"
            className="px-3 py-1 rounded-lg hover:text-green-800 hover:bg-white"
          >
            Tags
          </a>
        </div>
        {/* Secondary Links */}
        <div className="flex items-center space-x-6">
          <a href="https://github.com/AndresFritsche/PromptHub">
            <FaGithub size={22} className="text-white" />
          </a>
          <a href="/register"
          className="text-white hover:text-green-800 hover:bg-white rounded-lg px-3 py-1 font-semibold"
          >
            Sign Up
          </a>
        </div>
      </nav>
      <hr className="border-white/20" />
    </>
  );
};

export default Navbar;
