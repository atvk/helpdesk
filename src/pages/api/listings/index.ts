import type { NextApiHandler } from "next";
import { listingsMock } from "../../../domains/listing/mocks";

const handler: NextApiHandler = async (req, res) => {
  res.status(200).send(listingsMock);
};

export default handler;
