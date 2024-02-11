import { useState } from "react"

type Host = {
  id: string;
  first_name: string;
  last_name: string;
}

type hostFormProps = {
  host: Host;
  onSubmit: (nextHost: Host) => void
}

export default function HostForm({ host, onSubmit }: hostFormProps) {

  const [hostFormValues, setHostFormValues] = useState<Host>({
    id: host.id,
    first_name: host.first_name,
    last_name: host.last_name
  })

  return (
    <form>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex">
          <span className="flex py-1.5 w-1/3">ID:</span>
          <input
            type='text'
            name='id'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={hostFormValues.id}
            onChange={(event) => {
              setHostFormValues({
                ...hostFormValues,
                id: event.target.value,
              })
            }} />

        </div>
        <div className="flex">
          <span className="flex py-1.5 w-1/3">First name</span>
          <input
            type='text'
            name='firstName'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={hostFormValues.first_name}
            onChange={(event) => {
              setHostFormValues({
                ...hostFormValues,
                first_name: event.target.value,
              })
            }} />

        </div>
        <div className="flex">
          <span className="flex py-1.5 w-1/3">Last name</span>
          <input
            type='text'
            name='lastName'
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={hostFormValues.last_name}
            onChange={(event) => {
              setHostFormValues({
                ...hostFormValues,
                last_name: event.target.value
              })
            }} />

        </div>
        <div>
          <button
            className="my-5 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              onSubmit(hostFormValues)
            }}>
            Save
          </button>
        </div>
      </div>
    </form>
  )
}
