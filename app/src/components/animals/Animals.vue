<template>
  <div>
    <AddAnimal :onAdd="handleAdd"/>
    <h2>Animals List</h2>
    <Animal v-for="animal in animals"
      :key="animal.id"
      :animal="animal"
    />
  </div>
</template>

<script>
import Animal from './Animal.vue';
import AddAnimal from './AddAnimal.vue';
import api from '../../services/api.js';

export default {
  data() {
    return {
      animals: null
    };
  },
  created() {
    api.getAnimals()
      .then(animals => {
        this.animals = animals;
        console.log('animals', this.animals);
      });

  },
  components: {
    Animal,
    AddAnimal
  },
  methods: {
    handleAdd(animal) {
      return api.addAnimal(animal)
        .then(saved => {
          this.animals.push(saved);
        });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
