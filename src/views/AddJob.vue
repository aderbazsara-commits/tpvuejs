<template>
  <h1>Ajouter un emploi</h1>
  <p class="error" v-if="error">{{ error }}</p>
  <JobForm submit-label="Ajouter" @submit="ajouter" />
</template>

<script>
import JobForm from '../components/JobForm.vue'
import { api } from '../api.js'

export default {
  name: 'AddJob',
  components: { JobForm },
  data() {
    return { error: null }
  },
  methods: {
    async ajouter(jobData) {
      try {
        await api.create(jobData)
        this.$router.push('/')
      } catch (err) {
        console.log(err)
        this.error = "L'ajout a échoué."
      }
    }
  }
}
</script>
