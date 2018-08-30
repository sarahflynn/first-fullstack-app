<template>
  <AnimalDetail :animal="animal"/>
</template>

<script>
import api from '../../services/api.js';
import AnimalDetail from './AnimalDetail.vue';

export default {
  data() {
    return {
      animal: null,
    };
  },
  created() {
    this.animal = api.getAnimal(this.$route.params.id)
      .then(animal => {
        this.animal = animal;
      });
  },
  components: {
    AnimalDetail
  }
};
</script>

<style>

</style>
