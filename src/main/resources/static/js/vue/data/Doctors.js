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
      <th scope="col">Year of Birth</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Speciality</th>
      <th scope="col">Child Doctor</th>
      <th scope="col">Price Per Visit</th>
      <th scope="col">Available Time</th>
      <th scope="col">Blocked Time</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allUsers">
      <template v-if="user?.authorities[0].authority === 'DOCTOR'">
        <th scope="row">{{ user.userId }}</th>
        <th scope="row">{{ user.name }}</th>
        <th scope="row">{{ user.surname }}</th>
        <th scope="row">{{ user.yearOfBirth }}</th>
        <th scope="row">{{ user.address }}</th>
        <th scope="row">{{ user.phone }}</th>
        <th scope="row">{{ user.speciality }}</th>
        <th scope="row">{{ user.childDoctor }}</th>
        <th scope="row">{{ user.pricePerVisit }}</th>
        <th scope="row">
          <ul>
            <li v-for="time in user.availableTime">{{time}}</li>
          </ul>
        </th>
        <th scope="row">
          <ul>
            <li v-for="time in user.blockedTime">{{time}}</li>
          </ul>
        </th>
      </template>
    </tr>
  </tbody>
</table>
      `,
};
