import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        axios
    },
    data() {
        return {
            userData: 0,
            userInfo: 0,
            name: null,
            surname: null,
            yearOfBirth: null,
            address: null,
            phone: null,
            speciality: null,
            pricePerVisit: null,
            childDoctor: false,
            workAddress: null,
            chronicDiseases: "No",
            disability: false,
        };
    },
    methods: {
        async getAllInfo() {
            const data = await axios.get("http://localhost:8080/userInfo");
            this.userInfo = data.data.auths[0];

            if (this.userInfo == "ADMIN") {
                const response6 = await axios.get("http://localhost:8080/getAdminData");
                this.userData = response6.data;
            }
            if (this.userInfo == "PATIENT") {
                const response5 = await axios.get("http://localhost:8080/getPatientData");
                this.userData = response5.data;

                this.name = this.userData.name;
                this.surname = this.userData.surname;
                this.yearOfBirth = this.userData.yearOfBirth;
                this.address = this.userData.address;
                this.phone = this.userData.phone;
                this.workAddress = this.userData.workAddress;
                this.chronicDiseases = this.userData.chronicDiseases;
                this.disability = this.userData.disability;
            }
            if (this.userInfo == "DOCTOR") {
                const response6 = await axios.get("http://localhost:8080/getDoctorData");
                this.userData = response6.data;

                this.name = this.userData.name;
                this.surname = this.userData.surname;
                this.yearOfBirth = this.userData.yearOfBirth;
                this.address = this.userData.address;
                this.phone = this.userData.phone;
                this.speciality = this.userData.speciality;
                this.pricePerVisit = this.userData.pricePerVisit;
                this.childDoctor = this.userData.childDoctor;
            }
        },

        editDoctorData() {

            axios.post(`/editDoctorData`, null, {
                params: {
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
        },

        editPatientData() {

            axios.post(`/editPatientData`, null, {
                params: {
                    name: this.name,
                    surname: this.surname,
                    yearOfBirth: this.yearOfBirth,
                    address: this.address,
                    phone: this.phone,
                    workAddress: this.workAddress,
                    chronicDiseases: this.chronicDiseases,
                    disability: this.disability
                }
            })
                .then(response => response.status)
                .catch(err => console.warn(err));
        }
    },
    beforeMount() {
        this.getAllInfo();
    },
    template: `
      <br/>

      <div class="radius_wrapper notification_wrapper">
        <div class="notification">
          My Card
        </div>
      </div> <br/>

      <form v-if="userInfo?.includes('DOCTOR')">
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="nameInput">Name</label>
    <input type="text" v-model="name" class="form-control" id="nameInput" aria-describedby="name">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="surnameInput">Surname</label>
    <input type="text" v-model="surname" class="form-control" id="surnameInput">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="yearInput">Year of birth</label>
    <input type="text" v-model="yearOfBirth" pattern="\\d{4}" maxlength="4" class="form-control" id="yearInput">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="addressInput">Address</label>
    <input type="text" v-model="address" class="form-control" required id="addressInput">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="phoneInput">Phone</label>
    <input type="text" v-model="phone" class="form-control" id="phoneInput" required>
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="specialityInput">Speciality</label>
    <input type="text" v-model="speciality" class="form-control" id="specialityInput" required>
  </div>
  <div class="checkbox-wrapper-1">
    <input type="checkbox" v-model="childDoctor" class="substituted" id="childDoc" :checked="userData.childDoctor">
    <label class="bg-success text-white label_wrapper" class="form-check-label" for="childDoc">Child Doctor</label>
  </div><br/>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="priceInput">Price Per Visit</label>
    <input type="text" v-model="pricePerVisit" pattern="[0-9]+" required class="form-control" id="priceInput">
  </div><br/>
  <button type="submit" class="btn btn-danger" @click="editDoctorData()">Save changes</button>
</form>

<form v-if="userInfo?.includes('PATIENT')">
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="nameInput">Name</label>
    <input type="text" v-model="name" class="form-control" id="nameInput" required  aria-describedby="name">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="surnameInput">Surname</label>
    <input type="text" v-model="surname" class="form-control" id="surnameInput" required>
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="yearInput">Year of birth</label>
    <input type="text" v-model="yearOfBirth" pattern="\\d{4}" maxlength="4" required class="form-control" id="yearInput">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="addressInput">Address</label>
    <input type="text" v-model="address" class="form-control" required id="addressInput">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="phoneInput">Phone</label>
    <input type="text" v-model="phone" class="form-control" id="phoneInput" required>
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="workAddressInput">Work Address</label>
    <input type="text" v-model="workAddress" class="form-control" required id="workAddressInput">
  </div>
  <div class="checkbox-wrapper-1">
    <input type="checkbox" v-model="disability" class="substituted" id="disability" :checked="userData.disability">
    <label class="bg-success text-white label_wrapper" class="form-check-label" for="disability">Disability</label>
  </div><br/>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="chronicDiseaseInput">Chronic Diseases</label>
    <input type="text" v-model="chronicDiseases" class="form-control" id="chronicDiseaseInput">
  </div>
  <button type="submit" class="btn btn-danger" @click="editPatientData()">Save changes</button>
</form>

<form v-if="userInfo?.includes('ADMIN')">
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="nameInput">Username</label>
    <input type="text" v-model="name" class="form-control" id="nameInput" required  aria-describedby="name" :value="userData.username">
  </div>
  <div class="form-group">
    <label class="bg-success text-white label_wrapper" for="surnameInput">Authority</label>
    <input type="text" v-model="surname" class="form-control" id="surnameInput" required  :value="userData.auths">
  </div>
</form>
      
      `,
};
