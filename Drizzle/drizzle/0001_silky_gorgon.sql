CREATE TABLE "post" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text,
	"published" boolean DEFAULT false,
	"timestamp" timestamp DEFAULT now(),
	"user_id" integer
);
--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;