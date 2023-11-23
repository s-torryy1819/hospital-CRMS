import Appointments from "../data/Appointments.js";
import Patients from "../data/Patients.js";
import Pharmasy from "../data/Pharmasy.js";
import Procedures from "../data/Procedures.js";
import Visits from "../data/Visits.js";
import Doctors from "../data/Doctors.js";
import Cabinets from "../data/Cabinets.js";
import AddNewCabinet from "../addNewData/AddNewCabinet.js";
import AddNewDoctor from "../addNewData/AddNewDoctor.js";
import AddNewPatient from "../addNewData/AddNewPatient.js";
import AddNewAppointment from "../addNewData/AddNewAppointment.js";
import AddNewMedicine from "../addNewData/AddNewMedicine.js";
import AddNewProcedure from "../addNewData/AddNewProcedure.js";

export default {
  components: {
    Appointments,
    Patients,
    Pharmasy,
    Procedures,
    Visits,
    Doctors,
    Cabinets,
    AddNewCabinet,
    AddNewDoctor,
    AddNewPatient,
    AddNewAppointment,
    AddNewMedicine,
    AddNewProcedure
  },
  props: ['userInfo'],
  data() {
    return {
      userInfo: this.userInfo,
      allPages: [
        { name: "Appointments", auth: [] },
        { name: "Patients", auth: [] },
        { name: "Pharmasy", auth: [] },
        { name: "Procedures", auth: [] },
        { name: "Visits", auth: [] },
        { name: "Doctors", auth: [] },
        { name: "Cabinets", auth: [] },
        { name: "Add New Cabinet", auth: ['ADMIN'] },
        { name: "Add New Doctor", auth: ['ADMIN'] },
        { name: "Add New Patient", auth: ['ADMIN'] },
        { name: "Add New Appointment", auth: ['ADMIN'] },
        { name: "Add New Medicine", auth: ['ADMIN'] },
        { name: "Add New Procedure", auth: ['ADMIN'] }
      ],
      activePage: "Appointments",
    };
  },
  methods: {
    includesAuth(page) {
      if (this.userInfo?.auths)
        for (var userAuth of this.userInfo?.auths)
          if (page.auth.length === 0 || page.auth.includes(userAuth))
            return true
      return false
    }
  },
  template: `
    <br/>
    <div class="btn-group btn-group-toggle dashboard_buttons" data-toggle="buttons" style="display : flex; flex-wrap: wrap;">
      <template v-for="page in allPages">
        <label class="btn btn-info" :class="activePage === page.name ? 'active' : ''" @click="activePage = page.name" v-if="includesAuth(page)">
            <input type="radio" name="allPages" :id="page" />
            {{page.name}}
        </label>
      </template>
    </div>
    
    <appointments v-if="activePage === 'Appointments' && userInfo?.auths?.includes('ADMIN')"></appointments>
    <patients v-if="activePage === 'Patients'"></patients>
    <pharmasy v-if="activePage === 'Pharmasy'"></pharmasy>
    <procedures v-if="activePage === 'Procedures'"></procedures>
    <visits v-if="activePage === 'Visits'"></visits>
    <doctors v-if="activePage === 'Doctors'"></doctors>
    <cabinets v-if="activePage === 'Cabinets'"></cabinets>
    <add-new-cabinet v-if="activePage === 'Add New Cabinet'"></add-new-cabinet>
    <add-new-doctor v-if="activePage === 'Add New Doctor'"></add-new-doctor>
    <add-new-patient v-if="activePage === 'Add New Patient'"></add-new-patient>
    <add-new-appointment v-if="activePage === 'Add New Appointment'"></add-new-appointment>
    <add-new-medicine v-if="activePage === 'Add New Medicine'"></add-new-medicine>
    <add-new-procedure v-if="activePage === 'Add New Procedure'"></add-new-procedure>
    
    `,
};
