import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allDoctors: {},
      allPatients: {},
      allCabinets: {},
      selectedDoc: null,
      cabinetsForSelectedDoc: null,
      onChange(e) {
        this.selectedDoc = e.target.value;

        if (this.selectedDoc !== null) {
          this.allCabinets.forEach(cabinet => {
            if (cabinet.doctor.userId == this.selectedDoc) {
              this.cabinetsForSelectedDoc = JSON.parse(JSON.stringify(cabinet));
              console.log(this.cabinetsForSelectedDoc);
            }
          });
        }
      },

    };
  },
  methods: {
    async getAllInfo() {
      const response = await axios.get("http://localhost:8080/getAllDoctors");
      this.allDoctors = response.data;
      const response1 = await axios.get("http://localhost:8080/getAllPatients");
      this.allPatients = response1.data;
      const response2 = await axios.get("http://localhost:8080/getAllCabinets");
      this.allCabinets = response2.data;


    },
  },
  beforeMount() {
    this.getAllInfo();
  },
  template: `
    <br/>
    <br/>
    <form>
<div class="form-group">
  <label for="descriptionInput">Cabinet Description</label>
  <input type="text" class="form-control" id="descriptionInput" aria-describedby="name" placeholder="Description">
</div>

<label for="docSelection">Select a Doctor: </label><br/>
<select class="form-select" aria-label="Default select example" @change="onChange($event)" id="docSelection">
  <option v-for="doctor in allDoctors" :value="doctor.userId">{{doctor.speciality}} {{doctor.name}} {{doctor.surname}}</option>
</select><br/>

<label for="patSelection">Select a Patient: </label><br/>
<select class="form-select" aria-label="Default select example" id="patSelection">
  <option v-for="patient in allPatients" value={{patient.userId}}>{{patient.userId}} {{patient.name}} {{patient.surname}}</option>
</select><br/>

<label for="cabSelection" v-if="selectedDoc">Select a Cabinet: </label><br/>
<select class="form-select" aria-label="Default select example" v-if="selectedDoc" id="cabSelection">
  <option v-for="cabinet in cabinetsForSelectedDoc" value={{cabinet.cabinetId}}>{{cabinet.cabinetId}} {{cabinet.description}}</option>
</select><br/>

<button type="submit" class="btn btn-success">Add a Cabinet</button>
</form>
      
      `,
};