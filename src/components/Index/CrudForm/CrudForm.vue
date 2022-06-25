<template>
  <div>
    <NavBar />
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
            <router-link to="/index" class="btn btn-secondary mb-4">Voltar</router-link>
          <h3>Criar novo Registro</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="" class="">         
            <div class="form-outline mb-4">
              <input
                v-model="name"
                type="text"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form2Example18">Name</label>
            </div>
            <div class="form-outline mb-4">
              <input
                v-model="email"
                type="email"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form2Example18">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input
                v-model="mobile"
                type="text"
                class="form-control form-control-lg"
              />
              <label class="form-label" for="form2Example28">Mobile</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block">Adicionar</button>
            </div>
            {{ name }} {{ email }} {{mobile}}
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../NavBar.vue";
export default {
  name: "CrudForm",
  components: {
    NavBar,
  },
  data(){
    return {
        name: '',
        email: '',
        mobile: ''
    }
  }
};
</script>

<style scoped></style>
