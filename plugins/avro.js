var avro = require('avro-js')

export default (context, inject) => {
  inject('avro', {
    parseSchema(schema) {
      return avro.parse(schema)
    },

    generate(schema) {
      return avro.stringify(schema)
    },

    generateSchema(schema) {
      return avro.parse(schema)
    },

    generateSchemaString(schema) {
      return avro.stringify(schema)
    },
  })
}
