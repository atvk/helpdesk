import type { Listing } from "@/domains/listing/types"
import { useState } from "react"

type UserInfoProps = {
  listings: Listing[];
  listing: Listing;
  onChangeListing: (nextListing: string) => void;
  onChange: (nextListing: string) => void;
}

export default function UserInformation({ listings, onChangeListing }: UserInfoProps) {

  return (

    <div className="w-full">
      {listings.map(listing => (
        <div className="mt-5 mx-10 space-x-5" key={listing.id} >
          <IdListing listing={listing} onChange={onChangeListing} />
        </div>
      ))}

    </div>

  )

}

function IdListing({ listing, onChange }: UserInfoProps) {

  const [edit, setEdit] = useState(false);

  let Content;

  if (edit) {
    Content = (
      <>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={listing.id}
          onChange={e => { onChange({ ...listing, id: e.target.value }); }}
        />

        <button
          className="inline-flex ml-10 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setEdit(false)}>
          Save
        </button>
      </>
    );
  } else {
    Content = (
      <>
        {listing.id}
        <button
          className="inline-flex ml-10 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setEdit(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label className="flex my-5 justify-center">
      {Content}
    </label>
  );
}

