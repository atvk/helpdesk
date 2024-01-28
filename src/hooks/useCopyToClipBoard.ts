import { useState } from "react";
import copy from "copy-to-clipboard"

export const useCopyToClipBoard = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = (textToCopy:any) => {
    copy(textToCopy.toString());
    setCopied(true);
  };
  return [isCopied, handleCopy];
};
