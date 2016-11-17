'use strict'

const Schema = use('Schema')

class ImagesTableSchema extends Schema {

  up () {
    this.create('images', (table) => {
      table.increments()
      table.timestamps()
      table.string('caption').notNullable()
      table.string('url').notNullable()
      table.string('description').notNullable()
      table.integer('likes')
    })
  }

  down () {
    this.drop('images')
  }

}

module.exports = ImagesTableSchema
