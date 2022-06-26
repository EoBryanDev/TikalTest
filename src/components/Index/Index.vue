<template>
  <div>
    <NavBar :users="users"/>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-md-12" v-if="users">
          <h2 class="display-4">Lista de Clientes</h2>
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
                    @click.prevent="recoverData(user)"
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
                          <Update :dataToUpdate="currentUser" />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="col-md-12" v-if="!users">
          <h1 class="display-1">You're not authenticated!</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../NavBar'
import Update from './CrudModal/Update'
import axios from "axios";
export default {
  name: "IndexPage",
  components: {
    NavBar,
    Update
  },
  data() {
    return {
        users: null,
        currentUser: {
            id: '',
            name: '',
            email: '',
            mobile: '',
            createdAt: '',
            updatedAt: '',
      }
    };
  },
  methods: {
    recoverData(user){
        this.currentUser.id = user.id
        this.currentUser.name = user.name
        this.currentUser.email = user.email
        this.currentUser.mobile = user.mobile
        this.currentUser.createdAt = user.createdAt
        this.currentUser.updatedAt = user.updatedAt
        console.log(this.currentUser)
    },
    clickDeleteHandler() {
      console.log("deleting... ");
      this.$router.push("/index");
    },   
  },
  async mounted() {
    try {
      const response = await axios.get("clientes", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      this.users = response.data[0]
    } catch (err) {
      console.log(err)
    }
  }
};
</script>

<style scoped>
.rep:hover{
    background-color: rgb(217, 255, 202);

}
</style>
