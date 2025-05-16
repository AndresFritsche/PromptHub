const HomePage = () => {
  return (
    <>
      <main>
        <div className="flex justify-center">
          <h1 className="text-gray-800 font-medium text-4xl  align-center mt-40 md:w-1/2">
            AI Prompt Explorer - Discover, Tag, and Share Creative Prompts.
          </h1>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/prompts"
            className=" bg-green-500 text-white w-20 px-4 py-2 rounded-3xl"
          >
            Explore
          </a>
        </div>
      </main>
    </>
  );
};
export default HomePage;
