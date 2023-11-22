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
  data() {
    return {
      allPages: [
        "Appointments",
        "Patients",
        "Pharmasy",
        "Procedures",
        "Visits",
        "Doctors",
        "Cabinets",
        "Add New Cabinet",
        "Add New Doctor",
        "Add New Patient",
        "Add New Appointment",
        "Add New Medicine",
        "Add New Procedure",
      ],
      activePage: "Appointments",
    };
  },
  methods: {},
  template: `
    <br/>
    <div class="btn-group btn-group-toggle dashboard_buttons" data-toggle="buttons" style="display : flex; flex-wrap: wrap;">
        <label class="btn btn-info" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
            <input type="radio" name="allPages" :id="page" />
            {{page}}
        </label>
    </div>
    
    <appointments v-if="activePage === 'Appointments'"></appointments>
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
