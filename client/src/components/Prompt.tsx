import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

type PromptProps = {
  id: number;
  title: string;
  content: string;
  tag: string;
};

const FetchPrompts = () => {
  const [prompts, setPrompts] = useState<PromptProps[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    const _fetchPrompts = async () => {
      try {
        const response = await fetch("https://localhost:7251/api/prompt");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const prompts = await response.json();
        setPrompts(prompts);
      } catch (error) {
        console.error("Failed to fetch prompts:", error);
      }
    };

    _fetchPrompts();
  }, []);

  const copyToClipboard = async (content: string, id: number) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 max-w-6xl mx-auto">
      {prompts.map(({ id, title, content, tag }) => (
        <div
          key={id}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

          <span className="text-gray-300">
            <RiDoubleQuotesL size={36} />
          </span>

          <p className="text-lg text-gray-600 italic mb-6">"{content}"</p>

          <div className="flex justify-end">
            <button
              type="button"
              className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2"
              onClick={() => copyToClipboard(content, id)}
            >
              <FaRegCopy size={24} />
              {copiedId === id && (
                <span className="text-sm text-green-600">Copied!</span>
              )}
            </button>
          </div>

          <p className="text-sm text-gray-400 pt-6">#{tag}</p>
        </div>
      ))}
    </section>
  );
};

export default FetchPrompts;

