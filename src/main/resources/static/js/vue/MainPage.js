import Dashboard from "./sideBar/Dashboard.js";
import Statistics from "./sideBar/Statistics.js";
import EmergencyInfo from "./sideBar/EmergencyInfo.js";
import HospitalInfo from "./sideBar/HospitalInfo.js";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        Dashboard,
        HospitalInfo,
        EmergencyInfo,
        Statistics,
        axios
    },
    data() {
        return {
            username: {},
            allPages: ["Dashboard", "Statistics", "Emergency Info", "Hospital Info"],
            activePage: "Dashboard",
        };
    },
    methods: {
        async getUsername() {
            const { data } = await axios.get("http://localhost:8080/username");
            this.username = data;
        }
    },
    created() {
        this.getUsername();
    },
    template: `
    <br/>

    <header>
        <div class="header_wrapper">

            <div class="logo_search">

            <div class="header_logo end_alignment">
                <a href="/"><img src="/images/logo.png" alt="Header logo"></a>
            </div>
            <div class="end_alignment">
                <form class="form-inline mr-auto">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search a Doctor..." aria-label="Search">
                        <button class="btn-rounded btn-warning text-white exit_btn" type="submit">Search</button>
                </form>
            </div>

                <div class="greeting_wrapper bg-info radius_wrapper">
                    <div>
                        <img src="/images/woman_doctor.png" alt="Doctor"  style="width: 13vw;" class="woman_doctor_img">
                    </div>
                    <div class="greeting">
                        <h4 class="text-light ">Hello, {{ username }}</h4>
                        <h3 class="text-light ">This is "Harmony Hospital"</h3>
                        <h4 class="text-light ">Management System</h4>
                    </div>
                </div>
            </div>

            <div class="end_alignment">
            
                <form action="/logout" method="post"> 
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
                <img src="/images/computer_7467135.png" alt="Notepad"  style="width: 200px">
            </div>

            <div class="position-sticky">
                <div class="list-group list-group-flush mx-4 mt-4">
                    <label class="btn btn-warning text-white" :class="activePage === page ? 'active' : ''" v-for="page in allPages" @click="activePage = page">
                    <i class="bi bi-arrow-right-square"></i><input type="radio" name="allPages" :id="page" />
                        {{page}}
                    </label>
                </div>
            </div>
            
            <div class="botton_sidebar">
                <img src="/images/medical_personnel.png" alt="Personnel" class="sidebar_img">
            </div>
        </nav>
  
        <article>
            <dashboard v-if="activePage === 'Dashboard'"></dashboard>
            <statistics v-if="activePage === 'Statistics'"></statistics>
            <emergency-info v-if="activePage === 'Emergency Info'"></emergency-info>
            <hospital-info v-if="activePage === 'Hospital Info'"></hospital-info>
        </article>
    </section>

    <footer>
        <p>© 2023 Harmony Health Group. All rights reserved.</p>
    </footer>
    `,
};
