import type { Listing } from "@/domains/listing/types"
import CopyButton from "./CopyButton"

type HeaderListingDetailsProps = {
  listing: Listing,
  onApprove: () => void
  onReject: () => void
}

export default function HeaderListingDetails({ listing, onApprove, onReject }: HeaderListingDetailsProps) {

  return (
    
    <div className="flex justify-between mb-5 ">
      <div className="flex flex-col gap-5">
        <div className="flex space-x-5">
          <h1>{`Listing ID:  ${listing.id}`}</h1>
          <CopyButton textToCopy={listing.id} />
        </div>
        <h2>Submited:</h2>
      </div>
      <div className="flex gap-5">
        <button
          onClick={onApprove}
          className="inline-flex mb-8 items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
        >
          Approve
        </button>
        <button
          onClick={onReject}
          className="inline-flex mb-8 items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
        >
          Reject
        </button>
      </div>

    </div>
  )
}