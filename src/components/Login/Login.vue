<template>
  <div class="login">   
    <NavBar />
    <section class="vh-100 ">
      <div class="container-fluid ">
        <div class="row">
          <div class="col-sm-6 text-black">
            <div
              class="d-flex align-items-center p-5 m-4"
            >
              <form @submit.prevent="handleSubmit" class="loginForm">
                <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                  Login
                </h3>
                <LoginError v-if="err" :err="err" />
                <div class="form-outline mb-4">
                  <input
                    v-model="user"
                    placeholder="Type Email"
                    type="email"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form2Example18"
                    >User</label
                  >
                </div>

                <div class="form-outline mb-4">
                  <input
                    v-model="pwd"
                    placeholder="Type Password"
                    type="password"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="form2Example28"
                    >Password</label
                  >
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-6 p-0 m-0 d-none d-sm-block">
            <img
              src="../../assets/tikal_tech_loginBackground.jpg"
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
import LoginError from "../Login/LoginHandler/LoginError"
import axios from 'axios'
/* eslint-disable */
export default {
  name: "Login",
  components: {
    NavBar,
    LoginError
  },
  data(){
    return{
        user: '',
        pwd: '',
        err: ''
    }
  },
  methods: {
    async handleSubmit(){
      try {
        const data = {
          user : this.user,
          pwd : this.pwd
        }
        
        const response = await axios.post('login', data)
  
        console.log(response)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/index')       
      } catch (e) {
        this.err = 'Invalid Password/Email'
        setTimeout(()=>{
          this.user = ''
          this.pwd = ''
          this.err=''
          },1200)
      }
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
