package com.example.demo.Models;

import java.util.Date;

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
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Patient patient;

    private Date date;
    private String disease;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Doctor doctor;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabinet_id", insertable = false, updatable = false)
    private Cabinet cabinet;

    public Visit() {
        // FOR SPRING | DO NOT DELETE
    }

    public Visit(Patient patient, Date date, String disease, Doctor doctor, Cabinet cabinet) {
        this.patient = patient;
        this.date = date;
        this.disease = disease;
        this.doctor = doctor;
        this.cabinet = cabinet;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
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

}
