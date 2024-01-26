"use client"
import type { Listing } from "../domains/listing/types";
import { useEffect, useState } from "react";

export default function ListingTable() {

  const [detailsState, setDetailsState] = useState<Listing | null>(null);
  const [listings, setListings] = useState<Listing[] | null>(null);

  useEffect(() => {

    fetch("http://localhost:3000/api/listings")
      .then((res) => {
        res.json().then((data) => {
          setListings(data as any as Listing[])
        })
      })

  }, []);

  return (
    <div className="flex gap-10 mx-10">
      <div className="w-1/2">
        <table className="min-w-full w-1/2 divide-y divide-gray-300">
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
            <>
              {listings ? (
                <>
                  {listings.map((listing) => (
                    <tr
                      key={listing.id}
                      onClick={() => {
                        setDetailsState(listing);
                      }}>
                      <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.state}</td>
                      <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.city_iata_code}</td>
                      <td className="whitespace-nowrap py-5 text-sm text-gray-500">{listing.created_datetime}</td>
                      <td className="whitespace-nowrap py-5 text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="flex font-medium gap-1">
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
                </>
              ) : (
                <>Loading</>
              )}
            </>
          </tbody>
        </table>
      </div>{detailsState !== null ? (
        <article className="w-1/2">
          <h2>Listing ID: {detailsState.id} </h2>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              setDetailsState(null);
            }}
          >
            Close
          </button>
        </article>
      ) : null}
    </div>
  )
}




