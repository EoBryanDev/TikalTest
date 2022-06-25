<template>
  <div>
    <Navbar />

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12">
          <h2 class="display-4">Clientes disponíveis</h2>
          <hr />
          <router-link to="/create" class="btn btn-success mb-3"
            >Adicionar cliente</router-link
          >
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="client in clients" :key="client.id">
                <th scope="row">{{ client.id }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.mobile }}</td>
                <td>
                  <button class="btn btn-warning mr-1" @click="clickEditHandler(client)">Edit</button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Client Delete
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">Are you sure to remove the data? </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Return
                          </button>
                          <button @click="clickDeleteHandler" type="button" class="btn btn-danger">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../NavBar.vue";
//import axios from "axios";
//import jwt_decode from 'jwt-decode'
export default {
  name: "IndexPage",
  components: {
    Navbar,
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "a",
          email: "a.a@a.com",
          mobile: "111-111",
        },
        {
          id: 2,
          name: "b",
          email: "b.b@b.com",
          mobile: "222-222",
        },
        {
          id: 3,
          name: "c",
          email: "c.c@c.com",
          mobile: "333-333",
        },
      ],
    };
  },
  methods: {
    clickDeleteHandler(){
        console.log('deleting... ')
        this.$router.push('/index')
    },
    clickEditHandler(client){
        console.log(client)
    }
  }
  /*async created() {  
        const response = await axios.get('clientes', {
            headers: {
                //token adicionado manualmente ao localstorage quando fiz a requisição de login ("getToken")
            'Authorization': 'Barer ' + localStorage.getItem('token')
            }
        })
        console.log(response)

  },*/
};
</script>

<style scoped></style>
