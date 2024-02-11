"use client"


import type { Listing } from "@/domains/listing/types"

type TableListingsProps = {
  listings: Listing[];
  onClickListing:(listing: Listing) => void;
}

export default function TableListings({ listings, onClickListing }: TableListingsProps) {

  return (

    <div className="w-full">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">State{" "}</th>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">City iata code{" "}</th>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Created datetime{" "}</th>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">User info{" "}</th>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Property type{" "}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {listings.map(listing => (
            <tr key={listing.id} onClick={() => {
              onClickListing(listing);
            }}>
              <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.state}</td>
              <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.city_iata_code}</td>
              <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.created_datetime}</td>
              <td className="whitespace-nowrap py-5 text-sm text-gray-900">
                <div className="">
                  <div className="">
                    <div className="flex gap-1">
                      <span>{listing.first_name}</span>
                      <span>{listing.last_name}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/phone.png" alt="" />
                      <span>{listing.phone_number}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/linkedin.png" alt="" />
                      <span>{listing.linkedin_username}</span>
                    </div> <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/instagram.png" alt="" />
                      <span>{listing.instagram_username}</span>
                    </div> <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/telegram.png" alt="" />
                      <span>{listing.telegram_username}</span> </div>
                  </div>
                </div>
              </td>
              <td className="text-gray-700 text-left">{listing.property_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}


