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
    <div>
      <h1>{error}</h1>
      <button onClick={handleClick}>
                Make a mistake
            </button>
    </div>
  );
} 