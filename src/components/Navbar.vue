<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-bg">
    <a class="navbar-brand" href="#"
      ><img
        src="../../public/tikal_tech_logotype.webp"
        alt="tikal brand"
        class="navbarLogo"
    /></a>
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon "></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="form-inline navbar-nav ml-auto mr-4">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item mr-sm-2">
          <a class="nav-link text-white" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/* eslint-disable */
export default {

  name: "Navbar",
};
</script>

<style scoped>
.navbarLogo {
  width: 30px;
}
.nav-bg{
    background-color: rgba(54, 54, 54,0.8);
}

</style>
