import Link from "next/link"
import ListingTable from "@/components/ListingTable"
import Hydration from "@/components/Hydration";


export default function adminPanel() {
  return (
    <Hydration>
      <Link href="./listings" className="m-10">Listins</Link>
      <ListingTable />
    
    </Hydration>
  );
}
