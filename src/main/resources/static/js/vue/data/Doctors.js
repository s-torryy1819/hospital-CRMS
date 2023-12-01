import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  props: ['userInfo'],
  data() {
    return {
      userInfo: this.userInfo,
      allDoctors: {},
    };
  },
  methods: {
    async getAllDoctors() {
      const response = await axios.get("http://localhost:8080/getAllDoctors");
      this.allDoctors = response.data;
    },
    includesAuth(page) {
      if (this.userInfo?.auths)
        for (var userAuth of this.userInfo?.auths)
          if (page.auth.length === 0 || page.auth.includes(userAuth))
            return true
      return false
    },

    deleteUser(dusername) {

      axios.post(`/deleteDoctor`, null, {
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
    this.getAllDoctors();
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
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in allDoctors">
        <td># {{ user.userId }}</td>
        <td><b>{{ user.name }}</b></td>
        <td><b>{{ user.surname }}</b></td>
        <td v-if="userInfo?.auths?.includes('ADMIN')">{{ user.yearOfBirth }}</td>
        <td v-if="userInfo?.auths?.includes('ADMIN')">{{ user.address }}</td>
        <td v-if="userInfo?.auths?.includes('ADMIN')">{{ user.phone }}</td>
        <td><b>{{ user.speciality }}</b></td>
        <td v-if="user.childDoctor"><p class="p_turn_items">Yes <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128578;</p></p></td>
        <td v-else ><p class="p_turn_items">No <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128532;</p></p></td>
        <td>{{ user.pricePerVisit }} ua hrv</td>
        <td>
          <input type="button" @click="deleteUser(user.username)" class="btn-rounded btn-danger text-white exit_btn" value="Delete"></input>
        </td>
    </tr>
  </tbody>
</table>
      `,
};
