'use client'
import { useState } from "react"
import type { Listing } from "@/domains/listing/types"
import TableListings from "@/components/TableListings"
import ListingDetails from "@/components/ListingDetails"
import Hydration from "@/components/Hydration";
import useFetch from "@/hooks/useFetch";

export default function BackOffice() {
  const { data: listings, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_HOST}/listings`)
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  return (
    <Hydration>
      <main className="w-full">
        <div className="mx-5 my-10">
          {error && <>{error}</>}
          {loading && <>Loading...</>}
          {listings && <TableListings selected={selectedListing} listings={listings} onClickListing={(listing: Listing) => { setSelectedListing(listing) }} />}
        </div>
        {selectedListing ? <ListingDetails
          listing={selectedListing}
          onCloseClick={() => { setSelectedListing(null) }}
          onApprove={() => {
            //TODO: Handle approve
          }}
          onReject={() => {
            // TODO: Handle reject
          }}
          onListingChange={(nextListing: Listing) => {
            // TODO: Change listing using nextListing
            // TODO: Update table data
          }}
        /> : null}
      </main>
    </Hydration>
  );
}
