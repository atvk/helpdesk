"use client"
import type { Listing } from "@/domains/listing/types"
import UserListingDetails from "@/components/UserListingDetails";

type ListingDetailsProps = {
	listing: Listing;
	onCloseClick: () => void;
	onApprove: () => void;
	onReject: () => void;
	onListingChange: (nextListing: Listing) => void;

};

export default function ListingDetails({ listing, onCloseClick, onApprove, onReject, onListingChange }: ListingDetailsProps) {

	return (
		<div className="absolute right-5 left-1/2 top-20 h-1/2 bg-gray-800/80">
			<UserListingDetails listing={listing} onListingChange={onListingChange} />
			<button
				type="button"
				onClick={onCloseClick}
				className="absolute -top-7 -right-4 cursor-pointer">
				<svg width="25" height="25" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">Yes
					<line x1="1.93934" y1="25.9393" x2="25.9393" y2="1.93934" stroke="rgb(131 24 67 /1)" stroke-width="3" />
					<line x1="2.06066" y1="1.93934" x2="26.0607" y2="25.9393" stroke="rgb(131 24 67 /1)" stroke-width="3" />
				</svg>
			</button>
		</div>


	)
}









