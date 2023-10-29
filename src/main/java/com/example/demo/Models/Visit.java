package com.example.demo.Models;

import java.util.Date;

public class Visit {
    private Integer id;
    private Patient patient;
    private Date date;
    private String disase;
    private Doctor doctor;
    private Cabinet cabinet;

    public Visit(Patient patient, Date date, String disase, Doctor doctor, Cabinet cabinet) {
        this.patient = patient;
        this.date = date;
        this.disase = disase;
        this.doctor = doctor;
        this.cabinet = cabinet;
    }

    public Visit(Integer id, Patient patient, Date date, String disase, Doctor doctor, Cabinet cabinet) {
        this.id = id;
        this.patient = patient;
        this.date = date;
        this.disase = disase;
        this.doctor = doctor;
        this.cabinet = cabinet;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDisase() {
        return disase;
    }

    public void setDisase(String disase) {
        this.disase = disase;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Cabinet getCabinet() {
        return cabinet;
    }

    public void setCabinet(Cabinet cabinet) {
        this.cabinet = cabinet;
    }

}
