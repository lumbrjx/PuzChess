import { getUser } from "@/server/db/data/users/user";
import prisma from "@/server/db/seed";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { ApiError } from "next/dist/server/api-utils";
const bcrypt = require("bcrypt");

export const options: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, account, user }) => {
      user && (token.user = user);

      return token;
    },
    session: async ({ session, token }) => {
      if (token && token.user) {
        session.user = token.user as any;
      }
      return session;
    },
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        const user = await getUser(credentials?.username as string);
        if (user === null) {
          //no user
          throw Error("user or password not valid");
        }
        const ismatch = await bcrypt.compare(
          credentials?.password,
          user?.password
        );
        console.log(ismatch);
        if (ismatch) {
          return {
            id: user.id,
            name: user.username ,
            email: user.email,
            chessElo: user.chessElo,
            badge: user.badge,
            image: user.image,
          };
        } else {
          // invalid pass
          throw Error("user or password not valid");
        }
      },
    }),
  ],
};

// ```ts

// export const AUTH_OPTIONS: NextAuthOptions = {
//   // Configure one or more authentication providers
//   session: { strategy: "jwt" },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//     maxAge: SESSION_TTL,
//   },
//   providers: [
//     // ...add more providers here

//     // INFO: The only special one is this guy, where you handle validating
//     //        and returning the user yourself
//     CredentialsProvider({
//       type: "credentials",
//       credentials: {},
//       async authorize(credentials, req) {
//         // validate user
//         // login the user
//         // if you want to persist sessions in the backend, then here's the time to do it
//         return {
//           // user info which you want to store in the session
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     jwt: async ({ token, account, user }) => {
//       // here you set the user if it is present
//       // this user variable comes only when a signin is triggered by some provider
//       // this runs before the `session` function below. I put it above for that sake as well
//       return token;
//     },
//     session: async ({ session, token }) => {
//       // here you can modify the session, set anything to it
//       // in our usual case, we set the user to the session
//       // after this the session object is sent to the `jwt.encode` and then sent to the client
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//     // error: '/auth/error', // Error code passed in query string as ?error=
//     // signOut: '/auth/signout',
//   },
// };```
