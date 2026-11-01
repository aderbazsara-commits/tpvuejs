<!-- Formulaire partagé par AddJob (vide) et EditJob (pré-rempli) -->
<template>
  <form @submit.prevent="soumettre">
    <label>Titre
      <input v-model="form.title" required />
    </label>
    <label>Entreprise
      <input v-model="form.company" required />
    </label>
    <label>Description
      <textarea v-model="form.description" rows="4" required></textarea>
    </label>
    <label>Salaire (MAD)
      <input v-model.number="form.salary" type="number" min="0" required />
    </label>
    <label>Années d'expérience
      <input v-model.number="form.experience" type="number" min="0" required />
    </label>
    <label>Date de création
      <input v-model="form.createdAt" type="date" required />
    </label>
    <button type="submit">{{ submitLabel }}</button>
  </form>
</template>

<script>
export default {
  name: 'JobForm',
  props: {
    job: { type: Object, default: null },
    submitLabel: { type: String, default: 'Enregistrer' }
  },
  emits: ['submit'],
  data() {
    return {
      form: {
        title: '',
        company: '',
        description: '',
        salary: 0,
        experience: 0,
        createdAt: new Date().toISOString().slice(0, 10),
        ...this.job // pré-remplissage en édition
      }
    }
  },
  methods: {
    soumettre() {
      this.$emit('submit', { ...this.form })
    }
  }
}
</script>
