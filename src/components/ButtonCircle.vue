<template>
  <router-link class="button-circle" :to="link">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
}
</script>

<style scoped>
.button-circle {
  font-size: 35px;
  display: inline-block;
  text-decoration: none;
  background: #fffde8;
  color: rgb(0, 0, 0);
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #fffde8;
  border: dashed 2px #ffb03f;
  transition: 0.4s;
  box-shadow: 3px 3px 10px silver;
}
.button-circle:hover {
  background-color: #f3c590;
}
</style>
