<template>
  <div>
    <h2>Add An Animal</h2>
    <form @submit.prevent="handleSubmit">
      <p>Name:<br/>
        <input name="name" placeholder="Name" required v-model="animal.name">
      </p>
      <p>Type:<br/>
        <input name="type" placeholder="Type" required v-model="animal.type">
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
        <button>Add</button>
      </p>
    </form>
  </div>
</template>

<script>

const initAnimal = () => {
  return {
    name: '',
    type: '',
    age: '',
    dangerous: '',
    url: ''
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      animal: initAnimal()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.animal)
        .then(() => {
          this.animal = initAnimal();
        });
    }
  }
};
</script>

<style>

</style>
