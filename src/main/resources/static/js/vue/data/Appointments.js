import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";


export default {
  components: {
    axios
  },
  data() {
    return {
      allAppointments: {},
      userInfo: {},
    };
  },
  methods: {
    async getAllAppointments() {
      const { data } = await axios.get("http://localhost:8080/userInfo");
      this.userInfo = data;

      console.log(this.userInfo.auths == "ADMIN");
      console.log(this.userInfo.auths === "ADMIN");
      console.log(this.userInfo.auths == "DOCTOR");
      console.log(this.userInfo.auths === "DOCTOR");
      console.log(this.userInfo.auths == "PATIENT");
      console.log(this.userInfo.auths === "PATIENT");

      if(this.userInfo.auths == "ADMIN"){
        const response = await axios.get("http://localhost:8080/getAllAppointments");
        this.allAppointments = response.data;
      }
      else if(this.userInfo.auths == "DOCTOR" || this.userInfo.auths == "PATIENT"){
        const response = await axios.get("http://localhost:8080/getAppointmentsForUser");
        this.allAppointments = response.data;
      }
    },
  },
  beforeMount() {
    this.getAllAppointments();
  },
  created() {
    this.getAllAppointments();
  },
  template: `
      <div class="turn_items appointment_header">
          <div>
            <img src="/images/output-onlinepngtools (2).png" alt="Doctors"  style="width: 40vw;">
          </div>

      </div><br/>
      <table class="table table-bordered table-hover">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Appointment ID</th>
          <th scope="col">Doctor</th>
          <th scope="col">Patient</th>
          <th scope="col">Cabinet</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="appointment in allAppointments">
          <th scope="row">{{ appointment.doctorAppointmentId }}</th>
          <td>{{ appointment.doctor.name }} {{ appointment.doctor.surname }} <b>{{ appointment.doctor.speciality }}<b/></td>
          <td>{{ appointment.patient.name }} {{ appointment.patient.surname }}</td>
          <td><b>{{ appointment.cabinet.cabinetId }}<b/> {{ appointment.cabinet.description }}</td>
          <td>{{ appointment.date }}</td>
        </tr>
      </tbody>
    </table>
      
      `,
};
