<template>
  <div class="header">
    <a v-if="$route.path !== '/'" class="button back" @click="$router.back()">
      <font-awesome-icon icon="arrow-left" size="2x" />
    </a>
    <div class="logo-wrapper">
      <p class="logo-NINE">NINE</p>
      <p class="logo-Pay">Pay</p>
    </div>
    <router-link v-if="$route.path === '/list'" to="/add" class="button add">
      <font-awesome-icon icon="plus" size="2x" />
    </router-link>
  </div>
</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 78px;
  background: white;
  border-bottom: solid 2px #2c3e50;
}
.logo-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Yu Gothic UI', sans-serif;
  font-weight: bold;
}
.logo-NINE {
  font-family: 'Roboto', 'sans-serif';
  font-size: 33px;
  margin-right: -0.4em;
}
.logo-Pay {
  font-family: 'Roboto', 'sans-serif';
  width: 65px;
  margin-left: 20px;
  font-size: 28px;
  background: #06c755;
  color: #ffffff;
  padding-top: 0.1em;
  height: 1.3em;
  border-radius: 5px;
}
.button {
  margin: 23px;
  position: absolute;
  top: 0;
  transition: 0.2s;
  color: black;
}
.button:hover {
  color: #ff8e3c;
}
.back {
  left: 0;
}
.add {
  right: 0;
}
</style>
