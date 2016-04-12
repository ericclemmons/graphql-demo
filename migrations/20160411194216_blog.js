
export function up(knex, Promise) {
  return Promise
    .all([
      knex.schema.dropTableIfExists("comment"),
      knex.schema.dropTableIfExists("post"),
      knex.schema.dropTableIfExists("user"),
    ])
    .then(() => knex.schema.createTable("user", function createUser(table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.timestamps();
    }))
    .then(() => knex.schema.createTable("comment", function createComment(table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("body");
      table.timestamps();
    }))
    .then(() => knex.schema.createTable("post", function createPost(table) {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("id").inTable("user");
      table.string("title");
      table.string("slug");
      table.string("body");
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
    .then(() => knex.schema.dropTable("user"))
  ;
}
