import { NextRequest, NextResponse } from "next/server";
import { listingsMock } from "../../../domains/listing/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(listingsMock, { status: 200 });
}
