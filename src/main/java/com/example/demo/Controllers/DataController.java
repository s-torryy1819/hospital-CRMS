package com.example.demo.Controllers;

import java.sql.Date;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
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
import com.example.demo.Models.HeathProcedure;
import com.example.demo.Models.Visit;
import com.example.demo.Repositories.AppointmentRepository;
import com.example.demo.Repositories.CabinetRepository;
import com.example.demo.Repositories.MedicineRepository;
import com.example.demo.Repositories.ProcedureRepository;
import com.example.demo.Repositories.UserRepository;
import com.example.demo.Repositories.VisitRepository;
import com.example.demo.Security.Models.User;
import com.example.demo.Security.Services.SecurityUserDetailsService;
import com.example.demo.Services.AppointmentService;
import com.example.demo.Services.CabinetService;

@RestController
public class DataController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private CabinetRepository cabinetRepository;
    @Autowired
    private SecurityUserDetailsService userDetailsManager;

    /*
     * private AppointmentService appointmentService;
     * private CabinetService cabinetRepository2;
     * private ProcedureRepository procedureRepository;
     * private VisitRepository visitRepository;
     * private MedicineRepository medicineRepository;
     * 
     * @PostMapping(path = "/add")
     * public @ResponseBody String addNewUser(@RequestParam String
     * name, @RequestParam String password) {
     * 
     * User n = new User();
     * n.setUsername(name);
     * n.setPassword(password);
     * userRepository.save(n);
     * return "Saved";
     * }
     * 
     * @PostMapping(path = "/addAppointment")
     * public @ResponseBody String addAppointment(@RequestParam Doctor doctor,
     * 
     * @RequestParam Patient patient,
     * 
     * @RequestParam Cabinet cabinet, @RequestParam Date date) {
     * 
     * DoctorAppointment a = new DoctorAppointment(doctor, patient, cabinet, date);
     * 
     * appointmentService.addAppointment(a);
     * return "Added";
     * }
     * 
     * @PostMapping(path = "/addCabinet")
     * public @ResponseBody String addCabinet(@RequestParam String
     * description, @RequestParam Doctor doctor) {
     * 
     * Cabinet a = new Cabinet(description, doctor);
     * 
     * cabinetRepository2.addCabinet(a);
     * return "Added";
     * }
     * 
     * @PostMapping(path = "/addMedicine")
     * public @ResponseBody String addMedicine(@RequestParam String
     * nameOfMedicine, @RequestParam String description,
     * 
     * @RequestParam Integer availableInStock, @RequestParam Double price,
     * 
     * @RequestParam Boolean needReceipt) {
     * 
     * Medicine a = new Medicine(nameOfMedicine, description, availableInStock,
     * price, needReceipt);
     * 
     * medicineRepository.addMedicine(a);
     * return "Added";
     * }
     * 
     * @PostMapping(path = "/addProcedure")
     * public @ResponseBody String addProcedure(@RequestParam String
     * description, @RequestParam Double price,
     * 
     * @RequestParam Cabinet cabinet, @RequestParam Doctor doctor) {
     * 
     * HeathProcedure a = new HeathProcedure(description, price, cabinet, doctor);
     * 
     * procedureRepository.addProcedure(a);
     * return "Added";
     * }
     * 
     * @PostMapping(path = "/addVisit")
     * public @ResponseBody String addVisit(@RequestParam Patient
     * patient, @RequestParam Date date,
     * 
     * @RequestParam String disease,
     * 
     * @RequestParam Doctor doctor, @RequestParam Cabinet cabinet) {
     * 
     * Visit a = new Visit(patient, date, disease, doctor, cabinet);
     * 
     * visitRepository.addVisitHistory(a);
     * return "Added";
     * }
     * 
     */

    @GetMapping(path = "/getAllUsers")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(path = "/getAllCabinets")
    public List<Cabinet> getAllCabinets() {
        return cabinetRepository.findAll();
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
