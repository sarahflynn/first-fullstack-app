<template>
  <div>
    <h2>{{ animal.name }}</h2>
    <img :src="animal.url"/>
    <p v-if="type"> Type: {{ type.type }}</p>
    <p> Age: {{ animal.age }}</p>
    <p> Dangerous: {{ animal.dangerous }}</p>
    <p v-if="type"> Pet: {{ type.pet }}</p>
    <EditAnimal
      :animal="animal"
      :onUpdate="handleUpdate"
    />
    <p>
      <button @click="handleRemove">Remove this animal</button>
    </p>
  </div>
</template>

<script>
import api from '../../services/api.js';
import EditAnimal from './EditAnimal.vue';

export default {
  props: {
    animal: Object,
    type: Object
  },
  components: {
    EditAnimal
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are your sure you want to remove ${this.animal.name}?`)) {
        return;
      }

      return api.removeAnimal(this.animal.id)
        .then(() => {
          this.$router.push('/animals');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateAnimal(toUpdate)
        .then(updated => {
          this.animal = updated;
          this.editing = false;
        });
    }
  }
};
</script>

<style>

</style>