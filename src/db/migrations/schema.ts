import { pgTable, unique, integer, text, smallint, numeric, boolean, jsonb, timestamp, doublePrecision } from "drizzle-orm/pg-core"
// import { sql } from "drizzle-orm"



export const cars = pgTable("cars", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "cars_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	name: text().notNull(),
	bodyStyle: text("body_style").notNull(),
	powertrain: text().notNull(),
	transmission: text().notNull(),
	seats: smallint().notNull(),
	description: text().notNull(),
	features: text().array().notNull(),
	rating: numeric({ precision: 2, scale:  1 }).notNull(),
	reviewCount: numeric("review_count", { precision: 10, scale:  0 }).notNull(),
	unlimitedMileage: boolean("unlimited_mileage").default(false),
	imageUrl: text("image_url").notNull(),
	pricePerDay: numeric("price_per_day", { precision: 10, scale:  2 }).notNull(),
	currency: text().default('usd').notNull(),
	priceId: text("price_id").default(''),
	status: text().default('active'),
	metadata: jsonb(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("cars_slug_unique").on(table.slug),
]);

export const locations = pgTable("locations", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "locations_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	slug: text().notNull(),
	name: text().notNull(),
	latitude: doublePrecision().notNull(),
	longitude: doublePrecision().notNull(),
	imageUrl: text("image_url"),
	featured: boolean().default(false),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("locations_slug_unique").on(table.slug),
]);
