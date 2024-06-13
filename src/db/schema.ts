import { pgTable, serial } from "drizzle-orm/pg-core";

export const bid = pgTable("bids", {
  id: serial("id").primaryKey(),
});
