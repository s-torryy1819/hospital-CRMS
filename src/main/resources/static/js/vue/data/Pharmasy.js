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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medicine in allMedicines">
          <td># {{ medicine.medicineId }}</td>
          <td><b>{{ medicine.nameOfMedicine }}<b/></td>
          <td>{{ medicine.availableInStock }}</td>
          <td>{{ medicine.price }} ua hrv</td>
          <td v-if="medicine.needReceipt"><p class="p_turn_items">Yes <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128077;</p></p></td>
          <td v-else><p class="p_turn_items">No <p style="font-size:25px; box-shadow: #fffaea 0px 0px 100px inset; border-radius: 5vw; margin-left: 0.6vw;">&#128076;</p></p></td>
          <td>{{ medicine.description }}</td>
          <td>
            <input type="button" class="btn-rounded btn-warning text-white exit_btn" value="Edit"></input>
            <input type="button" class="btn-rounded btn-danger text-white exit_btn" value="Delete"></input>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
      
      `,
};
