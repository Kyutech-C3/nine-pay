<template>
  <div>
    <div class="button" v-if="$route.path !== '/'">
      <a href="/" class="back-button">もどる</a>
    </div>
    <div class="logo-wrapper">
      <div class="logo-NINE">NINE</div>
      <div class="logo-Pay">Pay</div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.logo-wrapper {
  width: 100%;
  height: 78px;
  background: white;
  border-bottom: solid 2px #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-text {
  width: 100%;
}
.logo-NINE {
  font-size: 40px;
  font-weight: bold;
  font-family: 'Yu Gothic UI', sans-serif;
}
.logo-Pay {
  width: 65px;
  height: 50px;
  margin-left: 20px;
  font-size: 32px;
  font-weight: bold;
  background: #06c755;
  color: white;
  font-family: 'Yu Gothic UI', sans-serif;
}
.button {
  position: absolute;
  margin: 10px;
}

.back-button {
  display: inline-block;
  text-decoration: none;
  background: #fab47a;
  color: rgb(0, 0, 0);
  width: 60px;
  height: 60x;
  line-height: 60px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  transition: 0.4s;
}
.back-button:hover {
  background-color: #ff8e3c;
}
</style>
