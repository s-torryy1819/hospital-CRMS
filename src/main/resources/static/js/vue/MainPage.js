import Dashboard from "./Dashboard.js";
import HospitalInfo from "./HospitalInfo.js";
import EmergencyInfo from "./EmergencyInfo.js";
import Statistics from "./Statistics.js";

export default {
    components: {
        Dashboard,
        HospitalInfo,
        EmergencyInfo,
        Statistics
    },
    data() {
        return {
            allPages: ["Dashboard", "HospitalInfo", "EmergencyInfo", "Statistics"],
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

            <div class="center_alignment">
            
                <form th:action="@{/logout}" method="post"> 
                    <input type="submit" value="Sign Out" class="btn-warning text-white exit_btn">
                    <img src="/images/logout.png" alt="Exit">
                    </input>
                </form>
            </div>

        </div>
    </header>

    <section>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse navbar navbar-light">
            <div class="center_alignment">
                <img src="/images/notepad_2.png" alt="Notepad">
            </div>

            <div class="position-sticky">
                <div class="list-group list-group-flush mx-4 mt-4">
                    <label class="btn btn-warning text-white" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
                    <i class="bi bi-arrow-right-square"></i><input type="radio" name="allPages" :id="page" />
                        {{page}}
                    </label>
                </div>
            </div>

        </nav>
  
        <article>
            <dashboard v-if="activePage === 'Dashboard'"></dashboard>
            <hospital-info v-if="activePage === 'HospitalInfo'"></hospital-info>
            <statistics v-if="activePage === 'Statistics'"></statistics>
            <emergency-info v-if="activePage === 'EmergencyInfo'"></emergency-info>
        </article>
    </section>

    <footer>
        <p>© 2023 Harmony Health Group. All rights reserved.</p>
    </footer>
    `,
};
