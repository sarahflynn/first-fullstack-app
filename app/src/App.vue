<template>
  <div id="app">
    <h1>Cute Animals</h1>
    <nav>
      <router-link class="nav" to="/">Home</router-link>
      <router-link class="nav" to="/list">Animals</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

.nav {
  padding: 20px;
}
</style>
