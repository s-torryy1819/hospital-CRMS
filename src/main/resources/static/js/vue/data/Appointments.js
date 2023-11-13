import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";


export default {
  components: {
    axios
  },
  data() {
    return {
      allAppointments: {},
    };
  },
  methods: {
    async getAllAppointments() {
      const response = await axios.get("http://localhost:8080/getAllAppointments");
      this.allAppointments = response.data;
    },
  },
  beforeMount() {
    this.getAllAppointments();
  },
  template: `
      <br/>
      <div class="turn_items appointment_header">
          <div>
            <img src="/images/calendar.png" alt="Calendar">
          </div>
          <div class="bg-info text_wrapper radius_wrapper view overlay">
            <h4 class="text-white "><i class="bi bi-calendar2-check"></i>   Here you can see all the Appointments</h4>
          </div>
      </div>
      <table class="table">
  <thead>
    <tr class="bg-success text-white">
      <th scope="col">Appointment ID</th>
      <th scope="col">Doctor</th>
      <th scope="col">Patient</th>
      <th scope="col">Cabinet</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="appointment in allAppointments">
      <th scope="row">{{ appointment.doctorAppointmentId }}</th>
      <td>{{ appointment.doctor.name }} {{ appointment.doctor.surname }} {{ appointment.doctor.speciality }}</td>
      <td>{{ appointment.patient.name }} {{ appointment.patient.surname }} {{ appointment.patient.visitHistoryId }}</td>
      <td>{{ appointment.cabinet.cabinetId }} {{ appointment.cabinet.description }}</td>
    </tr>
  </tbody>
</table>
      
      `,
};
