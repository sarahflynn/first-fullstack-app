<template>
  <div>
    <h2>Edit Animal</h2>
    <form @submit.prevent="handleSubmit">
      <p>Name:<br/>
        <input name="name" placeholder="Name" required v-model="animal.name">
      </p>
      <p>Type:<br/>
        <select v-model.number="animal.type_id" required>
          <option disabled value="">Type</option>
          <option
            v-for="type in types"
            :key="type.id"
            :value="type.id">
            {{ type.type }}
          </option>
        </select>
      </p>
      <p>Age:<br/>
        <input type="number" name="age" placeholder="Age" required v-model="animal.age">
      </p>
      <p>Dangerous:<br/>
        <select name="dangerous" required v-model="animal.dangerous">
          <option :value="true">True</option>
          <option :value="false">False</option>
        </select>
      </p>
      <p>Image URL:<br/>
        <input name="url" placeholder="URL" required v-model="animal.url">
      </p>
      <p>
        <button>Update</button>
      </p>
    </form>
  </div>
</template>

<script>
import api from '../../services/api.js';

const initAnimal = () => {
  return {
    id: '',
    name: '',
    type: '',
    age: '',
    dangerous: '',
    url: ''
  };
};

export default {
  props: {
    onUpdate: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      animal: initAnimal(),
      types: null,
      animals: null
    };
  },
  created() {
    api.getTypes()
      .then(types => {
        this.types = types;
      });
    api.getAnimals()
      .then(animals => {
        this.animals = animals;
      });
  },
  methods: {
    handleSubmit() {
      this.onUpdate(this.animal);
      console.log('animal', this.animal)
        .then(() => {
          this.animal.id = this.$route.params.key;
          this.animal = initAnimal();
        });
    }
  }
};
</script>

<style>

</style>
