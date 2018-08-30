<template>
  <div>
    <h2>{{ animal.name }}</h2>
    <img :src="animal.url"/>
    <p> Type: {{ animal.type }}</p>
    <p> Age: {{ animal.age }}</p>
    <p> Dangerous: {{ animal.dangerous }}</p>
  </div>
</template>

<script>
export default {
  props: {
    animal: Object
  }
};
</script>

<style>

</style>