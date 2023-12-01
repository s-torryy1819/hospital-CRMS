import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allVisits: {},
      userInfo: {},
      noVisits: null
    };
  },
  methods: {
    async getAllVisits() {
      const data = await axios.get("http://localhost:8080/userInfo");
      this.userInfo = data.data.auths[0];

      if (this.userInfo == "ADMIN") {
        const response = await axios.get("http://localhost:8080/getAllVisits");
        this.allVisits = response.data;
      }
      else if (this.userInfo == "DOCTOR" || this.userInfo == "PATIENT") {
        const response = await axios.get("http://localhost:8080/getVisitsForUser");
        this.allVisits = response.data;
      }

      this.noVisits = (this.allVisits.length == 0);
    },
    deleteVisit(appId) {

      axios.post(`/deleteVisit`, null, {
        params: {
          itemId: appId
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));

      window.location.reload();
    },
  },
  beforeMount() {
    this.getAllVisits();
  },
  template: `
  <br/><br/>
      <div class="turn_items appointments_container">
      <div>
      <img src="/images/personal.png" alt="Calendar"  style="width: 20vw;">
      </div>

      <div v-if="noVisits" class="radius_wrapper notification_wrapper">
        <div class="notification">
          Visit History for your profile is empty..
        </div>
      </div>

      <table v-else class="table table-bordered table-hover">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Visit ID</th>
          <th scope="col">Date</th>
          <th scope="col">Patient</th>
          <th scope="col">Doctor</th>
          <th scope="col">Cabinet</th>
          <th scope="col">Disease</th>
          <th scope="col">Purpose</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="visit in allVisits">
          <td># {{ visit.visitId }}</td>
          <td>{{ visit.date }}</td>
          <td><b># {{ visit.patient.userId }} - <b/> {{ visit.patient.name }} {{ visit.patient.surname }}</td>
          <td><b>{{ visit.doctor.speciality }}<b/> {{ visit.doctor.name }} {{ visit.doctor.surname }}</td>
          <td># {{ visit.cabinet.cabinetId }} - {{ visit.cabinet.description }}</td>
          <td>{{ visit.disease }}</td>
          <td>{{ visit.purpose }}</td>
          <td>
            <input type="button" @click="deleteVisit(visit.visitId)" class="btn-rounded btn-danger text-white exit_btn" value="Delete"></input>
          </td>
        </tr>
      </tbody>
    </table>
      
      `,
};

