'use client'
import { useState } from "react"
import type { Listing } from "@/domains/listing/types"
import TableListings from "@/components/TableListings"
import ListingDetails from "@/components/ListingDetails"
import Hydration from "@/components/Hydration";
import useFetch from "@/hooks/useFetch";
import UserInformation from "@/components/UserInformation";



export default function BackOffice() {

  const { data: listings, loading, error } = useFetch('http://localhost:3000/api/listings')
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);


  function onListingChange(nextListing: Listing) {

  }

  return (
    <Hydration>
      <main className="flex gap-10 mx-10">
        <>
          {error && <>{error}</>}
          {loading && <>Loading...</>}
          {listings && <TableListings listings={listings} onClickListing={(listing: Listing) => { setSelectedListing(listing) }} />}
        </>
        {selectedListing ?
          <ListingDetails
            listing={selectedListing}

            onCloseClick={() => { setSelectedListing(null) }}

            onApprove={() => {
              //TODO: Handle approve
            }}
            onReject={() => {
              // TODO: Handle reject
            }}
            onListingChange={(nextListing: Listing) => {
              onListingChange
              // TODO: Change listing using nextListing
              // TODO: Update table data
            }}
          /> : null}
      </main>

    </Hydration>
  );
}
