
import NextAuth from "next-auth";
import credentialProviders from "@/pages/api/auth/providers/credentialProviders";

export default NextAuth({
    providers: [
        credentialProviders
    ],
    secret: process.env.NEXTAUTH_SECRET,
})
