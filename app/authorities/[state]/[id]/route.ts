// app/api/authorities/[state]/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs/promises";

const execAsync = promisify(exec);

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ state: string; id: string }> }
) {
  try {
    const { state, id } = await params;

    // Validate inputs
    if (!state || !id) {
      return NextResponse.json(
        { error: "Missing state or id parameter" },
        { status: 400 }
      );
    }

    // Call Python script with parameters
    const pythonScript = path.join(process.cwd(), "scripts", "static_authority.py");
    const { stdout, stderr } = await execAsync(
      `python "${pythonScript}" "${state}" "${id}"`
    );

    if (stderr) {
      console.error("Python error:", stderr);
      return NextResponse.json({ error: stderr }, { status: 500 });
    }

    // Read the generated HTML file
    const cacheDir = path.join(
      process.cwd(),
      "output",
      "cache",
      state,
      id,
      "index.html"
    );
    const htmlContent = await fs.readFile(cacheDir, "utf-8");

    return NextResponse.json({ html: htmlContent });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate authority HTML" },
      { status: 500 }
    );
  }
}