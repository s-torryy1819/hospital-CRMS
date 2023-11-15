package com.example.demo.Models;

import java.time.LocalDate;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "visit")
public class Visit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer visitId;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "patientId")
    private Patient patient;

    private LocalDate date;
    private String disease;
    private String purpose;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private Doctor doctor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabinetId")
    private Cabinet cabinet;

    public Visit() {
        // FOR SPRING | DO NOT DELETE
    }

    public Visit(LocalDate date, String disease, String purpose, Doctor doctor, Cabinet cabinet, Patient patient) {
        this.patient = patient;
        this.date = date;
        this.disease = disease;
        this.doctor = doctor;
        this.cabinet = cabinet;
        this.purpose = purpose;
    }

    public Integer getVisitId() {
        return visitId;
    }

    public void setVisitId(Integer id) {
        this.visitId = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disase) {
        this.disease = disase;
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

    public String getPurpose() {
        return purpose;
    }

    public void setPurpose(String purpose) {
        this.purpose = purpose;
    }

}
