import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allAppointments: {},
      userInfo: {},
      noAppointments: null
    };
  },
  methods: {
    async getAllAppointments() {
      const data = await axios.get("http://localhost:8080/userInfo");
      this.userInfo = data.data.auths[0];

      if (this.userInfo == "ADMIN") {
        const response = await axios.get("http://localhost:8080/getAllAppointments");
        this.allAppointments = response.data;
      }
      else if (this.userInfo == "DOCTOR" || this.userInfo == "PATIENT") {
        const response = await axios.get("http://localhost:8080/getAppointmentsForUser");
        this.allAppointments = response.data;
      }

      this.noAppointments = (this.allAppointments.length == 0);
    },

    deleteAppointment(appId) {

      axios.post(`/deleteAppointment`, null, {
        params: {
          appointmentId: appId
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));

      window.location.reload();
    },
  },
  beforeMount() {
    this.getAllAppointments();
  },
  template: `
      <div class="turn_items appointment_header">
          <div>
            <img src="/images/output-onlinepngtools (2).png" alt="Doctors"  style="width: 40vw;">
          </div>

      </div><br/>

      <div v-if="noAppointments" class="radius_wrapper notification_wrapper">
        <div class="notification">
          No appointments..
        </div>
      </div>

      <table v-else class="table table-bordered table-hover">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Appointment ID</th>
          <th scope="col">Doctor</th>
          <th scope="col">Patient</th>
          <th scope="col">Cabinet</th>
          <th scope="col">Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in allAppointments">
          <td># {{ appointment.doctorAppointmentId }}</td>
          <td>{{ appointment.doctor.name }} {{ appointment.doctor.surname }} - <b>{{ appointment.doctor.speciality }}<b/></td>
          <td>{{ appointment.patient.name }} {{ appointment.patient.surname }}</td>
          <td><b># {{ appointment.cabinet.cabinetId }} - <b/> {{ appointment.cabinet.description }}</td>
          <td>{{ appointment.date }}</td>
          <td><input type="button" @click="deleteAppointment(appointment.doctorAppointmentId)" class="btn-rounded btn-danger text-white exit_btn"  value="Cancel"></input></td>
        </tr>
      </tbody>
    </table>
      `,
};
