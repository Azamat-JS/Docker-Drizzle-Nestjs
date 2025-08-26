"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const database_connection_1 = require("../database/database-connection");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const schema = require("./schema");
const drizzle_orm_1 = require("drizzle-orm");
let PostsService = class PostsService {
    database;
    constructor(database) {
        this.database = database;
    }
    create(post) {
        return this.database.insert(schema.posts).values(post);
    }
    async findAll() {
        return this.database.query.posts.findMany({
            with: { user: true, postsToCategories: true }
        });
    }
    async getPost(postId) {
        return this.database.query.posts.findFirst({
            where: (0, drizzle_orm_1.eq)(schema.posts.id, postId)
        });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(database_connection_1.DATABASE_CONNECTION)),
    __metadata("design:paramtypes", [node_postgres_1.NodePgDatabase])
], PostsService);
//# sourceMappingURL=posts.service.js.map