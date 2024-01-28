import Link from "next/link"
import ListingTable from "@/components/ListingTable"
import Hydration from "@/components/Hydration";
import React, { useState } from 'react'; 



export default function adminPanel() {
  return (
    <Hydration>
      <Link href="./listings" className="m-10 underline text-gray-600">Listings</Link>
      <ListingTable />
    
    
    </Hydration>
  );
}
