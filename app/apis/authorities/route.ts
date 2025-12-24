import { NextResponse } from "next/server";
import { getAuthorities } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json(getAuthorities());
}