import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allCabinets: {},
    };
  },
  methods: {
    async getAllCabinets() {
      const response = await axios.get("http://localhost:8080/getAllCabinets");
      this.allCabinets = response.data;
    },
  },
  beforeMount() {
    this.getAllCabinets();
  },
  template: `
  <br/><br/>
      <div class="turn_items appointments_container">
      <div class="personnel_container">
      <img src="/images/cabinet.png" alt="Calendar" style="width: 30vw;">
    </div>
      <table class="table table-bordered table-hover">
      <thead>
        <tr class="bg-warning text-white">
          <th scope="col">Cabinet ID</th>
          <th scope="col">Description</th>
          <th scope="col">Doctor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cabinet in allCabinets">
          <th scope="row">{{ cabinet.cabinetId }}</th>
          <td><b>{{ cabinet.description }}<b/></td>
          <td><b>{{ cabinet.doctor.speciality }}<b/> {{ cabinet.doctor.name }} {{ cabinet.doctor.surname }}</td>
        </tr>
      </tbody>
    </table>
    </div>
      
      `,
};
