import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { BcWildfireProvider } from "@/data/bc-wildfire";

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    // console.log(
    //   userId,
    //   req.headers,
    //   req.headers.get("user-agent"),
    //   req.headers.get("x-forwarded-for")
    // );
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const res = (
      await BcWildfireProvider.getAllCurrentFire()
    ).data.features.map((each) => each.properties);

    // console.log("[FIRES_GET]", res);
    return NextResponse.json("cool", { status: 200 });
  } catch (error) {
    // console.log("[FIRES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
