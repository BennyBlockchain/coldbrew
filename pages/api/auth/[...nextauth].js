import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN,
    }),
  ],
});
