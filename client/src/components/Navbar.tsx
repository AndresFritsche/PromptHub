const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">

      <div className="flex items-center ">
        <a href="/" className="flex items-center">
          <img src="../assets/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        </a>
      </div>


      <div className="flex space-x-6 text-gray-600 font-medium ">
        <a href="/" className="hover:text-green-500">Home</a>
        <a href="/prompts" className="hover:text-green-500">Prompts</a>
        <a href="/tags" className="hover:text-green-500">Tags</a>
      </div>


      <div>
        <a
          href="/prompts"
          className="bg-green-500 text-white px-4 py-2 rounded-3xl"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
