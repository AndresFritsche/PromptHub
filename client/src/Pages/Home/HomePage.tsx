const HomePage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen pb-[420px]">
        <h1 className="text-white font-bold text-6xl text-center  md:w-1/2 my-8">
          Discover and Share{" "}
          <span className="text-tertiary-color">AI Prompts</span>
        </h1>
        <p className="text-gray-300 text-2xl font-medium w-[720px] text-center mb-12 leading-9">
          Find the perfect prompts for your AI projects. Copy, customize, and
          create with our curated collection of high-quality prompts.
        </p>
        <a
          href="/prompts"
          className="text- font-semibold p-3 border rounded-3xl transition duration-300 hover:opacity-80"
          style={{
            background:
              "linear-gradient(90deg,rgba(255, 244, 161, 1) 0%, rgba(171, 255, 206, 1) 100%)",
          }}
        >
          Explore Prompts
        </a>
      </main>
    </>
  );
};
export default HomePage;
