package com.example.demo.Controllers;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.DoctorAppointment;
import com.example.demo.Models.Medicine;
import com.example.demo.Models.Patient;
import com.example.demo.Models.HealthProcedure;
import com.example.demo.Models.Visit;
import com.example.demo.Repositories.AppointmentRepository;
import com.example.demo.Repositories.CabinetRepository;
import com.example.demo.Repositories.MedicineRepository;
import com.example.demo.Repositories.ProcedureRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Repositories.VisitRepository;
import com.example.demo.Security.Models.Authorities;
import com.example.demo.Security.Models.User;
import com.example.demo.Security.Services.SecurityUserDetailsService;

@RestController
public class DataController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private CabinetRepository cabinetRepository;
    @Autowired
    private MedicineRepository medicineRepository;
    @Autowired
    private ProcedureRepository procedureRepository;
    @Autowired
    private VisitRepository visitRepository;
    @Autowired
    private SecurityUserDetailsService userDetailsManager;

    @PostMapping(path = "/addNewAdmin")
    public String addNewAdmin(@RequestParam String username, @RequestParam String password) {

        User n = new User();
        n.setUsername(username);
        n.setPassword(password);
        userRepository.save(n);
        return "Saved";
    }

    @PostMapping(path = "/addNewDoctor")
    public String addNewDoctor(@RequestParam String username, @RequestParam String password,
            @RequestParam String name, @RequestParam String surname, @RequestParam String yearOfBirth,
            @RequestParam String address, @RequestParam String phone, @RequestParam String speciality,
            @RequestParam String pricePerVisit, @RequestParam String childDoctor) {

        userDetailsManager.createUser(username, password,
                Arrays.asList(Authorities.DOCTOR),
                new Doctor(name, surname, yearOfBirth, address, phone, speciality, Boolean.valueOf(childDoctor),
                        pricePerVisit));
        return "Saved";
    }

    @PostMapping(path = "/addNewPatient")
    public String addNewPatient(@RequestParam String username, @RequestParam String password,
            @RequestParam String name, @RequestParam String surname, @RequestParam String yearOfBirth,
            @RequestParam String address, @RequestParam String phone, @RequestParam String workAddress,
            @RequestParam String disability, @RequestParam String chronicDiseases) {
        userDetailsManager.createUser(username, password,
                Arrays.asList(Authorities.PATIENT),
                new Patient(name, surname, yearOfBirth, address, phone,
                        workAddress, Boolean.valueOf(disability), chronicDiseases));
        return "Saved";
    }

    @PostMapping(path = "/addAppointment")
    public String addAppointment(@RequestParam Doctor doctor,
            @RequestParam Patient patient,
            @RequestParam Cabinet cabinet, @RequestParam LocalDate date) {

        DoctorAppointment a = new DoctorAppointment(doctor, patient, cabinet, date);

        appointmentRepository.save(a);
        return "Added";
    }

    @PostMapping(path = "/addCabinet")
    public String addCabinet(@RequestParam String description, @RequestParam String doctorId) {

        Doctor selectedDoc = (Doctor) getAllDoctors().stream()
                .filter(doc -> doc.getUserId().equals(Long.valueOf(doctorId)))
                .findFirst().get();
        Cabinet a = new Cabinet(description, selectedDoc);

        cabinetRepository.save(a);
        return "Added";
    }

    @PostMapping(path = "/addMedicine")
    public String addMedicine(@RequestParam String nameOfMedicine, @RequestParam String description,
            @RequestParam String availableInStock, @RequestParam String price,
            @RequestParam String needReceipt) {

        Medicine a = new Medicine(nameOfMedicine, description, Integer.valueOf(availableInStock),
                Integer.valueOf(price),
                Boolean.valueOf(needReceipt));

        medicineRepository.save(a);
        return "Added";
    }

    @PostMapping(path = "/addProcedure")
    public String addProcedure(@RequestParam String description, @RequestParam Integer price,
            @RequestParam String cabinetId, @RequestParam String doctorId) {

        Doctor selectedDoc = (Doctor) getAllDoctors().stream()
                .filter(doc -> doc.getUserId().equals(Long.valueOf(doctorId)))
                .findFirst().get();

        Cabinet selectedCab = getAllCabinets().stream()
                .filter(cab -> cab.getCabinetId().equals(Integer.valueOf(cabinetId)))
                .findFirst().get();

        HealthProcedure a = new HealthProcedure(description, selectedCab, price, selectedDoc);

        procedureRepository.save(a);
        return "Added";
    }

    @PostMapping(path = "/addVisit")
    public String addVisit(@RequestParam Patient patient, @RequestParam LocalDate date,

            @RequestParam String disease, @RequestParam String purpose,

            @RequestParam Doctor doctor, @RequestParam Cabinet cabinet) {

        Visit a = new Visit(date, disease, purpose, doctor, cabinet, patient);

        visitRepository.save(a);
        return "Added";
    }

    @GetMapping(path = "/getAllPatients")
    public List<User> getAllPatients() {
        List<User> list = userRepository.findAll();
        List<User> newList = new ArrayList<>();
        for (User user : list) {
            if (user.getAuths().contains(Authorities.PATIENT))
                newList.add(user);
        }
        return newList;
    }

    @GetMapping(path = "/getAllStaff")
    public List<User> getAllStaff() {
        List<User> list = userRepository.findAll();
        List<User> newList = new ArrayList<>();
        for (User user : list) {
            if (user.getAuths().contains(Authorities.DOCTOR) || user.getAuths().contains(Authorities.ADMIN))
                newList.add(user);
        }
        return newList;
    }

    @GetMapping(path = "/getAllDoctors")
    public List<User> getAllDoctors() {
        List<User> list = userRepository.findAll();
        List<User> newList = new ArrayList<>();
        for (User user : list) {
            if (user.getAuths().contains(Authorities.DOCTOR))
                newList.add(user);
        }
        return newList;
    }

    @GetMapping(path = "/getAllUsers")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/getAllCabinets")
    public List<Cabinet> getAllCabinets() {
        return cabinetRepository.findAll();
    }

    @GetMapping(path = "/getAllMedicines")
    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    @GetMapping(path = "/getAllVisits")
    public List<Visit> getAllVisits() {
        return visitRepository.findAll();
    }

    @GetMapping(path = "/getAllProcedures")
    public List<HealthProcedure> getAllProcedures() {
        return procedureRepository.findAll();
    }

    @GetMapping(path = "/getAllAppointments")
    public List<DoctorAppointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @GetMapping(path = "/getAppointmentsForUser")
    public List<DoctorAppointment> getAppointmentsForUser() {
        final String username = SecurityContextHolder.getContext().getAuthentication().getName();

        System.out.println(username);

        final User user = userDetailsManager.getUserByUsername(username);

        if (user instanceof Doctor) {
            return appointmentRepository.findAll().stream()
                    .filter(app -> app.getDoctor().getUsername().equals(username)).collect(Collectors.toList());
        } else if (user instanceof Patient) {
            return appointmentRepository.findAll().stream()
                    .filter(app -> app.getPatient().getUsername().equals(username)).collect(Collectors.toList());
        } else {
            return Collections.emptyList();
        }

    }
}
