import { listingsMock } from "@/domains/listing/mocks";
import { Listing } from "@/domains/listing/types"
import { useState } from "react"

type listingFormProps = {
  listing: Listing;
  onSubmit: (nextListing: Listing) => void;
}

export default function UserForm({ listing, onSubmit }: listingFormProps) {

  const [value, setValue] = useState(listing)

  return (
    <form>
      <div className="flex flex-col gap-5 mt-5">

        <div className="flex">
          <span className="flex py-1.5 w-1/3">ID:</span>
          <input
            type='text'
            name='id'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value.id}
            onChange={(event) => {
              setValue({
                ...value,
                id: event.target.value,
              })
            }} />
        </div>
        <div className="flex">
          <span className="flex py-1.5 w-1/3">First name</span>
          <input
            type='text'
            name='first_name'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value.first_name}
            onChange={(event) => {
              setValue({
                ...value,
                first_name: event.target.value,
              })
            }} />

        </div>
        <div className="flex">
          <span className="flex py-1.5 w-1/3">Last name</span>
          <input
            type='text'
            name='last_name'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={value.last_name}
            onChange={(event) => {
              setValue({
                ...value,
                last_name: event.target.value,
              })
            }} />

        </div>

        <div>
          <button
            className="my-5 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {onSubmit(value)}}>
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
