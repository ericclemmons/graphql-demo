export function seed(knex, Promise) {
  return knex("post").del()
    .then(() => knex("comment").del())
    .then(() => knex("author").del())
    .then(() => Promise.all([
      knex("author").insert({
        id: 1,
        name: "Eric Clemmons",
        email: "eric@smarterspam.com",
        created_at: new Date(),
      }),

      knex("post").insert({
        id: 1,
        author_id: 1,
        title: "Hello GraphQL",
        slug: "hello-graphql",
        body: `
> Just a normal demo
> - Eric
        `,
        created_at: new Date(),
      }),

      knex("comment").insert({
        name: "Matthew Mueller",
        email: "mattmuelle@gmail.com",
        body: `
Yea, [graph.ql][1] is cleaner.

[1]: https://github.com/matthewmueller/graph.ql
        `,
        created_at: new Date(),
      }),
    ]))
  ;
}
