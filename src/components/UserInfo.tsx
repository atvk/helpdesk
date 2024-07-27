import { Listing } from "@/domains/listing/types"

type userInfoProps = {
  listing: Listing;
  onEditButtonClick: () => void
}

export default function UserInfo({ listing, onEditButtonClick }: userInfoProps) {

  return (

    <div className="grid m-2 overflow-auto">
      <div className="flex justify-between gap-5 items-center border-b border-pink-800 pb-2 mx-2 my-1.5">
        <h2 className="sm:text-xs ld:text-base truncate py-1.5 font-semibold text-white">User</h2>
        <button
          className="flex h-7 w-20 sm:text-xs ld:text-base truncate py-1.5 
          items-center justify-center text-white rounded-md 
          bg-pink-900 px-3 hover:bg-pink-700 focus-visible:outline-offset-2
           focus-visible:outline-pink-700"
          onClick={onEditButtonClick}>
          Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">First name:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.first_name}</span>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">Last name:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.last_name}</span>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">Phone:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.phone_number}</span>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">Linkedin:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.linkedin_username}</span>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">Instagram:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.instagram_username}</span>
      </div >
      <div className="grid grid-cols-2 gap-5 mx-2 border-b border-pink-800 pb-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">Telegram:</span>
        <span className="text-white sm:text-xs ld:text-base truncate py-1.5">{listing.telegram_username}</span>
      </div>

      
    </div>




  )
}
