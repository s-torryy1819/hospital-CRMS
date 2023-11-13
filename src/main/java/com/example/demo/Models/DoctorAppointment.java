package com.example.demo.Models;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "doctor_appointment")
public class DoctorAppointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer DoctorAppointmentId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doctorId")
    private Doctor doctor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patientId")
    private Patient patient;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabinetId")
    private Cabinet cabinet;

    private Date date;

    public DoctorAppointment() {
        // FOR SPRING | DO NOT DELETE
    }

    public DoctorAppointment(Doctor doctor, Patient patient, Cabinet cabinet, Date date) {
        this.doctor = doctor;
        this.patient = patient;
        this.cabinet = cabinet;
        this.date = date;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Cabinet getCabinet() {
        return cabinet;
    }

    public void setCabinet(Cabinet cabinet) {
        this.cabinet = cabinet;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getDoctorAppointmentId() {
        return DoctorAppointmentId;
    }

    public void setDoctorAppointmentId(Integer id) {
        this.DoctorAppointmentId = id;
    }

}
