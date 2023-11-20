import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      nameOfMedicine: null,
      description: null,
      availableInStock: null,
      price: null,
      needReceipt: false,
    };
  },
  methods: {

    addMedicine() {

      axios.post(`/addMedicine`, null, {
        params: {
          nameOfMedicine: this.nameOfMedicine,
          description: this.description,
          availableInStock: this.availableInStock,
          price: this.price,
          needReceipt: this.needReceipt
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
    }
  },
  template: `
      <br/>
      <br/>
      <form>
  <div class="form-group">
    <label for="nameInput">Name</label>
    <input type="text" v-model="nameOfMedicine" class="form-control" id="nameInput" aria-describedby="name" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label for="amountInput">Amount in Stock</label>
    <input type="text" v-model="availableInStock" class="form-control" id="amountInput" placeholder="Amount in Stock">
  </div>
  <div class="form-group">
    <label for="priceInput">Price</label>
    <input type="text"  v-model="price" class="form-control" id="priceInput" placeholder="Price">
  </div>
  <div class="form-check">
    <input type="checkbox" v-model="needReceipt" class="form-check-input" id="needReceipt">
    <label class="form-check-label" for="needReceipt">Need a Receipt to buy this Medicine</label>
  </div><br/>
  <div class="form-group">
    <label for="descriptionInput">Description</label>
    <input type="text"  v-model="description" class="form-control" id="descriptionInput" placeholder="Description">
  </div>
  <button type="submit" class="btn btn-success" @click="addMedicine()">Add a Medicine</button>
</form>
      
      `,
};
