import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  }),
  tables: {
    user: "users", // Avoids reserved 'user' keyword
    account: "accounts", // Optional: Customize others for consistency
    session: "sessions",
    verificationToken: "verification_tokens",
  },
  emailAndPassword: {
    enabled: true,
  },
});
