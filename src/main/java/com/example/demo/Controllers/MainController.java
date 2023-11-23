package com.example.demo.Controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.DoctorAppointment;
import com.example.demo.Models.HealthProcedure;
import com.example.demo.Models.Medicine;
import com.example.demo.Models.Patient;
import com.example.demo.Models.Visit;
import com.example.demo.Repositories.AppointmentRepository;
import com.example.demo.Repositories.CabinetRepository;
import com.example.demo.Repositories.MedicineRepository;
import com.example.demo.Repositories.ProcedureRepository;
import com.example.demo.Repositories.VisitRepository;
import com.example.demo.Security.Models.Authorities;
import com.example.demo.Security.Services.SecurityUserDetailsService;

@RestController
public class MainController {

        @Autowired
        private SecurityUserDetailsService userDetailsManager;

        @Autowired
        private AppointmentRepository appointmentRepository;

        @Autowired
        private CabinetRepository cabinetRepository;

        @Autowired
        private VisitRepository visitRepository;

        @Autowired
        private ProcedureRepository procedureRepository;

        @Autowired
        private MedicineRepository medicineRepository;

        @GetMapping("/index")
        public ModelAndView getIndex() {

                // DOCTORS
                // 1
                Doctor practicioner = new Doctor("Mary", "Buchner", "1990", "Hansstrasse 2", "067847988",
                                "General practitioner", false,
                                "550", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));
                // 2
                Doctor gynecologist = new Doctor("Kathrine", "Schneider", "1991",
                                "Prinzipalmarkt 5", "057362727", "Gynecologist",
                                false, "1000", getTime(("2023-11-15"), ("2023-11-10")),
                                getTime(("2023-10-25")));
                // 3
                Doctor oncologist = new Doctor("Peter", "Eckhardt", "1987", "Augustaanlage 44",
                                "076453423", "Oncologist", false,
                                "670", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-30"), ("2023-10-26"), ("2023-11-04")));
                // 4
                Doctor neurologist = new Doctor("Sofia", "Muller", "1989", "Basilikumweg 100",
                                "058376736", "Neurologist", true,
                                "985", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));
                // 5
                Doctor medical_eneticist = new Doctor("Nelly", "Meier", "2000", "Baumannstrasse 65", "053534234",
                                "Medical Geneticist", false, "564", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));
                // 6
                Doctor ophthalmologist = new Doctor("Natan", "Schwab", "1998", "Ackerweg 76",
                                "064553454", "Ophthalmologist",
                                true, "787", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));
                // 7
                Doctor pathologist = new Doctor("Markus", "Hoffmann", "1999", "Im Winkel 76",
                                "063453321", "Pathologist", false,
                                "400", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));
                // 8
                Doctor pediatrician = new Doctor("Ann", "Schmidt", "1979", "Vulkanstrasse 89",
                                "099787867", "Pediatrician", true,
                                "600", getTime(("2023-10-23"), ("2023-10-22")),
                                getTime(("2023-10-24"), ("2023-11-01")));

                // PATIENTS
                Patient patient1 = new Patient("Elisa", "Schwarz", "2004", "Hansstrasse 10",
                                "06745637485", "Hauptstrasse 155", false, null, 1);
                Patient patient2 = new Patient("Maria", "Muller", "2005", "Strichsstrasse 20", "06123635675",
                                "Adlershelmstrasse 34", false, null, 2);
                Patient patient3 = new Patient("Sofia", "Schneider", "1980", "Am Wolfswinkel 23", "02434424242",
                                "Adenauerallee 47", false, null, 3);
                Patient patient4 = new Patient("Mark", "Becker", "1998", "Basilikumweg 53", "03552353442",
                                "Ackerweg 88",
                                true,
                                null, 4);
                Patient patient5 = new Patient("Anton", "Wagner", "2000", "Baumannstrasse 34", "06536662323",
                                "Am Fuchsbau 90",
                                false, null, 5);
                Patient patient6 = new Patient("Chris", "Fischer", "2001", "Ackerweg 65", "07467546344", "Am Grund 1",
                                true,
                                "Cardiovascular", 6);
                Patient patient7 = new Patient("Paul", "Schmidt", "1975", "Baumschulenweg 76", "05363452232",
                                "Gundorferteich 15",
                                false, null, 7);
                Patient patient8 = new Patient("Robert", "Schulz", "1986", "Adenauerallee 4", "06756453433",
                                "Am Wolfswinkel 16",
                                true, "Cardiovascular", 8);
                Patient patient9 = new Patient("Christiana", "Meier", "2003", "Am Wolfswinkel 75", "05363123232",
                                "Ackerweg 1",
                                false, null, 9);
                Patient patient10 = new Patient("Angelina", "Schiller", "2000", "Adenauerallee 39", "05364652232",
                                "Baumannstrasse 45", false, null, 10);

                // CABINETS
                Cabinet cabinet1 = new Cabinet("Emergency", pediatrician);
                Cabinet cabinet2 = new Cabinet("Pathalogoanathomy", pathologist);
                Cabinet cabinet3 = new Cabinet("Genetics", medical_eneticist);
                Cabinet cabinet4 = new Cabinet("Neurology", neurologist);
                Cabinet cabinet5 = new Cabinet("Practicants", practicioner);
                Cabinet cabinet6 = new Cabinet("Ophthalmology", ophthalmologist);
                Cabinet cabinet7 = new Cabinet("Gynecology", gynecologist);
                Cabinet cabinet8 = new Cabinet("Oncology", oncologist);
                Cabinet cabinet9 = new Cabinet("Kids pediatrics", pediatrician);
                Cabinet cabinet10 = new Cabinet("Kids Neurology", neurologist);
                Cabinet cabinet11 = new Cabinet("Pediatrics", pediatrician);

                // USERS
                userDetailsManager.createUser("Egon", "123xa",
                                Arrays.asList(Authorities.ADMIN));
                userDetailsManager.createUser("Vicky", "Vicky",
                                Arrays.asList(Authorities.ADMIN));

                userDetailsManager.createUser("Mary Buchner", "123xa",
                                Arrays.asList(Authorities.DOCTOR), practicioner);
                userDetailsManager.createUser("Kathrine Schneider", "123xa",
                                Arrays.asList(Authorities.DOCTOR), gynecologist);
                userDetailsManager.createUser("PeterEckhardt", "123xa",
                                Arrays.asList(Authorities.DOCTOR), oncologist);
                userDetailsManager.createUser("Sofia Muller", "123xa",
                                Arrays.asList(Authorities.DOCTOR), neurologist);
                userDetailsManager.createUser("Nelly Meier", "123xa",
                                Arrays.asList(Authorities.DOCTOR), medical_eneticist);
                userDetailsManager.createUser("Natan Schwab", "123xa",
                                Arrays.asList(Authorities.DOCTOR), ophthalmologist);
                userDetailsManager.createUser("Markus Hoffmann", "123xa",
                                Arrays.asList(Authorities.DOCTOR), pathologist);
                userDetailsManager.createUser("Ann Schmidt", "123xa",
                                Arrays.asList(Authorities.DOCTOR), pediatrician);

                userDetailsManager.createUser("Elisa Schwarz", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient1);
                userDetailsManager.createUser("Maria Muller", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient2);
                userDetailsManager.createUser("Sofia Schneider", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient3);
                userDetailsManager.createUser("Mark Becker", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient4);
                userDetailsManager.createUser("AntonWagner", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient5);
                userDetailsManager.createUser("Chris Fischer", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient6);
                userDetailsManager.createUser("Paul Schmidt", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient7);
                userDetailsManager.createUser("Robert Schulz", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient8);
                userDetailsManager.createUser("Christiana Meier", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient9);
                userDetailsManager.createUser("Angelina Schiller", "123xa",
                                Arrays.asList(Authorities.PATIENT), patient10);

                cabinetRepository.save(cabinet1);
                cabinetRepository.save(cabinet2);
                cabinetRepository.save(cabinet3);
                cabinetRepository.save(cabinet4);
                cabinetRepository.save(cabinet5);
                cabinetRepository.save(cabinet6);
                cabinetRepository.save(cabinet7);
                cabinetRepository.save(cabinet8);
                cabinetRepository.save(cabinet9);
                cabinetRepository.save(cabinet10);
                cabinetRepository.save(cabinet11);

                // APPOINTMENTS
                appointmentRepository.save(new DoctorAppointment(pediatrician, patient1,
                                cabinet1, LocalDate.parse("2023-10-22")));
                appointmentRepository.save(new DoctorAppointment(medical_eneticist, patient2,
                                cabinet3, LocalDate.parse("2023-10-23")));
                appointmentRepository.save(new DoctorAppointment(neurologist, patient3,
                                cabinet4, LocalDate.parse("2023-11-05")));
                appointmentRepository.save(new DoctorAppointment(pediatrician, patient4,
                                cabinet11, LocalDate.parse("2023-10-25")));
                appointmentRepository.save(new DoctorAppointment(ophthalmologist, patient5,
                                cabinet6, LocalDate.parse("2023-11-15")));
                appointmentRepository.save(new DoctorAppointment(pediatrician, patient6,
                                cabinet9, LocalDate.parse("2023-11-10")));
                appointmentRepository.save(new DoctorAppointment(gynecologist, patient5,
                                cabinet7, LocalDate.parse("2023-10-25")));
                appointmentRepository.save(new DoctorAppointment(practicioner, patient7,
                                cabinet5, LocalDate.parse("2023-11-01")));
                appointmentRepository.save(new DoctorAppointment(neurologist, patient4,
                                cabinet4, LocalDate.parse("2023-11-02")));
                appointmentRepository.save(new DoctorAppointment(oncologist, patient7,
                                cabinet8, LocalDate.parse("2023-10-30")));
                appointmentRepository.save(new DoctorAppointment(oncologist, patient6,
                                cabinet8, LocalDate.parse("2023-10-26")));
                appointmentRepository.save(new DoctorAppointment(medical_eneticist, patient3,
                                cabinet3, LocalDate.parse("2023-11-03")));
                appointmentRepository.save(new DoctorAppointment(practicioner, patient2,
                                cabinet5, LocalDate.parse("2023-10-24")));
                appointmentRepository.save(new DoctorAppointment(pathologist, patient2,
                                cabinet2, LocalDate.parse("2023-10-26")));
                appointmentRepository.save(new DoctorAppointment(oncologist, patient2,
                                cabinet8, LocalDate.parse("2023-11-04")));

                // VISITS
                Visit visit1 = new Visit(LocalDate.parse("2023-12-01"), "Arenavirus", "Cure the virus", practicioner,
                                cabinet5,
                                patient1);
                Visit visit2 = new Visit(LocalDate.parse("2023-11-15"), "Hepatitis A", "Diagnose the disease",
                                practicioner,
                                cabinet5,
                                patient2);
                Visit visit3 = new Visit(LocalDate.parse("2023-11-22"), "Infection", "Cure the disease", gynecologist,
                                cabinet7,
                                patient3);
                Visit visit4 = new Visit(LocalDate.parse("2023-11-20"), "Influenza in humans, pandemic",
                                "Cure the virus",
                                practicioner,
                                cabinet4,
                                patient4);
                Visit visit5 = new Visit(LocalDate.parse("2023-11-16"), "Poliomyelitis", "Regular check", practicioner,
                                cabinet5,
                                patient5);
                Visit visit6 = new Visit(LocalDate.parse("2023-11-11"), "Cataracts", "Make analysis for a surgery",
                                ophthalmologist, cabinet6,
                                patient6);
                Visit visit7 = new Visit(LocalDate.parse("2023-11-12"), "Epilepsy", "Regular check", neurologist,
                                cabinet4,
                                patient7);
                Visit visit8 = new Visit(LocalDate.parse("2023-11-29"), "Dry Eye", "Set date for a surgery",
                                ophthalmologist,
                                cabinet6,
                                patient8);
                Visit visit9 = new Visit(LocalDate.parse("2023-12-17"), "Cerebral Aneurysm", "Regular check",
                                medical_eneticist,
                                cabinet3,
                                patient9);
                Visit visit10 = new Visit(LocalDate.parse("2023-12-10"), "Cystic fibrosis", "Cure the virus",
                                gynecologist,
                                cabinet7,
                                patient10);

                visitRepository.save(visit1);
                visitRepository.save(visit2);
                visitRepository.save(visit3);
                visitRepository.save(visit4);
                visitRepository.save(visit5);
                visitRepository.save(visit6);
                visitRepository.save(visit7);
                visitRepository.save(visit8);
                visitRepository.save(visit9);
                visitRepository.save(visit10);

                // MEDICINES
                Medicine medicine1 = new Medicine("Alogliptin", "To treat type 2 diabetes", 8, 1200, true);
                Medicine medicine2 = new Medicine("Alendronic acid",
                                "Bisphosponates are prescribed to help your bones stay as strong as possible", 8, 345,
                                false);
                Medicine medicine3 = new Medicine("Citalopram",
                                "Citalopram is a type of antidepressant known as a selective serotonin reuptake inhibitor (SSRI)",
                                23,
                                1020, true);
                Medicine medicine4 = new Medicine("Diazepam",
                                "Diazepam belongs to a group of medicines called benzodiazepines. It is used to treat anxiety, muscle spasms and seizures or fits. It is also used in hospital to reduce alcohol withdrawal symptoms, such as sweating or difficulty sleeping.",
                                23, 535, true);
                Medicine medicine5 = new Medicine("Enalapril",
                                "Enalapril is a medicine used to reduce high blood pressure and to prevent or treat heart failure. If you have high blood pressure, taking enalapril will help prevent a future heart attack or stroke.",
                                66, 800, true);
                Medicine medicine6 = new Medicine("Fentanyl",
                                "Fentanyl is a strong opioid painkiller. It is used to treat severe pain, for example during or after an operation or a serious injury, or pain from cancer.",
                                78, 789, true);
                Medicine medicine7 = new Medicine("Fusidic acid",
                                "Fusidic acid is also sometimes known as sodium fusidate. Fusidic acid is an antibiotic. It works by stopping bacteria from growing.",
                                24, 2000, true);
                Medicine medicine8 = new Medicine("Glimepiride",
                                "Glimepiride is a medicine used to treat type 2 diabetes. Type 2 diabetes is a condition where the body does not make enough insulin, or the insulin that it makes does not work properly. ",
                                25, 564, true);
                Medicine medicine9 = new Medicine("Indapamide",
                                "Indapamide is a type of medicine called a diuretic. Diuretics are sometimes called 'water tablets' because they make you pee more. This helps get rid of extra fluid in your body.",
                                7, 755, true);
                Medicine medicine10 = new Medicine("Ibuprofen for children",
                                "Ibuprofen is a common painkiller for children. It is often used to treat symptoms of conditions such as colds, flu and coronavirus (COVID-19), teething, toothache, headaches, sore throat and pain from ear infections.",
                                9, 235, false);
                Medicine medicine11 = new Medicine("Lactulose",
                                "Lactulose is a laxative taken to treat constipation (difficulty pooing). It is also taken to help a condition caused by severe liver disease called hepatic encephalopathy.",
                                123, 598, false);

                medicineRepository.save(medicine1);
                medicineRepository.save(medicine2);
                medicineRepository.save(medicine3);
                medicineRepository.save(medicine4);
                medicineRepository.save(medicine5);
                medicineRepository.save(medicine6);
                medicineRepository.save(medicine7);
                medicineRepository.save(medicine8);
                medicineRepository.save(medicine9);
                medicineRepository.save(medicine10);
                medicineRepository.save(medicine11);

                // HEALTH PROCEDURES
                HealthProcedure procedure1 = new HealthProcedure("X-Ray", cabinet1, 500, pediatrician);
                HealthProcedure procedure2 = new HealthProcedure("Therapeutic procedure", cabinet11, 100, pediatrician);
                HealthProcedure procedure3 = new HealthProcedure("Genetic analyse", cabinet3, 1690, medical_eneticist);
                HealthProcedure procedure4 = new HealthProcedure("Neurology analyse", cabinet4, 3000, neurologist);
                HealthProcedure procedure5 = new HealthProcedure("General health check", cabinet11, 500, pediatrician);
                HealthProcedure procedure6 = new HealthProcedure("Ophthalmology analyse", cabinet6, 680,
                                ophthalmologist);
                HealthProcedure procedure7 = new HealthProcedure("Gynecology visit", cabinet7, 950, gynecologist);
                HealthProcedure procedure8 = new HealthProcedure("Oncological recovery check", cabinet8, 500,
                                oncologist);
                HealthProcedure procedure9 = new HealthProcedure("Endoscopy", cabinet5, 375, practicioner);
                HealthProcedure procedure10 = new HealthProcedure("Neurological check for child", cabinet10, 600,
                                neurologist);

                procedureRepository.save(procedure1);
                procedureRepository.save(procedure2);
                procedureRepository.save(procedure3);
                procedureRepository.save(procedure4);
                procedureRepository.save(procedure5);
                procedureRepository.save(procedure6);
                procedureRepository.save(procedure7);
                procedureRepository.save(procedure8);
                procedureRepository.save(procedure9);
                procedureRepository.save(procedure10);

                return new ModelAndView("index");
        }

        @PreAuthorize("hasAuthority('ADMIN')")
        @GetMapping("/egon")
        public String getEgon() {
                return "Egon !";
        }

        public static List<LocalDate> getTime(String... dates) {
                List<LocalDate> list = new ArrayList<>();
                Stream.of(dates).forEach(time -> {
                        list.add(LocalDate.parse(time));
                });
                return list;
        }

        @GetMapping(value = "/username")
        @ResponseBody
        public String currentUserName(Authentication authentication) {

                if (authentication != null) {
                        return authentication.getName();
                } else {
                        return "";
                }
        }

        @GetMapping(value = "/userInfo")
        @ResponseBody
        public UserInfo currentUserInfo(Authentication authentication) {
                return new UserInfo(authentication);
        }

        private class UserInfo {

                String name;
                List<String> auths;

                public UserInfo(Authentication authentication) {
                        if (authentication != null) {
                                this.name = authentication.getName();
                                this.auths = authentication.getAuthorities().stream().map(auth -> auth.getAuthority())
                                                .collect(Collectors.toList());
                        }
                }

                public String getName() {
                        return name;
                }

                public void setName(String name) {
                        this.name = name;
                }

                public List<String> getAuths() {
                        return auths;
                }

                public void setAuths(List<String> auths) {
                        this.auths = auths;
                }

        }

}