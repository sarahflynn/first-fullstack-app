<template>
  <div>
    <h2>Animals List</h2>
    <Animal v-for="animal in animals"
      :key="animal.id"
      :animal="animal"
    />
  </div>
</template>

<script>
import Animal from './Animal';
import api from '../../services/api';

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
      });
  },
  components: {
    Animal
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
