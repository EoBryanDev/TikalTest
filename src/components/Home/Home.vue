<template>

    <div class="backgroundHome">
        <Navbar />
        <HomeCover />
    </div>
</template>
<script>
/* eslint-disable */
import Navbar from "../Navbar";
import HomeCover from "./HomeCover";
export default {
  name: "Home",
  components: {
    Navbar,
    HomeCover
  },
};
</script>

<style scoped>
    .backgroundHome{
        background-image: url(../../assets/tikal_tech_loginBackground.webp);
        height: 100vh;

    }
</style>