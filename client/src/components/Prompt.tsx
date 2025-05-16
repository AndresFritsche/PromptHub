import { useEffect, useState } from "react";

type PromptProps = {
  title: string;
  content: string;
  tag: string;
};

const FetchPrompts = () => {
  const [prompts, setPrompts] = useState<PromptProps[]>([]);

  useEffect(() => {
    const _fetchPrompts = async () => {
      try {
        const response = await fetch("https://localhost:7251/api/prompt");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const prompts = await response.json();
        setPrompts(prompts);
        console.log(prompts);
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      }
    };

    _fetchPrompts();
  }, []);

  return (
<section className="flex flex-col items-center gap-6 p-8">
  {prompts.map((prompt, index) => (
    <div
      key={index}
      className="bg-white w-full max-w-2xl rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">{prompt.title}</h1>
      <p className="text-lg text-gray-600">'{prompt.content}'</p>
      <p className="text-sm text-gray-400 pt-8 ">#{prompt.tag}</p>
    </div>
  ))}
</section>

  );
};
export default FetchPrompts;
