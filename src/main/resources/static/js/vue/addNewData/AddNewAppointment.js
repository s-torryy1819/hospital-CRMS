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
      doctorId: null,
      patientId: null,
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
  computed: {
    allCabinetsForCurrentDoc() {
      this.availableTime = this.allDoctors?.filter(doc => doc.userId === this.doctorId)[0].availableTime;

      return this.allCabinets?.filter(cabinet => cabinet.doctor.userId === this.doctorId);
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
          patientId: this.patientId,
          cabinetId: this.cabinetId,
          doctorId: this.doctorId
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
<select class="form-select" aria-label="Default select example" id="doctorSelection" v-model="doctorId">
      <option v-for="doctor in allDoctors" :value="doctor.userId">{{doctor.speciality}} {{doctor.name}} {{doctor.surname}}</option>
</select><br/><br/>

<label class="bg-warning text-white label_wrapper" for="patSelection">Select a Patient: </label><br/>
<select class="form-select" aria-label="Default select example" id="patSelection" v-model="patientId">
  <option v-for="patient in allPatients" :value="patient.userId">{{patient.userId}} {{patient.name}} {{patient.surname}}</option>
</select><br/><br/>

<label class="bg-warning text-white label_wrapper" for="cabinetSelection" v-if="doctorId">Select a Cabinet: </label><br/>
<select class="form-select" aria-label="Default select example" v-if="doctorId" id="cabinetSelection" v-model="cabinetId">
      <option v-for="cabinet in allCabinetsForCurrentDoc" :value="cabinet.cabinetId">{{cabinet.cabinetId}} {{cabinet.description}}</option>
</select><br/><br/>

<label class="bg-warning text-white label_wrapper" for="dateSelection" v-if="doctorId">Choose a date from available ones :</label><br/>
<select class="form-select" aria-label="Default select example" id="dateSelection" v-model="date">
  <option v-for="time in availableTime" :value="time"> {{time}} </option>
</select><br/><br/>

<button type="submit" class="btn btn-success" @click="addAppointment()">Add an Appointment</button>
</form>
      
      `,
};