import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allMedicines: {},
      allAppointments: {},
      allCabinets: {},
      allPatients: {},
      allStaff: {},
    };
  },
  methods: {
    async getAllInfo() {
      const response = await axios.get("http://localhost:8080/getAllMedicines");
      this.allMedicines = response.data.length;
      const response1 = await axios.get("http://localhost:8080/getAllAppointments");
      this.allAppointments = response1.data.length;
      const response2 = await axios.get("http://localhost:8080/getAllCabinets");
      this.allCabinets = response2.data.length;
      const response3 = await axios.get("http://localhost:8080/getAllPatients");
      this.allPatients = response3.data.length;
      const response4 = await axios.get("http://localhost:8080/getAllStaff");
      this.allStaff = response4.data.length;
    },
  },
  beforeMount() {
    this.getAllInfo();
  },
  template: `
      <br/>
      <div class="turn_items appointment_header">
        <div class="carousel_wrapper">
          <div class="carousel">
            <div class="bg-white radius_wrapper carousel_item_wrapper">
              <div class="carousel_item">
                <img src="/images/patient_3359120 (2).png" alt="Patients">
              </div><br/>
              <div class="carousel_item text-center">
                <h6 class="text-secondary">Total Patients</h6>
              </div>
              <div class="carousel_item text-center">
                <h4 class="text-secondary">{{allPatients}}</h4>
              </div>
            </div>
            <br/>

            <div class="bg-white radius_wrapper carousel_item_wrapper">
              <div class="carousel_item">
                <img src="/images/bed_3359393 (1).png" alt="Cabinets">
              </div><br/>
              <div class="carousel_item text-center">
                <h6 class="text-secondary">Cabinets</h6>
              </div>
              <div class="carousel_item text-center">
                <h4 class="text-secondary">{{allCabinets}}</h4>
              </div>
            </div>
            <br/>

            <div class="bg-white radius_wrapper carousel_item_wrapper">
              <div class="carousel_item">
                <img src="/images/medical-mask_3359145 (2).png" alt="Staff">
              </div><br/>
              <div class="carousel_item text-center">
                <h6 class="text-secondary">Staff</h6>
              </div>
              <div class="carousel_item text-center">
                <h4 class="text-secondary">{{allStaff}}</h4>
              </div>
            </div>
            <br/>

            <div class="bg-white radius_wrapper carousel_item_wrapper">
              <div class="carousel_item">
                <img src="/images/stethoscope_3359379 (1).png" alt="Appoinments">
              </div><br/>
              <div class="carousel_item text-center">
                <h6 class="text-secondary">Appoinments</h6>
              </div>
              <div class="carousel_item text-center">
                <h4 class="text-secondary">{{allAppointments}}</h4>
              </div>
            </div>
            <br/>

            <div class="bg-white radius_wrapper carousel_item_wrapper">
              <div class="carousel_item">
                <img src="/images/measuring_3359420 (1).png" alt="Pharmasy">
              </div><br/>
              <div class="carousel_item text-center">
                <h6 class="text-secondary">Pharmasy</h6>
              </div>
              <div class="carousel_item text-center">
                <h4 class="text-secondary">{{allMedicines}}</h4>
              </div>
            </div>
          </div>
        </div>
          
          

      </div>
      
      `,
};
