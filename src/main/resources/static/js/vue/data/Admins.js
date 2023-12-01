import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        axios
    },
    props: ['userInfo'],
    data() {
        return {
            userInfo: this.userInfo,
            allAdmins: {},
        };
    },
    methods: {
        async getAllAdmins() {
            const response = await axios.get("http://localhost:8080/getAllAdmins");
            this.allAdmins = response.data;
        },
        includesAuth(page) {
            if (this.userInfo?.auths)
                for (var userAuth of this.userInfo?.auths)
                    if (page.auth.length === 0 || page.auth.includes(userAuth))
                        return true
            return false
        },

        deleteUser(dusername) {

            axios.post(`/deleteAdmin`, null, {
                params: {
                    username: dusername
                }
            })
                .then(response => response.status)
                .catch(err => console.warn(err));

            window.location.reload();
        },
    },
    beforeMount() {
        this.getAllAdmins();
    },
    template: `
      <br/>

      <table class="table table-bordered table-hover">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">Admin ID</th>
      <th scope="col">Username</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allAdmins">
      <template v-if="user?.authorities[0].authority === 'ADMIN'">
        <td># {{ user.userId }}</td>
        <td><b>{{ user.username }}</b></td>
        <td>
          <input type="button" @click="deleteUser(user.username)" class="btn-rounded btn-danger text-white exit_btn" value="Delete"></input>
        </td>
      </template>
    </tr>
  </tbody>
</table>
      `,
};
