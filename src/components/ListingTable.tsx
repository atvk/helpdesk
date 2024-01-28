"use client"
import type { Listing } from "../domains/listing/types";
import { useEffect, useState } from "react";
import Link from "next/link"
import Form from "@/components/Form"
import CopyButton from "@/components/CopyButton"
import ApproveButton from "@/components/ApproveButton"
import RejectButton from "@/components/RejectButton"
import EditButton from "./EditButton";
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
                </>
              ) : (
                <>Loading</>
              )}
            </>
          </tbody>
        </table>
      </div>{detailsState !== null ? (

        <form className="w-full">
          <div className="space-y-10 sm:space-y-50">
            <section>
              <div className="flex justify-between ml-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                <div>
                  <div className="flex gap-2">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Listing ID: {detailsState.id} </h2>
                    <CopyButton textToCopy={detailsState.id} />
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-gray-600">
                    Submited:
                  </p>
                </div>
                <div className="space-x-5">
                  <ApproveButton />
                  <RejectButton />
                </div>
              </div>
            </section>
            <section>
              <div className="grid ml-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">

                <h2 className="text-base font-semibold leading-7 text-gray-900">Post</h2>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  ID: {detailsState.id}
                </span>
                <span className="max-w-2xl space-x-2 text-sm leading-6 text-gray-600">
                  <span>First name: {detailsState.first_name}</span>
                  <EditButton />
                </span>

                <span className="max-w-2xl space-x-2 text-sm leading-6 text-gray-600">
                  <span>Last name: {detailsState.last_name}</span>
                  <EditButton />
                </span>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  Telegram:
                </span>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  Contact:
                </span>
                <div>
                  <span className="max-w-2xl text-sm leading-6 text-gray-600">
                    GUIDED FLOW(TELEGRAM ID)
                  </span>
                  <span className="max-w-2xl text-sm leading-6 text-gray-600">
                    12345678910
                  </span>
                </div>
              </div>
            </section>
            <section>
              <div className="grid ml-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Location</h2>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  City IATA code
                </span>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  Country Alpha 2 code
                </span>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  Address
                </span>
                <span className="max-w-2xl text-sm leading-6 text-gray-600">
                  Mapbox
                </span>
                <span className="max-w-2xl space-y-8 last:text-sm leading-6 text-gray-600">
                  <Link
                    className=" text-gray-600 pr-5 underline"
                    href="https://en.wikipedia.org/wiki/List_of_airports_by_IATA_airport_code:_A">City codes (IATA)</Link>
                  <span>and</span>
                  <Link
                    className=" text-gray-600 p-5 underline"
                    href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">Country codes (Alpha2)</Link>
                </span>
              </div>

            </section>
            <button
              type="button"
              className="inline-flex ml-10 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setDetailsState(null);
              }}
            >
              Close
            </button>
          </div>
        </form>

      ) : null}
    </div>
  )
}




