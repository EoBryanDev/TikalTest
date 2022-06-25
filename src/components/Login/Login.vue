<template>
  <div class="login ">
    <NavBar />
    <section class="vh-100 ">
      <div class="container-fluid ">
        <div class="row">
          <div class="col-sm-6 text-black">
            <div
              class="d-flex align-items-center p-5 m-4"
            >
              <form @submit="handleSubmit()" class="loginForm">
                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                  Login
                </h3>

                <div class="form-outline mb-4">
                  <input
                    v-model="user.email"
                    type="email"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form2Example18"
                    >Email address</label
                  >
                </div>

                <div class="form-outline mb-4">
                  <input
                    v-model="user.password"
                    type="password"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form2Example28"
                    >Password</label
                  >
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block" type="button">
                    Login
                  </button>
                </div>
                {{user.email}} {{user.password}}
              </form>
            </div>
          </div>
          <div class="col-sm-6 p-0 m-0 d-none d-sm-block">
            <img
              src="https://images.pexels.com/photos/2887582/pexels-photo-2887582.jpeg?cs=srgb&dl=pexels-mario-cuadros-2887582.jpg&fm=jpg"
              alt="Login image"
              class="w-100 vh-100"
              style="object-fit: cover; object-position: left"
            />
          </div>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import NavBar from "../NavBar";
/* eslint-disable */
export default {
  name: "Login",
  components: {
    NavBar,
  },
  data(){
    return{
      user : {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit(){
      console.log('oi')
    }
  }
};
</script>

<style scoped>

.loginForm{
  margin-top: 175px;
  width: 23rem;
  margin-left: auto;
  margin-right: auto;

}
</style>
