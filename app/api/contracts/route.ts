import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const getCollectionName = (state: string) => state;

export async function POST(req: Request) {
  const filters = await req.json();

  const client = await clientPromise;
  const db = client.db("Contracts");

  const results: any[] = [];

  // Handle ALL case (optional)
  if (filters.states.includes("ALL")) {
    return NextResponse.json([]);
  }

  for (const state of filters.states) {
    const collectionName = getCollectionName(state);
    const collection = db.collection(collectionName);

    const query: any = {};

    if (filters.authorities?.length) {
      query.auth_id = { $in: filters.authorities };
    }

    if (filters.entities?.length) {
      query.entity_id = { $in: filters.entities };
    }

    if (filters.nigp?.length) {
      query.nigp_code = { $in: filters.nigp };
    }

    if (filters.toggles?.activeOnly) {
      query.active = true;
    }

    const docs = await collection.find(query).toArray();
    results.push(...docs);
  }

  return NextResponse.json(results);
}
