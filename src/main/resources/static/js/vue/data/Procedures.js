import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allProcedures: {},
    };
  },
  methods: {
    async getAllProcedures() {
      const response = await axios.get("http://localhost:8080/getAllProcedures");
      this.allProcedures = response.data;
    },
  },
  beforeMount() {
    this.getAllProcedures();
  },
  template: `
      <div class="turn_items appointments_container">
      <div class="personnel_container">
      <img src="/images/personal.png" alt="Calendar"  style="width: 20vw;">
    </div>
      <table class="table">
      <thead>
        <tr class="bg-warning text-white">
          <th scope="col">Procedure ID</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Cabinet</th>
          <th scope="col">Doctor</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="procedure in allProcedures">
          <th scope="row">{{ procedure.procedureId }}</th>
          <td><b>{{ procedure.description }}<b/></td>
          <td>{{ procedure.price }}</td>
          <td>{{ procedure.cabinet.cabinetId }} {{ procedure.cabinet.description }}</td>
          <td><b>{{ procedure.doctor.speciality }}<b/> {{ procedure.doctor.name }} {{ procedure.doctor.surname }}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
      
      `,
};

