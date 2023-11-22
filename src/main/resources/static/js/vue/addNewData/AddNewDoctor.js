import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      username: null,
      password: null,
      name: null,
      surname: null,
      yearOfBirth: null,
      address: null,
      phone: null,
      speciality: null,
      pricePerVisit: null,
      childDoctor: false,
    };
  },
  methods: {

    addNewDoctor() {

      axios.post(`/addNewDoctor`, null, {
        params: {
          username: this.username,
          password: this.password,
          name: this.name,
          surname: this.surname,
          yearOfBirth: this.yearOfBirth,
          address: this.address,
          phone: this.phone,
          speciality: this.speciality,
          pricePerVisit: this.pricePerVisit,
          childDoctor: this.childDoctor
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
    }
  },
  template: `
      <br/><br/>
      <form>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="usernameInput">Username</label>
    <input type="text" v-model="username" class="form-control" id="usernameInput" aria-describedby="username" placeholder="Enter username">
    </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="passInput">Password</label>
    <input type="password" v-model="password" class="form-control" id="passInput" aria-describedby="Password" placeholder="Enter password">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="nameInput">Name</label>
    <input type="text" v-model="name" class="form-control" id="nameInput" aria-describedby="name" placeholder="Enter name">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="surnameInput">Surname</label>
    <input type="text" v-model="surname" class="form-control" id="surnameInput" placeholder="Surname">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="yearInput">Year of birth</label>
    <input type="text" v-model="yearOfBirth" class="form-control" id="yearInput" placeholder="Year">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="addressInput">Address</label>
    <input type="text" v-model="address" class="form-control" id="addressInput" placeholder="Address">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="phoneInput">Phone</label>
    <input type="text" v-model="phone" class="form-control" id="phoneInput" placeholder="Phone">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="specialityInput">Speciality</label>
    <input type="text" v-model="speciality" class="form-control" id="specialityInput" placeholder="Speciality">
  </div>
  <div class="checkbox-wrapper-1">
    <input type="checkbox" v-model="childDoctor" class="substituted" id="childDoc">
    <label class="bg-warning text-white label_wrapper" class="form-check-label" for="childDoc">Child Doctor</label>
  </div><br/>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="priceInput">Price Per Visit</label>
    <input type="text" v-model="pricePerVisit" class="form-control" id="priceInput" placeholder="Price Per Visit">
  </div><br/>
  <button type="submit" class="btn btn-success" @click="addNewDoctor()">Add a Doctor</button>
</form>
      `,
};
