import AboutSection from "./AboutSection";

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen pb-[220px] ">
        {/* Blobs Background */}
        <div className="absolute top-46 left-34 w-72 h-72 bg-teal-400 rounded-full blur-3xl blob-animation opacity-70 "></div>
        <div className="absolute bottom-20 right-10 w-74 h-80 bg-tertiary-color rounded-full blur-3xl blob-animation opacity-50"></div>
        <div className="absolute top-40 right-54 w-64 h-64 bg-emerald-200 rounded-full blur-3xl blob-animation opacity-70"></div>

          

        {/* Hero Section */}
        <h1 className="text-white font-bold text-8xl text-center  md:w-1/2 my-8">
          Discover and Share{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-200 to-tertiary-color">
            AI Prompts
          </span>
        </h1>
        <p className="text-gray-300 text-2xl font-medium w-[720px] text-center mb-12 leading-9">
          Find the perfect prompts for your AI projects. Copy, customize, and
          create with our curated collection of high-quality prompts.
        </p>
        <a
          href="/prompts"
          className="text-primary-color bg-gradient-to-r from-green-300 to-green-700 font-semibold p-3 border rounded-xl transition duration-300 opacity-60 hover:opacity-100"
        >
          Explore Prompts 
        </a>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 w-full max-w-3xl text-white">
          <div className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-tertiary-color ">
            <p className="text-3xl font-bold gradient-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-tertiary-color">
              1,000+
            </p>
            <p className="text-muted-foreground  text-sm">Prompts</p>
          </div>
          <div className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-tertiary-color ">
            <p className="text-3xl font-bold gradient-text">50K+</p>
            <p>Users</p>
          </div>
          <div className="flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-tertiary-color">
            <p className="text-3xl font-bold gradient-text">15+</p>
            <p>Categories</p>
          </div>
        </div>
      </main>
      <AboutSection/>
    </>
  );
};
export default HomePage;
