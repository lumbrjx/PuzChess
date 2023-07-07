import { getUser } from "@/server/db/data/users/user";
import prisma from "@/server/db/seed";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const bcrypt = require("bcrypt");

export const options: NextAuthOptions = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      console.log("im session", session);
      session.user = token;

      return session;
    },
    async jwt({ token, user }) {
      console.log("im token", token);

      return { ...token, ...user };
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
          console.log("no user");
          return null;
        }
        const ismatch = await bcrypt.compare(
          credentials?.password,
          user?.password
        );
        console.log(ismatch);
        if (ismatch) {
          console.log("logged in");
          return user;
        } else {
          console.log("invalid pass");
          return null;
        }
        // const user = { id: "42", name: "dave", pass: "auth" };
        // if (
        //   credentials?.username === user.name &&
        //   credentials?.password === user.pass
        // ) {
        //   console.log(user);
        //   return user;
        // } else {
        //   return null;
        // }
      },
    }),
  ],
};
