"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRelations = exports.profile = exports.userRelations = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../posts/schema");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.text)('email').unique(),
    password: (0, pg_core_1.text)('password')
});
exports.userRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many, one }) => ({
    posts: many(schema_1.posts),
    profile: one(exports.profile),
}));
exports.profile = (0, pg_core_1.pgTable)('profile', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    age: (0, pg_core_1.integer)(),
    bio: (0, pg_core_1.text)('bio'),
    userId: (0, pg_core_1.integer)('user_id').references(() => exports.users.id),
});
exports.profileRelations = (0, drizzle_orm_1.relations)(exports.profile, ({ one }) => ({
    user: one(exports.users, { fields: [exports.profile.userId], references: [exports.users.id] })
}));
//# sourceMappingURL=schema.js.map