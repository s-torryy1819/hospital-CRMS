import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        axios
    },
    data() {
        return {
            allVisits: {},
        };
    },
    methods: {
        async getAllVisits() {
            const response = await axios.get("http://localhost:8080/getAllVisits");
            this.allVisits = response.data;
        },
    },
    beforeMount() {
        this.getAllVisits();
    },
    template: `
  <br/><br/>
      <div class="turn_items appointments_container">
      <div class="personnel_container">
      <img src="/images/personal.png" alt="Calendar"  style="width: 20vw;">
    </div>
      <table class="table table-bordered table-hover">
      <thead>
        <tr class="bg-success text-white">
          <th scope="col">Visit ID</th>
          <th scope="col">Date</th>
          <th scope="col">Patient</th>
          <th scope="col">Doctor</th>
          <th scope="col">Cabinet</th>
          <th scope="col">Disease</th>
          <th scope="col">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="visit in allVisits">
          <th scope="row">{{ visit.visitId }}</th>
          <td><b>{{ visit.date }}<b/></td>
          <td><b>{{ visit.patient.userId }}<b/> {{ visit.patient.name }} {{ visit.patient.surname }}</td>
          <td><b>{{ visit.doctor.speciality }}<b/> {{ visit.doctor.name }} {{ visit.doctor.surname }}</td>
          <td>{{ visit.cabinet.cabinetId }} {{ visit.cabinet.description }}</td>
          <td>{{ visit.disease }}</td>
          <td>{{ visit.purpose }}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
      
      `,
};

