package com.example.demo.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Cabinet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer cabinetId;

    private String Description;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Doctor Doctor;

    public Cabinet() {
        // FOR SPRING | DO NOT DELETE
    }

    public Cabinet(String description, Doctor doctor) {
        Description = description;
        Doctor = doctor;
    }

    public Integer getCabinetId() {
        return cabinetId;
    }

    public void setCabinetId(Integer id) {
        this.cabinetId = id;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Doctor getDoctor() {
        return Doctor;
    }

    public void setDoctor(Doctor doctor) {
        Doctor = doctor;
    }

}
