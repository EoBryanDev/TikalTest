<template>
  <div class="login vh-100">
    <NavBar />
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-black">
            <div class="d-flex align-items-center p-5 m-4">
              <form @submit.prevent="handleSubmit" class="loginForm">
                <div class="text-center mb-2">
                  <img
                    src="../../../public/tikal_tech_logotype.webp"
                    alt="Tikal logotype"
                  />
                </div>
                <h3
                  class="fw-normal mb-2 pb-3 text-center"
                  style="letter-spacing: 1px"
                >
                  Welcome back
                </h3>
                <p class="text-center mb-4">
                  To connect to your account fill the form with valid email and
                  password!
                </p>
                <LoginError v-if="err" :err="err" />
                <div class="form-outline mb-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="bi bi-person"></i>
                      </div>
                      <input
                        v-model="user"
                        placeholder="Type Email"
                        type="email"
                        class="form-control form-control-lg user"
                      />
                    </div>
                  </div>
                  <label class="form-label" for="form2Example18">User </label>
                </div>

                <div class="form-outline mb-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="bi bi-lock"></i>
                      </div>
                      <input
                        v-model="pwd"
                        placeholder="Type Password"
                        type="password"
                        class="form-control form-control-lg"
                      />
                    </div>
                  </div>
                  <label class="form-label" for="form2Example28"
                    >Password</label
                  >
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-6 p-0 m-0 d-none d-sm-block">
            <img
              src="../../assets/tikal_tech_loginBackground.jpg"
              alt="Login image"
              class="loginImage"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../NavBar";
import LoginError from "../Login/LoginHandler/LoginError";
import axios from "axios";
/* eslint-disable */
export default {
  name: "Login",
  components: {
    NavBar,
    LoginError,
  },
  data() {
    return {
      user: "",
      pwd: "",
      err: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          user: this.user,
          pwd: this.pwd,
        };

        const response = await axios.post("login", data);

        console.log(response);
        localStorage.setItem("token", response.data.token);
        this.$router.push("/index");
      } catch (e) {
        this.err = "Invalid Password/Email";
        setTimeout(() => {
          this.user = "";
          this.pwd = "";
          this.err = "";
        }, 1200);
      }
    },
  },
};
</script>

<style scoped>
* {
  overflow: hidden;
}
section {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(179, 179, 179, 0.8) 100%
  );
}
input[type="text"] {
  text-align: left;
}
.loginImage {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.loginForm {
  margin-top: 140px;
  width: 23rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
