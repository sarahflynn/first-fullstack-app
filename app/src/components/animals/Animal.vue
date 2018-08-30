<template>
  <div>
    <router-link :to="`/${animal.id}`">{{ animal.name }}</router-link> <br/>
    <img :src="animal.url"/>
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
