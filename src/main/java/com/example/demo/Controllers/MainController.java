package com.example.demo.Controllers;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.DoctorAppointment;
import com.example.demo.Models.Patient;
import com.example.demo.Repositories.AppointmentRepository;
import com.example.demo.Repositories.CabinetRepository;
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

    @GetMapping("/index")
    public ModelAndView getIndex() {

        Doctor doctor = new Doctor("Mary", "Buchner", 1990, "Hansstrasse 2", "067847988",
                "General practitioner", false,
                550, getTime(("2023-10-23"), ("2023-10-22")),
                getTime(("2023-10-24"), ("2023-11-01")));

        Patient patient = new Patient("Elisa", "Schwarz", 2004, "Hansstrasse 10",
                "06745637485", "Hauptstrasse 155", false, null, 1);

        Cabinet cabinet = new Cabinet("Practicants", doctor);

        userDetailsManager.createUser("Egon", "123xa",
                Arrays.asList(Authorities.ADMIN));
        userDetailsManager.createUser("Vicky", "Vicky",
                Arrays.asList(Authorities.ADMIN));

        userDetailsManager.createUser("mary_buchner", "123xa",
                Arrays.asList(Authorities.DOCTOR), doctor);

        userDetailsManager.createUser("elisa_schwarz", "123xa",
                Arrays.asList(Authorities.PATIENT), patient);

        cabinetRepository.save(cabinet);

        appointmentRepository.save(new DoctorAppointment(doctor, patient,
                cabinet, new Date()));

        // Doctor general_practicioner = new Doctor("Mary", "Buchner", 1990,
        // "Hansstrasse 2", "067847988",
        // "General practitioner", false,
        // 550, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));
        // Doctor gynecologist = new Doctor("Kathrine", "Schneider", 1991,
        // "Prinzipalmarkt 5", "057362727", "Gynecologist",
        // false, 1000, getTime(("2023-11-15"), ("2023-11-10")),
        // getTime(("2023-10-25")));
        // Doctor oncologist = new Doctor("Peter", "Eckhardt", 1987, "Augustaanlage 44",
        // "076453423", "Oncologist", false,
        // 670, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-30"), ("2023-10-26"), ("2023-11-04")));
        // Doctor neurologist = new Doctor("Sofia", "Muller", 1989, "Basilikumweg 100",
        // "058376736", "Neurologist", true,
        // 985, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));
        // Doctor medical_eneticist = new Doctor("Nelly", "Meier", 2000, "Baumannstrasse
        // 65", "053534234",
        // "Medical Geneticist", false, 564, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));
        // Doctor ophthalmologist = new Doctor("Natan", "Schwab", 1998, "Ackerweg 76",
        // "064553454", "Ophthalmologist",
        // true, 787, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));
        // Doctor pathologist = new Doctor("Markus", "Hoffmann", 1999, "Im Winkel 76",
        // "063453321", "Pathologist", false,
        // 400, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));
        // Doctor pediatrician = new Doctor("Ann", "Schmidt", 1979, "Vulkanstrasse 89",
        // "099787867", "Pediatrician", true,
        // 600, getTime(("2023-10-23"), ("2023-10-22")),
        // getTime(("2023-10-24"), ("2023-11-01")));

        return new ModelAndView("index");
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/egon")
    public String getEgon() {
        return "Egon !";
    }

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Authentication authentication) {

        if (authentication != null)
            return authentication.getName();
        else
            return "";
    }

    public static Date parseDate(String date) {
        try {
            return (Date) new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

    public static List<Date> getTime(String... dates) {
        List<Date> list = new ArrayList<>();
        Stream.of(dates).forEach(time -> list.add(parseDate(time)));
        return list;
    }

}