"use client"
import type { Listing } from "@/domains/listing/types"
import HeaderListingDetails from "@/components/HeaderListingDetails";
import UserListingDetails from "@/components/UserListingDetails";


type ListingDetailsProps = {
	listing: Listing;
	onCloseClick: () => void;
	onApprove: () => void;
	onReject: () => void;
	onHostChange: () => void;
};

export default function ListingDetails({ listing, onCloseClick, onApprove, onReject, onHostChange }: ListingDetailsProps) {

	return (
		<div className="w-full divide-y divide-gray-300" >
			<HeaderListingDetails listing={listing} onApprove={onApprove} onReject={onReject} />
			<UserListingDetails listing={listing} onHostChange={onHostChange} />
			
			<button
				type="button"
				onClick={onCloseClick}
				className="mt-5  inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Close
			</button>
		</div>

	)
}









