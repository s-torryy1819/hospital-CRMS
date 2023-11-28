import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  props: ['userInfo'],
  data() {
    return {
      userInfo: this.userInfo,
      allUsers: {},
    };
  },
  methods: {
    async getAllUsers() {
      const response = await axios.get("http://localhost:8080/getAllUsers");
      this.allUsers = response.data;
    },
    includesAuth(page) {
      if (this.userInfo?.auths)
        for (var userAuth of this.userInfo?.auths)
          if (page.auth.length === 0 || page.auth.includes(userAuth))
            return true
      return false
    },
  },
  beforeMount() {
    this.getAllUsers();
  },
  template: `
      <br/>
      <div class="turn_items appointment_header">
          <div>
            <img src="/images/output-onlinepngtools.png" alt="Doctors"  style="width: 70vw;">
          </div>

      </div>

      <table class="table table-bordered table-hover">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">Doctor ID</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col" v-if="userInfo?.auths?.includes('ADMIN')">Year of Birth</th>
      <th scope="col" v-if="userInfo?.auths?.includes('ADMIN')">Address</th>
      <th scope="col" v-if="userInfo?.auths?.includes('ADMIN')">Phone</th>
      <th scope="col">Speciality</th>
      <th scope="col">Child Doctor</th>
      <th scope="col">Price Per Visit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allUsers">
      <template v-if="user?.authorities[0].authority === 'DOCTOR'">
        <th scope="row"># {{ user.userId }}</th>
        <th scope="row">{{ user.name }}</th>
        <th scope="row">{{ user.surname }}</th>
        <th scope="row" v-if="userInfo?.auths?.includes('ADMIN')">{{ user.yearOfBirth }}</th>
        <th scope="row" v-if="userInfo?.auths?.includes('ADMIN')">{{ user.address }}</th>
        <th scope="row" v-if="userInfo?.auths?.includes('ADMIN')">{{ user.phone }}</th>
        <th scope="row">{{ user.speciality }}</th>
        <th scope="row">{{ user.childDoctor }}</th>
        <th scope="row">{{ user.pricePerVisit }} ua hrv</th>
      </template>
    </tr>
  </tbody>
</table>
      `,
};
