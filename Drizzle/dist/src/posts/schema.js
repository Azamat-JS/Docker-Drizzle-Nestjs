"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRelations = exports.posts = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../users/schema");
exports.posts = (0, pg_core_1.pgTable)('post', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    content: (0, pg_core_1.text)('content'),
    published: (0, pg_core_1.boolean)('published').default(false),
    timestamp: (0, pg_core_1.timestamp)('timestamp').defaultNow(),
    userId: (0, pg_core_1.integer)('user_id').references(() => schema_1.users.id)
});
exports.postRelations = (0, drizzle_orm_1.relations)(exports.posts, ({ one }) => ({
    user: one(schema_1.users, {
        fields: [exports.posts.userId],
        references: [schema_1.users.id]
    })
}));
//# sourceMappingURL=schema.js.map