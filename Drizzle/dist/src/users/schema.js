"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRelations = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../posts/schema");
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.text)('email').unique(),
    password: (0, pg_core_1.text)('password')
});
exports.userRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    posts: many(schema_1.posts)
}));
//# sourceMappingURL=schema.js.map