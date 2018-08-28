<template>
  <div>
    <h3>{{ animal.name }}</h3>
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
