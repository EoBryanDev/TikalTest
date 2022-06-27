<template>
  <div>
    <NavBar :users="users" />
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-md-8">
          <h2 class="display-4">Client List</h2>
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
            <tbody v-if="users">
              <tr
                class="rep"
                v-for="user in users"
                :key="user.id"
                @click.prevent="showDetails(user)"
              >
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
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
                    class="btn btn-danger"
                    data-toggle="modal"
                    data-target="#deleteModal"
                    @click.prevent="setDeleting(user.id, user.name, user.email)"
                  >
                    Delete
                  </button>
                  <!--delete modal-->
                  <div
                    class="modal fade"
                    id="deleteModal"
                    tabindex="-1"
                    aria-labelledby="deleteModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="deleteModalLabel">
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
                          <h3>
                            Are you sure to remove: {{ currentDeleting.name }}
                            {{ currentDeleting.email }}?
                          </h3>
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
                            @click="deleted(currentDeleting.id)"
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
          <hr />
        </div>
        <div class="col-md-4">
          <h1 class="display-4">Details</h1>
          <hr />
          <div class="card vh-75" v-if="detailsUser.show">
            <div class="card-body">
              <h5 class="card-title">{{ detailsUser.name }}</h5>
              <hr />
              <div class="mb-2">
                <h6>Email</h6>
                <hr class="mt-0 mb-1" />
                <p class="card-text mb-3">
                  {{ detailsUser.email }}
                </p>
              </div>
              <div class="mb-2">
                <h6>Mobile</h6>
                <hr class="mt-0 mb-1" />
                <p class="card-text mb-3">
                  {{ detailsUser.mobile }}
                </p>
              </div>
              <div>
                <h6>Others Info</h6>
                <hr class="mt-0 mb-1" />

                <div class="row mt-3">
                  <div class="col-md-6">
                    <h6>Created At</h6>
                    <p class="card-text">
                      {{ detailsUser.createdAt }}
                    </p>
                  </div>
                  <div class="col-md-6">
                    <h6>Updated At</h6>
                    <p class="card-text">
                      {{ detailsUser.updatedAt }}
                    </p>
                  </div>
                  <div class="col-md-12">
                    <p class="card-text">
                      <button
                        class="btn btn-info btn-block mt-4"
                        @click.prevent="dismissCard"
                      >
                        Close
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container" v-if="!detailsUser.show">
            <div class="d-flex justify-content-center mt-4">
              <div class="col-6 text-center">
                <h6><em> Click in a row to see details... </em></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <form @submit.prevent="research()" class="form-inline ml-4 mb-4">
            <div class="form-group row">
              <input
                type="text"
                class="form-control mr-2"
                placeholder="Search by id"
                v-model="researchInput"
                id="inputPassword"
              />
              <button class="btn btn-success">Lupa</button>
            </div>
          </form>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
              </tr>
            </thead>
            <tbody v-if="researchUser">
              <tr>
                <th scope="row">{{ researchUser.id }}</th>
                <td>{{ researchUser.name }}</td>
                <td>{{ researchUser.email }}</td>
                <td>{{ researchUser.mobile }}</td>
                <td>{{ researchUser.createdAt }}</td>
                <td>{{ researchUser.updatedAt }}</td>
              </tr>
              <tr>
                <td
                  v-if="researchUser == 'not'"
                  colspan="6"
                  class="text-center"
                >
                  <strong> Id do not found </strong>
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
import NavBar from "../NavBar";
import Update from "./CrudModal/Update";
import axios from "axios";
export default {
  name: "IndexPage",
  components: {
    NavBar,
    Update,
  },
  data() {
    return {
      users: null,
      researchInput: null,
      researchUser: null,
      currentUser: {
        id: "",
        name: "",
        email: "",
        mobile: "",
        createdAt: "",
        updatedAt: "",
      },
      currentDeleting: {
        id: null,
        name: null,
        email: null,
      },
      detailsUser: {
        show: false,
        id: "",
        name: "",
        email: "",
        mobile: "",
        createdAt: "",
        updatedAt: "",
      },
    };
  },
  methods: {
    dismissCard() {
      this.detailsUser.show = false;
    },
    async research() {
      const response = await axios.get(`clientes/${this.researchInput}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
      if (response.data != null) {
        this.researchUser = response.data;
      } else {
        this.researchUser = "not";
      }

      console.log(this.researchUser);
    },
    recoverData(user) {
      this.currentUser.id = user.id;
      this.currentUser.name = user.name;
      this.currentUser.email = user.email;
      this.currentUser.mobile = user.mobile;
      this.currentUser.createdAt = user.createdAt;
      this.currentUser.updatedAt = user.updatedAt;
      console.log(this.currentUser);
    },
    async deleted(id) {
      try {
        const response = await axios.delete(`clientes/${id}`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        console.log(response);
        this.$router.push("/index");
      } catch (error) {
        console.log(error);
      }
      //console.log(id)
    },
    showDetails(user) {
      this.detailsUser.show = true;
      this.detailsUser.id = user.id;
      this.detailsUser.name = user.name;
      this.detailsUser.email = user.email;
      this.detailsUser.mobile = user.mobile;
      this.detailsUser.createdAt = user.createdAt;
      this.detailsUser.updatedAt = user.updatedAt;
    },
    clickDeleteHandler(id) {
      console.log(id);
      this.$router.push("/index");
    },
    setDeleting(id, name, email) {
      this.currentDeleting.id = id;
      this.currentDeleting.name = name;
      this.currentDeleting.email = email;
      console.log(this.currentDeleting);
    },
  },
  async created() {
    try {
      const response = await axios.get("clientes", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      this.users = response.data[0];
    } catch (err) {
      this.$router.push("/login");
      console.log(err);
    }
  },
};
</script>

<style scoped>
.rep:hover {
  background-color: #b5ebf3;
  cursor: pointer;
}
</style>
