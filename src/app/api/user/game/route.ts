import prisma from "@/server/db/seed";
import { NextRequest, NextResponse } from "next/server";

enum budges {
  "ROCKIE",
  "SILVER",
  "GOLDEN",
  "DIAMOND",
  "PLATINIUM",
}
// http://localhost:3000/api/user/game?email=${email}
// Helper function to determine the badge based on the score
function calculateBadge(score: number): string {
  if (score <= 600) {
    return "ROCKIE";
  } else if (score <= 800) {
    return "SILVER";
  } else if (score < 1100) {
    return "GOLDEN";
  } else if (score < 2000) {
    return "DIAMOND";
  } else {
    return "PLATINIUM";
  }
}

// ...

export async function PATCH(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email") as string;

  let { score, state } = await req.json();

  
  //if (state === "WIN") {
  //  score += 20;
  //} else if (state === "LOSE") {
  //  score -= 20;
 // }
  if (state === "WIN") {
    score += 20;
  } else if (state === "LOSE") {
    if (score <= 20) {
      score += 0;
    }
    if (score > 40) {
      score -= 3;
    }
  }
  const badge = calculateBadge(score); // Calculate the badge based on the score

  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        score: score,
        badge: badge as any | budges | undefined, // Assign the calculated badge
      },
    });

    return NextResponse.json(user.score);
  } catch (error) {
    console.log(error);
    return NextResponse.json("error check server");
  }
}
