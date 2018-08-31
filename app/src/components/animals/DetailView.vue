<template>
  <AnimalDetail :type="type" v-if="animal" :animal="animal"/>
</template>

<script>
import api from '../../services/api.js';
import AnimalDetail from './AnimalDetail.vue';

export default {
  data() {
    return {
      animal: null,
      types: null
    };
  },
  created() {
    api.getAnimal(this.$route.params.id)
      .then(animal => {
        this.animal = animal;
      });
    api.getTypes()
      .then(types => {
        this.types = types;
      });
  },
  components: {
    AnimalDetail
  },
  computed: {
    type() {
      if(!this.animal || !this.types) {
        return null;
      }

      const { type_id } = this.animal;
      console.log('type', this.animal);
      return this.types.find(t => t.id === type_id);
    }
  }
};
</script>

<style>

</style>
