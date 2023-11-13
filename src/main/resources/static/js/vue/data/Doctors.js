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
            <img src="/images/doctors.png" alt="Doctors"  style="width: 15vw;">
          </div>
          <div class="bg-info text_wrapper radius_wrapper">
            <h4 class="text-white ">Here you can see all the Doctors and data about them</h4>
          </div>

      </div>

      <table class="table">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">DOCTOR ID</th>
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
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.userId }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.name }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.surname }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.yearOfBirth }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.address }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.phone }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.speciality }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.childDoctor }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.pricePerVisit }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.availableTime }}</th>
      <th scope="row" v-if="user.authorities[0].authority === 'DOCTOR'">{{ user.blockedTime }}</th>
    </tr>
  </tbody>
</table>
      `,
};
