
import { useCopy } from "../hooks/useCopy"

export default function CopyButton ({ textToCopy }){

  const [isCopied, handleCopy] = useCopy();

  return (
    <button
      type="button"
      onClick={() => handleCopy(textToCopy)}>
      <svg
        className="h-3 w-3 active:translate-y-1 hover:cursor-pointer"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="m15 20h-10a5.006 5.006 0 0 1 -5-5v-10a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1 -5 5zm-10-18a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm19 17v-13a1 1 0 0 0 -2 0v13a3 3 0 0 1 -3 3h-13a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5z" />
      </svg>
    </button>
  )
}
