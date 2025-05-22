import { FaRegCopy, FaSearch } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <section className="h-screen bg-primary-color">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-5xl text-white font-bold">
            Why Use{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-tertiary-color text-6xl">
              PromptHub
            </span>{" "}
            ?
          </h3>
          <p className="text-xl font-semibold text-gray-300 pt-8 w-1/4 text-center">
            Our platform makes it easy to find, use, and share the best AI
            prompts for any task.
          </p>
        </div>

        <div className="flex flex-col-3 text-white justify-between my-40 mx-40 gap-7">
          <div className="w-1/3 h-[350px] bg-white/10 border border-white/80 hover:shadow-teal-200/50 hover:scale-105 rounded-2xl shadow-lg shadow-teal-200/20 backdrop-blur-lg flex flex-col justify-center items-center transition duration-300">
            <FaSearch size={40} />
            <h1 className="py-8 text-4xl">Discover</h1>
            <p className="w-80">
              Find the perfect prompt for any task from our curated collection
              of high-quality prompts.
            </p>
          </div>

          <div className="w-1/3 h-[350px] bg-white/10 border border-white/80 hover:shadow-teal-200/50 hover:scale-105 rounded-2xl shadow-lg shadow-teal-200/20 backdrop-blur-lg flex flex-col justify-center items-center transition duration-300">
            <FaRegCopy size={40} />
            <h1 className="py-8 text-4xl">Copy</h1>
            <p className="w-80">
              Easily copy any prompt with a single click and use it in your
              favorite AI tools.
            </p>
          </div>

          <div className="w-1/3 h-[350px] bg-white/10 border border-white/80 hover:shadow-teal-200/50 hover:scale-105 rounded-2xl shadow-lg shadow-teal-200/20 backdrop-blur-lg flex flex-col justify-center items-center transition duration-300">
            <FaSearch size={40} />
            <h1 className="py-8 text-4xl">Share</h1>
            <p className="w-80">
              Submit your own prompts and share your expertise with the
              community
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
