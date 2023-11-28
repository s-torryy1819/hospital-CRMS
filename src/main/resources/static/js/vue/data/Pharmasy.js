import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allMedicines: {},
    };
  },
  methods: {
    async getAllMedicines() {
      const response = await axios.get("http://localhost:8080/getAllMedicines");
      this.allMedicines = response.data;
    },
  },
  beforeMount() {
    this.getAllMedicines();
  },
  template: `
      <br/><br/>
      <div class="turn_items appointments_container">
      <div>
      <img src="/images/personal.png" alt="Calendar" style="width: 20vw;">
    </div>
      <table class="table table-bordered table-hover">
      <thead>
        <tr class="bg-warning text-white">
          <th scope="col">Medicine ID</th>
          <th scope="col">Name</th>
          <th scope="col">Amount in stock</th>
          <th scope="col">Price</th>
          <th scope="col">Needed receipt</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medicine in allMedicines">
          <th scope="row"># {{ medicine.medicineId }}</th>
          <td><b>{{ medicine.nameOfMedicine }}<b/></td>
          <td>{{ medicine.availableInStock }}</td>
          <td>{{ medicine.price }} ua hrv</td>
          <td>{{ medicine.needReceipt }}</td>
          <td>{{ medicine.description }}</td>
        </tr>
      </tbody>
    </table>
    </div>
      
      `,
};
