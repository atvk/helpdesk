import { Listing } from "@/domains/listing/types"
import { useState } from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"

type listingFormProps = {
  listing: Listing,
  firstName:string,
}

export default function UserForm({ listing }: listingFormProps) {

  const { handleSubmit, register,
    formState: { errors },
  } = useForm<listingFormProps>({})

  const onSubmit = (data: listingFormProps) => {
  alert(`your name is ${listing.first_name}`)}

  const[valueForm, setValueForm] = useState<listingFormProps>()

  return (
    <form
      className="grid m-2 overflow-auto"
      onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-5 items-center border-b border-pink-800 pb-2 mx-2 my-1.5">
        <h2 className="sm:text-xs ld:text-base truncate py-1.5 font-semibold text-white">User</h2>
        <button
          className="flex h-7 w-20 sm:text-xs ld:text-base truncate py-1.5 
          items-center justify-center text-white rounded-md bg-pink-900 
          px-3 hover:bg-pink-700 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
        >
          Save
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 mx-2">
        <span className="text-gray-300 sm:text-xs ld:text-base truncate font-semibold py-1.5">First name:</span>
        <input 
        className="text-gray-700 sm:text-xs ld:text-base rounded-md py-1.5 h-5 border border-pink-800"
        value={listing.first_name}
        onChange={e=>setValueForm(e.target.value)}
        ></input>
      </div>
     
    </form >
  )
}
