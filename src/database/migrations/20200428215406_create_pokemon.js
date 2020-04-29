
exports.up = function(knex) {
  return knex.schema.createTable('pokemon', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('front-default').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemon');
};
