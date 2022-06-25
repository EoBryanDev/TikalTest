<template>
  <div>
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Home from "./components/Home/Home";
export default {
  name: "App",
  components: {
    Home,
  },
  
};
</script>

<style></style>
