
async function fetchData() {
  const res = await fetch("http://localhost:3000/api/listings");
  const result = await res.json();
  return result;
}

export const ListingTable = async() => {
  const res = await fetchData();

  return (
    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-700 sm:pl-0">
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              ID{" "}
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Created_datetime{" "}
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Updated_datetime
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Personal_info_updated_datetime
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              User
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              State
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {res.map((elements: any) => (
            
          <tr>
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{elements.id}</td>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                {elements.created_datetime}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                {elements.updated_datetime}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                {elements.personal_info_updated_datetime}
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="flex font-medium gap-1">
                      <span>{elements.first_name}</span>
                      <span>{elements.last_name}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/phone.png" alt="" />
                      <span>{elements.phone_number}</span>
                    </div>
                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/linkedin.png" alt="" />
                      <span>{elements.linkedin_username}</span>
                    </div>

                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/instagram.png" alt="" />
                      <span>{elements.instagram_username}</span>
                    </div>

                    <div className="flex font-medium gap-1">
                      <img className="h-4 w-4" src="/telegram.png" alt="" />
                      <span>{elements.telegram_username}</span>
                      
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {elements.state}
                </span>
              </td>
              
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};


