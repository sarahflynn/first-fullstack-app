<template>
  <div>
    <h2>{{ animal.name }}</h2>
    <img :src="animal.url"/>
    <p> Type: {{ type.type }}</p>
    <p> Age: {{ animal.age }}</p>
    <p> Dangerous: {{ animal.dangerous }}</p>
    <p> Pet: {{ type.pet }}</p>
  </div>
</template>

<script>
export default {
  props: {
    animal: Object,
    type: String
  }
};
</script>

<style>

</style>