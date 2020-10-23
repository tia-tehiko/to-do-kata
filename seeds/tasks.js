exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, name: 'update portfolio' },
        { id: 2, name: 'do washing' },
        { id: 3, name: 'ring mum' }
      ])
    })
}
