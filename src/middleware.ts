export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/play", "/leaderboard", "/profile"],
};

// import { getToken } from "next-auth/jwt";
// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   async function middleware(req) {
//     console.log(req.nextauth.token);
//   },
//   {
//     callbacks: {
//       async authorized() {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/dashboard", "/leaderboard", "/signin"],
// };
