"use client"

import type { Listing } from "@/domains/listing/types"

type TableListingsProps = {
  listings: Listing[];
  onClickListing: (listing: Listing) => void;
}

export default function TableListings({ listings, onClickListing }: TableListingsProps) {

  return (
    <div className="w-full">
      <table className="table-fixed w-full divide-y divide-gray-400">
        <thead>
          <tr className="py-3.5 pr-30 font-semibold sm:pl-0 ">
            <th scope="col" className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left font-semibold text-gray-700">State</th>
            <th scope="col" className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left font-semibold text-gray-700">City</th>
            <th scope="col" className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left font-semibold text-gray-700">Created date</th>
            <th scope="col" className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left font-semibold text-gray-700">User</th>
            <th scope="col" className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left font-semibold text-gray-700">Property</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {listings.map(listing => (
            <tr
            className=""
            key={listing.id}
              onClick={() => { onClickListing(listing)}}
            >
              <td className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left text-gray-700">{listing.state}</td>
              <td className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left text-gray-700">{listing.city_iata_code}</td>
              <td className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left text-gray-700">{listing.created_datetime}</td>
              
              <td className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left text-gray-700">
                <div className="">
                  <div className="">
                    <div className="flex gap-1 truncate">
                      <span className="truncate">{listing.first_name}</span>
                      <span className="truncate">{listing.last_name}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/phone.png" alt="" />
                      <span className="truncate">{listing.phone_number}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/linkedin.png" alt="" />
                      <span className="truncate">{listing.linkedin_username}</span>
                    </div> <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/instagram.png" alt="" />
                      <span className="truncate">{listing.instagram_username}</span>
                    </div> <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/telegram.png" alt="" />
                      <span className="truncate">{listing.telegram_username}</span> </div>
                  </div>
                </div>
              </td>
              <td className="pl-2 sm:w-10 sm:text-xs ld:text-base truncate py-1.5 text-left text-gray-700">{listing.property_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}


