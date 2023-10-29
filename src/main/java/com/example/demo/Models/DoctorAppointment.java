package com.example.demo.Models;

import java.util.Date;

public class DoctorAppointment {
    private Integer id;
    private Doctor doctor;
    private Patient patient;
    private Cabinet cabinet;
    private Date date;

    public DoctorAppointment(Doctor doctor, Patient patient, Cabinet cabinet, Date date) {
        this.doctor = doctor;
        this.patient = patient;
        this.cabinet = cabinet;
        this.date = date;
    }

    public DoctorAppointment(Integer id, Doctor doctor, Patient patient, Cabinet cabinet, Date date) {
        this.id = id;
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
