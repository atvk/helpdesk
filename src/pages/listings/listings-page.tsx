import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { Listing } from "@/domains/listing/types";

export const getStaticProps = (async (context) => {
  const res = await fetch("http://localhost:3000/api/listings");
  const listings = await res.json();
  return { props: { listings } };
}) satisfies GetStaticProps<{
  listings: Listing[];
}>;

export function ListingsPage({
  listings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {listings.map((listing:Listing) => {
        return <li key={listing.id}>{listing.id}</li>;
      })}
    </ul>
  );
}
