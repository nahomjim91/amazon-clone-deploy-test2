import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions= {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "788922474452-9pei49cun8748p51egrd6oeq0ufialac.apps.googleusercontent.com",
      clientSecret:"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",
    }),
  ],
  
}

export default NextAuth(authOptions)