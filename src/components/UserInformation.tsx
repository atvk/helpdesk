import type { Listing } from "@/domains/listing/types"
import { useState } from "react"

type UserInfoProps = {
  listing: Listing;
}

export default function UserInformation({ listing }: UserInfoProps) {

  const [edit, setEdit] = useState(false);
  const [valueForm, setValueForm] = useState(listing.id);

  let Content;

  if (edit) {
    Content = (
      <div className="flex w-full mt-5 gap-2">
        <div className="font-bold py-1.5">ID:</div>
        <input
          className="flex w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          value={valueForm}
          onChange={(e) => setValueForm(e.target.value)}
        />
        <button
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setEdit(false)}>
          Save
        </button>
      </div>
    );
  } else {
    Content = (
      <div className="flex w-full mt-5 gap-5">
        <div className="font-bold py-1.5">ID:</div>
        <div className="flex w-full py-1.5 text-gray-600">{valueForm}</div>
        <button
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setEdit(true)}>
          Edit
        </button>
      </div>
    );
  }
  return (
    <label className="flex w-full justify-between">
      {Content}
    </label>
  );


}







