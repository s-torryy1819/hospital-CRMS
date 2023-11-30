import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {

    addNewAdmin() {

      axios.post(`/addNewAdmin`, null, {
        params: {
          username: this.username,
          password: this.password
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
    }
  },
  template: `
      <br/>
      <br/>
      <form>
      <div class="form-group">
      <label class="bg-warning text-white label_wrapper" for="usernameInput">Username</label>
      <input type="text" v-model="username" required class="form-control" id="usernameInput" aria-describedby="username" placeholder="Enter username">
      </div>
    <div class="form-group">
      <label class="bg-warning text-white label_wrapper" for="passInput">Password</label>
      <input type="password" v-model="password" required class="form-control" id="passInput" aria-describedby="Password" placeholder="Enter password">
    </div>
  <button type="submit" class="btn btn-success" @click="addNewAdmin()">Add an Admin</button>
</form>
      
      `,
};
