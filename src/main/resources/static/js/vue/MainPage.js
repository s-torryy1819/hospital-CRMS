import Dashboard from "./Dashboard.js";
import HospitalInfo from "./HospitalInfo.js";
import EmergencyInfo from "./EmergencyInfo.js";

export default {
  components: {
    Dashboard,
    HospitalInfo,
    EmergencyInfo,
  },
  data() {
    return {
      allPages: ["Dashboard", "HospitalInfo", "EmergencyInfo"],
      activePage: "Dashboard",
    };
  },
  methods: {},
  template: `
    <br/>

    <header>
        <div class="header_wrapper">

            <div class="logo_search">

                <div class="header_logo">
                    <img src="/images/logo.png" alt="Header logo">
                </div>

                <form class="form-inline mr-auto">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search a cabinet..." aria-label="Search">
                        <button class="btn blue-gradient btn-rounded btn-sm my-0" type="submit">Search</button>
                </form>
            </div>

            <div class="exit">
                <button type="button" class="btn btn-secondary">Exit <img src="/images/exit.png" alt="Exit"></button>
            </div>

        </div>
    </header>

    <section>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse navbar navbar-light">
            <div class="notepad">
                <img src="/images/notepad_2.png" alt="Notepad">
            </div>

            <div class="position-sticky">
                <div class="list-group list-group-flush mx-3 mt-4">
                    <label class="btn btn-warning text-white" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
                        <input type="radio" name="allPages" :id="page" />
                        {{page}}
                    </label>
                </div>
            </div>

            <div class="calendar"></div>

        </nav>
  
        <article>
            <dashboard v-if="activePage === 'Dashboard'"></dashboard>
            <hospital-info v-if="activePage === 'HospitalInfo'"></hospital-info>
            <emergency-info v-if="activePage === 'EmergencyInfo'"></emergency-info>
        </article>
    </section>

    <footer>
        <p>© 2023 Harmony Health Group. All rights reserved.</p>
    </footer>
    `,
};
