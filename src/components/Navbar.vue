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
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item mr-sm-2">
          <router-link to="/login" class="nav-link text-white" 
            >Login</router-link
          >
        </li>
      </ul>
      <ul class="form-inline navbar-nav ml-auto mr-4" v-if="users">
        <li class="nav-item">
          <router-link to="/index" class="nav-link text-white"
            >Operações <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <a @click="handleClick" href="javascript:void(0)" class="nav-link text-white"
            >Logout <span class="sr-only">(current)</span></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar",
  props: ['users'],
  methods: {
    handleClick(){
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.navbarLogo {
  width: 30px;
}
.nav-bg {
  background-color: rgba(54, 54, 54, 0.8);
}
</style>
