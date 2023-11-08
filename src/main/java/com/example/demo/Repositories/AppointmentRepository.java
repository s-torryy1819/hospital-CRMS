package com.example.demo.Repositories;

import java.util.Date;

import com.example.demo.Models.Cabinet;
import com.example.demo.Models.Doctor;
import com.example.demo.Models.DoctorAppointment;
import com.example.demo.Models.Patient;

public interface AppointmentRepository {

    DoctorAppointment addAppointment(DoctorAppointment appointment);

    DoctorAppointment deleteAppointment(DoctorAppointment appointment);

    DoctorAppointment editAppointment(DoctorAppointment appointment, Doctor doctor, Patient patient, Cabinet cabinet,
            Date date);

}
