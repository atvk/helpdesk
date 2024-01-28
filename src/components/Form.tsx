import Link from "next/link"

export default function Form() {
  return (
    <form>
      <div className="space-y-10 sm:space-y-50">
        <section>
          <div className="flex justify-between mx-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Listing ID</h2>
              <p className="max-w-2xl text-sm leading-6 text-gray-600">
                Submited:
              </p>
            </div>
            <div className="space-x-5">
              <button className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900" >Approve</button>
              <button className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900" >Reject</button>
            </div>
          </div>
        </section>


        <section>
          <div className="grid mx-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">

            <h2 className="text-base font-semibold leading-7 text-gray-900">Post</h2>
            <span className="max-w-2xl text-sm leading-6 text-gray-600">
              ID:
            </span>
            <span className="max-w-2xl text-sm leading-6 text-gray-600">
              First name:
            </span>
            <span className="max-w-2xl text-sm leading-6 text-gray-600">
              Last name:
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
          <div className="grid mx-10 text-left text-sm font-semibold text-gray-700 sm:pl-0">
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

      </div>
    </form>

  )
}

