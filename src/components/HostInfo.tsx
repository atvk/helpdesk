
type Host = {
  id: string;
  first_name: string;
  last_name: string;
}

type hostInfoProps = {
  host: Host;
  onEditButtonClick: () => void
}

export default function HostInfo({ host, onEditButtonClick }: hostInfoProps) {

  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex">
        <span className="flex py-1.5 w-1/3">ID:</span>
        <span className="flex py-1.5 w-full" >{host.id}</span>
      </div>
      <div className="flex">
        <span className="flex py-1.5 w-1/3">First name:</span>
        <span className="flex py-1.5 w-full" >{host.first_name}</span>
      </div>
      <div className="flex">
        <span className="flex py-1.5 w-1/3">Last name:</span>
        <span className="flex py-1.5 w-full" >{host.last_name}</span>
      </div>
      <div>
        <button
          className="my-5 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={onEditButtonClick}>
          Edit
        </button>
      </div>

    </div >
  )
}
