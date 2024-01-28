import CopyTextIcon from "@/components/CopyTextIcon"
import EditTextIcon from "@/components/EditTextIcon"

export default function CopyClipboard() {
	return (
		<div className="flex justify-center w-1/2 h-screen items-center">
			<div className="flex rounded-md shadow-sm">
				<div className="relative flex flex-grow items-stretch focus-within:z-10">
					<input
						type="text"
						name="text"
						className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Some text"
					/>
				</div>
				<button
					type="button"
					className="relative -ml-px inline-flex items-center px-3 py-2">
					<CopyTextIcon aria-hidden="true" />
				</button>
				<button
					type="button"
					className="relative -ml-px inline-flex items-center px-3 py-2">
					<EditTextIcon aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}