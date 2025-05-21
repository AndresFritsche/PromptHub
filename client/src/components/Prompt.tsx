import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

type PromptProps = {
  id: number;
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
    <section className="grid grid-cols-2 p-20 m-20 gap-6 w-1/2 mx-auto">
      
      {prompts.map(({id, title, content, tag}) => (
        <div
          key={id}
          className="bg-white max-w-xl rounded-2xl shadow-lg border border-gray-200 p-12 mx-auto hover:shadow-xl transition-shadow duration-300"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {title}
          </h1>
          <span>
            <RiDoubleQuotesL size={52}/>
          </span>
          <p className="text-lg text-gray-600">'{content}'</p>
          <p className="text-sm text-gray-400 pt-8 ">#{tag}</p>
        </div>
      ))}
    </section>
  );
};
export default FetchPrompts;
