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
      const response = await axios.get("http://localhost:8080/getAllPatients");
      this.allUsers = response.data;
    },
    deleteUser(p_username) {

      axios.post(`/deletePatient`, null, {
        params: {
          username: p_username
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));

      window.location.reload();
    },
  },
  beforeMount() {
    this.getAllUsers();
  },
  template: `
      <br/><br/>
      <div class="turn_items appointments_container">
      <table class="table table-bordered table-hover">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">Patient ID</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Year of Birth</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Work Address</th>
      <th scope="col">Disability</th>
      <th scope="col">Visit History Ids</th>
      <th scope="col">Chronic Diseases</th>
      <th scope="col" v-if="userInfo?.auths?.includes('ADMIN')">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allUsers">
      <td v-if="user.authorities[0].authority === 'PATIENT'"># {{ user.userId }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.name }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.surname }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.yearOfBirth }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.address }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.phone }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.workAddress }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">
        <p v-if="user.disability" class="p_turn_items">Yes <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128532;</p></p>
        <p v-else class="p_turn_items">No <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128578;</p></p>
      </td>
      <td v-if="user.authorities[0].authority === 'PATIENT'"># {{ user.visitHistoryIdList.toString() }}</td>
      <td v-if="user.authorities[0].authority === 'PATIENT'">{{ user.chronicDiseases }}</td>
      <td v-if="userInfo?.auths?.includes('ADMIN')">
        <input type="button" @click="deleteUser(user.username)" class="btn-rounded btn-danger text-white exit_btn" value="Delete"></input>
      </td>
    </tr>
  </tbody>
</table>
</div>
      `,
};
