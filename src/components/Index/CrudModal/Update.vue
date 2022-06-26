<template>
  <div>
    <form @submit="submitUpdateHandler">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            :value="dataToUpdate.name"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            :value="dataToUpdate.email"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="mobile">Mobile</label>
          <input
            type="text"
            class="form-control"
            id="mobile"
            :value="dataToUpdate.mobile"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="createdAt">Created At</label>
          <input
            type="text"
            class="form-control"
            id="createdAt"
            :value="dataToUpdate.createdAt"
            disabled
          />
        </div>
        <div class="form-group col-md-6">
          <label for="updatedAt">Updated At</label>
          <input
            type="text"
            class="form-control"
            id="updatedAt"
            :value="dataToUpdate.updatedAt"
            disabled
          />
        </div>
      </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">
        Return
      </button>
      <button class="btn btn-warning">Update</button>
    </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "UpdateForm",
  props: {
    dataToUpdate: Object,
  },
  data() {
    return {
      dataToUpdateForm: {
        id: '',
        name: '',
        email: '',
        mobile: '',
        createdAt: '',
        updatedAt: '',
      },
    };
  },
  methods: {
    async submitUpdateHandler(){
      const data = {
        id: this.dataToUpdate.id,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mobile: document.getElementById('mobile').value,
      }
      try {
        const response = await axios.put(`clientes/${data.id}`, data, {
          headers: {
            "x-access-token": localStorage.getItem("token")
          }
        })     
        console.log(response)
        this.$router.push("/index");
      } catch (error) {
        console.log(error.message)
      }

    }
  }

  }

</script>

<style scoped></style>
