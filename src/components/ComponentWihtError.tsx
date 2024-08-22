import { useState } from "react";

export default function ComponentWithError() {
  
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    try {
            // В этом случае в хэндлере точно возникнет ошибка
      throw new Error("Simple error");
    } catch (err: any) {
            // Обычно ошибки логируются или обрабатываются дополнительной логикой,
            // но для наглядности мы просто кладём ошибку в стейт
      setError(err.message);
    }
  };

  return (
    <div className="m-5">
      <h1 className="mt-5 mb-5">{error}</h1>
      <button onClick={handleClick}
      className="flex sm:text-xs ld:text-base truncate py-1.5 
          items-center justify-center text-white rounded-md bg-pink-900 
          px-3 hover:bg-pink-700 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
        >
                Make a mistake
            </button>
    </div>
  );
} 