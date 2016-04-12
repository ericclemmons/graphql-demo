
export function up(knex, Promise) {
  return Promise
    .all([
      knex.schema.dropTableIfExists("comment"),
      knex.schema.dropTableIfExists("post"),
      knex.schema.dropTableIfExists("author"),
    ])
    .then(() => knex.schema.createTable("author", function createUser(table) {
      table.increments("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.timestamps();
    }))
    .then(() => knex.schema.createTable("comment", function createComment(table) {
      table.increments("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("body").notNullable();
      table.timestamps();
    }))
    .then(() => knex.schema.createTable("post", function createPost(table) {
      table.increments("id").primary();
      table.integer("author_id").notNullable().unsigned().references("id").inTable("author");
      table.string("title").notNullable();
      table.string("slug").notNullable().unique();
      table.string("body").notNullable();
      table.timestamps();
    }))
    .catch((err) => {
      throw err;
    })
  ;
}

export function down(knex, Promise) {
  return knex.schema.dropTable("post")
    .then(() => knex.schema.dropTable("comment"))
    .then(() => knex.schema.dropTable("author"))
  ;
}
