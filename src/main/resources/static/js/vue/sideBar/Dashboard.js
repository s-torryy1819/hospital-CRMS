import Appointments from "../data/Appointments.js";
import Patients from "../data/Patients.js";
import Pharmasy from "../data/Pharmasy.js";
import Procedures from "../data/Procedures.js";
import Doctors from "../data/Doctors.js";
import Cabinets from "../data/Cabinets.js";
import AddNewCabinet from "../addNewData/AddNewCabinet.js";
import AddNewDoctor from "../addNewData/AddNewDoctor.js";
import AddNewPatient from "../addNewData/AddNewPatient.js";
import AddNewAppointment from "../addNewData/AddNewAppointment.js";
import AddNewMedicine from "../addNewData/AddNewMedicine.js";

export default {
  components: {
    Appointments,
    Patients,
    Pharmasy,
    Procedures,
    Doctors,
    Cabinets,
    AddNewCabinet,
    AddNewDoctor,
    AddNewPatient,
    AddNewAppointment,
    AddNewMedicine,
  },
  data() {
    return {
      allPages: [
        "Appointments",
        "Patients",
        "Pharmasy",
        "Procedures",
        "Doctors",
        "Cabinets",
        "AddNewCabinet",
        "AddNewDoctor",
        "AddNewPatient",
        "AddNewAppointment",
        "AddNewMedicine",
      ],
      activePage: "Appointments",
    };
  },
  methods: {},
  template: `
    <br/>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-info" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
            <input type="radio" name="allPages" :id="page" />
            {{page}}
        </label>
    </div>
    
    <appointments v-if="activePage === 'Appointments'"></appointments>
    <patients v-if="activePage === 'Patients'"></patients>
    <pharmasy v-if="activePage === 'Pharmasy'"></pharmasy>
    <procedures v-if="activePage === 'Procedures'"></procedures>
    <doctors v-if="activePage === 'Doctors'"></doctors>
    <cabinets v-if="activePage === 'Cabinets'"></cabinets>
    <add-new-cabinet v-if="activePage === 'AddNewCabinet'"></add-new-cabinet>
    <add-new-doctor v-if="activePage === 'AddNewDoctor'"></add-new-doctor>
    <add-new-patient v-if="activePage === 'AddNewPatient'"></add-new-patient>
    <add-new-appointment v-if="activePage === 'AddNewAppointment'"></add-new-appointment>
    <add-new-medicine v-if="activePage === 'AddNewMedicine'"></add-new-medicine>
    
    `,
};
