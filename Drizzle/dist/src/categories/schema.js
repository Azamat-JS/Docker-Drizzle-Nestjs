"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsToCategoriesRelations = exports.postsToCategories = exports.categoriesRelations = exports.categories = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const schema_1 = require("../posts/schema");
const drizzle_orm_1 = require("drizzle-orm");
exports.categories = (0, pg_core_1.pgTable)('categories', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.text)('name').notNull(),
});
exports.categoriesRelations = (0, drizzle_orm_1.relations)(exports.categories, ({ many }) => ({
    postsToCategories: many(exports.postsToCategories),
}));
exports.postsToCategories = (0, pg_core_1.pgTable)('posts_to_categories', {
    postId: (0, pg_core_1.integer)('post_id')
        .notNull()
        .references(() => schema_1.posts.id),
    categoryId: (0, pg_core_1.integer)('category_id')
        .notNull()
        .references(() => exports.categories.id),
}, (t) => ({
    pk: (0, pg_core_1.primaryKey)({ columns: [t.postId, t.categoryId] }),
}));
exports.postsToCategoriesRelations = (0, drizzle_orm_1.relations)(exports.postsToCategories, ({ one }) => ({
    post: one(schema_1.posts, {
        fields: [exports.postsToCategories.postId],
        references: [schema_1.posts.id],
    }),
    category: one(exports.categories, {
        fields: [exports.postsToCategories.categoryId],
        references: [exports.categories.id],
    }),
}));
//# sourceMappingURL=schema.js.map