import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allUsers: {},
    };
  },
  methods: {
    async getAllUsers() {
      const response = await axios.get("http://localhost:8080/getAllUsers");
      this.allUsers = response.data;
    },
  },
  beforeMount() {
    this.getAllUsers();
  },
  template: `
      <br/>
      <div class="turn_items appointments_container">
      <table class="table">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">Patient ID</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Year of Birth</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">WorkAddress</th>
      <th scope="col">Disability</th>
      <th scope="col">Visit History Id</th>
      <th scope="col">ChronicDiseases</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allUsers">
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.userId }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.name }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.surname }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.yearOfBirth }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.address }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.phone }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.workAddress }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.disability }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.visitHistoryId }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'PATIENT'">{{ user.chronicDiseases }}</th>
    </tr>
  </tbody>
</table>
</div>
      `,
};
