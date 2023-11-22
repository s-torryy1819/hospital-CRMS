import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        axios
    },
    data() {
        return {
            allDoctors: {},
            allCabinets: {},
            cabId: null,
            description: null,
            doctorId: null,
            price: null,
            // onChange(e) {
            //     this.cabId = e.target.value;
            // },
        };
    },
    computed: {
        allCabinetsForCurrentDoc() {
            return this.allCabinets?.filter(cabinet => cabinet.doctor.userId === this.doctorId)
        }
    },
    methods: {
        async getAllInfo() {
            const response = await axios.get("http://localhost:8080/getAllDoctors");
            this.allDoctors = response.data;
            const response2 = await axios.get("http://localhost:8080/getAllCabinets");
            this.allCabinets = response2.data;
        },
        addProcedure() {

            axios.post(`/addProcedure`, null, {
                params: {
                    description: this.description,
                    price: this.price,
                    cabinetId: this.cabId,
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
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="descInput">Description</label>
    <input type="text" v-model="description" class="form-control" id="descInput" required aria-describedby="name" placeholder="Enter description">
  </div>
  <div class="form-group">
    <label class="bg-warning text-white label_wrapper" for="amountInput">Price</label>
    <input type="text" v-model="price" class="form-control" pattern="[0-9]+" required id="amountInput" placeholder="Price">
  </div>

  <label class="bg-warning text-white label_wrapper" for="doctorSelection">Select a Doctor: </label><br/>
  <select class="form-select" aria-label="Default select example" id="doctorSelection" v-model="doctorId">
        <option v-for="doctor in allDoctors" :value="doctor.userId">{{doctor.speciality}} {{doctor.name}} {{doctor.surname}}</option>
   </select><br/><br/>

<div class="selection" v-if="doctorId">
<label class="bg-warning text-white label_wrapper" for="cabinetSelection" v-if="doctorId">Select a Cabinet: </label><br/>
<select class="form-select" aria-label="Default select example" v-if="doctorId" id="cabinetSelection" v-model="cabId">
      <option v-for="cabinet in allCabinetsForCurrentDoc" :value="cabinet.cabinetId">{{cabinet.cabinetId}} {{cabinet.description}}</option>
</select><br/>
</div><br/>

<button type="submit" class="btn btn-success" @click="addProcedure()">Add a Procedure</button>
</form>
      
      `,
};
