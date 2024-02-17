import type { Listing } from "@/domains/listing/types"
import { useState } from "react"
import UserInfo from "@/components/UserInfo"
import UserForm from "@/components/UserForm"


type UserListingDetailsProps = {
  listing: Listing;
  onListingChange: (listing: Listing) => void;
}

type UserDetailsState = {
  type: 'read' | 'edit';
}

export default function UserListingDetails({ listing, onListingChange }: UserListingDetailsProps) {

  const [userFormState, setUserFormState] = useState<UserDetailsState>({
    type: 'read'
  })

  switch (userFormState.type) {
    case "read":
      return (
        <div>
          <UserInfo 
          listing={listing}
          onEditButtonClick={() => { setUserFormState({ type: 'edit' }) }}
          />
        </div>
      )
    case "edit":
      return (
        <div>
          <UserForm
            listing={listing}
            onSubmit={(nextListing: Listing) => {
                onListingChange(nextListing)
                setUserFormState({ type: 'read' })
              }
            }
          />
        </div>

      )
  }
}

