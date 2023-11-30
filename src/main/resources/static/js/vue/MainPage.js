import Dashboard from "./sideBar/Dashboard.js";
import Statistics from "./sideBar/Statistics.js";
import EmergencyInfo from "./sideBar/EmergencyInfo.js";
import HospitalInfo from "./sideBar/HospitalInfo.js";
import MyCard from "./sideBar/MyCard.js";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

export default {
    components: {
        Dashboard,
        HospitalInfo,
        EmergencyInfo,
        Statistics,
        MyCard,
        axios
    },
    data() {
        return {
            userInfo: {},
            allPages: ["Dashboard", "Statistics", "Emergency Info", "Hospital Info", "My Card"],
            activePage: "Dashboard",
            allDocs: [],
            searchActive: false,
            searchTermForDoc: ''
        };
    },
    computed: {
        filteredDoc() {
            if (this.searchActive) {

                this.allDocs?.map(doc => {

                    const name_lev = this.levenshtein(String(doc.name), this.searchTermForDoc)
                    const surname_lev = this.levenshtein(String(doc.surname), this.searchTermForDoc)
                    const userId_lev = this.levenshtein(String(doc.userId), this.searchTermForDoc)
                    const speciality_lev = this.levenshtein(String(doc.speciality), this.searchTermForDoc)

                    doc.lev = Math.min(name_lev, surname_lev, userId_lev, speciality_lev)
                })

                return this.allDocs.sort((a, b) => parseFloat(a.lev) - parseFloat(b.lev));
            }
            return []
        }
    },
    methods: {
        async getUserInfo() {
            const { data } = await axios.get("http://localhost:8080/userInfo");
            this.userInfo = data;
        },
        async getAllDocs() {
            const { data } = await axios.get("http://localhost:8080/getAllDoctors");
            this.allDocs = data;
        },
        levenshtein(s, t) {
            if (s === t) {
                return 0;
            }
            var n = s.length, m = t.length;
            if (n === 0 || m === 0) {
                return n + m;
            }
            var x = 0, y, a, b, c, d, g, h, k;
            var p = new Array(n);
            for (y = 0; y < n;) {
                p[y] = ++y;
            }
            for (; (x + 3) < m; x += 4) {
                var e1 = t.charCodeAt(x);
                var e2 = t.charCodeAt(x + 1);
                var e3 = t.charCodeAt(x + 2);
                var e4 = t.charCodeAt(x + 3);
                c = x;
                b = x + 1;
                d = x + 2;
                g = x + 3;
                h = x + 4;
                for (y = 0; y < n; y++) {
                    k = s.charCodeAt(y);
                    a = p[y];
                    if (a < c || b < c) {
                        c = (a > b ? b + 1 : a + 1);
                    }
                    else {
                        if (e1 !== k) {
                            c++;
                        }
                    }
                    if (c < b || d < b) {
                        b = (c > d ? d + 1 : c + 1);
                    }
                    else {
                        if (e2 !== k) {
                            b++;
                        }
                    }
                    if (b < d || g < d) {
                        d = (b > g ? g + 1 : b + 1);
                    }
                    else {
                        if (e3 !== k) {
                            d++;
                        }
                    }
                    if (d < g || h < g) {
                        g = (d > h ? h + 1 : d + 1);
                    }
                    else {
                        if (e4 !== k) {
                            g++;
                        }
                    }
                    p[y] = h = g;
                    g = d;
                    d = b;
                    b = c;
                    c = a;
                }
            }
            for (; x < m;) {
                var e = t.charCodeAt(x);
                c = x;
                d = ++x;
                for (y = 0; y < n; y++) {
                    a = p[y];
                    if (a < c || d < c) {
                        d = (a > d ? d + 1 : a + 1);
                    }
                    else {
                        if (e !== s.charCodeAt(y)) {
                            d = c + 1;
                        }
                        else {
                            d = c;
                        }
                    }
                    p[y] = d;
                    c = a;
                }
                h = d;
            }
            return h;
        }
    },
    created() {
        this.getUserInfo();
        this.getAllDocs();
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
                    <input class="form-control mr-sm-2" type="text" placeholder="Search a Doctor..." aria-label="Search" v-model="searchTermForDoc">
                    <input type="button" class="btn-rounded btn-warning text-white exit_btn" @click="searchActive = searchActive = true" value="Search"></input>
                    <input type="button" class="btn-rounded btn-danger text-white exit_btn" @click="searchActive = searchActive = false" value="Close" v-if="searchActive"></input>
                </form>
            </div>
                <div class="greeting_wrapper bg-info radius_wrapper">
                    <div>
                        <img src="/images/woman_doctor.png" alt="Doctor"  style="width: 13vw;" class="woman_doctor_img">
                    </div>
                    <div class="greeting">
                        <h4 class="text-light ">Hello, {{ userInfo.personName }} {{ userInfo.surname }}</h4>
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

    <section v-if="searchActive">
        <br/>
        <table class="table table-bordered table-hover text-center">
        <thead>
            <tr class="bg-success text-white">
                <th>Doctor Id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Speciality</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="doc in filteredDoc">
                <td>{{doc.userId}}</td>
                <td>{{doc.name}}</td>
                <td>{{doc.surname}}</td>
                <td>{{doc.speciality}}</td>
            </tr>
        </table>
        </tbody>
    </section>

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
            <dashboard :userInfo="userInfo" v-if="activePage === 'Dashboard'"></dashboard>
            <statistics v-if="activePage === 'Statistics'"></statistics>
            <emergency-info v-if="activePage === 'Emergency Info'"></emergency-info>
            <hospital-info v-if="activePage === 'Hospital Info'"></hospital-info>
            <my-card v-if="activePage === 'My Card'"></my-card>
        </article>
    </section>

    <footer>
        <p>© 2023 Harmony Health Group. All rights reserved.</p>
    </footer>
    `,
};
