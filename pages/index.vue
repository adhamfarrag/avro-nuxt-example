<template>
  <div class="flex h-screen items-center justify-center">
    <span>{{ msg }}</span>
    <pre>
        {{ avroSchema }}
    </pre>
    <pre>
        {{ parcedAvroSchema }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Nuxt.js App',
      avroSchema: {
        type: 'record',
        namespace: 'Tutorialspoint',
        name: 'Employee',
        fields: [
          { name: 'Name', type: 'string' },
          { name: 'Age', type: 'int' },
        ],
      },
      parcedAvroSchema: {},
    }
  },
  methods: {
    async parseASchema() {
      let results = await this.$avro.parseSchema(this.avroSchema)
      this.parcedAvroSchema = results
    },
  },
  mounted() {
    this.parseASchema()
  },
}
</script>
