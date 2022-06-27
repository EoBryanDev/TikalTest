<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-bg">
    <router-link to="/" class="navbar-brand" href="#"
      ><img
        src="../../public/tikal_tech_logotype.webp"
        alt="tikal brand"
        class="navbarLogo"
    /></router-link>
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="form-inline navbar-nav ml-auto mr-4" v-if="!users">
        <li class="nav-item active">
          <router-link to="/" class="nav-link text-white"
            ><div class="link"><i class="bi bi-house-door"></i> Home</div>
          </router-link>
        </li>
        <li class="nav-item mr-sm-2">
          <router-link to="/login" class="nav-link text-white"
            ><div class="link">
              <i class="bi bi-box-arrow-in-right"></i> Login
            </div></router-link
          >
        </li>
      </ul>
      <ul class="form-inline navbar-nav ml-auto mr-4" v-if="users">
        <li class="nav-item">
          <a
            @click="clickLogoutHandle"
            href="javascript:void(0)"
            class="nav-link text-white"
            ><div class="link"><i class="bi bi-door-closed"></i> Logout</div></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "NavBar",
  props: ["users"],
  methods: {
    async clickLogoutHandle() {
      const response = await axios.post("logout", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.link:hover {
  color: #17a2b8;
}
.navbarLogo {
  width: 30px;
}
.nav-bg {
  background-color: rgba(54, 54, 54, 0.8);
}
</style>
