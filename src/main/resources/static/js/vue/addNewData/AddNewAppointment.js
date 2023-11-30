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
      availableTime: {},
      cabId: null,
      docUsername: null,
      patientUsername: null,
      cabinetsForSelectedDoc: null,
      onChange(e) {
        this.selectedDoc = e.target.value;

        if (this.selectedDoc !== null) {
          this.allCabinets.forEach(cabinet => {
            if (cabinet.doctor.username == this.docUsername) {
              this.cabinetsForSelectedDoc = JSON.parse(JSON.stringify(cabinet));
              console.log(this.cabinetsForSelectedDoc);
            }
          });
        }
      },

    };
  },
  computed: {
    allCabinetsForCurrentDoc() {
      if (this.docUsername) {
        this.availableTime = this.allDoctors?.filter(doc => doc.username === this.docUsername)[0].availableTime;

        return this.allCabinets?.filter(cabinet => cabinet.doctor.username === this.docUsername);
      }
    }
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

    addAppointment() {
      axios.post(`/addAppointment`, null, {
        params: {
          date: this.date,
          patientUsername: this.patientUsername,
          cabinetId: this.cabinetId,
          docUsername: this.docUsername
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
    <br/>
    <form>

<label class="bg-warning text-white label_wrapper" for="doctorSelection">Select a Doctor: </label><br/>
<select class="form-select" aria-label="Default select example" id="doctorSelection" v-model="docUsername">
      <option v-for="doctor in allDoctors" :value="doctor.username">{{doctor.speciality}} {{doctor.name}} {{doctor.surname}}</option>
</select><br/><br/>

<label class="bg-warning text-white label_wrapper" for="patSelection">Select a Patient: </label><br/>
<select class="form-select" aria-label="Default select example" id="patSelection" v-model="patientUsername">
  <option v-for="patient in allPatients" :value="patient.username">{{patient.userId}} {{patient.name}} {{patient.surname}}</option>
</select><br/><br/>

<div class="selection" v-if="docUsername">
<label class="bg-warning text-white label_wrapper" for="cabinetSelection">Select a Cabinet: </label><br/>
<select class="form-select" aria-label="Default select example" id="cabinetSelection" v-model="cabinetId">
      <option v-for="cabinet in allCabinetsForCurrentDoc" :value="cabinet.cabinetId">{{cabinet.cabinetId}} {{cabinet.description}}</option>
</select><br/><br/>
</div>

<div class="selection" v-if="docUsername">
<label class="bg-warning text-white label_wrapper" for="dateSelection">Choose a date from available ones :</label><br/>
<select class="form-select" aria-label="Default select example" id="dateSelection selection" v-model="date">
  <option v-for="time in availableTime" :value="time"> {{time}} </option>
</select><br/><br/>
</div>

<button type="submit" class="btn btn-success" @click="addAppointment()">Add an Appointment</button>
</form>
      
      `,
};