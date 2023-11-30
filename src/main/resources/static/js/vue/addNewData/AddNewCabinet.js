import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
  components: {
    axios
  },
  data() {
    return {
      allDoctors: {},
      desc: null,
      selectedDocUsername: null
    };
  },
  methods: {
    async getAllDoctors() {
      const response = await axios.get("http://localhost:8080/getAllDoctors");
      this.allDoctors = response.data;
    },

    addCabinet() {

      axios.post(`/addCabinet`, null, {
        params: {
          description: this.desc,
          username: this.selectedDocUsername
        }
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
    }
  },
  beforeMount() {
    this.getAllDoctors();
  },
  template: `
    <br/>
    <br/>
    <form>
      <div class="form-group">
        <label class="bg-warning text-white label_wrapper" for="descriptionInput">Cabinet Description:</label>
        <input type="text" v-model="desc" class="form-control" required id="descriptionInput" aria-describedby="name" placeholder="Description">
      </div>

      <label class="bg-warning text-white label_wrapper" for="doctorSelection">Select a Doctor: </label><br/>
      <select class="form-select" aria-label="Default select example" id="doctorSelection" v-model="selectedDocUsername">
        <option v-for="doctor in allDoctors" :value="doctor.username">{{doctor.speciality}} {{doctor.name}} {{doctor.surname}}</option>
      </select><br/><br/>
      <button type="submit" class="btn btn-success" @click="addCabinet()">Add a Cabinet</button>
    </form>
      
      `,
};
