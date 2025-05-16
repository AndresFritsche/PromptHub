import { useEffect } from "react"

const FetchPrompts = () => {
  useEffect(() => {
    const _fetchPrompts = async () => {
      try {
        const response = await fetch('https://localhost:7251/api/prompt');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const prompts = await response.json();
        console.log(prompts);
      } catch (error) {
        console.error('Failed to fetch prompts:', error);
      }
    };

    _fetchPrompts();
  }, []);

  return (
    <div>FetchPrompts</div>
  )
}
export default FetchPrompts