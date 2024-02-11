import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopy = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (textToCopy: string) => {
    copy(textToCopy.toString());
    setCopied(true);
  };
  return [isCopied, handleCopy];
};
