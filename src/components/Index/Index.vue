<template>
  <div>
    <Navbar />
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-md-6" v-if="users">
          <h2 class="display-4">Clientes disponíveis</h2>
          <hr />
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="rep" v-for="user in users" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td >{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.mobile }}</td>
                <td>{{ user.createdAt }}</td>
                <td>{{ user.updatedAt }}</td>
                <td>
                  <button
                    class="btn btn-warning mr-1"
                    data-toggle="modal"
                    data-target="#editModal"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete
                  </button>
                  <!--delete modal-->
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
                        <div class="modal-body">
                          Are you sure to remove the data?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Return
                          </button>
                          <button
                            @click="clickDeleteHandler"
                            type="button"
                            class="btn btn-danger"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--update modal-->
                  <div
                    class="modal fade"
                    id="editModal"
                    tabindex="-1"
                    aria-labelledby="editModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="editModalLabel">
                            Client Update
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
                        <div class="modal-body">
                          Are you sure to update the data?
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Return
                          </button>
                          <button
                            @click="clickEditHandler(user)"
                            class="btn btn-warning"
                          >
                            Update
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
        <div class="col-md-6 mt-4" v-if="users">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: {{curretUser.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: {{curretUser.email}}</li>
              <li class="list-group-item">Mobile: {{curretUser.mobile}} </li>
              <li class="list-group-item">Create date:  {{curretUser.createdAt}}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-12" v-if="!users">
          <h1 class="display-1">You're not authenticated!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../NavBar.vue";
import axios from "axios";
//import jwt_decode from 'jwt-decode'
export default {
  name: "IndexPage",
  components: {
    Navbar,
  },
  data() {
    return {
      users: null,
      curretUser: {
        name: '',
        email: '',
        mobile: '',
        createdAt: '',
        updatedAt: '',
      }
    };
  },
  methods: {
    clickDeleteHandler() {
      console.log("deleting... ");
      this.$router.push("/index");
    },
    clickEditHandler(client) {
      console.log(client);
        const data = {
            name: client.id,
            email: client.email,
            mobile: client.mobile,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt,
        }
        this.curretUser = data
    },
  },
  async created() {
    const response = await axios.get("clientes", {
      headers: {
        //token adicionado manualmente ao localstorage quando fiz a requisição de login ("getToken")
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(response);
    this.users = response.data[0];
  },
};
</script>

<style scoped>
.rep:hover{
    background-color: rgb(90, 90, 90);

}
</style>
