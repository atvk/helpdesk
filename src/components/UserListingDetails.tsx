import type { Listing } from "@/domains/listing/types"
import { useState } from "react"
import HostInfo from "@/components/HostInfo"
import HostForm from "@/components/HostForm"

type Host = {
  id: string;
  firstName: string;
  lastName: string;
}

type HostListingDetailsProps = {
  listing: Listing;
  host: Host;
  onHostChange: (host: Host) => void;

}

type HostDetailsState = {
  type: 'read' | 'edit';
}

export default function UserListingDetails({ listing, onHostChange }: HostListingDetailsProps) {

  const [hostFormState, setHostFormState] = useState<HostDetailsState>({
    type: 'read'
  })

  switch (hostFormState.type) {
    case "read":
      return (
        <div>
          <HostInfo
            host={listing}
            onEditButtonClick={() => { setHostFormState({ type: 'edit' }) }}
          />
        </div>
      )
    case "edit":
      return (
        <div>
          <HostForm
            host={listing}
            onSubmit={(nextHost: Host) => {
              onHostChange(nextHost)
              setHostFormState({
                type: 'read'
              })
            }}
          />
        </div>

      )
  }
}

