"use client"
import type { Listing } from "../../domains/listing/types";
import { useEffect, useState } from "react";
import Link from "next/link"
import Hydration from "@/components/Hydration";

export default function ListingsPage() {

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
    <Hydration>
      <div className="w-1/2 m-10">
        <Link className=" underline text-gray-600" href=".">Home</Link>
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                State{" "}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                City iata code{" "}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Created datetime
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                User info
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Property type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">

            <>
              {listings ? (
                <>
                  {listings.map((listing) => (
                    <tr key={listing.id}
                      onClick={() => {
                        setDetailsState(listing);
                      }}>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{listing.state}</td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{listing.city_iata_code}</td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{listing.created_datetime}</td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
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
                            </div>

                            <div className="flex font-medium gap-1">
                              <img className="h-4 w-4" src="/instagram.png" alt="" />
                              <span>{listing.instagram_username}</span>
                            </div>

                            <div className="flex font-medium gap-1">
                              <img className="h-4 w-4" src="/telegram.png" alt="" />
                              <span>{listing.telegram_username}</span>

                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{listing.property_type}
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>Loading data</>
              )}
            </>

          </tbody>
        </table>
        {detailsState !== null ? (
          <div>
            <h2>Listing ID: {detailsState.id} </h2>
            <button
              onClick={() => {
                setDetailsState(null);
              }}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </Hydration>
  );
}
